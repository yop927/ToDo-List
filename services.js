angular.module('todo').factory('todoStorage', function(){
  var TODO_DATA = 'TODO_DATA';
  var storage = {
    todos : [],
  
  _saveToLocalStorage: function(data) {
    localStorage.setItem(TODO_DATA, JSON.stringify(data))
  },
  _getFromLocalStorage: function() {
    return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
  },
  
    get: function() {
      // storage.todos = storage._getFromLocalStorage()
      angular.copy(storage._getFromLocalStorage(), storage.todos)
      return storage.todos;
    },
    
    remove: function(todo) {
      var idx = storage.todos.findIndex(function (item) {
      return item.id === todo.id
    })
    
    if(idx > -1){
       storage.todos.splice(idx, 1);
       storage._saveToLocalStorage(storage.todos);
    }
  },
  
  add: function(newTodoTitle) {
    var newtodo = {
      title : newTodoTitle,
      completed : false,
      createdAt : Date.now()
    };
    //push to todos list
    storage.todos.push(newtodo);
    storage._saveToLocalStorage(storage.todos);
  },
  
  update: function() {
    storage._saveToLocalStorage(storage.todos);
  }
}
  return storage;
});
