import {
  initHomePage,
  onHeaderFormSubmit,
  onTaskListItem,
} from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', initHomePage);
refs.tasksList.addEventListener('click', onTaskListItem);
refs.headerForm.addEventListener('submit', onHeaderFormSubmit);
