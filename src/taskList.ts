import Task from './task';

class TaskList {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  addTask(description: string): Task {
    const task = new Task(description);
    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): void {
    const index = this.tasks.findIndex((task) => task.getId() === id);
    if (index !== -1) this.tasks.splice(index, 1);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find((task) => task.getId() === id);
  }
}

export default TaskList;
