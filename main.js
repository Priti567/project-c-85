canvas=document.getElementById('myCanvas');//Create a reference for canvas 
ctx=canvas.getContext("2d");

greencar_width= 75;//Give specific height and width to the car image
greencar_height= 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x= 5;//Set initial position for a car image.
greencar_y= 225;

function add() {
	background_imgTag=new Image();
	background_imgTag.onload= uploadBackground;
	background_imgTag.src= background_image;//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	ctx.drawImage(background_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		 uploadBackground();
		 uploadrover();
	}

function down()
{
	if(greencar_y <=500)
	{
		greencar_y =greencar_y+ 10;
		console.log("When down arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(greencar_x >= 0)
	{
		greencar_x =greencar_x - 10;
		console.log("When left arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(greencar_x <= 700)
	{
		greencar_x =greencar_x + 10;
		console.log("When right arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadrover();
   }
}
	                                   