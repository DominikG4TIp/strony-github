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
function Prawo(ilePxWprawo)
{
    marginLeft += ilePxWprawo;
    document.getElementById("kwadrat").style.marginLeft = marginLeft + "px";
}