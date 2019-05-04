
var i=j=k=L = 0; 			// Start Point
var images = [];	// Images Array
var imagesj =[];
var imagesk = [];
var imagesm = [];
var imagesL = [];
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

// Imagesk List

imagesk[0] = "Kanban_9.PNG";
imagesk[1] = "Kanban_8.PNG";
imagesk[2] = "Kanban_7.PNG";
imagesk[3] = "Kanban_6.PNG";
imagesk[4] = "Kanban_5.PNG";
imagesk[5] = "Kanban_4_Safety_Stock.PNG";
imagesk[6] = "Kanban_4.PNG";
imagesk[7] = "Kanban_3.PNG";
imagesk[8] = "Kanban_2.PNG";
imagesk[9] = "Kanban_1.PNG";
imagesk[10] = "Kanban_0.PNG";
imagesk[11] = "Kanban_0_Reorder.PNG";

// ImagesL

imagesl[0] = "Boeing_1.jpg";
imagesL[1] = "Boeing_2.jpg";
imagesL[2] = "Boeing_3.jpg";
imagesL[3] = "Boeing_4.jpg";
imagesL[4] = "Boeing_5.jpg";



// Change Image
function changeImg(){
	document.slide.src = images[i]
	document.slidej.src = imagesj[j]
	document.slidek.src = imagesk[k]
	document.slideL.src = imagesL[L];

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
	
	if(k < imagesk.length - 1){
		// Add 1 to Index
		k++;
	} else {
		k = 0;
	}
	
	IF(L < imagesL.length - 1){
		// Add 1 to Index
		L++;
	}else{
		L=0;
		
	}
	
	
	// Run function every x seconds
	setTimeout("changeImg()", time);
}


// Run function when page loads
window.onload=changeImg;
