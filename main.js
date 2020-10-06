canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;

car2_width=170;
car2_height=70;
car2_x=10;
car2_y=200;

background_image="racing.jpg";
car1_image="car1.png";
car2_image="car2.jpg";

function add(){
background_imgTag=new Image();
background_imgTag.onload=Upload_background;
background_imgTag.src=background_image;

car1_imgTag=new Image();
car1_imgTag.onload=Upload_car1;
car1_imgTag.src=car1_image;

car2_imgTag=new Image();
car2_imgTag.onload=UploadCar2;
car2_imgTag.src=car2_image;
}
function Upload_background(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function Upload_car1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function UploadCar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPress=e.keyCode;
console.log(keyPress);
if(keyPress=="38"){
    car1_up();
    console.log("up");
}
if(keyPress=="40"){
    car1_down();
    console.log("down");
}
if(keyPress=="37"){
    car1_left();
    console.log("left");
}
if(keyPress=="39"){
car1_right();
    console.log("right");
}
if(keyPress=="87"){
    car2_up();
    console.log("w");
}
if(keyPress=="65"){
    car2_left();
    console.log("a");
}
if(keyPress=="83"){
    car2_down();
    console.log("s");
}
if(keyPress=="68"){
    car2_right();
        console.log("d");
    }
    if(car1_x >=750){
        console.log("Car1 won");
        document.getElementById("GameStatus").innerHTML = "Car 1 won!!";
    }

    if(car2_x >= 750){
        console.log("Car2 won");
        document.getElementById("GameStatus").innerHTML = "Car 2 won!!";
    }
}

function car1_up(){
if(car1_y >=10){
    car1_y= car1_y-10;
    console.log("When up arrow is pressed , x=" + car1_x +"y=" +car1_y);
    Upload_background();
    Upload_car1();
    UploadCar2();
}
}

function car1_down(){
    if(car1_y <=720){
        car1_y= car1_y+10;
        console.log("When down arrow is pressed , x=" + car1_x +"y=" +car1_y);
        Upload_background();
        Upload_car1();
        UploadCar2();
    }
    
    }

    function car1_left(){
        if(car1_x >=10){
            car1_x= car1_x-10;
            console.log("When left arrow is pressed , x=" + car1_x +"y=" +car1_y);
            Upload_background();
            Upload_car1();
            UploadCar2();
        }
        
        }

       

       function car1_right(){
                if(car1_x<=875){
                   car1_x=car1_x+10;
                    console.log("when up arrow is pressed,x="+car1_x+", y="+car2_y);
            Upload_background();
            Upload_car1();
            UploadCar2();
                }
            }
    

            function car2_up(){
                if(car2_y >=10){
                    car2_y= car2_y-10;
                    console.log("When W key is pressed , x=" + car1_x +"y=" +car1_y);
                    Upload_background();
                    Upload_car1();
                    UploadCar2();
                }
                }

                function car2_down(){
                    if(car2_y <=720){
                        car2_y= car2_y+10;
                        console.log("When S key is pressed , x=" + car1_x +"y=" +car1_y);
                        Upload_background();
                        Upload_car1();
                        UploadCar2();
                    }
                    }

                    function car2_left(){
                        if(car2_x >=10){
                            car2_x= car2_x-10;
                            console.log("When A key is pressed , x=" + car1_x +"y=" +car1_y);
                            Upload_background();
                            Upload_car1();
                            UploadCar2();
                        }
                    }

                    function car2_right(){
                        if(car2_x<=820){
                           car2_x=car2_x+10;
                            console.log("when D key is pressed,x="+car1_x+", y="+car2_y);
                    Upload_background();
                    Upload_car1();
                    UploadCar2();
                        }
                    }

              