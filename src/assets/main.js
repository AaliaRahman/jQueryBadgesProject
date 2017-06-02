$(function() {
$.ajax('https://www.codeschool.com/users/AaliaRahman.json', dataType:'json' {
  success: function(response){
    $('courses.completed').append('<div></div>').addClass('course');
    $('.course').append('<h3></h3>')
    $('.course').append("<img").attr('src': 'badge');
    $('.course').append('<a>See Course</a>').attr('href': 'url', 'target':'_blank').addClass('btn' 'btn-primary');
}
  });

  // your code will go here
});
