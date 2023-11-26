var firebaseConfig = {
  apiKey: "AIzaSyDXjqSpL2ljZgOQ8q-XlI-4TJ-alJ7OdD4",
  authDomain: "todoapp-with-database-e1ada.firebaseapp.com",
  databaseURL: "https://todoapp-with-database-e1ada-default-rtdb.firebaseio.com",
  projectId: "todoapp-with-database-e1ada",
  storageBucket: "todoapp-with-database-e1ada.appspot.com",
  messagingSenderId: "228678193460",
  appId: "1:228678193460:web:66e3ee26090512f7ecd561"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);



function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  // console.log(taskInput.value)
    var todoObj = {
      value : taskInput.value
    }
    
    firebase.database().ref('todo-items').push(todoObj)
  
    if (taskInput.value !== "") {
      var li = document.createElement("li");
      li.innerHTML = `${taskInput.value} <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>`;
      taskList.appendChild(li);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  
  function deleteTask(task) {
    task.parentElement.remove();
  }
  
  function editTask(task) {
    var newTask = prompt("Edit task:", task.parentElement.firstChild.textContent.trim());
    if (newTask !== null) {
      task.parentElement.firstChild.textContent = newTask;
    }
  }
  