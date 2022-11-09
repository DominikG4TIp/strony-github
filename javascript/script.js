function ZmienKolor()
{
    colors = [document.getElementById("red"), document.getElementById("green"), document.getElementById("blue")];
    
    for (let i = 0; i < colors.length; i++) 
    {
        if(colors[i].value > 255)
        {
            colors[i].value = 255;
        }
        if(colors[i].value < 0)
        {
            colors[i].value = 0;
        }
    }

    document.getElementById("kwadrat").style.backgroundColor = "rgb(" + colors[0].value + "," + colors[1].value + "," + colors[2].value + ")";
}
marginLeft = 0;
marginTop = 0;
function ZmianaPozycjiPoziomo(px)
{
    marginLeft += px;
    document.getElementById("kwadrat").style.marginLeft = marginLeft + "px";
}

function myFunction() {
  alert ("Hello World!");
}

document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
        //up
    } else if (e.keyCode === 40) {
        //down
    } else if (e.keyCode === 37) {
        ZmianaPozycjiPoziomo(-10);
    } else if (e.keyCode === 39) {
        ZmianaPozycjiPoziomo(10);
    }
}