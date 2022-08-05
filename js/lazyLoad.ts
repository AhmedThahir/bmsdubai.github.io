const assetLoc = "../" + "assets/"

const black:string = "hsla(0, 0%, 5%, 1.00)"
const blackt:string = "hsla(0, 0%, 0%, 0.90)"
const bgColor:string = "hsla(0, 0%, 0%, 0.65)"
const lazyLoadOptions = {
	threshold: 0,
	rootMargin: "0px 0px 600px 0px"
};

// assets
const assets = document.querySelectorAll("[data]")
const assetObserver = new IntersectionObserver((entries, assetObserver) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return
		
		const asset = <HTMLMediaElement> entry.target
		const data = asset.getAttribute("data")
		
		if(data!=null && data.includes("svg"))
			asset.classList.add("sharp")
		asset.src = assetLoc + data
		assetObserver.unobserve(entry.target)
	});
}, lazyLoadOptions)
assets.forEach((asset) => {
	asset.setAttribute("loading", "lazy")
	assetObserver.observe(asset);
	
	(<HTMLMediaElement> asset).onload = function (){
		asset.classList.add("loaded")
	}
})

// bg
// const gradient:string = "linear-gradient(" + bgColor + ", " + bgColor + "), url(" + assetLoc
// const gradient:string = "linear-gradient(" + blackt + " 0%, " + bgColor + " 15%, " + bgColor + " 85%, "+ blackt + " 100%), url(" + assetLoc
const gradient:string = "linear-gradient(" + black + " 0%, " + bgColor + " 15%, " + bgColor + " 85%, "+ black + " 100%), url(" + assetLoc

const backgrounds = document.querySelectorAll("[bg]")
const bgObserver = new IntersectionObserver((entries, bgObserver) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return
		const background = <HTMLElement> entry.target
		const data = background.getAttribute("bg")
		const url = "bg/" + data

		// if(data.includes("svg"))
			background.classList.add("sharp")
		background.style.backgroundImage = gradient + url + ")"
		bgObserver.unobserve(entry.target)
	});
}, lazyLoadOptions)
backgrounds.forEach((asset) => {
	bgObserver.observe(asset)
})