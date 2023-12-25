import TaskList from '../src/taskList';

test('TaskList should be add a task', () => {
  const taskList = new TaskList();
  taskList.addTask('Task A');
  taskList.addTask('Task B');
  expect(taskList.getTasks().length).toBe(2);
});

test('should be return the task with the id', () => {
  const taskList = new TaskList();
  const taskA = taskList.addTask('Task A');
  const id = taskA.getId();
  const retrievedTask = taskList.getTaskById(id);
  expect(retrievedTask?.getId()).toBe(id);
  expect(retrievedTask?.getDescription()).toBe('Task A');
  retrievedTask?.markAsCompleted();
  expect(retrievedTask?.isCompleted()).toBe(true);
});

test('should delete the task with the send id', () => {
  const taskList = new TaskList();
  const taskA = taskList.addTask('Task A');
  const id = taskA.getId();
  expect(taskList.getTaskById(id)).toBeDefined();
  taskList.deleteTask(id);
  expect(taskList.getTaskById(id)).toBeUndefined();
});
