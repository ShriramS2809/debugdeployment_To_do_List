function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value === '') {
      alert('Please enter a task!');
      return;
    }
  
    var li = document.createElement('li');
    var taskText = document.createTextNode(taskInput.value);
    li.appendChild(taskText);
  
    var dueDate = prompt('Enter due date (optional):');
    if (dueDate !== null && dueDate !== '') {
      var dueDateSpan = document.createElement('span');
      dueDateSpan.textContent = ' (Due: ' + dueDate + ')';
      li.appendChild(dueDateSpan);
    }
  
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
      li.parentNode.removeChild(li);
    };
    li.appendChild(deleteBtn);
  
    var completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = function() {
      li.classList.toggle('task-completed');
    };
    li.appendChild(completeBtn);
  
    taskList.appendChild(li);
    taskInput.value = '';
  }
  