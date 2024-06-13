const btnAddTask = document.querySelector("#submit");
const btnDel = document.querySelector("#delete");
const btnModify = document.querySelector("#update");
const rowDelete = document.querySelector("#dataTable");
const table = document.querySelector("#dataTable");

let timeSheets =
  localStorage.getItem("timeSheets") !== null
    ? JSON.parse(localStorage.getItem("timeSheets"))
    : [];

// Add Task

btnAddTask.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Btn Clicked");

  saveData();
  showData();

  document.getElementById("task").value = "";
  document.getElementById("timestart").value = "";
  document.getElementById("timestop").value = "";
  document.getElementById("comment").value = "";
  document.getElementById("thedate").value = "";
});

// Store Data in LocalStorage
function saveData() {
  timeSheets.push({
    // id: Math.floor(Math.random() * 10),
    task: document.getElementById("task").value,
    timeStart: document.getElementById("timestart").value,
    timeStop: document.getElementById("timestop").value,
    date: document.getElementById("thedate").value,
    comments: document.getElementById("comment").value,
    duration: timeDiff(),
  });

  localStorage.setItem("timeSheets", JSON.stringify(timeSheets));

  console.log(timeSheets);
}

// Table to shaoe data stored in LocalStorage

function showData() {
  tableData = "";
  if (timeSheets.length) {
    timeSheets.forEach((data, index) => {
      // data.duration = record.duration;

      tableData += "<td>" + [index + 1] + "</td>";
      tableData += "<td>" + data.task + "</td>";
      tableData += "<td>" + data.date + "</td>";
      tableData += "<td>" + data.timeStart + "</td>";
      tableData += "<td>" + data.timeStop + "</td>";
      tableData += "<td>" + data.duration + "</td>";
      tableData += "<td>" + data.comments + "</td>";
      tableData +=
        "<td><button onclick ='updateData(" +
        index +
        ")' class = 'btn btn-secondary p-0 Edit'>Edit </button><button onclick='deleteData()' class = 'btn btn-danger p-0 m-1 delete'>delete </button></td>";
      tableData += "</tr>";

      // rowDelete.addEventListener("click", (e) => {
      //   e.preventDefault();
      //   if (e.target === index) console.log("Delete");
      // });
    });
    document.querySelector("#dataTable tbody").innerHTML = tableData;
    // console.log(tableData);
  } else {
    console.log("Nothing Show");
  }
}

document.onload = showData();

// Time Difference

function timeDiff(record) {
  const start = document.getElementById("timestart").value;
  const end = document.getElementById("timestop").value;

  let ss = start.split(":"); // Start time
  let ll = end.split(":"); //Last time

  console.log(ss, ll);

  const stime = new Date(0, 0, 0, ss[0], ss[1]);
  const ltime = new Date(0, 0, 0, ll[0], ll[1]);
  console.log(stime);
  // console.log(ltime);
  const diff = (ltime.getTime() - stime.getTime()) / 1000;
  // console.log(diff);
  const hours = Math.floor(diff / (60 * 60));
  // console.log(hours);
  const minutes = Math.floor((diff % 3600) / 60);
  // console.log(min);
  let duration = `${hours}h : ${minutes}mins.`;
  return duration;
}

// Modify  Data;

function updateData(index) {
  btnAddTask.style.display = "none";
  btnModify.classList.remove("d-none");

  scrollTo(0, 0);

  let timeSheets =
    localStorage.getItem("timeSheets") !== null
      ? JSON.parse(localStorage.getItem("timeSheets"))
      : [];

  document.getElementById("task").value = timeSheets[index].task;
  document.getElementById("timestart").value = timeSheets[index].timeStart;
  document.getElementById("timestop").value = timeSheets[index].timeStop;
  document.getElementById("comment").value = timeSheets[index].comments;

  btnModify.addEventListener("click", () => {
    timeSheets[index].task = document.getElementById("task").value;
    timeSheets[index].timeStart = document.getElementById("timestart").value;
    timeSheets[index].timeStop = document.getElementById("timestop").value;
    timeSheets[index].comments = document.getElementById("comment").value;

    localStorage.setItem("timeSheets", JSON.stringify(timeSheets));
    showData();

    document.getElementById("task").value = "";
    document.getElementById("timestart").value = "";
    document.getElementById("timestop").value = "";
    document.getElementById("comment").value = "";
  });
}

// Delete
function deleteData(index) {
  if (timeSheets.length  &&
    confirm("Are you sure you want to delete this row!") {
    //console.log("Deleted")
    timeSheets.splice(index, 1);
    localStorage.setItem("timeSheets", JSON.stringify(timeSheets));
  }
}

// table.addEventListener("click", (event) => {
//   event.preventDefault();

//   if (event.target.classList.contains("delete") && timeSheets.length) {
//     console.log(event.target);
//     // event.target.parentElement.parentElement.remove();
//     // localStorage.removeItem("timeSheets");
//     timeSheets.splice(0, 1);
//     localStorage.setItem("questions", JSON.stringify(questions));
//   }
// });
