const faqsQuestionsBox = document.querySelectorAll(".faqs-question");

faqsQuestionsBox.forEach((box, index) => {
  box.addEventListener("click", () => {
    var faqsDescription = document.getElementsByClassName(
      "faqs-question-description"
    );
    var faqsIcon = document.getElementsByClassName("faqs-icon");
    if (faqsDescription[index].style.display === "none") {
      faqsDescription[index].style.display = "inline";
      faqsIcon[index].src = "./assets/images/icon-minus.svg";
    } else {
      faqsDescription[index].style.display = "none";
      faqsIcon[index].src = "./assets/images/icon-plus.svg";
    }
  });
});
