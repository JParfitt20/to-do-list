$('#addButton').click(function(){
  const newItem = $('#toDoItem').val();
  const $newToDo = $("<li><input class ='remove' type ='checkbox' name ='new-item'><label for='new-item'>"+  newItem + "</label></li>");
  $('.to-do-list').append($newToDo);
  $('#toDoItem').val(" ");
});

$('.to-do-list').on('click', '.remove', function(event){
  $('input:checked').parent().remove();
});


