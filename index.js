/*the follow variables helps to get every button and use a list that
contains a part of the title of sounds (it helps for the algorithm) */
var buttons=document.querySelectorAll('.container button');
var sounds=['kick-bass','crash','snare','tom-1','tom-2','tom-3','tom-4'];


//this function allows to play sound
function playSound(soundName){
    var path='sounds/'+soundName+'.mp3'
    var sound=new Audio(path);
    sound.play();
}


//add sound for each button 
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        playSound(sounds[i]);
    })
}


//add event listener for keypress

document.addEventListener("keypress",function(keyInformations){
    key=keyInformations.key;
     //convert the key to  lowercase 
    lowerKey=key.toLowerCase();
        //play the sound and add button effects
    switch(lowerKey){
        case 'a':
            playSound('kick-bass');
            break;
        case 's':
            playSound('crash');
            break;
        case 'd':
            playSound('snare');
            break;
        case 'f':
            playSound('tom-1');
            break;
        case 'g':
            playSound('tom-2');
            break;
        case 'h':
            playSound('tom-3');
            break;
        case 'j':
            playSound('tom-3');
            break;
        default:
            console.log(lowerKey);
    }
    
    //add a pressed effect 
    var button=document.querySelector(".container"+" "+"."+lowerKey);
    console.log(button);
    button.classList.add('pressedeffect');
    
    //remove the pressed effect sound
    setTimeout(function(){
        button.classList.remove("pressedeffect");},100
    )
}

)