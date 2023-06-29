    
    const randomnumber = Math.floor(Math.random() *6)+1;
    const image = "images/dice"+randomnumber+".png";
    img1src = document.querySelectorAll("img")[0];
    img1src.setAttribute("src",image);

    const randomnumber2 = Math.floor(Math.random() *6)+1;
    const image2 = "images/dice"+randomnumber+".png";
    img1src = document.querySelectorAll("img")[1];
    img1src.setAttribute("src",image);

    if(randomnumber>randomnumber2)
    {
        document.querySelector('h1').innerHTML ="play 1 wins"

    }
    else if (randomnumber2>randomnumber){
        document.querySelector('h1').innerHTML ="play 2 wins";
   
    }
    else{
        document.querySelector('h1').innerHTML ="no winner";
   
    }


    alert('made in cameroun');
