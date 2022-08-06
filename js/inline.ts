const scripts = ["lazyLoad", "nav"]; // , "gallery"
//- const styles = ["nav"];

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

// purposely put this eager code here, so that the animation is a little delayed
window.addEventListener("load", function(){
	const eager = document.querySelectorAll(".eager")
	if(eager!=null)
		eager.forEach(element => {
			element.classList.add("loaded")
		});
	scripts.forEach(loadScript)
	//- styles.forEach(loadStyle)
});
