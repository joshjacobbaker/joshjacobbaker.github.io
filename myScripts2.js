
var j = 0; 			// Start Point
var imagesj = [];	// Images Array
var timej = 2000;	// Time Between Switch
	 
// Image List
imagesj[0] = "Tofino.jpg";
imagesj[1] = "WWU_best_ski_school.PNG";



// Change Image
function changeImgj(){
	document.slidej.src = imagesj[j];

	// Check If Index Is Under Max
	if(j < images.length - 1){
	  // Add 1 to Index
	  j++; 
	} else { 
		// Reset Back To O
		j = 0;
	}

	// Run function every x seconds
	setTimeout("changeImgj()", time);
}

// Run function when page loads
window.onload=changeImgj;
