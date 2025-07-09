let selectedTopic = "";

document.querySelectorAll(".opt-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".opt-btn").forEach(b => b.classList.remove("selected"));
    this.classList.add("selected");
    selectedTopic = this.textContent.trim();
  });
});

document.querySelector(".begin-btn").addEventListener("click", function () {
  if (!selectedTopic) {
    alert("Please select a topic!");
    return;
  }

  const redirectPage = selectedTopic === "HTML" ? "Html.html" : "css.html";
  window.location.href = redirectPage;
});
