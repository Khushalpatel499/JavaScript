const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select"); // dropdown all select
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    console.log(currCode, countryList[currCode]);
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name == "from" && currCode == "USD") {
      newOption.selected = "selected";
    } else if (select.name == "to" && currCode == "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

//now want to change flage also
const updateFlag = (element) => {
  console.log(element);
  //extract currency code.
  let currCode = element.value;
  //now for country code.
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  //we have to go to parent of select
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

//when first time document load then in starting we want to show curr status(means we default set 1 value so and this value is 80 inr but we want that value is also come from the api which is 80.343) so create another function

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal == "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  console.log(fromCurr.value, toCurr.value);
  //now gonna create a url
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  console.log(rate);

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value}=${finalAmount}${toCurr.value}`;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault(); // the default behaviour of form is when it submit it refresh in link some think see ,now every work is done by ours
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
