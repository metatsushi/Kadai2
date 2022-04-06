
const imgStone ="image/janken_gu.png";
const imgScissors ="image/janken_choki.png";
const imgPaper ="image/janken_pa.png";
const stone = '<img src="' + imgStone + '"alt="">';
const scissors = '<img src="' + imgScissors + '"alt=""/>';
const paper = '<img src="' + imgPaper + '"alt=""/>';
let stoneId = document.getElementById('stone');
stoneId.innerHTML = stone;
let scissorsId = document.getElementById('scissors');
scissorsId.innerHTML = scissors;
let paperId = document.getElementById('paper');
paperId.innerHTML = paper;
let yourSelect = [];

$(".start").on("click",function(){
    $("#header").css("display", "none");
    $("#choices").css("display", "flex");
})


$(".hand").on("click",function(){
    $("#choices").css("display", "none");
    $("#confirm").css("display", "flex");
})

$("#stone").on("click",function(){
    yourSelect = stone;
    $(".yourselect").html(yourSelect).css("visibility","visible");
})

$("#scissors").on("click",function(){
    yourSelect = scissors;
    $(".yourselect").html(yourSelect).css("visibility","visible");
})

$("#paper").on("click",function(){
    yourSelect = paper;
    $(".yourselect").html(yourSelect).css("visibility","visible");
})

$(".no").on("click",function(){  
    $("#confirm").css("display", "none");
    $("#choices").css("display", "flex");
})

$(".yes").on("click",function(){
    $("#confirm").css("display", "none");
    // $("#yourselect").css("display", "none");
   $('.make_a').hide().fadeIn(200).delay(1000).fadeOut(50);
   $('.toss').hide().delay(1250).fadeIn(50).delay(200).fadeOut(20);
   let yourHand = yourSelect;
    $(".yourside").hide().delay(1550).fadeIn(50); 
    $('.yourhand').hide().delay(1550).html(yourHand).fadeIn(50);


let computerHand=[];

const m =Math.ceil(Math.random()*3);

if (m === 1 ){
    computerHand = stone;
    $(".computerside").hide().delay(1550).fadeIn(50); 
    $(".computerhand").hide().delay(1550).html(computerHand).fadeIn(50); 
    }

if (m === 2 ){
    computerHand = scissors;
    $(".computerside").hide().delay(1550).fadeIn(50); 
    $(".computerhand").hide().delay(1550).html(computerHand).fadeIn(50); 
    }

if (m === 3 ){
    computerHand = paper;
    $(".computerside").hide().delay(1550).fadeIn(50); 
    $(".computerhand").hide().delay(1550).html(computerHand).fadeIn(50); 
    }   

if ((computerHand == stone && yourSelect == stone)|| 
    (computerHand == scissors && yourSelect == scissors)|| 
    (computerHand == paper && yourSelect == paper)){    
    $('.draw').hide().delay(2000).fadeIn(10).css("visibility","visible").html("Draw");
    $(function(){
        setTimeout(function(){
         window.location.reload();
         },3500);
        });
} 

else if ((computerHand == stone && yourSelect == paper)|| 
    (computerHand == scissors && yourSelect == stone)|| 
    (computerHand == paper && yourSelect == scissors )){
    $('.win').hide().delay(2000).fadeIn(10).css("visibility","visible").html("You win!!");
} 



else if ((computerHand == stone && yourSelect == scissors)|| 
    (computerHand == scissors && yourSelect == paper)|| 
    (computerHand == paper && yourSelect == stone)){
    $('.lose').hide().delay(2000).fadeIn(10).css("visibility","visible").html("You lose");
}


})

