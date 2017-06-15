function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  var rank = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < rank.length; i++) {
   rank[i].innerHTML = (parseInt(rank[i].innerHTML) + n).toString();
  }
}
function deepestChild() {
  var array = document.querySelectorAll('#grand-node div');
  for (var i = 0; i < array.length; i++) {
    if (array[i].querySelector('div')===null) {
      return array[i];
    }
  }
}
