var factList = [
  "1 in 4 (24%) of L.A. County Households face food insecurity", 
  "75% of Angelenos who face food insecurity are low-income", 
  "As of 2025, 35% of low-income households experienced food insecurity", 
  "57% of Angelenos who face food insecurity are Hispanic/Latino", 
  "More than 2 in 5 CalFresh recipients experienced food insecurity", 
  "53% of Angelenos who face food insecurity are younger adults aged 18-40 years old"
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
