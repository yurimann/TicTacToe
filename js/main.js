$(function(){
  var turn = 0
  $('.square').on('click', function(){
    if ($(this).children().length === 0){
      move = document.createElement('div');
      if (turn%2 === 0) {
        move.setAttribute('class','circle');
        $(this).append(move);
      }
      else {
        move.setAttribute('class','ex');
        $(this).append(move);
      }
    turn++;
    }
    over();
  });


  function over(){
    if (turn >5){
    for (i = 0; i <= 2; i++){
      if ($(".square:has(.circle)")[i] == $(".square:has(.circle)")){

      alert("Circle won!");
      }
    }
  }
}

})
