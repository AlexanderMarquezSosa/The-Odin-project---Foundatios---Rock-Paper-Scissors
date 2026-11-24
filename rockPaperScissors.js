    
    const modal = document.getElementById('modal');
    const play = document.getElementById('play');
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');

    const roundDiv = document.getElementById('roundGeneral');
    const humanDiv = document.getElementById('humaScore');
    const computerDiv = document.getElementById('computerScore');

    play.addEventListener('click',()=>{
        if(humanScore>=3 || computerScore>=3){
            resetGame();
            updateScore(roundDiv,humanDiv,computerDiv,text1,'Start the game',text2,'Pick your move')
        }
        modal.showModal()
    })
    const choise = document.getElementById('choiseContainer');

    choise.addEventListener('click',(e)=>{
            let target = e.target;

            switch(target.id){
                case 'op1':
                    humaChoise='';
                    humaChoise =options[0];
                    modal.close();
                    playGame();
                break;

                case 'op2':
                    humaChoise='';
                    humaChoise = options[1];
                    modal.close();
                    playGame();
                break;

                case 'op3':
                    humaChoise='';
                    humaChoise = options[2]
                    modal.close();
                    playGame();
                break;
            }
        });

        const options = ['rock','paper','scissors'];

        const computerPhases = [
            'Beaten by the machine. Again.',
            'The computer read your mind.',
            'Too slow, human. I already knew your move.',
            '0% luck. 100% calculation.',
            'Humans guess. Computers know.',
            'You played with heart. I played with data.',
            `Don't feel bad. I beat 99% of humans.`,
            'Your pattern was too easy to predict.',
            `I don't get tired. I don't make mistakes.`,
            'Game over for you. Game on for me.'
        ];

        const playerPhrases = [
        "You got me! Nice one, human.",
        "Okay, that one was yours. Rematch?",
        "You outsmarted the machine!",
        "Human 1 - Computer 0",
        "Wow, even my algorithms didn't see that coming.",
        "You win this round. Don't get cocky.",
        "Lucky? Or just genius?",
        "You cracked my code!",
        "Impressive. You're smarter than you look.",
        "Victory is yours! Enjoy it while it lasts."
        ];

        var humanScore=0;
        var computerScore=0;
        var round=0;
        var humaChoise ='';
        
        function getPhase(array){
            return array[(Math.floor(Math.random()*array.length))]
        }

        function getComputerChoice(){
            var random =Math.floor(Math.random()*options.length);
            return options[random];
        }

        function resetGame(){
            humanScore=0;
            computerScore=0;
            round=0;
            humaChoise ='';
            // return updateScore(roundDiv,humanDiv,computerDiv,text1,'Start the game',text2,'Click in the button')
        }

        function checkScore(){
            if(humanScore> computerScore){
                updateScore(roundDiv,humanDiv,computerDiv,text1,'🎉 Player Win!!! 🎊',text2,'Start the game')
            }else if(humanScore< computerScore){
                updateScore(roundDiv,humanDiv,computerDiv,text1,'☠️ computer Win!!! ☠️',text2,'Start the game')
               
            }else{
                updateScore(roundDiv,humanDiv,computerDiv,text1,'🤣 Draw game 😁',text2,'Start all over again')
            }
        }

        function updateScore(roundDiv,humanScoreDiv,computerScoreDiv,playDiv,message1,playDiv2,message2){
            roundDiv.textContent = `Round: ${round}`;
            humanScoreDiv.textContent =`Player: ${humanScore}`;
            computerScoreDiv.textContent = `Computer: ${computerScore}`;
            playDiv.textContent = `${message1}`;
            playDiv2.textContent=message2;
            console.log(message1,message2);
        }

        function playGame(){
            function playRound(humaChoice,computerChoise){

            if(humaChoice===null) return
            //draw
            if(humaChoice === computerChoise){
                round++
                humaChoice='';
                return updateScore(roundDiv,humanDiv,computerDiv,text1,'🤣 Draw game - Try again 😁',text2,'Try again')
                //huma lose
            }else if(humaChoice==='paper' && computerChoise ==='scissors'){
                computerScore++;
                round++;
                humaChoice='';
                return updateScore(roundDiv,humanDiv,computerDiv,text1,'☠️ Computer Win - This round ☠️',text2,getPhase(computerPhases));
                 
            }else if(humaChoice==='rock' && computerChoise ==='paper'){
                computerScore++;
                round++;
                humaChoice='';
                return updateScore(roundDiv,humanDiv,computerDiv,text1,'☠️ Computer Win - This round  ☠️',text2,getPhase(computerPhases));
            }else if(humaChoice==='scissors' && computerChoise ==='rock'){
                computerScore++;
                round++;
                humaChoice='';
                return updateScore(roundDiv,humanDiv,computerDiv,text1,'☠️ Computer Win - This round ☠️',text2,getPhase(computerPhases));
                
                //huma win
            }else if(humaChoice==='rock' && computerChoise ==='scissors'){
                humanScore++;
                round++;
                humaChoice='';
                return updateScore(roundDiv,humanDiv,computerDiv,text1,'🎉Player Win - This round  🎊',text2,getPhase(playerPhrases));
                
            }else if((humaChoice==='scissors' && computerChoise ==='paper')){
                humanScore++;
                round++;
                humaChoice='';
                return updateScore(roundDiv,humanDiv,computerDiv,text1,'🎉Player Win - This round  🎊',text2,getPhase(playerPhrases));
                
            }else if((humaChoice==='paper' && computerChoise ==='rock')){
                humanScore++;
                round++;
                humaChoice='';
                return updateScore(roundDiv,humanDiv,computerDiv,text1,'🎉Player Win - This round  🎊',text2,getPhase(playerPhrases));             
            }
        }
         
            const humanSelection = humaChoise;
            const computerSelection = getComputerChoice();
            console.log(humanSelection)
            console.log(computerSelection)
            playRound(humanSelection,computerSelection)

            if(humanScore>=3 ||computerScore >=3){
                console.log(checkScore())
            }
        }
