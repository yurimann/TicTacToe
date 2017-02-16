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
    winnerChecker();
  });



  function winnerChecker(){
    if (turn >=5){
    var winners = [[0,1,2], [3,4,5], [6,7,8],[0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
      for (i = 0 ; i <=8; i++){
        var b = winners[i][0];
        var c = winners[i][1];
        var d = winners[i][2];

          if ($($('.square')[b]).children().hasClass(move.className) &&
          $($('.square')[c]).children().hasClass(move.className) &&
          $($('.square')[d]).children().hasClass(move.className)){
            alert( move.className + " won!");
            $('.square').empty();
          }
        }
      }
  };
  //
  //     if ($($('.square')[3]).children().hasClass(move.className) &&
  //     $($('.square')[4]).children().hasClass(move.className) &&
  //     $($('.square')[5]).children().hasClass(move.className)){
  //     alert( move.className + " won!");
  //     $('.square').empty();
  //     }
  //
  //     if ($($('.square')[6]).children().hasClass(move.className) &&
  //     $($('.square')[7]).children().hasClass(move.className) &&
  //     $($('.square')[8]).children().hasClass(move.className)){
  //     alert( move.className + " won!");
  //     $('.square').empty();
  //     }
  //     vertical();
  //   }
  // }
  //
  // function vertical(){
  //     if ($($('.square')[0]).children().hasClass(move.className) &&
  //         $($('.square')[3]).children().hasClass(move.className) &&
  //         $($('.square')[6]).children().hasClass(move.className)){
  //         alert( move.className + " won!");
  //         $('.square').empty();
  //     }
  //
  //     else if ($($('.square')[1]).children().hasClass(move.className) &&
  //       $($('.square')[4]).children().hasClass(move.className) &&
  //       $($('.square')[7]).children().hasClass(move.className)){
  //       alert( move.className + " won!");
  //       $('.square').empty();
  //     }
  //
  //     else if ($($('.square')[2]).children().hasClass(move.className) &&
  //       $($('.square')[5]).children().hasClass(move.className) &&
  //       $($('.square')[8]).children().hasClass(move.className)){
  //       alert( move.className + " won!");
  //       $('.square').empty();
  //     }
  //   diagonal();
  // }
  //
  // function diagonal(){
  //     if ($($('.square')[0]).children().hasClass(move.className) &&
  //         $($('.square')[4]).children().hasClass(move.className) &&
  //         $($('.square')[8]).children().hasClass(move.className)){
  //         alert( move.className + " won!");
  //         $('.square').empty();
  //     }
  //
  //     else if ($($('.square')[2]).children().hasClass(move.className) &&
  //       $($('.square')[4]).children().hasClass(move.className) &&
  //       $($('.square')[6]).children().hasClass(move.className)){
  //       alert( move.className + " won!");
  //       $('.square').empty();
  //     }
  //
  //     else if (turn == 9){
  //       alert("Draw...");
  //       $('.square').empty();
  //     }
  // }

})
