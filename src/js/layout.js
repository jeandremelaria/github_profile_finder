
// Listen for event
document.getElementById("go-button").addEventListener("click", toggleClass);


function toggleClass(){
	// Add classes
	document.getElementById("logo").classList.add("logo-nav");
	document.getElementById("form-container").classList.add("form-container-nav");	
}
