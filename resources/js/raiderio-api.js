// Globals
//===========================================
const region = 'us',
	  realm = 'stormrage',
	  guild = 'commit',
	  difficulty = 'mythic';

const raids = [
	'manaforge-omega',
	'liberation-of-undermine',
	'nerubar-palace',
	'amirdrassil-the-dreams-hope',
	'aberrus-the-shadowed-crucible',
	'vault-of-the-incarnates',
	'sepulcher-of-the-first-ones',
	'sanctum-of-domination',
	'castle-nathria',
	'nyalotha-the-waking-city'
];
const bosses = [
	'dimensius',
	'chrome-king-gallywix',
	'queen-ansurek',
	'fyrakk-the-blazing',
	'scalecommander-sarkareth',
	'raszageth-the-stormeater',
	'the-jailer',
	'sylvanas-windrunner',
	'sire-denathrius',
	'nzoth-the-corruptor'
];

const progRaid = 'nerubar-palace';
const progBossesRIO = [
	'plexus-sentinel',
	'loomithar',
	'soulbinder-naazindhri',
	'forgeweaver-araz',
	'the-soul-hunters',
	'fractillus',
	'nexus-king-salhadaar',
	'dimensius'
];

function makeTitle(slug) {
	var words = slug.split('-');

	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		words[i] = word.charAt(0).toUpperCase() + word.slice(1);
		// don't capitalize filler words
		if (words[i] == 'The' || words[i] == 'Of') {
			words[i] = words[i].toLowerCase();
		}
		// add commas to long boss titles
		if (words[i].includes('Sageswift') || words[i].includes('Larodar') || words[i].includes('Nymue')) {
			words[i] = words[i] + ',';
		}
	}

	return words.join(' ');
}

// Add kill data to current prog bosses
//===========================================
function updateProgData() {
	progBossesRIO.forEach((boss,index) => {
		const bossEndpoint = `https://raider.io/api/v1/guilds/boss-kill?region=${region}&realm=${realm}&guild=${guild}&raid=${progRaid}&boss=${boss}&difficulty=${difficulty}`;

		const container = document.querySelector(`.raidProg .boss[data-boss="${boss}"]`),
			  infoWrap = container.querySelector('.killDate'),
			  infoBlock = container.querySelector('.killDate--tooltip');

		let bossName = makeTitle(boss);

		// output boss names before checking the endpoint for data
		infoBlock.innerHTML = bossName+' <br><span>undefeated</span>';
		// 

		fetch(bossEndpoint)
			.then((response) => response.json())
			.then((data) => {
				if (data.kill) {
					let killDate = new Date(data.kill.defeatedAt).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) ;
					container.classList.add('defeated');
					// infoBlock.setAttribute('data-tooltip',`${bossName} Killed on ${killDate}`);
					// infoBlock.setAttribute('data-position','top');
					infoWrap.classList.remove('hidden');
					infoBlock.innerHTML = `${bossName} <br>Killed on ${killDate}`;
				}
			});
	});	
}
// Construct current prog bosses block w/ kill data 
/* 
	moved away from this for a few reasons
	- The forEach loop was outputting the content in a random order.
	- attempted to use a promise to run a sort and output method after generating the content in the forEach loop,
	  but this relied on a timeOut function that felt too arbitrary. Since this content is fairly static, I figured
	  it made more sense to build it statically, and just update it with dynamic meta data
*/
//===========================================

	// let bossProgArray = [];
	// let createprogBossesRIO = new Promise((resolve, reject) => {
	// 	let i = 0;
	// 	progBossesRIO.forEach((boss,index) => {
	// 		const bossEndpoint = `https://raider.io/api/v1/guilds/boss-kill?region=${region}&realm=${realm}&guild=${guild}&raid=${progRaid}&boss=${boss}&difficulty=${difficulty}`;
	// 		const imgUrl = `/img/${progRaid}/${boss}.png`;
	// 		const wrapper = document.querySelector('.raidProg');
	// 		const newDiv = document.createElement('div');
	// 		const newImg = document.createElement('img');
	// 		newImg.src = imgUrl;
	// 		newImg.width = 145;
	// 	console.log(bossEndpoint);
	// 		newDiv.classList.add('boss')
	// 		newDiv.id = "boss_0"+index;
	// 		newDiv.appendChild(newImg);

	// 		fetch(bossEndpoint)
	// 			.then((response) => response.json())
	// 			.then((data) => {
	// 				if (data.kill) {
	// 					newDiv.classList.add('defeated');
	// 				}
	// 				// write to array
	// 				bossProgArray.push({key: index,obj : newDiv});
	// 			});
	// 		i++;
	// 	});
	// 	if (i === progBossesRIO.length) {
	// 		// resolve('done');
	// 		setTimeout(() => resolve("done"), 1000);
	// 	}
	// });
	// createprogBossesRIO.then((result) => {
	// 	const wrapper = document.querySelector('.raidProg');
	// 	// sort array
	// 	bossProgArray.sort(function(a, b) {
	// 		var keyA = a.key,
	// 			keyB = b.key;
	// 		// Compare the 2 dates
	// 		if (keyA < keyB) return -1;
	// 		if (keyA > keyB) return 1;
	// 		return 0;
	// 	});
	// 	// output array to DOM
	// 	bossProgArray.forEach((boss) => {
	// 		wrapper.appendChild(boss.obj);
	// 	});
	// });


// Endpoints
// const guildProfile = `https://raider.io/api/v1/guilds/profile?region=${region}&realm=${realm}&name=${guild}&fields=raid_progression%2Craid_rankings`,
// const bossRanking = `https://raider.io/api/v1/raiding/boss-rankings?raid=${raid}&boss=${boss}&difficulty=${difficulty}&region=${region}&realm=${realm}`;


// Grabs meta data for CE kill blocks
//===========================================
	// raids.forEach((raid, index) => {
	// 	const boss = bosses[index];
	// 	const bossRanking = `https://raider.io/api/v1/raiding/boss-rankings?raid=${raid}&boss=${boss}&difficulty=${difficulty}&region=${region}&realm=${realm}`;
	// 	fetch(bossRanking)
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		let _data = data.bossRankings;
	// 		_data.forEach((entry) => {
	// 			if (entry.guild.name === 'Commit') {
	// 				let rankElm = document.querySelector(`#${boss} .rank`),
	// 					dateElm = document.querySelector(`#${boss} .date`),
	// 					killDate = new Date(entry.encountersDefeated[0].firstDefeated).toLocaleDateString('en-us', {month:"long",day:"numeric",year:"numeric"});
	// 				rankElm.innerHTML = 'US '+entry.regionRank;
	// 				dateElm.innerHTML = killDate;
	// 			}
	// 		});
	// 	});
	// });



