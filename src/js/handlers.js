import { saveTask } from './local-storage-api';

export function onHeaderFormSubmit(e) {
  e.preventDefault();
  const { taskName, taskDescription } = e.target.elements;
  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();
  if (!taskNameValue || !taskDescriptionValue) {
    return;
  }
  const task = [taskNameValue, taskDescriptionValue];
  saveTask(task);
}
