var keyCount = document.querySelectorAll(".key").length
for( var i = 0; i < keyCount; i++){
    document.querySelectorAll(".key")[i].addEventListener("click", function(){
        var key = String(this.innerHTML);
        playSound(key);
        buttonAnimation(key);
        
    });   
};


// document.querySelector(".key #kq").addEventListener("click", )


document.addEventListener("keypress", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(key){
    switch(key){
        case "q":
            var C2 = new Audio("sounds/C2.mp3");
            C2.play();
            break;
        case "2":
            var Db2 = new Audio("sounds/Db2.mp3");
            Db2.play();
            break;
        case "w":
            var D2 = new Audio("sounds/D2.mp3");
            D2.play();            
            break;                    
        case "3":
            var Eb2 = new Audio("sounds/Eb2.mp3");
            Eb2.play();            
            break;  
        case "e":
            var E2 = new Audio("sounds/E2.mp3");
            E2.play();            
            break;
        case "r":
            var F2 = new Audio("sounds/F2.mp3");
            F2.play();            
            break;  

        case "5":
            var Gb2 = new Audio("sounds/Gb2.mp3");
            Gb2.play();            
            break;
        case "t":
            var G2 = new Audio("sounds/G2.mp3");
            G2.play();            
            break;
        case "6":
            var Ab2 = new Audio("sounds/Ab2.mp3");
            Ab2.play();            
            break;
        case "y":
            var A2 = new Audio("sounds/A2.mp3");
            A2.play();            
            break;
        case "7":
            var Bb2 = new Audio("sounds/Bb2.mp3");
            Bb2.play();            
            break;
        case "u":
            var B2 = new Audio("sounds/B2.mp3");
            B2.play();            
            break;
        case "i":
            var C3 = new Audio("sounds/C3.mp3");
            C3.play();            
            break;
        case "9":
            var Db3 = new Audio("sounds/Db3.mp3");
            Db3.play();                                    
            break;
        case "o":
            var D3 = new Audio("sounds/D3.mp3");
            D3.play();                        
            break;
        case "0":
            var Eb3 = new Audio("sounds/Eb3.mp3");
            Eb3.play();                        
            break;
        case "p":
            var E3 = new Audio("sounds/E3.mp3");
            E3.play();                        
            break;
        case "[":
            var F3 = new Audio("sounds/F3.mp3");
            F3.play();                        
            break;
        case "k=":
            var Gb3 = new Audio("sounds/Gb3.mp3");
            Gb3.play();                       
            break;
        case "]":
            var G3 = new Audio("sounds/G3.mp3");
            G3.play();    
            break;
            
        default: console.log(key);
    }

};

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("#k" + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
