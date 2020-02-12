var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton =document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode")


init();

function init(){
   modeButtonsSetUp();
   setUpSquares();
   reset();
}

function modeButtonsSetUp(){
    for(var i =0; i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            console.log("WE ARE HERE AND THE NUM IS: " + numSquares)
            reset();
        })
    }
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        console.log("HELLO")
        // Add listienrs
        squares[i].addEventListener("click", function(){
            // Get color of clicked square 
            var clickedColor = this.style.backgroundColor;
            // Compare color to pickedColor
            if(clickedColor == pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor =  colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click",function(){
    reset();
})

colorDisplay.textContent = pickedColor;






function changeColors(color){
    //loop all squares
    for(var i = 0; i<squares.length; i++){
        //change each color to match the right color
        squares[i].style.backgroundColor = color;
    }
}


function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make array
    var arr = [];
    // add num rnadom colors to array
    for(var i=0; i<num; i++){
        // get random color and add to array
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    // pick a red
    var r = Math.floor(Math.random() * 256);
    // pick a green
    var g = Math.floor(Math.random() * 256);
    // pick a blue
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}