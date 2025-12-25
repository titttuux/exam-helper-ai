function askAI() {
  const question = document.getElementById("question").value;
  const answerDiv = document.getElementById("answer");

  if (question.trim() === "") {
    answerDiv.innerHTML = "❗ Please enter a question.";
    return;
  }

  answerDiv.innerHTML = "🤖 Thinking...";

  // Temporary fake AI response
  setTimeout(() => {
    answerDiv.innerHTML =
      "This is a demo response.<br><br>" +
      "Your question was:<br><b>" + question + "</b><br><br>" +
      "Next step: connect real AI.";
  }, 1000);
}
