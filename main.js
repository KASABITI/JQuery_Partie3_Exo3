$(document).ready(function(){

  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let essai = 0;

  $("#btn").click(function(){
    essai++
    console.log(essai);
    let guess = $("input").val();
      if (essai <= 5 && guess == randomNumber){
        alert("BRAVO ABIGAIL !");

      }else if (essai <= 5 && guess < randomNumber){
          alert("TROP PETIT !");
        return;

      }else if (essai <= 5 && guess > randomNumber){
      alert("TROP GRAND !");

    }else if (essai > 5){
        alert("VOUS AVEZ PERDUE !");

      };

  });
});
