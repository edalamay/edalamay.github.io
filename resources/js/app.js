// nav
function resizeNav() {
	if ($(document).scrollTop() > 100){
		$("body").addClass("scrolled");
	} else {
		$("body").removeClass("scrolled");
	}
}
resizeNav();
// nav resize on scroll
$(document).on("scroll", function(){
	resizeNav();
});