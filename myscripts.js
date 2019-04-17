
var i = 0; 			// Start Point
var images = [];	// Images Array
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


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

// Second 



var j = 0; 			// Start Point
var imagesj = [];	// Images Array
var timej = 2000;	// Time Between Switch
	 
// Image List
imagesj[0] = "Nylatech_Before_Forklift.PNG";
imagesj[1] = "Nylatech_Project_Step_1.PNG";
imagesj[2] = "Nylatech_Project_Step_2.PNG";
imagesj[3] = "Nylatech_Project_Step_3.PNG";
imagesj[4] = "Nylatech_Project_Step_4.PNG";
imagesj[5] = "Nylatech_Project_Step_5.PNG";
imagesj[6] = "Nylatech_Project_Step_6.PNG";
imagesj[7] = "Nylatech_Project_Step_7.PNG";
imagesj[8] = "Nylatech_Project_Step_8.PNG";
imagesj[9] = "Nylatech_Project_Step_9.PNG";
imagesj[10] = "Nylatech_Project_Step_11.PNG";
imagesj[11] = "Nylatech_Project_Step_12.PNG";
imagesj[12] = "Nylatech_After_Forklift.PNG";


// Change Image
function changejImg(){
	document.slidej.src = images[j];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  j++; 
	} else { 
		// Reset Back To O
		j = 0;
	}

	// Run function every x seconds
	setTimeout("changejImg()", timej);
}

// Run function when page loads
window.onload=changejImg;
