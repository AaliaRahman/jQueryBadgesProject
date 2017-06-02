$(function() {
$.ajax('https://www.codeschool.com/users/AaliaRahman.json', dataType:'json' {
  success: function(response){
    $('courses.completed').append('<div></div>').addClass('course');
    $('.course').append('<h3></h3>')
}
  });

  // your code will go here
});
