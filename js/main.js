let greetings = ["Buen dia", "Hola, como estas?", "🙌", "Buenas tardes", "Como estas?", "Un dia mas, Buenas"];
greetings.push("Buenas");

const showAlert = (Name) => {
    alert(greetings[Math.floor(Math.random() * (greetings.length))]+ " " + Name);  
}
showAlert("Fabriel , Lucas");


