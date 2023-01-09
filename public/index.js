function getData() {
  // console.log("hai");
  fetch("http://localhost:5000/get-all-task")
    .then((r) => r.json())
    .then((data) => {
      // console.log(data);
      if (data.sucess) {
        // console.log(data.allTask);
        const { allTask } = data;
        // allTask.forEach((task) => {
        //   console.log(task.task_name);
        // });
        let newArr = allTask
          .map((task) => {
            return `<div class="list list1">
            <p class="para name">${task.task_name}</p>
            <ul class="para description">
              <li>${
                task.completed
                  ? `<strike>${task.task_descrip}</strike>`
                  : task.task_descrip
              }</li>
              <li>orange</li>
              <li>banana</li>
            </ul>
            <div class="btns">
              <button class="btn delbtn"><i class="fa-solid fa-trash"></i></button>
              <button class="btn editbtn">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              ${
                task.completed
                  ? ""
                  : "<button class='btn checkbtn'><i class='fa-solid fa-check'></i></button>"
              }
            </div>
          </div>`;
          })
          .join("");
        console.log(newArr);
        document.querySelector("#main").innerHTML = newArr;
      } else {
        alert(data.message);
      }
    });
}
// getData();

async function fetchData() {
  let { data } = await axios.get("http://localhost:5000/get-all-task");
  // console.log(data);
  if (data.sucess) {
    // console.log(data.allTask);
    const { allTask } = data;
    // allTask.forEach((task) => {
    //   console.log(task.task_name);
    // });
    let newArr = allTask
      .map((task) => {
        return `<div class="list list1">
        <p class="para name">${task.task_name}</p>
        <ul class="para description">
          <li>${
            task.completed
              ? `<strike>${task.task_descrip}</strike>`
              : task.task_descrip
          }</li>
          <li>orange</li>
          <li>banana</li>
        </ul>
        <div class="btns">
          <button class="btn delbtn"><i class="fa-solid fa-trash"></i></button>
          <button class="btn editbtn">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          ${
            task.completed
              ? ""
              : "<button class='btn checkbtn'><i class='fa-solid fa-check'></i></button>"
          }
        </div>
      </div>`;
      })
      .join("");
    console.log(newArr);
    document.querySelector("#main").innerHTML = newArr;
  } else {
    alert(data.message);
  }
}
fetchData();
