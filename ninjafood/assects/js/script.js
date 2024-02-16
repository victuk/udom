document.getElementById('increaseBtn').addEventListener('click', increaseFontSize);
document.getElementById('decreaseBtn').addEventListener('click', decreaseFontSize);

function increaseFontSize() {
  var content = document.getElementById('content');
  var currentSize = parseInt(window.getComputedStyle(content).fontSize);
  var newSize = currentSize + 2;
  content.style.fontSize = newSize + 'px';
}

function decreaseFontSize() {
  var content = document.getElementById('content');
  var currentSize = parseInt(window.getComputedStyle(content).fontSize);
  var newSize = currentSize - 2;
  content.style.fontSize = newSize + 'px';
}
