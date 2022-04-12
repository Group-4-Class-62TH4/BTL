var users = [
  {
    username: "ddphuong@gmail.com",
    password: "123",
    permission: "admin",
  },
  {
    username: "ncphong@gmail.com",
    password: "123",
    permission: "admin",
  },
  {
    username: "ntrungduc@gmail.com",
    password: "123",
    permission: "admin",
  },
  {
    username: localStorage.getItem('username'),
    password: localStorage.getItem('password'),
    permission: "admin",
  }
];
function Login() {
  event.preventDefault();
  var username = myForm.username.value;
  var password = myForm.password.value;

  var val = check_user(username, password, users);
  if (val != false) {
    var date = new Date();
    exp_date = date.getTime() + 10 * 24 * 60 * 60 * 1000;
    date.setTime(exp_date);
    document.cookie = "username=" + val.username + ";expires=" + date;
    document.cookie = "permission=" + val.permission + ";expires=" + date;
    if (val.permission == "admin") {
      location.href = "usersManage.html";
    }
  } else {
    alert("Vui long nhap lai Username hoac Password");
  }
}

function check_user(username, password, users) {
  for (i in users) {
    var user = users[i];
    if (user.username == username && user.password == password) {
      return user;
    }
  }
  return false;
}
