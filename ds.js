var i=j=k=m = 0; 			// Start Point
var images = [];	// Images Array
var imagesj =[];
var imagesk = [];
var imagesm = [];
var time = 2000;	// Time Between Switch
	 
// Titanic OOS prob images "m"

imagesm[0] = "ensemble_oos_final.PNG";
imagesm[1] = "glmboost_oos_final.PNG";
imagesm[2] = "nnet_oos_final.PNG";
imagesm[3] = "ranger_oos_final.PNG";
imagesm[4] = "stack_oos_final.PNG";
imagesm[5] = "xgbTree_oos_final.PNG";



// Change Image
function changeImg(){
	document.slidem.src = imagesm[m];

	// Check If Index Is Under Max
	if(m < images.length - 1){
	  // Add 1 to Index
		m++;
		
	} else { 
		// Reset Back To O
		m = 0;
	}
	
	
	
	// Run function every x seconds
	setTimeout("changeImg()", time);
}


// Run function when page loads
window.onload=changeImg;
