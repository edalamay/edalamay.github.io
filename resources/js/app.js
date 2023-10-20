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
		const users = ['samthepackleader','bowett','edalamay','asherrthered']; // live array
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

// CE Kills Component
//===========================================
	const url = '/js/bossKills.json';
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
		let output = data.map(function(boss) {
			return `
				<div class="boss" data-boss="${boss.slug}">
					<img src="/img/${boss.raid}/${boss.slug}.png" alt="${boss.name}" width="145">
					<div class="info">
						<div class="killDate hidden">
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
		});
	
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


	
