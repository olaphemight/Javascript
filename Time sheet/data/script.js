



const btnAddTask = document.querySelector("#submit");
const btnDel = document.querySelector("#delete");
const btnModify = document.querySelector("#update");
const rowDelete = document.querySelector("#dataTable");
let table = document.getElementById("showTable");
const download_btn = document.querySelector("#download_btn");

let timeSheets =
  localStorage.getItem("timeSheets") !== null
    ? JSON.parse(localStorage.getItem("timeSheets"))
    : [];

// Add Task

btnAddTask.addEventListener("click", (event) => {
  event.preventDefault();

  document.querySelector(".table").classList.remove("d-none");
  document.querySelector(".btn_download").classList.remove("d-none");
  
  saveData();
  showData();
  scrollTo({ dataTable, behavior: "smooth" });

  document.getElementById("task").value = "";
  document.getElementById("timestart").value = "";
  document.getElementById("timestop").value = "";
  document.getElementById("comment").value = "";
  document.getElementById("thedate").value = "";
});

// Store Data in LocalStorage
function saveData() {
  timeSheets.push({
    id: Math.floor(Math.random() * 100000),
    task: document.getElementById("task").value,
    timeStart: document.getElementById("timestart").value,
    timeStop: document.getElementById("timestop").value,
    date: document.getElementById("thedate").value,
    comments: document.getElementById("comment").value,
    duration: timeDiff(),
  });

  localStorage.setItem("timeSheets", JSON.stringify(timeSheets));
  // scrollTo(2, 0);

  console.log(timeSheets);
}

// Table to show data stored in LocalStorage

function showData() {
  tableData = "";
  if (timeSheets.length) {
    timeSheets.forEach((data, index) => {
      // data.duration = record.duration;

      tableData += "<tr>"
      tableData += "<td>" + data.id + "</td>";
      tableData += "<td>" + data.task + "</td>";
      tableData += "<td>" + data.date + "</td>";
      tableData += "<td>" + data.timeStart + "</td>";
      tableData += "<td>" + data.timeStop + "</td>";
      tableData += "<td>" + data.duration + "</td>";
      tableData += "<td>" + data.comments + "</td>";
      tableData += "<td><span><button onclick ='updateData(" +
        index +
        ")' class ='bi bi-pencil-fill text-secondary border-0 p-2 rounded-2  m-1 Edit'></button></span><button onclick='deleteData(" +
        index +
        ")' class = 'bi bi-trash3 text-danger p-2 fw-bold border-0 rounded-2  delete'></button></td>";
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

document.onload = show();



function show(){
  if(!timeSheets.length){
    document.querySelector(".table").classList.add("d-none");
    document.querySelector(".btn_download").classList.add("d-none");
  }else{
    showData();
  }
}



// Time Difference

function timeDiff(record) {
  const start = document.getElementById("timestart").value;
  const end = document.getElementById("timestop").value;

  
  let st = start.split(":"); // Start time
  let et = end.split(":"); //Last time

  

  const stime = new Date(0,0,0, st[0], st[1]);
  const ltime = new Date(0,0,0, et[0], et[1]);
  const diff = (ltime.getTime() - stime.getTime()) / 1000;
  const hours = Math.floor(diff / (60 * 60));
  const minutes = Math.floor((diff % 3600) / 60);

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
  if (
    timeSheets.length &&
    confirm("Are you sure you want to delete this row!")
  ) {
    // `<p class="alert alert-primary"> <p>`

    console.log("Deleted");
    timeSheets.splice(index, 1);
    localStorage.setItem("timeSheets", JSON.stringify(timeSheets));
    showData();
  }
}


function downloadCsv (csv, filename){
  let csvFile;
  let downloadLink;

  csvFile = new Blob([csv], {type: 'text/csv'});
  downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";

  document.body.appendChild(downloadLink);
  downloadLink.click();
}



function exportTable (filename){
let csv = [];
let rows = document.querySelectorAll("table tr");


for(let i = 0; i < rows.length; i++){
  let row = [], 
  cols = rows[i].querySelectorAll("td, th");
  for(let j=0; j < cols.length; j++){
    row.push(cols[j].innerText);
   
  }
  csv.push(row.join(","));

}



downloadCsv(csv.join("\n"), filename);
}



// document.querySelector(".Access").addEventListener('click',)

function displayMessage () {
  
  document.querySelector(".message").classList.remove("d-none");
  document.querySelector(".message").textContent = "You are not autorized!";
}


