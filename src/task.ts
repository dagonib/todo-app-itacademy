import { randomUUID } from 'crypto';

interface TaskInterface {
  description: string;
  completed: boolean;
  id: string;
}

class Task implements TaskInterface {
  description: string;
  completed: boolean;
  id: string;

  constructor(description: string) {
    this.description = description;
    this.completed = false;
    this.id = randomUUID();
  }

  getDescription(): string {
    return this.description;
  }

  getId(): string {
    return this.id;
  }

  isCompleted(): boolean {
    return this.completed;
  }

  markAsCompleted(): void {
    this.completed = true;
  }
}

export default Task;
