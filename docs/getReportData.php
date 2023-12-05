<?php
echo "Warcraft Logs API \nFetching report data...";
$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://www.warcraftlogs.com/api/v2/user",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_POSTFIELDS => "{\"query\":\"query {\\n\\treportData {\\n\\t\\treports(\\n\\t\\t\\tguildName: \\\"Commit\\\"\\n\\t\\t\\tguildServerSlug: \\\"stormrage\\\"\\n\\t\\t\\tguildServerRegion: \\\"us\\\"\\n\\t\\t\\tlimit: 10\\n\\t\\t\\tzoneID: 35\\n\\t\\t\\tpage: 1\\n\\t\\t) {\\n\\t\\t\\thas_more_pages\\n\\t\\t\\tcurrent_page\\n\\t\\t\\tlast_page\\n\\t\\t\\tdata {\\n\\t\\t\\t\\tcode\\n\\t\\t\\t\\tstartTime\\n\\t\\t\\t\\tfights(difficulty: 5) {\\n\\t\\t\\t\\t\\tid\\n\\t\\t\\t\\t\\tstartTime\\n\\t\\t\\t\\t\\tbossPercentage\\n\\t\\t\\t\\t\\tkill\\n\\t\\t\\t\\t\\tname\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\"}",
	CURLOPT_HTTPHEADER => [
		"Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5OWRlMDFiYy1kMjhmLTQxZDItYWU3Ni00OTdjYTBkNGExYmMiLCJqdGkiOiJjMjcyZjEyZDRlNjY2ZmY2YjliYTU1ZmVjY2VkNDRmZmZiMDA4NjFjNTA5Zjg5ZDc1NTE2YmRkODFiYTkwYjBmMjlkMDg1NWViMGM0ZTZmNSIsImlhdCI6MTY5MTk1ODAxNC43MzE3MiwibmJmIjoxNjkxOTU4MDE0LjczMTcyMiwiZXhwIjoxNzIzMDYyMDE0LjcxNjI0NSwic3ViIjoiMjE3NTg4Iiwic2NvcGVzIjpbInZpZXctdXNlci1wcm9maWxlIiwidmlldy1wcml2YXRlLXJlcG9ydHMiXX0.GPCfXnH2Jz4MroQnC8HyGzvOSLw_EGGQ-C2kPa0m8-Nxgr9IzqesUPosk_kZ7KhlGG3Oq9vvuVC8swD7dQg9pZlYuaOOaFFovu2ED-vMR_0oDA3gNR3OK8j7S9TaopQLjU0z7y0YokMQSxjBRYrVbkQkeZgb6p6lXB-iNOyZncr2M0-8WYIv7z2FT65u2yaHr19wyxVdccPKrILTsxknFQYpIeQ6Wcpip_UVRfeim65UeZMZRXa0DDHOj_7Ezn6mDcKtwrXgcCirHzYW4IIWmw5NLRDFq3fMJOuEL53yJEkgrq6gIMXK7mLJsOlbbtkBQh34LkdUnGhgSWKq22nulqcoanDbOaffHK25tUaRTL_PErvpUIgfyh2tMQay2US-iE-Luj0q0cUhD2yROXveezVYsEKdrDL5yLvS5F1Mv0ivcoKRQEQTbP-pYGRrHE1spPJ6-0KClCgggbZLc6TI2Bf8Cg364tYwkqnTU-soesuvnUwMGCuishdJNUyKdCbE2FHlGk3G0l203oDueZlRpFzK2ApSS_R7-UMN2ew5B4LySgIJ9woRqpkxz25TVDSNQD04YAU9ljN9BxTO-9VBdM6XRGPdSij1ymajCMiRl3qDUtn8S-3SQo_xgtw-gi6_o3NmPpMQuBXY-Wuz5z0pzU0LTvqlkJq8Xt5uo5Hai9c",
		"Content-Type: application/json"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
}

// Write JSON response to JSON file on local server
// =========================================================
$file = __DIR__.'/js/reportData_1.json';
if (!file_exists($file)) {
	$generateFile = fopen($file, "w");
}
$data = file_get_contents($file);
$data = $response;
file_put_contents($file,$data);
echo "Initial data retrieved\n";

// Check for additional pages
$json = json_decode($data,true);
$pageCount = $json['data']['reportData']['reports']['last_page'];
$hasMorePages = $json['data']['reportData']['reports']['has_more_pages'];

