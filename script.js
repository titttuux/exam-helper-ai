function askAI() {
  const question = document.getElementById("question").value;
  const answerDiv = document.getElementById("answer");

  if (question.trim() === "") {
    answerDiv.innerHTML = "❗ Please enter a question.";
    return;
  }

  answerDiv.innerHTML = "🤖 Thinking...";

  setTimeout(() => {
    // Fake AI response
    answerDiv.innerHTML =
      "💡 Demo AI answer:<br><br>" +
      "Your question was: <b>" + question + "</b><br><br>" +
      "This is a sample answer. Later we can connect real AI!";
  }, 1000);
}
