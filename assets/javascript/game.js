

//alert("Your score is: " + score + " points.");
var score = 0;
var randomNumber=Math.floor(Math.random()*120)+19;
var crystalValuesData=""; //Math.floor(Math.random()*12) +1;
var wins= 1;
var losses= 1;


$("#random-number").text(randomNumber);


$(".crystal").each(function(){
    $(this).attr("crystalValuesData",Math.floor(Math.random()*12) +1);
    
})

$("#sapphire").on("click", function(){
    var crystalValue=parseInt($(this).attr("crystalValuesData"));
    assignValue(crystalValue); 
    
});

$("#RedGem").on("click", function(){
    var crystalValue=parseInt($(this).attr("crystalValuesData"));
    assignValue(crystalValue); 
   
});

$("#Peridot").on("click", function(){
    var crystalValue=parseInt($(this).attr("crystalValuesData"));
    assignValue(crystalValue);  
   
});

$("#Amethyst").on("click", function(){
    var crystalValue=parseInt($(this).attr("crystalValuesData"));
    assignValue(crystalValue); 
   
});


function assignValue (newValue){

    score+=newValue;

    $("#total-score").text(score);

        if(score === randomNumber){
            alert("YOU WIN!");
            $("#wins").text(wins++);
            
        }

        else if (score > randomNumber){
            alert ("Too high!");
            $("#losses").text(losses++);
               
                        
        }
}







    




