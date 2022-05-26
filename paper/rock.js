window.onload=function(){
    let userScore = 0;
    let computerScore = 0;
    let userScore_span = document.getElementById("user-score");
    let computerScore_span = document.getElementById("computer-score");
    const rock_div = document.getElementById("r");
    const paper_div = document.getElementById("p");
    const scissors_div = document.getElementById("s");
    let result_p=document.querySelector(".result > p");
    function getComputerChoice(){
        const choices = ['r' , 'p' , 's'];
        const randomNumber = Math.floor(Math.random()*3);
        return choices[randomNumber];
    }
    function game(userChoice){
        const computerChoice = getComputerChoice();
        switch(userChoice+computerChoice){
            case "rs": 
            case "pr":
            case "sp":
            win();
            break;
            case "rp":
            case "ps":
            case "sr":
                loser();
                break;
            case "rr":
                case"pp":
                case"ss":
                draw();
                break;
        }
    }
    function convertToWord(letter){
        if(letter==="r") return "Rock";
        if(letter==="p") return "Paper";
        return "Scissors";
    }
    function win(userChoice,computerChoice){
        userScore++;
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        const smallUserword="user".fontsize(3);
        const smallcompword="comp".fontsize(3);

        result_p.innerHTML=`${convertToWord(userChoice)}${smallUserword} beats ${convetToWorrd(computerChoice)} ${smallcompword} . You Win!`;
    }

    function loser(userChoice,computerChoice){
        computerScore++;
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        const smallUserword="user".fontsize(3);
        const smallcompword="comp".fontsize(3);

        result_p.innerHTML=`${convertToWord(userChoice)}${smallUserword }loses to ${convetToWorrd(computerChoice)} ${mallcompword} . You loser!`;
    }
    function draw(userChoice,computerChoice){
        const smallUserword="user".fontsize(3);
        const smallcompword="comp".fontsize(3);

        result_p.innerHTML=`${convertToWord(userChoice)}${smallUserword} equals ${convetToWorrd(computerChoice)} ${smallcompword} . DRAW!`; 
    }
    function main(){
        rock_div.addEventListener('click' , function(){
            game("r");
        })
        paper_div.addEventListener( 'click',function(){
            game("p");
        })
        scissors_div.addEventListener('click' , function(){
            game("s");
        })

    }
    main ();
};