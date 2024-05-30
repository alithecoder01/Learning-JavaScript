// Inputs
const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const peopleInput = document.getElementById("numberOfPeople");
const billTotal = document.getElementById("perPersonTotal");

//Num of people
let numberOfPeople = Number(peopleInput.textContent);

// Bill
const calculateBill = () => {
  bill = Number(billInput.value);
  tip = Number(tipInput.value) / 100;
  bill = bill * tip + bill;
  bill = bill / numberOfPeople;
  billTotal.innerText = '$'+bill.toFixed(2);
};

// Increse people
const increasePeople = () => {
  numberOfPeople += 1;
  peopleInput.innerText = numberOfPeople;
  tip = Number(tipInput.value) / 100;
  bill = (bill * tip) + bill;
  bill = bill / numberOfPeople;
  billTotal.innerText =bill;
};
// Decrease people
const decreasePeople = () => {
  if (numberOfPeople > 1) {
    numberOfPeople -= 1;
    peopleInput.innerText = numberOfPeople;
    tip = Number(tipInput.value) / 100;
    bill = bill * tip + bill;
    bill = bill / numberOfPeople;
    billTotal.innerText = '$'+bill.toFixed(2);
  }
};
