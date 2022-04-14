const dataList = [];
function addRow(){
    const ipName = $("#ip-name").val();
    const ipDay = $("#ip-day").val();
    const ipPeople = $("#ip-people").val();
    const ipPhoneNumber = $("#ip-phone-number").val();
    const ipHour = $("#ip-hour").val();
    const row = [];
    row.push(ipName);
    row.push(ipPhoneNumber);
    row.push(ipHour);
    row.push(ipDay);
    row.push(ipPeople);
    if(ipName == "" || ipDay == "" || ipPeople == "" || ipPhoneNumber == "" || ipHour == ""){
        alert("Please fill in all information")
    }
    else{
        dataList.push(row);
        console.log(row);
        console.log(dataList);
        localStorage.setItem('data', dataList);
        // JSON.stringify(dataList)
        $("#ip-name").val('');
        $("#ip-day").val('');
        $("#ip-people").val('');
        $("#ip-phone-number").val('');
        $("#ip-hour").val('');
        alert("successful table reservation ")
    }
}