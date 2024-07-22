// Code your solutions in this file
function writeCards(names, eventName) {
    let thankYouMessages = [];
    names.forEach(name => {
      let message = `Thank you, ${name}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    });
    return thankYouMessages;
  }
  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }