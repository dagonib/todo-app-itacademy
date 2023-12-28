import * as readline from 'readline';
import TaskList from './task-list';
import Task from './task';

const taskList = new TaskList();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu() {
  console.log('========= ToDo App =========');
  console.log('1. Add Task');
  console.log('2. View Tasks');
  console.log('3. Delete Task');
  console.log('4. Complete Task');
  console.log('5. Exit');
}

function addTask() {
  rl.question('Enter task description: ', (description) => {
    const task = taskList.addTask(description);
    console.log(`Task added with ID: ${task.getId()}`);
    displayMenu();
    handleUserInput();
  });
}

function viewTasks() {
  const tasks = taskList.getTasks();
  tasks.forEach((task: Task) => {
    console.log(
      `ID: ${task.getId()}, Description: ${task.getDescription()}, Completed: ${task.isCompleted()}`
    );
  });
  displayMenu();
  handleUserInput();
}

function deleteTask() {
  rl.question(
    'Choose a task to delete (enter the number): ',
    (selectedTaskIndex) => {
      const index = parseInt(selectedTaskIndex, 10);

      if (isNaN(index) || index < 1 || index > taskList.getTasks().length) {
        console.log(`Task with Id not found`);
      } else {
        const selectedTask = taskList.getTasks()[index - 1];
        taskList.deleteTask(selectedTask.getId());
        console.log(`Task with Id ${selectedTask.getId()} deleted`);
      }
      displayMenu();
      handleUserInput();
    }
  );
}

function markAsCompleted() {
  rl.question('Mark a task as completed: ', (selectedIndex) => {
    const index = parseInt(selectedIndex, 10);

    if (isNaN(index) || index < 1 || index > taskList.getTasks().length) {
      console.log(`Task with Id not found`);
    } else {
      const selectedTask = taskList.getTasks()[index - 1];
      selectedTask.markAsCompleted();
      console.log(`Task with Id ${selectedTask.getId()} completed`);
    }
    displayMenu();
    handleUserInput();
  });
}

function handleUserInput() {
  rl.question('Select an option (1-4): ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        viewTasks();
        break;
      case '3':
        deleteTask();
        break;
      case '4':
        markAsCompleted();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Invalid option. Please select again.');
        displayMenu();
        handleUserInput();
        break;
    }
  });
}

displayMenu();
handleUserInput();
