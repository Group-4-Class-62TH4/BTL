var user = {};
var arr = ["userName", "passWord", "email", "link"];
var listAccount = JSON.parse(localStorage.getItem("listUser"))
  ? JSON.parse(localStorage.getItem("listUser"))
  : [];
var listAccountRemove =
  localStorage.getItem("listRemove") != ""
    ? JSON.parse(localStorage.getItem("listRemove"))
    : localStorage.setItem("listRemove", [[]]);

var listAccountEdit =
  localStorage.getItem("listEdit") != ""
    ? JSON.parse(localStorage.getItem("listEdit"))
    : localStorage.setItem("listEdit", [[]]);
var handleIndexEdit = 0;

window.onload = function()
    {
    localStorage.setItem("listUser",JSON.stringify([]))
    localStorage.setItem("listEdit",JSON.stringify([]))
    localStorage.setItem("listRemove",JSON.stringify([]))
    };

$(document).ready(function () {
  $("#add").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var pass = $("#pass").val();
    var number = $("#number").val();
    if(name == "" || email == "" || pass == "" || number == ""){
      alert("Please fill in all information")
    }else{
      listAccount.push({
        id: JSON.parse(localStorage.getItem("listUser"))
          ? JSON.parse(localStorage.getItem("listUser")).length
          : 0,
        userName: $(".inputTable").eq(0).val(),
        email: $(".inputTable").eq(1).val(),
        passWord: $(".inputTable").eq(2).val(),
        link: $(".inputTable").eq(3).val(),
      });
      localStorage.setItem("listUser", JSON.stringify(listAccount));
      render();
      $("#name").val("");
      $("#email").val("");
      $("#pass").val("");
      $("#number").val("");
    }
  
  });
  $("#delete").click(function () {
    console.log("ok");
  });

  $("#update").click(function () {
    listAccountEdit.push({
      id: handleIndexEdit,
      userName: $(".inputTable").eq(0).val(),
      email: $(".inputTable").eq(1).val(),
      passWord: $(".inputTable").eq(2).val(),
      link: $(".inputTable").eq(3).val(),
    });
    localStorage.setItem("listEdit", JSON.stringify(listAccountEdit));
    console.log(handleIndexEdit);
    // localStorage.setItem("listUser", JSON.stringify(listAccount));
    render();
  });
  $("#reset").click(function () {
    localStorage.setItem("listRemove", "[]");
    render();
  });

  render();
});
const deleteFunction = (index) => {
  listAccountRemove.push(index);
  console.log(listAccountRemove);
  localStorage.setItem("listRemove", JSON.stringify(listAccountRemove));
  render();
};
const updateFunction = (index, indexEdit) => {
  handleIndexEdit = indexEdit;
  $(".inputTable")
    .eq(0)
    .val(JSON.parse(localStorage.getItem("listUser"))[index].userName);
  $(".inputTable")
    .eq(1)
    .val(JSON.parse(localStorage.getItem("listUser"))[index].email);
  $(".inputTable")
    .eq(2)
    .val(JSON.parse(localStorage.getItem("listUser"))[index].passWord);
  $(".inputTable")
    .eq(3)
    .val(JSON.parse(localStorage.getItem("listUser"))[index].link);
};
function render() {
  $("#ok").html("");
  var lis = [
    ...new Map(
      JSON.parse(localStorage.getItem("listUser"))
        .concat(JSON.parse(localStorage.getItem("listEdit")))
        .map((item) => [item.id, item])
    ).values(),
  ];
  const cobra = lis.map((ele, i) => {
    if (
      localStorage.getItem("listRemove") != ""
        ? !JSON.parse(localStorage.getItem("listRemove")).includes(ele.id)
        : JSON.parse(localStorage.getItem("listUser"))
    ) {
      return ` 
      <div class="content">${
        [
          ...new Map(
            JSON.parse(localStorage.getItem("listUser"))
              .concat(JSON.parse(localStorage.getItem("listEdit")))
              .map((item) => [item.id, item])
          ).values(),
        ][i].userName
      }</div>
      <div class="content">${
        [
          ...new Map(
            JSON.parse(localStorage.getItem("listUser"))
              .concat(JSON.parse(localStorage.getItem("listEdit")))
              .map((item) => [item.id, item])
          ).values(),
        ][i].passWord
      }</div>
      <div class="content">${
        [
          ...new Map(
            JSON.parse(localStorage.getItem("listUser"))
              .concat(JSON.parse(localStorage.getItem("listEdit")))
              .map((item) => [item.id, item])
          ).values(),
        ][i].email
      }</div>
      <div class="content">${
        [
          ...new Map(
            JSON.parse(localStorage.getItem("listUser"))
              .concat(JSON.parse(localStorage.getItem("listEdit")))
              .map((item) => [item.id, item])
          ).values(),
        ][i].link
      }</div> 
      <button class="content delete" style="cursor:pointer;border:none;width:100px" onclick='deleteFunction(${i})'><i class="fa-solid fa-trash" style="font-size:18px"></i></button> 
      <button class="content update"  style="cursor:pointer;border:none;width:100px;margin-left:-50px"  onclick='updateFunction(${i},${
        ele.id
      })'><i class="fa-solid fa-pen" style="font-size:18px"></i></button> `;
    }
  });
  $("#ok").append(cobra);
}

