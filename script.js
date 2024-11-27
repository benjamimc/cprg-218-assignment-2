const buttons = document.querySelectorAll(".menu-btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active-btn"));
    this.classList.add("active-btn");
  });
});

function showSection(sectionId) {
    const sections = ["foundations", "specialization", "entrepreneurship", "globalevolution"];
    sections.forEach(id => {
        document.getElementById(id).style.display = id === sectionId ? "block" : "none";
    });
}

FoundationsBTN.addEventListener("click", () => showSection("foundations"));
SpecializationBTN.addEventListener("click", () => showSection("specialization"));
EntrepreneurshipBTN.addEventListener("click", () => showSection("entrepreneurship"));
GlobalEvolutionBTN.addEventListener("click", () => showSection("globalevolution"));
