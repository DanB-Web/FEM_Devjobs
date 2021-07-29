//TRANSITION ON MODE CHANGE
export const trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
  document.documentElement.classList.remove('transition')}, 500);
};