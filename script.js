const studentName = document.getElementById("studentName");
const studentScore = document.getElementById("studentScore");
const subjectInput = document.getElementById("subjectInput");
const subjectSubmit = document.getElementById("subjectSubmit");
const subjectDisplay = document.getElementById("subjectDisplay");
const submitScore = document.getElementById("submitScore");
const inputList = document.getElementById("inputList");
const sortedList = document.getElementById("sortedList");
const sortBtn = document.getElementById("sortBtn");
const clearBtn = document.getElementById("clearBtn");
const printBtn = document.getElementById("printBtn");
let studentArray = JSON.parse(localStorage.getItem("myStudents")) || [];

renderSortList();

function renderList() {
  const inputName = studentName.value.trim();
  const inputScore = Number(studentScore.value);

  if (inputName === "") {
    alert("Please input student's name and score");
    return;
  } else {
    // const formattedName =
    //   inputName.charAt(0).toUpperCase() + inputName.slice(1).toUpperCase();

    studentArray.push({
      name: inputName,
      score: inputScore,
    });
  }

  localStorage.setItem("myStudents", JSON.stringify(studentArray));

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
  studentName.placeholder = "Next student...";
  studentName.focus();
}

function sortArray() {
  studentArray.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    }
    return a.name.localeCompare(b.name);
  });
}

function displaySubject() {
  subjectDisplay.textContent = "";

  const subjectName = subjectInput.value.trim();
  const subjectCon = document.createElement("p");

  subjectCon.classList.add("subject_con");
  subjectCon.textContent = subjectName;

  subjectDisplay.appendChild(subjectCon);
  subjectInput.value = "";
}

function renderSortList() {
  sortedList.textContent = "";

  const listHead = document.createElement("div");
  const headName = document.createElement("p");
  const headScore = document.createElement("p");

  listHead.classList.add("list_head");
  sortedList.appendChild(listHead);
  headName.textContent = "Name";
  headScore.textContent = "Score";
  listHead.appendChild(headName);
  listHead.appendChild(headScore);

  const listBody = document.createElement("div");
  listBody.classList.add("list_body");
  sortedList.appendChild(listBody);

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
}

subjectSubmit.addEventListener("click", () => {
  displaySubject();
});

submitScore.addEventListener("click", () => {
  renderList();
});

studentScore.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    renderList();
  }
});

sortBtn.addEventListener("click", () => {
  sortArray();
  renderSortList();
});

clearBtn.addEventListener("click", () => {
  confirm(
    "Are you sure you want to delete all student records? This cannot be undone.",
  );
  if (confirm) {
    studentArray = [];
    inputList.textContent = ''
    renderSortList();
    localStorage.setItem("myStudents", JSON.stringify(studentArray));
  }
});
