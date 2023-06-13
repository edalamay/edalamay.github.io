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

// header video
//===========================================
const vidID = '2yiePgk0uWU',
	  ytParent = document.querySelector('.section--banner .background'),
	  ytThumb = document.querySelector('.section--banner .thumbnail');

const ytTag = document.createElement('script');
ytTag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
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
	sectionOneOffset = document.querySelector('.section--ce').offsetTop,
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