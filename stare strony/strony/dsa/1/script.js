function Witam()
{
    console.log("witam");
}
function ZmienKolor()
{
    color = "#"
    for(i = 0; i < 6; i++)
    {
        number = Math.floor(Math.random() * 16);
    
        ConvertNumberToHex();
        color = color + number;

    }

    console.log(color);
    document.getElementById("kwadrat").style.backgroundColor = color;

}

function ConvertNumberToHex() {
    switch (number) {
        case 10:
            number = "a";
            break;
        case 11:
            number = "b";
            break;
        case 12:
            number = "c";
            break;
        case 13:
            number = "d";
            break;
        case 14:
            number = "e";
            break;
        case 15:
            number = "f";
            break;
        default:
            number = number;
            break;
    }
}
function CreateNewSquare()
{
    test = document.createElement('div');
    test.id = "tile";
    document.body.appendChild(test);
}
function SquareOnHover()
{
    
}