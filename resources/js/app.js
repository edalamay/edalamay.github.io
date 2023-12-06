// VH Hack for mobile web browsers -- making 100vh the same everywhere
//===========================================
	/* 
	To use, set a css property using the new var in a calc. Ex:
	.class {
		height: calc(var(--vh, 1vh) * 100);
	}
	*/
	//=====================================================================
	var vh = window.innerHeight * 0.01;
	function setVH() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		$("body").get(0).style.setProperty("--vh", vh+'px');
	}
	$(window).resize(function() {
		setVH();
	});
	$(document).ready(function(){
		setVH();
	})

// nav
//===========================================
	// function resizeNav() {
	// 	if ($(document).scrollTop() > 100){
	// 		$("body").addClass("scrolled");
	// 	} else {
	// 		$("body").removeClass("scrolled");
	// 	}
	// }
	// resizeNav();
	// $(document).on("scroll", function(){
	// 	resizeNav();
	// });
	var menuBtn = $('#menu-btn'),
		navWrap = $('.mobileNav'),
		anchor = $('.mobileNav .primary a[href*="#"]');
	function navConditional(thisObj) {
		if ( $('body').hasClass('nav-open') ) {
			$(thisObj).removeClass('open');
			$('body').removeClass('nav-open');
			$('#header').removeClass('nav-open');
			bodyScrollLock.enableBodyScroll(navWrap);
		} else {
			$(thisObj).addClass('open');
			$('body').addClass('nav-open');
			$('#header').addClass('nav-open');
			bodyScrollLock.disableBodyScroll(navWrap);
		}
	}
	function mobileNavLinks() {
		if (window.outerWidth < 768) {
			anchor.click( function(){
				menuBtn.removeClass('open');
				$('body').removeClass('nav-open');
				$('#header').removeClass('nav-open');
				bodyScrollLock.enableBodyScroll(navWrap);
			});
		}
	}
	menuBtn.click( function(){
		navConditional(this);
	});
	$(window).resize(function() {
		mobileNavLinks();
	});
	$(document).ready(function(){
		mobileNavLinks();
	})
	
