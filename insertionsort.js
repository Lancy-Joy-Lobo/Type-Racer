var boxes = document.getElementsByClassName("box");

async function insertionSort(arr, n) {
//   console.log(arr);

  let i, key, j;
  for (i = 1; i < n; i++) {
    var h1 = boxes[i].style.height;
    key = arr[i];
    j = i - 1;
    await Sleep();
    boxes[i].style.backgroundColor = "red";
    while (j >= 0 && arr[j] > key) {
      boxes[i].style.backgroundColor = "red";
      boxes[j].style.backgroundColor = "red";
      await Sleep();
      boxes[j + 1].style.height = boxes[j].style.height;
      boxes[j + 1].style.backgroundColor = "yellow";
      await Sleep();
      //   boxes[j].style.backgroundColor = "#EAECEE";
      //   boxes[j + 1].style.backgroundColor = "#EAECEE";
      await Sleep();

      arr[j + 1] = arr[j];
      j = j - 1;
    }
    await Sleep();
    arr[j + 1] = key;
    boxes[j + 1].style.height = h1;
    // boxes[j + 1].style.backgroundColor = "#EAECEE";
    // boxes[i].style.backgroundColor = "#EAECEE";
    boxes[j + 1].style.backgroundColor = "yellow";
    boxes[i].style.backgroundColor = "yellow";
  }
}
