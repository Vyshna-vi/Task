const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
async function getOneTask() {
  let res = await axios.get("http://localhost:5000/get-one-task/" + id);
  console.log(res.data);
  if (res.data.sucess) {
    document.querySelector("#taskname").value = res.data.Task.task_name;
    document.querySelector("#taskdescrip").value = res.data.Task.task_descrip;
  }
}
getOneTask();
