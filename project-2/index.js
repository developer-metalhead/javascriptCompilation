function audioPlay(stimulus)
{
    switch (stimulus) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
    
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

var totalButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<totalButtons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        var buttonInnerHTML=this.innerHTML;
        audioPlay(buttonInnerHTML);
        animation(buttonInnerHTML);

        
        // console.log(this.innerHTML);
        // this.style.color="yellow";
        // this.classList.toggle("cunt");

    });
}

document.addEventListener("keydown",function() {
    // console.log(event);
    audioPlay(event.key);
    animation(event.key);
});

function animation(currentKey)
{
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.toggle("pressed");
setTimeout(function() {activeButton.classList.toggle("pressed"); },100);
}


// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick()
// {
//     alert("I got clicked");
// }


// Constructor Function

// function HouseKeeper(yearsOfExperience,name,cleaningRepetoire)
// {
//     this.yearsOfExperience=yearsOfExperience;
//     this.name=name;
//     this.cleaningRepetoire=cleaningRepetoire;

// }

// const houseKeepers=[];
// for(var i=0;i<4;i++)
// {
//     houseKeepers[i]= new HouseKeeper(prompt("Enter Years"),prompt("Enter Name"),prompt("Enter Cleaning repetoire"));
// }

// Method on Object

// function HouseKeeper(yearsOfExperience,name,cleaningRepetoire)
// {
//     this.yearsOfExperience=yearsOfExperience;
//     this.name=name;
//     this.cleaningRepetoire=cleaningRepetoire;
//     this.clean= function() {
//         alert("clean");
//     }

// }

// var houseKeeper1=new HouseKeeper(12,"James",["bedroom"]);
// houseKeeper1.clean();

