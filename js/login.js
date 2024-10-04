function getRandomGreeting() {
    var greetings = [
      "justin was here :D",
      "colby was here :P",
      "charlie was here :)",
      "welcome",
      "try out tortilla by clicking the sapling",
      "everything has been fixed!",
    ];
    var randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
  }
  
  document.getElementById("subtitle").innerText = getRandomGreeting();