// if ($pageCount > 1) {
if ($hasMorePages == true) {
	echo "Fetching additional pages...\n";
	for ($x = 2; $x <= $pageCount; $x++) {
		// fetch more data
		$curl = curl_init();
		curl_setopt_array($curl, [
			CURLOPT_URL => "https://www.warcraftlogs.com/api/v2/user",
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => "",
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 30,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => "GET",
			CURLOPT_POSTFIELDS => "{\"query\":\"query {\\n\\treportData {\\n\\t\\treports(\\n\\t\\t\\tguildName: \\\"Commit\\\"\\n\\t\\t\\tguildServerSlug: \\\"stormrage\\\"\\n\\t\\t\\tguildServerRegion: \\\"us\\\"\\n\\t\\t\\tlimit: 10\\n\\t\\t\\tzoneID: 35\\n\\t\\t\\tpage: ".$x."\\n\\t\\t) {\\n\\t\\t\\thas_more_pages\\n\\t\\t\\tcurrent_page\\n\\t\\t\\tlast_page\\n\\t\\t\\tdata {\\n\\t\\t\\t\\tcode\\n\\t\\t\\t\\tstartTime\\n\\t\\t\\t\\tfights(difficulty: 5) {\\n\\t\\t\\t\\t\\tid\\n\\t\\t\\t\\t\\tstartTime\\n\\t\\t\\t\\t\\tbossPercentage\\n\\t\\t\\t\\t\\tkill\\n\\t\\t\\t\\t\\tname\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\"}",
			CURLOPT_HTTPHEADER => [
				"Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5OWRlMDFiYy1kMjhmLTQxZDItYWU3Ni00OTdjYTBkNGExYmMiLCJqdGkiOiJjMjcyZjEyZDRlNjY2ZmY2YjliYTU1ZmVjY2VkNDRmZmZiMDA4NjFjNTA5Zjg5ZDc1NTE2YmRkODFiYTkwYjBmMjlkMDg1NWViMGM0ZTZmNSIsImlhdCI6MTY5MTk1ODAxNC43MzE3MiwibmJmIjoxNjkxOTU4MDE0LjczMTcyMiwiZXhwIjoxNzIzMDYyMDE0LjcxNjI0NSwic3ViIjoiMjE3NTg4Iiwic2NvcGVzIjpbInZpZXctdXNlci1wcm9maWxlIiwidmlldy1wcml2YXRlLXJlcG9ydHMiXX0.GPCfXnH2Jz4MroQnC8HyGzvOSLw_EGGQ-C2kPa0m8-Nxgr9IzqesUPosk_kZ7KhlGG3Oq9vvuVC8swD7dQg9pZlYuaOOaFFovu2ED-vMR_0oDA3gNR3OK8j7S9TaopQLjU0z7y0YokMQSxjBRYrVbkQkeZgb6p6lXB-iNOyZncr2M0-8WYIv7z2FT65u2yaHr19wyxVdccPKrILTsxknFQYpIeQ6Wcpip_UVRfeim65UeZMZRXa0DDHOj_7Ezn6mDcKtwrXgcCirHzYW4IIWmw5NLRDFq3fMJOuEL53yJEkgrq6gIMXK7mLJsOlbbtkBQh34LkdUnGhgSWKq22nulqcoanDbOaffHK25tUaRTL_PErvpUIgfyh2tMQay2US-iE-Luj0q0cUhD2yROXveezVYsEKdrDL5yLvS5F1Mv0ivcoKRQEQTbP-pYGRrHE1spPJ6-0KClCgggbZLc6TI2Bf8Cg364tYwkqnTU-soesuvnUwMGCuishdJNUyKdCbE2FHlGk3G0l203oDueZlRpFzK2ApSS_R7-UMN2ew5B4LySgIJ9woRqpkxz25TVDSNQD04YAU9ljN9BxTO-9VBdM6XRGPdSij1ymajCMiRl3qDUtn8S-3SQo_xgtw-gi6_o3NmPpMQuBXY-Wuz5z0pzU0LTvqlkJq8Xt5uo5Hai9c",
				"Content-Type: application/json"
			],
		]);

		$response = curl_exec($curl);
		$err = curl_error($curl);

		curl_close($curl);

		if ($err) {
			echo "cURL Error #:" . $err . "\n";
		}
		// write data to file
		/* write multiple files */
			$file = __DIR__.'/js/reportData_'.$x.'.json';
			if (!file_exists($file)) {
				$generateFile = fopen($file, "w");
			}
			$data = file_get_contents($file);
			$data = $response;
			file_put_contents($file,$data);
		/* try to merge arrays into single file */
			// $file = __DIR__.'/js/reportData.json';
			// $data = file_get_contents($file);
			// $updatedObject = json_encode(
			// 	array_merge(
			// 		json_decode($data, true),
			// 		json_decode($response, true)
			// 	)
			// );
			// file_put_contents($file,$updatedObject);
		echo " - Page ".$x." added\n";
	}
	echo "\nDone!\n";
}

// create a txt file to store date of last fetch
// =========================================================
// create file
$txtFile = __DIR__.'/js/fetchDate.txt';
$generateTxtFile = fopen($txtFile,'w');
// get current time
$time = new DateTime("now", new DateTimeZone('America/Chicago'));
$timeFormatted = $time->format('g:i A m/d/y');
// output time to file
file_put_contents($txtFile, $timeFormatted);
echo "Fetch timestamp logged\n";