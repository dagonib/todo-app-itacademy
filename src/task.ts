import { randomUUID } from 'crypto';
import { TaskInterface } from './task-interface';

class Task implements TaskInterface {
  description: string;
  completed: boolean;
  taskId: string;

  constructor(description: string) {
    this.description = description;
    this.completed = false;
    this.taskId = randomUUID();
  }

  getDescription(): string {
    return this.description;
  }

  getId(): string {
    return this.taskId;
  }

  isCompleted(): boolean {
    return this.completed;
  }

  markAsCompleted(): void {
    this.completed = true;
  }
}

export default Task;
