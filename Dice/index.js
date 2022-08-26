var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice1= 'dice'+randomNumber1+'.png';
var randomDiceOfLink1 = 'images/'+randomDice1;
var randomImage1 = document.querySelectorAll('img')[0];
var finalResultOfDice1 = randomImage1.setAttribute('src' , randomDiceOfLink1);


var randomNumber2 = Math.floor(Math.random()*6+1);
var randomDice2 = 'dice'+randomNumber2+'.png';
var randomDiceOfLink2 = 'images/'+randomDice2;
var randomImage2 = document.querySelectorAll('img')[1];
var finalResultOfDice2 = randomImage2.setAttribute('src', randomDiceOfLink2);

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = 'Meraj Won!!!' ;
}else if (randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML = 'Shuvo Won!!!' ;
}else{
    document.querySelector('h1').innerHTML = 'Match Draw';
}
