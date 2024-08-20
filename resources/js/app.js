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
	// TWW launch video = Se30Wr9Fq7o
	const vidID = 'Se30Wr9Fq7o',
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
	// if we hid the prog container, then we need to swap the logic to the kill screenshot container.
	// activeProg is set below in the WCL section.
	var sectionOne;
	if (activeProg == false) {
		sectionOne = document.querySelector('.section--kill_screenshot');
	} else {
		sectionOne = document.querySelector('.section--kill_screenshot')
	}
	
	let nav = document.querySelector('#header'),
		// sectionOneOffset = document.querySelector('.section--prog').offsetTop,
		sectionOneOffset = sectionOne.offsetTop,
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

// WCL API
//===========================================
	const activeProg = false;
	function getCurrentBossName(array,id) {
		return array.find((obj) => obj.id === id).name;
	}
	function createPullArrays(encounters) {
		let bossFights = [];
		for (let i = 0; i < encounters.length; i++) {
			let encounter = encounters[i],
				pullArray = [];
			for (let x = 0; x < encounter.pullCount; x++) {
				pullArray[x] = encounter.perPull[x].fightPercentage;
			}
			bossFights[i] = pullArray;
		}
		return bossFights;
	}
	function createProgChart(raidData,bossId) {
		const encounters = raidData.encounters,
			  activeBoss = raidData.currentEncounterId,
			  killedCount = raidData.killedCount;
		// create arrays of boss pull data for charting
		let progArray = createPullArrays(raidData.encounters);
		// Set headings for the chart
		const chartHeading = document.querySelector('.wcl--heading_primary'),
			  chartSubheading = document.querySelector('.wcl--heading_secondary');
		chartHeading.innerHTML = encounters[bossId].name;
		chartSubheading.innerHTML = `Encounter Progress By Pull Count - Mythic ${activeRaid}`;

		// grab arrays from our fetch function
		let percentArray = progArray[bossId];
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
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				interaction: { // allows mouseover anywhere to trigger the closest tooltip
					intersect: false,
					mode: 'index',
				},
				scales: {
					x: {
						ticks: {
							color: 'rgba(255 255 255 / 0.6)'
						},
						grid: {
							color: 'rgba(255 255 255 / 0)',
						},
						border: {
							display: true,
							color: 'rgba(255 255 255 / 0.3)'
						}
					},
					y: {
						suggestedMin: 0,
						suggestedMax: 100,
						ticks: {
							stepSize: 20,
							color: 'rgba(255 255 255 / 0.6)',
							callback: (value) => {
								return `${value}%`; //add % to y-axis labels
							},
							suggestedMin: 0
						},
						grid: {
							color: 'rgba(255 255 255 / 0.2)'
						},
						border: {
							display: true,
							color: 'rgba(255 255 255 / 0.3)'
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
	}
	function updateProgData(encounters) {
		const slugify = str =>
			  str
			    .toLowerCase()
			    .trim()
			    .replace(/[^\w\s-]/g, '')
			    .replace(/[\s_-]+/g, '-')
			    .replace(/^-+|-+$/g, '');
		encounters.forEach((boss,index) => {
			const container = document.querySelector(`.raidProg .boss[data-boss="${slugify(boss.name)}"]`),
				  infoWrap = container.querySelector('.killDate'),
				  infoBlock = container.querySelector('.killDate--tooltip');
			let bossName = boss.name;

			// output boss names before checking the endpoint for data
			infoBlock.innerHTML = bossName+' <br><span>undefeated</span>';
			if (boss.isKilled == true) {
				let killDate = new Date(boss.killedAtTimestamp).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) ;
				container.classList.add('defeated');
				// infoBlock.setAttribute('data-tooltip',`${bossName} Killed on ${killDate}`);
				// infoBlock.setAttribute('data-position','top');
				infoWrap.classList.remove('hidden');
				infoBlock.innerHTML = `${bossName} <br>Killed on ${killDate}`;
			}
		});
	}
	function clickChartUpdate(raidData) {
		const progBossIcons = document.querySelectorAll('.raidProg .boss');
		progBossIcons.forEach(boss => {
			let bossId = boss.getAttribute('data-id');
			boss.addEventListener("click", (event) => {
				window.chartCanvas.destroy();
				createProgChart(raidData,bossId);
			});
		})
	}
	// Build fetch request
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5OWRlMDFiYy1kMjhmLTQxZDItYWU3Ni00OTdjYTBkNGExYmMiLCJqdGkiOiI3YzFkZDQwODRhYzU1ZWZmZDQyN2Q5YzEyMWY0OTMyY2Y5YzMyYjdjZjM0MDQ5ODc2Y2JhNGYyMmVmYTliYjNmMGY3NjUxYjg0YmRkMjcyNiIsImlhdCI6MTcwMzI4MTgyMy4zNjY3ODksIm5iZiI6MTcwMzI4MTgyMy4zNjY3OTIsImV4cCI6MTczNDM4NTgyMy4zNDA0NDIsInN1YiI6IjIxNzU4OCIsInNjb3BlcyI6WyJ2aWV3LXVzZXItcHJvZmlsZSIsInZpZXctcHJpdmF0ZS1yZXBvcnRzIl19.WR7flliabXPFUgUjYTBclIt9691r0OjjTzl-daTSTAcr-feuwN2qTy_3Ht-J8uKMO-mrkZn1imMaNMCJDOODdHzfO7lEeexoLtwc87nya0GjtdJv0SfAo0BJ3LqVam3ZsQV7ku37FeVOzp8Hwdu4kYanqXTt1qMWcAu0GOLkDEJqdZtukO3UAbKklGxthxyADc0HCH_p8csr8hEphP9lTG0N1qD_4LeMPUWMbYK-ZkC36c_AhJdtOGpTMs-ouj9BwukZrVttSUTjfp1cqkZDl0-0KIc910gSIY6plFjNC1FFkyJSiMXZp0Sxq8ky-IJLDafPOMZm-ocCxVjyJitRS_zmffxqGOBvXP7LxSIktaxPIC_AHVRiXhxtMZkeNaRV0HDAf-MIOkVV64vQ00elkipkFgoKHf6bfwp-RDc5LtciGZII2SeLsjuDynk8j3x7w_Jq7FtZKSjkfYwRg5h446hm9xD_-V2w6FwovqwogI2HZci1YcJqFIYY__tNnSWbwjttns3_tbJUqofkuRboH6ClmScQtBJ_mIi1edoT-IGgswrXH28TjLq5Xyjv9PTejXzK-1eg6CwDOcOLlLhJ1sttFsQ0Z76K-ISEk7lsoVxVNi3kluqWF1yxNkQzua2OxzYUYhLbIm4hmiNwZpvPxoSPW7nyH-WakhKzLffx3JQ'
		},
		body: JSON.stringify({
			query: `{
				progressRaceData {
					progressRace(
						guildID: 273044
					)
				}
			}`
		})
	};
	const activeRaid = "Amirdrassil, the Dream's Hope";
	// Fetch Data
	function wclFetch() {
		fetch('https://www.warcraftlogs.com/api/v2/user', options)
			.then((response) => response.json())
			.then((response) => {
				// some fixed data
				const raidData = response.data.progressRaceData.progressRace[0],
					  encounters = raidData.encounters,
					  activeBoss = raidData.currentEncounterId,
					  bossCount = encounters.length;
				
				// get active boss #
				var killedCount = raidData.killedCount;
				if (killedCount >= bossCount) {
					killedCount = killedCount - 1;
				}

				// create array of all the bosses in the active raid
				let progBosses = [];
				encounters.forEach(function(boss, i){
					progBosses[i] = {id:boss.id, name:boss.name};
				})
				// get text name of current prog boss
				let activeBossName = getCurrentBossName(progBosses, activeBoss);

				
				// if this is a refresh, destroy the existing canvas so we can redraw
				if (window.chartCanvas) {
					window.chartCanvas.destroy();
				}
				// create chart
				createProgChart(raidData,killedCount);

				// update prog on boss heads, including kill date
				updateProgData(encounters);
				
				// click event for boss heads - click to show the bosses prog
				clickChartUpdate(raidData);

				// hide the loader
				document.querySelector('#loading').style.display = "none";

			})
			.catch(err => console.error(err));
	}
	// refresh the data
	function refreshChartData() {
		const timeMin = 5, // refresh time in minutes
			  refreshRate = timeMin * 60 * 1000; // convert to ms
		function updateRefreshTime() {
			const elem = document.getElementById('refresh');
			let formatter = new Intl.DateTimeFormat('en', {timeStyle: "short"}),
				currentTime = formatter.format(new Date()),
				timezone;

			elem.innerHTML = `Updated at ${currentTime}`;
		}
		const interval = setInterval(function() {
			wclFetch();
			updateRefreshTime();
		}, refreshRate);
		// Set current load time
		updateRefreshTime();
		// Set var for CSS animation on the load bar
		const root =  document.documentElement;
		root.style.setProperty("--refreshRate", refreshRate+'ms');
		// clearInterval(interval);
	}

	
	if (activeProg) {
		document.querySelector('.section--prog').style.display = 'block';
		wclFetch();
		refreshChartData();
	}

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
		// updateProgData();
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
	/* not in use, keeping it here for reference */
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
		const users = ['samthepackleader','bowett','edalamay','asherrthered','aka_vinny','redpandacake','Maximino_V']; // live array
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