// header video
//===========================================
	// 10.1 video = 2yiePgk0uWU 
	// 10.2 video = Ti0Jucb3FZA
	const vidID = 'Ti0Jucb3FZA',
		  ytParent = document.querySelector('.section--banner .background'),
		  ytThumb = document.querySelector('.section--banner .thumbnail');

	const ytTag = document.createElement('script');
	ytTag.src = "https://www.youtube.com/iframe_api";

	const firstScriptTag = document.getElementById('mainjs');
	firstScriptTag.parentNode.insertBefore(ytTag, firstScriptTag);

	let player;

	// Set the player options

	const playerOptions = {
		// Autoplay + mute has to be activated (value = 1) if you want to autoplay it everywhere 
		// Chrome/Safari/Mobile
		autoplay: 1,
		mute: 1,
		autohide: 1, 
		modestbranding: 1, 
		rel: 0, 
		showinfo: 1, 
		controls: 0, 
		disablekb: 1, 
		enablejsapi: 1, 
		iv_load_policy: 3,
		// For looping video you have to have loop to 1
		// And playlist value equal to your currently playing video
		loop: 1,
		playlist: vidID,
	}
	function onPlayerReady(event) {
		event.target.playVideo();
		// Get the duration of the currently playing video
		const videoDuration = event.target.getDuration();
		// When the video is playing, compare the total duration
		// To the current passed time if it's below 2 and above 0,
		// Return to the first frame (0) of the video
		// This is needed to avoid the buffering at the end of the video
		// Which displays a black screen + the YouTube loader
		setInterval(function (){
			const videoCurrentTime = event.target.getCurrentTime();
			const timeDifference = videoDuration - videoCurrentTime;

			if (2 > timeDifference > 0) {
				event.target.seekTo(0);
			}
		}, 1000);
	}
	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PLAYING) {
			ytThumb.remove();
		}
		// if (ytParent.getElementsByTagName('iframe')[0]) {
		// 	ytThumb.remove();
		// } else {
		// 	console.log('vid error');
		// }
	}
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('ytPlayer', {
			height: '1280',
			width: '720',
			videoId: vidID,
			playerVars: playerOptions,
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}

// nav scroll effect
//===========================================
	let nav = document.querySelector('#header'),
		sectionOneOffset = document.querySelector('.section--prog').offsetTop,
		navMargin = parseInt(getComputedStyle(nav)['margin-top'], 10),
		navHeight = nav.offsetHeight + navMargin,
		bgOpacity = 0,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop,
		opacityValue = (scrollTop / (sectionOneOffset - navHeight));
	const scrollAdjustments = () => {
		// make changes
		if (opacityValue > 1) {
			opacityValue = 1;
		}
		bgOpacity = opacityValue;
		nav.style.backgroundColor = `rgba(52 131 236 / ${bgOpacity})`;
		if (bgOpacity == 1) {
			$("body").get(0).style.setProperty("--navBgColor", `rgba(52 131 236 / ${bgOpacity})`);
		} else {
			$("body").get(0).style.setProperty("--navBgColor", '');
		}
	}
	const resizeNav = () => {
		if (scrollTop >= (sectionOneOffset - navHeight)) {
			if (!nav.classList.contains('scrolled')) {
				nav.classList.add('scrolled');
			}
		} else {
			nav.classList.remove('scrolled');
		}
	}
	scrollAdjustments();
	resizeNav();
	window.addEventListener("scroll", function () {
		// query current position
		navHeight = nav.offsetHeight + navMargin,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop,
		opacityValue = (scrollTop / (sectionOneOffset - navHeight));
		// make changes
		scrollAdjustments();
		// nav resize
		resizeNav();
	});

// Twitch API
//===========================================
	let clinetId = "pb9yjlxrxsoonymo0d2vuc1j5k1s73";
	let clinetSecret = "dm97lwseef06pld7z7lx3oou1jvpe1";

	function getTwitchAuthorization() {
		let url = `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;

		return fetch(url, {
		method: "POST",
		})
		.then((res) => res.json())
		.then((data) => {
			return data;
		});
	}

	async function getStreams() {
		// const users = ['soap','adeenthequeen','veraneka','eyelashTV','warcraft','naguura','sco','naowh','gingitv','hazelnuttygames','cdewx','fragnance']; //testing array
		const users = ['samthepackleader','bowett','edalamay','asherrthered','aka_vinny','redpandacake']; // live array
		const endpoint = "https://api.twitch.tv/helix/streams?user_login="+users.join('&user_login=');

		let authorizationObject = await getTwitchAuthorization();
		let { access_token, expires_in, token_type } = authorizationObject;

		//token_type first letter must be uppercase    
		token_type =
		token_type.substring(0, 1).toUpperCase() +
		token_type.substring(1, token_type.length);

		let authorization = `${token_type} ${access_token}`;

		let headers = {
		authorization,
		"Client-Id": clinetId,
		};

		fetch(endpoint, {
		headers,
		})
		.then((res) => res.json())
		.then((data) => renderStreams(data));
	}

	// inspect api json response with this quick snippet

	// function renderStreams(data) {
	// 	console.log(data);
	// }
	function renderStreams(data) {
		let { data: streams } = data;
		let streamsContainer = document.querySelector(".streamers");
		if (streams.length > 0) {
			streams.forEach((stream,i) => {
				let { thumbnail_url: thumbnail, title, viewer_count, user_name, user_login, game_name } = stream;
				if (game_name == 'World of Warcraft') {
					let hdThumbnail = thumbnail
						.replace("{width}", "533")
						.replace("{height}", "300");
					let streamerBlock = document.createElement('div');
					streamerBlock.className = "streamer";
					streamerBlock.dataset.user = user_login;
					// Create streamer block
					streamerBlock.innerHTML = `
						<img class="streamer--preview" src="${hdThumbnail}" />
						<h3 class="streamer--name">${user_name}</h3>
						<p class="streamer--views">
							${viewer_count
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
						</p>
					`;
					// add event listener to swap stream on click
					streamerBlock.addEventListener('click', (elem) => {
						twitchWrapper.innerHTML = '';
						twitchPlayer = new Twitch.Player("twitch", {
							channel: user_login, // TODO: Change this to the streams username you want to embed
							width: 640,
							height: 360,
							theme: 'dark',
							layout: 'video-with-chat',
							parent: ['localhost','commit-guild.com']
						});
						elems = document.querySelectorAll('.streamer');
						[].forEach.call(elems, function(el) {
							el.classList.remove("active");
						});
						streamerBlock.classList.add('active');
					});
					streamsContainer.appendChild(streamerBlock);
				}
			});
			// create stream
			var token = 'twbpwntxuc55tz32fabgjxovvnaupq',
				activeStreamers = document.querySelectorAll('.streamer'),
				firstStreamer = activeStreamers[0].dataset.user,
				twitchWrapper = document.getElementById('twitch'),
				twitchOptions = {
					channel: firstStreamer, // TODO: Change this to the streams username you want to embed
					width: 640,
					height: 360,
					theme: 'dark',
					layout: 'video-with-chat',
					parent: ['localhost','commit-guild.com']
				};
			var twitchPlayer = new Twitch.Player("twitch", twitchOptions);
			// set active button
			activeStreamers[0].classList.add('active');
		}
	}

	getStreams();

// WCL API
//===========================================

	const progBosses = [
		'Gnarlroot',
		'Igira the Cruel',
		'Volcoross',
		'Council of Dreams',
		'Nymue, Weaver of the Cycle',
		'Larodar, Keeper of the Flame',
		'Smolderon',
		'Tindral Sageswift, Seer of the Flame',
		'Fyrakk the Blazing'
	];

	let activeRaid = "Amirdrassil, the Dream's Hope",
		raidLaunchUnix = 1699941600;

	function unixRounding(value) {
		value = value.toString(); // convert to string
		value = value.slice(0, -3); // drop last 3 digits (1/1000s)
		value = parseInt(value); // back to integer
		return value;
	}
	function timeCompare(time1,time2) {
		let unixHours = 4 * 60 * 60; // 4 hour in seconds
		if ( (time1 - time2) < unixHours ) {
			return true; // reports are duplicates
		} else {
			return false; // reports are unique
		}
	}
	function createProgChart(bossId) {
		let activeBoss = progBosses[bossId];
		
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
				// pulls.map((pull, i) => {
				for (let i = 0; i < pulls.length; i++) {
					let pull = pulls[i];
					if (pull.name == activeBoss) {
						let bossHp = pull.bossPercentage,
							bossHpRounded;
						if (pull.kill == false) { // check if this is a kill, because % might not be accurate
							bossHpRounded = +bossHp.toFixed(2); // get boss hp, round to single decimal
							/*
								adding the `+` keeps the value from becoming a string
								https://stackoverflow.com/a/14978830
							*/
							innerArray.push(bossHpRounded); // add boss % to single report array
						} else {
							bossHpRounded = 0; // boss is dead, so set value to 0
							innerArray.push(bossHpRounded); // add boss % to single report array
						}
						if (i+1 === pulls.length) {
							// If this is the last pull of a report, set value to 100 to denote the end of the raid day
							innerRaidDay.push(100);
						} else {
							// if not the last pull, set value to 0, so we don't get anything on the graph
							innerRaidDay.push(0);
						}
					}
				};
				// });
				// Push array data into parent array - this puts everything in chronological order
				allData = innerArray.concat(allData);
				raidDay = innerRaidDay.concat(raidDay);
			}

			// Grab data from WCL, only 250 pulls per page, so we have to loop through multiple pages
			while(morePagesAvailable) {
				const response = await fetch(`/js/reportData_${currentPage}.json`)
				let data = await response.json();
				let innerFightData = data.data.reportData.reports.data; // array of all logs
				// console.log(data);

				morePagesAvailable = data.data.reportData.reports.has_more_pages;
				innerFightData.map((fight, i) => {
					// addDataToArray(fight)
					if (innerFightData[i-1]) {
						let currentReport = innerFightData[i].startTime, // start time of current log
							crRound = unixRounding(currentReport), // round the value
							prevReport = innerFightData[i-1].startTime, //
							prRound = unixRounding(prevReport),
							areReportsDuplicates = timeCompare(prRound, crRound);
						if (areReportsDuplicates == false) { // check if current log is the same as prev log
							if (crRound > raidLaunchUnix) { // filter logs from PTR (older than raid launch)
								addDataToArray(fight)
							}
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
				raidDayArray = result[1];
			// check the array for the first '0' value, this indicates that the boss died, and we can toss out any later values				
			let	findZero = percentArray.indexOf(0);
			if (findZero > 0) { // make sure return value is higher than zero - if a value of `0` isn't found, the return is `-1`
				// prune arrays
				percentArray.length = findZero + 1;
				raidDayArray.length = findZero + 1;
			}
			let	mapLowestHP = [...percentArray], // clone the percentArray
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
				// A value of 100 fucks up the logic for the 'day' bars, so just throw them out
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
					if (mapLowestHP[x] == "0") {
						newBestText.push('Boss killed!');
					} else {
						newBestText.push('New Best!');
					}
				} else { // if not, make small point
					pointSizes.push(0.1);
					pointRotation.push(0);
					newBestText.push('');
				}
			}
			// create a new array for our x-axis label, just counts from 1 to the length of the parent array
			const arrayLength = Array.from({length: percentArray.length}, (_, i) => i + 1);
			// Create line chart w/ api data
			let canvas = document.getElementById('wcl_chart'); // define canvas element
			let ctx = canvas.getContext('2d'); // render canvas
			// using `window.` makes the scope global, so we can clear it and redraw later
			window.chartCanvas = new Chart(ctx, {
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
	}
	createProgChart(6);

// Prog/CE Kills Component
//===========================================
	let randNum = Math.random() * 100;
	const url = '/js/bossKills.json?v='+randNum;
	function createKillBlocks(data) {
		let output = data.map(function(kill) {
			if (kill.killed == true) {
				return `
					<div id="${kill.slug}" class="block">
						<div class="bg">
							<img src="${kill.img}" alt="${kill.boss}">
							<div class="overlay"></div>
						</div>
						<h3>${kill.boss}</h3>
						<time class="date">${kill.date}</time>
						<div class="rank">${kill.rank}</div>
						<div class="links">
							<a href="${kill.externalUrl}" target="_blank" rel="noopener"><img src="/img/logo--raiderio.svg" alt="Raider.io"> Raid Breakdown</a>
							${(() => {
								if (kill.vidID) {
									return `
										<a class="video" data-fancybox href="https://www.youtube.com/watch?v=${kill.vidID}" ><img src="/img/logo--youtube.svg" alt="YouTube"> Kill Video</a>
									`
								} else {
									return '';
								}
							})()}
						</div>
					</div>
				`;
			}
		}).join('');

		// Get the app element
		let container = document.getElementById('bossKills');
		// Create markup
		container.innerHTML = output;
	}
	function createProgBlocks(data) {
		let output = data.map(function(boss,i) {
			return `
				<div class="boss" data-boss="${boss.slug}" data-id="${i}">
					<img src="/img/${boss.raid}/${boss.slug}.png" alt="${boss.name}" width="145">
					<div class="info">
						<div class="killDate">
							<div class="killDate--tooltip"></div>
						</div>
						${(() => {
							if (boss.video) {
								return `
									<a class="video" data-fancybox href="https://www.youtube.com/watch?v=${boss.video}" data-tooltip="Watch Kill Video" data-position="top"><img src="/img/youtube.svg" alt="YouTube"></a>
								`
							} else {
								return '';
							}
						})()}
					</div>
				</div>
			`;
		}).join('');

		// Get the app element
		let container = document.querySelector('.raidProg');
		// Create markup
		container.innerHTML = output;
		updateProgData();
	}
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			createKillBlocks(data.ceKills);
			createProgBlocks(data.progKills);
		})
		.then(function(){
			// click a boss to update the chart?
			const progBossIcons = document.querySelectorAll('.raidProg .boss');
			progBossIcons.forEach(boss => {
				let bossId = boss.getAttribute('data-id');
				boss.addEventListener("click", (event) => {
					window.chartCanvas.destroy();
					createProgChart(bossId);
				});
			})
		})
	
// Refresh Raider.io iframe
//===========================================
	function updateProg() {
		const timeMin = 5, // refresh time in minutes
			  refreshRate = timeMin * 60 * 1000; // convert to ms
		
		function getDST() {
			Date.prototype.stdTimezoneOffset = function () {
				var jan = new Date(this.getFullYear(), 0, 1);
				var jul = new Date(this.getFullYear(), 6, 1);
				return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
			}
			Date.prototype.isDstObserved = function () {
				return this.getTimezoneOffset() < this.stdTimezoneOffset();
			}
			var today = new Date();
			if (today.isDstObserved()) { 
				timezone = 'CDT';
				return timezone;
			} else {
				timezone = 'CST';
				return timezone;
			}
		}
		function refreshiframe() {
			var iframe = document.getElementById("raiderIO");
			iframe.src = iframe.src;
		}
		function updateRefreshTime() {
			const elem = document.getElementById('refresh');
			let formatter = new Intl.DateTimeFormat('en', {timeStyle: "short"}),
				currentTime = formatter.format(new Date()),
				timezone;

			elem.innerHTML = `Updated at ${currentTime}`;
		}
		const interval = setInterval(function() {
			refreshiframe();
			updateRefreshTime();
			console.log('iframe updated!');
		}, refreshRate);
		// Set current load time
		updateRefreshTime();
		// Set var for CSS animation on the load bar
		$("body").get(0).style.setProperty("--refreshRate", refreshRate+'ms');
		// clearInterval(interval);
	}
	// updateProg();


	
