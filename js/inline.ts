// const styles = ["nav"];
const scripts = [
	"nav",
	"lazyLoad"
]; // order matters

function loadScript(name:string){
	const script = <HTMLScriptElement> document.createElement("script");
	script.type = 'text/javascript';
	script.src = '../js/' + name + '.js';
	document.body.appendChild(script);
}

function loadStyle(name:string){
	const style = <HTMLLinkElement> document.createElement('link');
	style.rel="stylesheet";
	style.type = 'text/css';
	style.href = '../css/' + name + '.css';
	document.head.append(style);
}

function loadFavicon(){
	const favicon = <HTMLLinkElement> document.createElement('link');
	favicon.rel="icon";
	favicon.type = 'image/x-icon';
	favicon.href = "../assets/logo/favicon.png";
	document.head.append(favicon);
}


// purposely put this eager code here, so that the animation is a little delayed
window.addEventListener("load", function(){
	
	const eager = document.querySelectorAll(".eager")
	if(eager!=null)
		eager.forEach(element => {
			element.classList.add("loaded")
		})

	// styles.forEach(loadStyle)
	scripts.forEach(loadScript)

	loadFavicon();
});
