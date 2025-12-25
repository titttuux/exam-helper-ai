async function askAI() {
  const question = document.getElementById("question").value;
  const answerDiv = document.getElementById("answer");

  if (question.trim() === "") {
    answerDiv.innerHTML = "❗ Please enter a question.";
    return;
  }

  answerDiv.innerHTML = "🤖 Thinking...";

  const API_KEY = "AlzaSyAld9j285BgrsAjklF8TySu9RH1lXiJl9Q";

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: question }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    answerDiv.innerHTML =
      data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error(error);
    answerDiv.innerHTML = "⚠️ Error connecting to AI.";
  }
}
