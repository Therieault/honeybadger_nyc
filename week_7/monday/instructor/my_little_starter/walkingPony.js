$(function() {
  console.log('Loaded, bro');
  walkingPony();
});

var walkingPony = function() {
<<<<<<< HEAD
  var pony = $('#pony');
};
=======
  var $pony = $('#pony');
  let distance = 1625;

  setInterval(function () {
    $pony.css('left', `${distance}px`);
    if (distance < -600) {
      distance = 1625;
    } else {
      distance -= 5;
    }
  }, 60);
};
>>>>>>> f32cf9ff54be365157b227ef1fd2e7ca6f343148
