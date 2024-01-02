var array;
var speed = 100;
var isen = true;
var arraySize;

function randomIntArrayInRange(arraySize) {
  array = Array.from(
    { length: arraySize },
    () => Math.floor(Math.random() * (120 - 10 + 1)) + 1
  );
  //   array = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5];

  //once array is generate set the default size of slider to array size
  //   console.log(speed);
  document.getElementById("sizeSlider").value = arraySize;
}

function GenerateDivs(arraySize, array) {
  //creating horizontal  line

  //get the object and set its innerhtml to null
  const boxWrapper = document.getElementById("DivContainer");
  boxWrapper.innerHTML = "";

  //create the bars
  var i = 0;
  while (i < arraySize) {
    const box = document.createElement("div");
    box.style.height = array[i] * 5 + "px";
    box.style.width = 20 + "px";
    box.style.backgroundColor = "#EAECEE";

    box.style.border = "1px solid black";
    box.style.borderRadius = "0 0 50px 50px";
    // box.style.transform = "rotate(180deg)";
    box.classList.add("box");
    boxWrapper.appendChild(box);
    i += 1;
  }
}

async function Sleep(givenSpeed = 0) {
  if (givenSpeed != 0) {
    speed = givenSpeed;
  }
  await new Promise((resolve) => setTimeout(resolve, speed));
}

function ChangeColor(box, i, color) {
  box[i].style.backgroundColor = color;
}

async function SortArray(i) {
  DisableFields(true);
  if (i == 1) {
    await BubbleSort();
  }
  if (i == 2) {
    await mergeSort(0, array.length - 1);
  }
  if (i == 3) {
    await insertionSort(array, array.length);
  }
  if (i == 4) {
    await SelectionSort();
  }
  DisableFields(false);
}

function DisableFields(isEnabled) {
  //   console.log(isEnabled);
  document.getElementById("sizeSlider").disabled = isEnabled;
  var buttons = document.querySelectorAll('input[type="button"]');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = isEnabled;
    buttons[i].style.backgroundColor = isEnabled ? "grey" : "#1a1e1c";
    buttons[i].style.cursor = isEnabled ? "not-allowed" : "pointer";
  }
}

function ApplySpeed(val) {
  speed = 80 - val;

  //   console.log("val", val, "speed", speed);
}

function Start(val = 0) {
  if (val == 0) {
    arraySize = Math.floor(Math.random() * 100);
  } else {
    arraySize = val;
  }
  randomIntArrayInRange(arraySize);
  //create divs and generate bars
  GenerateDivs(arraySize, array);
}
