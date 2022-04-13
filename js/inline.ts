const scripts = ["lazyLoad", "nav"]; // , "gallery"
//- const styles = ["nav"];

window.addEventListener("load", function(){
	const heroImg = document.querySelector("#heroImg")
	if(heroImg!=null)
		heroImg.classList.add("loaded")
	scripts.forEach(loadScript)
	//- styles.forEach(loadStyle)
});

function loadScript(name){
	const script = document.createElement("script");
	script.type = 'text/javascript';
	script.src = '../js/' + name + '.js';
	document.body.appendChild(script);
}

function loadStyle(name){
	const style = document.createElement('link');
	style.rel="stylesheet";
	style.type = 'text/css';
	style.href = '../css/' + name + '.css';
	document.head.append(style);
}