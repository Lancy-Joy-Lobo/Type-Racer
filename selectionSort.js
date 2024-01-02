async function SelectionSort() {
  var boxes = document.getElementsByClassName("box");

  for (var i = 0; i <= array.length - 1; i++) {
    var min = i;

    for (var j = i + 1; j < array.length; j++) {
      ChangeColor(boxes, min, "red");
      ChangeColor(boxes, j, "red");

      await Sleep();

      if (array[min] > array[j]) {
        ChangeColor(boxes, min, "#EAECEE");
        min = j;
        ChangeColor(boxes, min, "red");
      } else {
        ChangeColor(boxes, j, "#EAECEE");
      }
      // await Sleep();
    }

    if (min == i) {
      ChangeColor(boxes, i, "yellow");
    } else {
      var temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      await swapDivsForSelectionSort(boxes, i, min);
    }
  }
}

async function swapDivsForSelectionSort(boxes, i, min) {
  var temp = boxes[i].style.height;
  boxes[i].style.height = boxes[min].style.height;
  boxes[min].style.height = temp;
  ChangeColor(boxes, i, "yellow");
  ChangeColor(boxes, min, "#EAECEE");
}
