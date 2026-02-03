const studentName = document.getElementById("studentName");
const studentScore = document.getElementById("studentScore");
const submitScore = document.getElementById("submitScore");
const inputList = document.getElementById("inputList");
const studentArray = [];

function addAndSort() {
  const inputName = studentName.value.trim();
  const inputScore = Number(studentScore.value);

  if (inputName === "") {
    alert("Please input student's name and score");
    return;
  } else {
    studentArray.push({
      name: inputName,
      score: inputScore,
    });
  }
  console.log(studentArray);
  inputList.textContent = "";
  const listHead = document.createElement("div");
  const headName = document.createElement("p");
  const headScore = document.createElement("p");

  listHead.classList.add("list_head");
  inputList.appendChild(listHead);
  headName.textContent = "Name";
  headScore.textContent = "Score";
  listHead.appendChild(headName);
  listHead.appendChild(headScore);

  const listBody = document.createElement("div");
  listBody.classList.add("list_body");
  inputList.appendChild(listBody);

  studentArray.forEach((list) => {
    const listWrap = document.createElement("div");
    listWrap.classList.add("list_wrap");
    listBody.appendChild(listWrap);

    const listName = document.createElement("p");
    listName.textContent = list.name;
    listWrap.appendChild(listName);

    const listScore = document.createElement("p");
    listScore.textContent = list.score;
    listWrap.appendChild(listScore);
  });

  studentName.value = "";
  studentScore.value = "";
}

submitScore.addEventListener("click", () => {
  addAndSort();
});
