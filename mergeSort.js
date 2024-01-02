async function merge(l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  var L = new Array(n1);
  var R = new Array(n2);

  for (var i = 0; i < n1; i++) L[i] = array[l + i];
  for (var j = 0; j < n2; j++) R[j] = array[m + 1 + j];

  var i = 0;
  var j = 0;
  var k = l;
  var boxes = document.getElementsByClassName("box");

  while (i < n1 && j < n2) {
    await Sleep();
    ChangeColor(boxes, k, "red");
    ChangeColor(boxes, m + 1 + j, "red");
    await Sleep();

    if (L[i] <= R[j]) {
      boxes[k].style.height = L[i] * 5 + "px";
      ChangeColor(boxes, k, "yellow");
      array[k] = L[i];
      i++;
      await Sleep();
      ChangeColor(boxes, k, "yellow");
    } else {
      array[k] = R[j];
      boxes[k].style.height = R[j] * 5 + "px";
      ChangeColor(boxes, k, "yellow");
      await Sleep();
      ChangeColor(boxes, k, "yellow");
      ChangeColor(boxes, m + 1 + j, "yellow");
      j++;
    }

    k++;
  }

  while (i < n1) {
    ChangeColor(boxes, k, "red");
    await Sleep();
    boxes[k].style.height = L[i] * 5 + "px";
    ChangeColor(boxes, k, "yellow");
    await Sleep();
    ChangeColor(boxes, k, "yellow");
    array[k] = L[i];

    i++;
    k++;
  }

  while (j < n2) {
    ChangeColor(boxes, k, "red");
    await Sleep();
    boxes[k].style.height = R[j] * 5 + "px";
    ChangeColor(boxes, k, "yellow");
    await Sleep();
    ChangeColor(boxes, k, "yellow");
    array[k] = R[j];

    j++;
    k++;
  }
}

async function mergeSort(l, r) {
  if (l >= r) {
    return;
  }
  var m = l + parseInt((r - l) / 2);

  await mergeSort(l, m);
  await mergeSort(m + 1, r);
  await merge(l, m, r);
}
