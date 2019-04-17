
var i=j = 0; 			// Start Point
var images = [];	// Images Array
var imagesj =[];
var time = 2000;	// Time Between Switch
	 
// Image List
images[0] = "Nylatech_Before_Forklift.PNG";
images[1] = "Nylatech_Project_Step_1.PNG";
images[2] = "Nylatech_Project_Step_2.PNG";
images[3] = "Nylatech_Project_Step_3.PNG";
images[4] = "Nylatech_Project_Step_4.PNG";
images[5] = "Nylatech_Project_Step_5.PNG";
images[6] = "Nylatech_Project_Step_6.PNG";
images[7] = "Nylatech_Project_Step_7.PNG";
images[8] = "Nylatech_Project_Step_8.PNG";
images[9] = "Nylatech_Project_Step_9.PNG";
images[10] = "Nylatech_Project_Step_11.PNG";
images[11] = "Nylatech_Project_Step_12.PNG";
images[12] = "Nylatech_After_Forklift.PNG";

// Imagesj List
imagesj[0] = "Nylatech_R.jpg";
imagesj[1] = "Nylatech_R_1.jpg";
imagesj[2] = "Nylatech_R_2.jpg";
imagesj[3] = "Nylatech_R_3.jpg";
imagesj[4] = "Nylatech_R_4.jpg";
imagesj[5] = "Nylatech_R_5.jpg";
imagesj[6] = "Nylatech_R_6.jpg";
imagesj[7] = "Nylatech_R_7.PNG";
imagesj[8] = "Nylatech_R_8.jpg";
imagesj[9] = "Nylatech_R_9.jpg";
imagesj[10] = "Nylatech_R_10.jpg";
imagesj[11] = "Nylatech_R_11.jpg";
imagesj[12] = "Nylatech_R_12.jpg";



// Change Image
function changeImg(){
	document.slide.src = images[i]
	document.slidej.src = imagesj[j];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++
	j++;
		
	} else { 
		// Reset Back To O
		i = 0
		j = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}


// Run function when page loads
window.onload=changeImg;
