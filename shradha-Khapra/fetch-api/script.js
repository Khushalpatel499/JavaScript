const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
//now we want to call api for data using fetch api

// let promise = fetch(URL);
// console.log(promise);
//fetching api is asynchronous work becuase may be api take some time so

const getFacts = async () => {
  console.log("getting data...");
  let response = fetch(URL);
  console.log(response);
  console.log(await response.status);
  //.json() is also asynchronous we await this also
  let data = await response.json();
  //this is usable data
  console.log(data);
  factPara.innerText = data[0].text;
};
//now do using promise chain

function getFacts() {
  fetch(URL)
    .then(response, () => {
      //we have to parse the data means change the format of data
      return respose.json();
    })
    .then((data) => {
      console.log(data);
      factPara.innerText = data[0].text;
    });
}

btn.addEventListener("click", getFacts);
