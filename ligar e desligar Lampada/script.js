function TurnOnOff(){
    var Image = document.getElementById('image');
    if(Image.src.match ('lampadaOff')){

        Image.src = 'img/lampadaOn.jpg';
    } else{
        Image.src = 'img/lampadaOff.jpg';



    }




}