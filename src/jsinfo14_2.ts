const elements = document.querySelectorAll('ul > li:last-child');

for (const elem of elements) {
  alert(elem.innerHTML);
}