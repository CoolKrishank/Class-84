canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2D");
r_height=100;
r_width=70;
r_xposition=10;
r_yposition=10;
r_image="rover.png";
b_image="mars.jpg";
function add()
{
    bg= new Image();
    bg.onload = uploadBackground;
    bg.src=b_image;
    r=new Image();
    r.onload=uploadrover;
    r.src=r_image;
}
function uploadBackground()
{
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(r,r_xposition,r_yposition,r_width,r_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    var keypressed=e.keyCode;
    if(keypressed== '37')
    {
        console.log("left");
        left();
    }
    if(keypressed== '38')
    {
        console.log("up");
        up();
    }
    if(keypressed== '39')
    {
        console.log("right");
        right();
    }
    if(keypressed== '40')
    {
        console.log("down");
        down();
    }
}