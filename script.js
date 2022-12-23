const form = document.querySelector("#form");
form.addEventListener("submit", async () => {
  const nama = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("textAreaExample1").value;
  const SuccessAlert = document.getElementById("SuccessAlert");
  const data = { nama, email, message };
  //   console.log(nama, email, message);
  fetch("https://wahil-api.vercel.app/v1/ContactMe/post/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((message) => {
      if (message.Success == "Post data success!") {
        SuccessAlert.classList.remove("d-none");
      }
    });
});
