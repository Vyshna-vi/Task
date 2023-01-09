let form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let taskName = document.querySelector("#taskname").value;
  console.log(taskName);
  let taskDescrip = document.querySelector("#taskdescrip").value;
  console.log(taskDescrip);
});
