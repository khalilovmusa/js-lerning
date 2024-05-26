let score = JSON.parse(localStorage.getItem('score')) 
|| {
      wins: 0,
      losses:0,
      ties: 0
   };

  updateScoreElement();


   // if (!score) {
   //    score =  {
   //       wins: 0,
   //       losses:0,
   //       ties: 0
   //    };
   // }

   function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if(playerMove === 'Scissors'){
         if(computerMove === 'Rock') {
            result = 'You lose.';
         } else if(computerMove === 'Paper') {
            result = 'You win.';
         } else if(computerMove === 'Scissors') {
            result = 'Tie.';
         }

      }else if(playerMove === 'Paper'){
         if(computerMove === 'Rock') {
            result = 'You win.';
         } else if(computerMove === 'Paper') {
            result = 'Tie.';
         } else if(computerMove === 'Scissors') {
            result = 'You lose.';
         }
         
      }else if(playerMove === 'Rock'){
         if(computerMove === 'Rock') {
         result ='Tie.';
         } else if(computerMove === 'Paper') {
            result = 'You lose.';
         } else if(computerMove === 'Scissors') {
            result = 'You win.';
         }
      }

      if (result==='You win.') {
         score.wins += 1;
      }else if(result === 'You lose.') {
         score.losses += 1;
      }else if(result==='Tie.') {
         score.ties += 1;
      }

      localStorage.setItem('score' , JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result')
      .innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `You 
   <img src="photos/${playerMove}-emoji.png" class="move-icon">
   <img src="photos/${computerMove}-emoji.png" class="move-icon">
   computer`;

      // <!--Result alert-->
      //   alert(`You picked ${playerMove}. Computer picked ${computerMove}. 
      //   ${result}\nWins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}
      //   `);
   }
s
   function updateScoreElement () {
     document.querySelector('.js-score')
   .innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;

   }

   function pickComputerMove() {
      let computerMove = '';
      const randomNumber = Math.random();
         if(randomNumber >= 0 && randomNumber < 1 / 3){
         computerMove = 'Rock';
         } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
            computerMove = 'Paper';
         } else if (randomNumber >= 2 / 3 && randomNumber < 1){
            computerMove = 'Scissors';
         }
         return computerMove;
   }