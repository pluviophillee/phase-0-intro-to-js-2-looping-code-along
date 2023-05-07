function writeCards(namesArray, eventName) {
    let messageArray = []
    for (let i = 0; i < namesArray.length; i++) {
      messageArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return messageArray;
  }
  
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

  function countdown(number) {
    let n = number;
    while (n >= 0) {
      console.log(n--);
    }
  }