const ipName = document.getElementById("ip-name").value;
const ipDay = document.getElementById("ip-day").value;
const ipPeople = document.getElementById("ip-people").value;
const ipPhoneNumber = document.getElementById("ip-phone-number").value;
const ipHour = document.getElementById("ip-hour").value;
// const table = document.getElementById("myTable");

// const row = table.insertRow(0);
// const cell1 = row.insertCell(0);
// const cell2 = row.insertCell(1);
// const cell3 = row.insertCell(2);
// const cell4 = row.insertCell(3);
// const cell5 = row.insertCell(4);
// const cell6 = row.insertCell(5);
document.getElementById('confirm').onclick = function addRow(){
    // const listData = [];
    const row = [];
    row.push(ipName);
    row.push(ipPhoneNumber);
    row.push(ipHour);
    row.push(ipDay);
    row.push(ipPeople);
    // listData.push(row);
    // console.log(listData);
    return row;

}
//     cell1.innerHTML = table.rows.length + 1;
//     cell2.innerHTML = ipName;
//     cell3.innerHTML = ipPhoneNumber;
//     cell4.innerHTML = ipHour;
//     cell5.innerHTML = ipDay;
//     cell6.innerHTML = "Delivered";