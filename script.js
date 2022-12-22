const form = document.querySelector("#form");
form.addEventListener("submit", async () => {
  const nama = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("textAreaExample1").value;
  const data = { nama, email, message };
  //   console.log(nama, email, message);
  fetch("http://wahil-api.vercel.app/v1/ContactMe/post/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((message) => {
      console.log(message);
    });
});
