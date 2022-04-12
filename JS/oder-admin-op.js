const table = document.getElementById("myTable");
const listData = localStorage.getItem("data").split(",");
var listRows = [];
var listRow = [];
var i=0;
while (i < listData.length) {
    listRow.push(listData[i]);
    if((i+1)%5 == 0) {
        listRows.push(listRow)
        listRow = [];
    }
    i++;
}
console.log(listRows)
for(var j = 0; j<listRows.length; j++) {
    const row = table.insertRow(table.length);
    row.insertCell(0).innerHTML = j+1;
    row.insertCell(1).innerHTML = listRows[j][0];
    row.insertCell(2).innerHTML = listRows[j][1];
    row.insertCell(3).innerHTML = listRows[j][2];
    row.insertCell(4).innerHTML = listRows[j][3];
    row.insertCell(5).innerHTML = listRows[j][4];

}