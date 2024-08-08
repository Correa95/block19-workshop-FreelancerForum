const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const body = document.querySelector("body");
body.innerHTML = "Freelance Forum";
body.style.width = "700px";
body.style.height = "700px";
body.style.border = "2px,solid,red";

const h2 = document.createElement("h2");
h2.innerHTML = body.appendChild(h2);
h2.innerHTML = "Available freelancer";

function calcAveragePrice() {
  const price = freelancers.flatMap((free) => free.price);
  const averaPrice = price.reduce((acc, cur) => acc + cur, 0) / 8;
  console.log(averaPrice);
  const h1 = document.createElement("h1");
  h1.innerHTML = body.appendChild(h1);
  h1.innerHTML = `The average starting price is $${averaPrice}.`;
  return averaPrice;
}
calcAveragePrice();

function renderFreelancer() {
  const body = document.querySelector("body");
  body.innerHTML = `<tr>
  <th>name</th>
  <th>Ocupation</th>
  <th>Starting Price</th>
  </tr>`;

  body.forEech((freelancer) => {
    const tableRow = document.createElement("tr");
    const tableData = document.createElement("td");
    tableData.textContent = freelancer.name;

    const tableOcupation = document.createElement("td");
    tableOcupation.textContent = freelancer.occupation;

    const tablePrice = document.createElement("td");
    tablePrice.classList.add("price");
    tablePrice.textContent = freelancer.price;

    tableRow.appendChild(tableData);
    tableRow.appendChild(tableOcupation);
    tableRow.appendChild(tablePrice);
  });
}
renderFreelancer();
