angular.module('todo').controller('TodoCtrl', function ($scope, todoStorage){
  $scope.todos = todoStorage.get();
  
  
  $scope.remove = function(todo){
   // alert("Are you sure you want to delete this list?");
    // first we need to find a list that has the same title (passed on)
    todoStorage.remove(todo);
  };
  
  $scope.add = function(newTodoTitle){
    //create a new todo 
    todoStorage.add(newTodoTitle);
    storage.newTodoTitle = "";
  };
  
  $scope.update = function(){
    todoStorage.update();
  }
});