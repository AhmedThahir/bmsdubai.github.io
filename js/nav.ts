const toggleButton = document.getElementById('togglebtn')
const navbarLinks = document.getElementById('nlink')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  console.log('toggle')
})

const thahirLinks = navbarLinks.querySelectorAll("a")
thahirLinks.forEach(link => {
	link.addEventListener('click', () => {
		navbarLinks.classList.toggle('active')
		console.log('toggle')
	})
	
});

var nav = document.getElementById("nav");
window.onscroll = function() {
	stickyNav();
};

function stickyNav() {
	const threshold = 0.7 * window.innerHeight
	if (window.scrollY >= threshold) {
		nav.classList.add("sticky")
	} else {
		nav.classList.remove("sticky");
	}
}