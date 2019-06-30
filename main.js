const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

/* icon search*/

searchIcon.addEventListener('click', function() {
	if(searchBox.style.top == '72px'){
		searchbox.style.top = '24px';
		searchBox.style.pointerEvents = 'none';
	}else {
		searchBox.style.top = '72px';
		searchBox.style.pointerEvents = 'auto';
	}
});
/* menu deroulant tablette et smartphone*/

menuIcon.addEventListener('click', function(){
	if(slideoutMenu.style.opacity == "1") {
		slideoutMenu.style.opacity = '0';
		slideoutMenu.style.pointerEvents = 'none';
	} else {
		slideoutMenu.style.opacity = '1';
		slideoutMenu.style.pointerEvents = 'auto';
	}
})