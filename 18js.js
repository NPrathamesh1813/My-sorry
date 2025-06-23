const friendMessages = [
  "tu onlin hai?",
  "mai bhi online hu",
  "Tu agar jo fine hai?",
  "Toh mai bhi aur fine hu",
  "Tera status update, padh ke maine dekha",
  "Yeh line toh teri nahi",
  "Ummhmm umhm",
  "Toh kidhar se tu chepa?",
  "Abe teri frind list toh mere se bhi lambi hai",
  "Kbse teri frist language anrezi hai",
  "Mere chat kareply abh tak diya nhi",
  "Kispe laga pada hai, tu aaj bhi sudhra nhi",
  "Fir bhi maine like kiya tere comment pe..",
  "Mere comment ka bhi samajh sentment re",
  " SORRY For my spelling mistek SORRY . say ok if you forgiv me ",
  ". .... ...",
];

let currentStep = 0;

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const text = input.value.trim();

  if (text !== "") {
    // Add user's message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.textContent = text;
    chatBox.appendChild(userMessage);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Add friend's next message after delay
    if (currentStep < friendMessages.length - 1) {
      setTimeout(() => {
        currentStep++;
        const friendMessage = document.createElement("div");
        friendMessage.classList.add("message", "friend");
        friendMessage.textContent = friendMessages[currentStep];
        chatBox.appendChild(friendMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 1000);
    }
  }
}
