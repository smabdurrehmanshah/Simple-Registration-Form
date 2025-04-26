const form = document.getElementById('form');
const tableBody = document.getElementById('table-body');
const btnElement = document.getElementById('btn');
const records = [];
let count = 100;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const record = {
    id: 'A' + count++,
    firstName: event.target.fname.value,
    lastName: event.target.lname.value,
    phoneNo: event.target.phoneNo.value,
    email: event.target.email.value,
    password: event.target.password.value
  };

  records.push(record);
  event.target.reset();

  alert("Your Registration Form is Submitted Successfully!")
});

btnElement.addEventListener('click', () => {
  tableBody.innerHTML = "";

  for(let i=0; i<records.length; i++) {
    const newRow = document.createElement('tr');
  
    const cell1 = document.createElement('td');
    cell1.textContent = records[i].id;
  
    const cell2 = document.createElement('td');
    cell2.textContent = records[i].firstName;
  
    const cell3 = document.createElement('td');
    cell3.textContent = records[i].lastName;
  
    const cell4 = document.createElement('td');
    cell4.textContent = records[i].phoneNo;
  
    const cell5 = document.createElement('td');
    cell5.textContent = records[i].email;
  
    const cell6 = document.createElement('td');
    cell6.textContent = records[i].password;
  
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell5);
    newRow.appendChild(cell6);
  
    tableBody.appendChild(newRow);
  }
});

