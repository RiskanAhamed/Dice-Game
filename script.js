let score1=0,score2=0;
const faces=['⚀','⚁','⚂','⚃','⚄','⚅'];

function rollDice(){
 let d1=Math.floor(Math.random()*6);
 let d2=Math.floor(Math.random()*6);

 let a=document.getElementById('dice1');
 let b=document.getElementById('dice2');

 a.classList.add('roll');
 b.classList.add('roll');

 setTimeout(()=>{
  a.textContent=faces[d1];
  b.textContent=faces[d2];
  a.classList.remove('roll');
  b.classList.remove('roll');

  if(d1>d2){
   score1++;
   score1El=document.getElementById('score1');
   score1El.textContent=score1;
   document.getElementById('result').textContent='🏆 Player 1 Wins!';
  }else if(d2>d1){
   score2++;
   document.getElementById('score2').textContent=score2;
   document.getElementById('result').textContent='🏆 Player 2 Wins!';
  }else{
   document.getElementById('result').textContent='🤝 Draw!';
  }
 },500);
}

function resetGame(){
 score1=0; score2=0;
 document.getElementById('score1').textContent=0;
 document.getElementById('score2').textContent=0;
 document.getElementById('result').textContent='Press Roll Dice';
}