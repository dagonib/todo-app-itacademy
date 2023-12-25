import Task from '../src/task';

test('task should be created with description', () => {
  const task = new Task('Task example');
  expect(task.getDescription()).toBe('Task example');
  expect(task.isCompleted()).toBe(false);
  expect(task.getId()).toBeTruthy();
});

test('task should be marked as completed', () => {
  const task = new Task('Task example');
  task.markAsCompleted();
  expect(task.isCompleted()).toBe(true);
});
