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
    horizontal();
  });



  function horizontal(){
    if (turn >=5){

      if ($($('.square')[0]).children().hasClass(move.className) &&
      $($('.square')[1]).children().hasClass(move.className) &&
      $($('.square')[2]).children().hasClass(move.className)){
      alert( move.className + " won!");
      $('.square').empty();
      }

      if ($($('.square')[3]).children().hasClass(move.className) &&
      $($('.square')[4]).children().hasClass(move.className) &&
      $($('.square')[5]).children().hasClass(move.className)){
      alert( move.className + " won!");
      $('.square').empty();
      }

      if ($($('.square')[6]).children().hasClass(move.className) &&
      $($('.square')[7]).children().hasClass(move.className) &&
      $($('.square')[8]).children().hasClass(move.className)){
      alert( move.className + " won!");
      $('.square').empty();
      }
      vertical();
    }
  }

  function vertical(){
      if ($($('.square')[0]).children().hasClass(move.className) &&
          $($('.square')[3]).children().hasClass(move.className) &&
          $($('.square')[6]).children().hasClass(move.className)){
          alert( move.className + " won!");
          $('.square').empty();
      }

      else if ($($('.square')[1]).children().hasClass(move.className) &&
        $($('.square')[4]).children().hasClass(move.className) &&
        $($('.square')[7]).children().hasClass(move.className)){
        alert( move.className + " won!");
        $('.square').empty();
      }

      else if ($($('.square')[2]).children().hasClass(move.className) &&
        $($('.square')[5]).children().hasClass(move.className) &&
        $($('.square')[8]).children().hasClass(move.className)){
        alert( move.className + " won!");
        $('.square').empty();
      }
    diagonal();
  }

  function diagonal(){
      if ($($('.square')[0]).children().hasClass(move.className) &&
          $($('.square')[4]).children().hasClass(move.className) &&
          $($('.square')[8]).children().hasClass(move.className)){
          alert( move.className + " won!");
          $('.square').empty();
      }

      else if ($($('.square')[2]).children().hasClass(move.className) &&
        $($('.square')[4]).children().hasClass(move.className) &&
        $($('.square')[6]).children().hasClass(move.className)){
        alert( move.className + " won!");
        $('.square').empty();
      }

      else if (turn == 9){
        alert("Draw...");
        $('.square').empty();
      }
  }

})
