const stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  if (stock[itemName.toLowerCase()] && stock[itemName.toLowerCase()] > 0) {
    stock[itemName.toLowerCase()] -= 1;
  }
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  if (stock[itemName.toLowerCase()] != undefined) {
    console.log(`No more ${itemName} in stock`);
  } else {
    console.log(`Item ${itemName} is not offered`);
  }
  console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);
  if (stock[itemName.toLowerCase()]) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

let itemName = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone)"
);

processOrder(itemName, processPayment, processError);
