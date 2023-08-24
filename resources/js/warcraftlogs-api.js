// WCL API
//===========================================

//--------
// v1
//--------
function WCL_API() {
	const url = '/js/reportData_1.json';
	let percentArray = [];
	function pullData(data) {
		let currentPage = data.current_page,
			lastPage = data.last_page,
			fightData = data.data;
		function addDataToArray(fight,x) {
			let pulls = fight.fights,
				startTime = fight.startTime,
				innerArray = [];
			pulls.map((pull) => {
				if (pull.name == "Scalecommander Sarkareth") {
					let pullTime = startTime + pull.startTime,
						fTime = new Date(pullTime).toLocaleString();
					let bossHp = pull.bossPercentage,
						bossHpRounded = bossHp.toFixed(1);
					innerArray.push(bossHpRounded);
				}
			});
			console.log(`report ${x}: ${innerArray}`);
			percentArray = innerArray.concat(percentArray);
		}
		// iterate through first report page
		fightData.map((fight) => {
			addDataToArray(fight)
		});
		// iterate through all the other report pages
		for (let x = 2; x <= lastPage; x++) {
			const url = `/js/reportData_${x}.json`;
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					let innerFightData = data.data.reportData.reports.data;
					innerFightData.map((fight) => {
						addDataToArray(fight,x)
					});
				});
			console.log(`Report ${x}: ${percentArray.length}`);
		}
	}
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			pullData(data.data.reportData.reports);
			// Get array length for x-axis labels
			const arrayLength = Array.from({length: percentArray.length}, (_, i) => i + 1);
			// Create line chart w/ api data
			const ctx = document.getElementById('wcl_chart');
			new Chart(ctx, {
				type: 'line',
				data: {
					labels: arrayLength,
					datasets: [{
						label: 'HP',
						data: percentArray,
						borderWidth: 1
					}]
				},
				options: {
					plugins: {
						tooltip: {
							callback: {
								afterTitle: function(context) {
									return '%';
								}
							},
							labelPointStyle: function(context) {
								return {
									pointStyle: 'triangle',
									rotation: 0
								};
							}
						}
					}
				}
			});
		});
}
// WCL_API();


//--------
// v2
//--------

// Data for chart title & subtitle - manually update this during prog?
const activeBoss = 'Scalecommander Sarkareth',
	  activeRaid = 'Aberrus, the Shadowed Crucible';

function unixRounding(value) {
	value = value.toString(); // convert to string
	value = value.slice(0, -3); // drop last 3 digits (1/1000s)
	value = parseInt(value); // back to integer
	return value;
}
function timeCompare(time1,time2) {
	let unixHours = 0.5 * 60 * 60; // 1 hour in seconds
	if ( (time1 - time2) < unixHours ) {
		return true; // reports are duplicates
	} else {
		return false; // reports are unique
	}
}

async function fetchMetaData() {
	let allData = []; // setting up array for boss % per pull
	let morePagesAvailable = true;
	let currentPage = 1;
	let raidDay = []; // setting up array to group pulls by raid day 

	function addDataToArray(fight) {
		let pulls = fight.fights,
			startTime = fight.startTime,
			innerArray = [], // array of pulls from a single log
			innerRaidDay = []; // array denoting the last pull of a night from a single log
		pulls.map((pull, i) => {
			if (pull.name == activeBoss) {
				let bossHp = pull.bossPercentage,
					bossHpRounded = bossHp.toFixed(1); // get boss hp, round to single decimal
				innerArray.push(bossHpRounded); // add boss % to single report array
				if (i+1 === pulls.length) {
					// If this is the last pull of a report, set value to 100 to denote the end of the raid day
					innerRaidDay.push(100);
				} else {
					// if not the last pull, set value to 0, so we don't get anything on the graph
					innerRaidDay.push(0);
				}
			}
		});
		// Push array data into parent array - this puts everything in chronological order
		allData = innerArray.concat(allData);
		raidDay = innerRaidDay.concat(raidDay);
	}
	
	// Grab data from WCL, only 250 pulls per page, so we have to loop through multiple pages
	while(morePagesAvailable) {
		const response = await fetch(`/js/reportData_${currentPage}.json`)
		let data = await response.json();
		let innerFightData = data.data.reportData.reports.data;
		// console.log(data);

		morePagesAvailable = data.data.reportData.reports.has_more_pages;
		innerFightData.map((fight, i) => {
			// addDataToArray(fight)
			if (innerFightData[i-1]) {
				let currentReport = innerFightData[i].startTime,
					crRound = unixRounding(currentReport),
					prevReport = innerFightData[i-1].startTime,
					prRound = unixRounding(prevReport),
					areReportsDuplicates = timeCompare(prRound, crRound);
					if (areReportsDuplicates == false) {
						addDataToArray(fight)
					}
			} else {
				addDataToArray(fight)
			}
		});
		currentPage++;
	}
	
	// Output both arrays (boss % & raid days)
	return [allData,raidDay];
}
var buildChart = fetchMetaData().then(function(result) {
	// Set headings for the chart
	const chartHeading = document.querySelector('.wcl--heading_primary'),
		  chartSubheading = document.querySelector('.wcl--heading_secondary');
	chartHeading.innerHTML = activeBoss;
	chartSubheading.innerHTML = `Encounter Progress By Pull Count - Mythic ${activeRaid}`;

	// grab arrays from our fetch function
	let percentArray = result[0],
		raidDayArray = result[1],
		mapLowestHP = [...percentArray], // clone the percentArray
		pointSizes= [], // set up an array to use later
		pointRotation = [],
		newBestText = []; // set up an array to use later
	
	// Get rid of any 100% HP values, it mucks everything up ¯\_(ツ)_/¯
	for (let x = 0; x <= percentArray.length; x++) {
		if (percentArray[x] == 100) {
			percentArray[x] = '99.9';
		}
	}

	// This loop is to create the chart to track best pulls
	for (let x = 0; x <= mapLowestHP.length; x++) {
		// A value of 100 fucks up the logic for the 'day' bars, so lets just make them all 99.9 lul
		if (mapLowestHP[x] == 100) {
			mapLowestHP[x] = mapLowestHP[x-1];
		}
		// If current % is smaller than next value, set the next value to match, essentially making a flat line
		// this logic appears to break when `mapLowestHP[x+1]' is equal to 100... absolutely bizarre 
		if (mapLowestHP[x] < mapLowestHP[x+1]) { 
			mapLowestHP[x+1] = mapLowestHP[x]; 
		}
		// If current % is smaller than previous, make a large point 
		if (mapLowestHP[x] < mapLowestHP[x-1]) {
			pointSizes.push(3.5);
			pointRotation.push(45);
			newBestText.push('New Best!');
		} else { // if not, make small point
			pointSizes.push(0.1);
			pointRotation.push(0);
			newBestText.push('');
		}
	}
	// create a new array for our x-axis label, just counts from 1 to the length of the parent array
	const arrayLength = Array.from({length: percentArray.length}, (_, i) => i + 1);
	// Create line chart w/ api data
	const ctx = document.getElementById('wcl_chart');
	new Chart(ctx, {
		data: {
			labels: arrayLength,
			datasets: [
				{ // First chart is a line, charting *every* pull %
					type: 'line',
					data: percentArray,
					borderDash: [10,5],
					borderWidth: 1,
					borderColor: 'rgba(52, 131, 236, 0.60)',
					pointRadius: 0,
					label: 'This Pull'
				},{ // second chart is a line charting all *best* pulls, tracking actual progression
					type: 'line',
					data: mapLowestHP,
					borderWidth: 2,
					borderColor: '#3483ec',
					pointStyle: 'rect',
					pointRadius: pointSizes, // dynamic point size based on previous logic
					pointRotation: pointRotation, // dynamic point rotation based on previous logic
					pointBackgroundColor: 'rgb(52, 131, 236)',
					pointHoverRadius: 7,
					pointHoverBorderColor: 'white',
					label: 'Best Pull'
				},{ // third chart is a bar, tracking raid days. Displays a line on the last pull of a raid night, breaking progression into columns per raid day
					type: 'bar',
					data: raidDayArray,
					barThickness: 0.25,
					backgroundColor: 'rgba(52, 131, 236, 1)'
				}
			]
		},
		options: {
			responsive: true,
			// aspectRatio: 1 | 3,
			maintainAspectRatio: false,
			interaction: { // allows mouseover anywhere to trigger the closest tooltip
				intersect: false,
				mode: 'index',
			},
			scales: {
				x: {
					ticks: {
						// stepSize: 5,
						// maxTicksLimit: 50,
						color: 'rgba(255 255 255 / 0.6)'
					},
					grid: {
						color: 'rgba(255 255 255 / 0)',
						// color: (context) => {
						// 	if (context.tick) {
						// 		if (context.tick.value === 0) {
						// 			return 'rgba(255 255 255 / 0.2)'
						// 		} else {
						// 			return 'rgba(255 255 255 / 0)'
						// 		}
						// 	}
						// }
					}
				},
				y: {
					ticks: {
						stepSize: 20,
						color: 'rgba(255 255 255 / 0.6)',
						callback: (value) => {
							return `${value}%`; //add % to y-axis labels
						} 
					},
					grid: {
						color: 'rgba(255 255 255 / 0.2)'
					}
				}
			},
			plugins: {
				tooltip: { // modify the tooltips
					borderWidth: 2,
					callbacks: {
						title: (context) => {
							return `Pull #${context[0].label}`;
						},
						afterTitle: (context) => {
							let i = context[0].label - 1;
							if (newBestText[i].length > 0) {
								return `${newBestText[i]}`;
							}
						},
						label: (context) => { // set tooltip value for only our first two charts
							let i = context.dataIndex,
								value = context.dataset.data[i];
							// filter out the data from our bar chart that denotes days
							if (value < 100 && value > 0) {
								return `${context.dataset.label}: ${value}%`
							} else {
								return '';
							}
						}
					}
				},
				legend: {
					display: false
				}
			}
		}
	});
})

// append last update time
function updateRefreshTime() {
	const elem = document.getElementById('refresh');
	const dateFile = '/js/fetchDate.txt' // provide file location
	fetch(dateFile)
		.then((response) => response.text())
		.then((data) => {
			elem.innerHTML = `Updated at ${data}`;
		});
}
updateRefreshTime();