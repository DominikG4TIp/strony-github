function test() 
{
    var liczby = [213,1,2312,3,0];
    var a;

    for (let x = 0; x < liczby.length; x++) 
    {
        console.log(liczby[x])
    }
    console.log("======================");

    for (let x = 0; x < liczby.length - 1; x++) 
    {
        for (let y = 0; y < liczby.length - 1; y++) 
        {
            if(liczby[y] > liczby[y + 1]) 
            {
                a = liczby[y + 1];
                liczby[y + 1] = liczby[y];
                liczby[y] = a;
            }
        }
    }

    for (let x = 0; x < liczby.length; x++) 
    {
        console.log(liczby[x])
    }
    console.log("======================");
    console.log("test");

}