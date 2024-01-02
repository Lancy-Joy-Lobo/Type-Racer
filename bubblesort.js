async function BubbleSort() {
  //disable all the buttons

  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length - 1; i++) {
    for (var j = 0; j < boxes.length - i - 1; j++) {
      //give color to first two bars while comparing
      ChangeColor(boxes, j, "yellow");
      ChangeColor(boxes, j + 1, "yellow");
      await Sleep();
      if (array[j + 1] < array[j]) {
        swapDivs(boxes, j, array);
      }
      //restore the color of first bar
      ChangeColor(boxes, j, "#EAECEE");
    }
  }
  ChangeColor(boxes, 0, "yellow");
}

function swapDivs(boxes, j, array) {
  var temp = boxes[j].style.height;
  boxes[j].style.height = boxes[j + 1].style.height;
  boxes[j + 1].style.height = temp;
  ChangeColor(boxes, j, "grey");
  var arTemp = array[j];
  array[j] = array[j + 1];
  array[j + 1] = arTemp;
}
