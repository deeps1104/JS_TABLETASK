
let data1 = [];
if ((JSON.parse(localStorage.getItem("arr"))) !== undefined && (JSON.parse(localStorage.getItem("arr"))) !== null) {
  data1 = JSON.parse(localStorage.getItem("arr"))
}
function newdata() {
  let data = {}
  let val;
  var ele = document.getElementsByName('gender');
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      val = ele[i].value
    } else{
      val = ""
    }
  }
  let fname = document.getElementById("fname");
  let checkval = document.getElementById("check1")
  let contact = document.getElementById("contact");
  let email = document.getElementById("email");
  let birth = document.getElementById("birth");
  let gender = val;
  let message = document.getElementById("message");

  data = {

    id: parseInt(new Date().getTime().toString()),
    // checkval: checkval.checked,
    fname: fname.value,
    contact: contact.value,
    email: email.value,
    birth: birth.value,
    gender: val,
    message: message.value,

  }
  data1.push(data)
  localStorage.setItem("arr", JSON.stringify(data1))

  serial()
  tables()
  setData()
  fname.value = "";
  email.value = "";
  contact.value = "";
  birth.value = "";
  message.value = "";
  val = ""

}
tables()
serial()
onload = serial()
function setData() {
  localStorage.setItem("arr", JSON.stringify(data1));
};


function tables() {
  var table1 = '';
  if ((JSON.parse(localStorage.getItem("arr"))) !== undefined && (JSON.parse(localStorage.getItem("arr"))) !== null) {
    for (let i = 0; i < data1.length; i++) {
      table1 = table1 + `<tr style="height: 43px">
      <td style="display: none;">${data1[i].id}</td> 
      <td ><input type="checkbox" id="check1" onclick= "check(${data1[i].id})"/></td>
      <td>${data1[i].fname}</td>
      <td>${data1[i].contact}</td>
      <td>${data1[i].email}</td>
      <td>${data1[i].birth}</td>
      <td>${data1[i].gender}</td>
      <td>${data1[i].message}</td>
      <td><a class="editTable" data-bs-toggle="modal" data-bs-target="#updateform" onclick="editTable(${data1[i].id})"><i class="fa fa-pencil-square" aria-hidden="true" style="font-size:23px;color:green;"></i></a>&nbsp;
      <a><i class="fa fa-trash-o" aria-hidden="true" style="font-size:23px ;color:red;" onclick="deleteData(${data1[i].id})"></i></a></td>
      </tr>`
    }

  }
  document.getElementById("rows").innerHTML = table1 ;
}
function serial(){
  let  y = "";
  let m = []
  var data4 = JSON.parse(localStorage.getItem("arr"))
  if((data4!==null)&& (data4!==undefined)) {
    for(var i=0 ; i<data4.length;i++){
      m.push(i+1)
    }
    for (let j = 0; j< m.length; j++) {
      y =y+`<tr style="height: 43px">
          <td style="font-size:17px">${m[j]}</td>
      </tr>`
    }
    document.getElementById("tab1").innerHTML = y ;
}  

}




var tabid;
var update;
function editTable(id) {
  tabid = id
  data1 = JSON.parse(localStorage.getItem("arr"))
  if (data1 !== undefined && data1 !== null) {
    for (let i = 0; i < data1.length; i++) {
      if (data1[i].id == tabid) {
        update = data1[i];
      }
    }
    document.getElementById("newName").value = update.fname;
    document.getElementById("newContact").value = update.contact;
    document.getElementById("newEmail").value = update.email;
    document.getElementById("newBirth").value = update.birth;
    document.getElementById("newMessage").value = update.message;
  }
  var genVal = document.getElementsByName("newGender")
  for (let i = 0; i < genVal.length; i++) {
    if (update.gender === genVal[i].value) {
      genVal[i].setAttribute("checked", "true")
 
    } 
  }

}
function updateData() {
  let val;
  var ele = document.getElementsByName('newGender');
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      val = ele[i].value
    }
  }

  if (tabid !== undefined) {
    update = {
      id: tabid,
      fname: newName.value,
      contact: newContact.value,
      email: newEmail.value,
      birth: newBirth.value,
      gender: val,
      message: newMessage.value
    }
    if ((JSON.parse(localStorage.getItem("arr"))) !== undefined && (JSON.parse(localStorage.getItem("arr"))) !== null) {
      data1 = JSON.parse(localStorage.getItem("arr"))
      for (let i = 0; i < data1.length; i++) {
        if (parseInt(data1[i].id) === update.id) {
          data1[i] = update;
        }
      };
    }

    localStorage.setItem("arr", JSON.stringify(data1))
    location.reload();
  }
}

function deleteData(id) {
  data1 = JSON.parse(localStorage.getItem("arr"))
  for (let i = 0; i < data1.length; i++) {
    if ((data1[i].id) == id) {
      data1 = data1.filter(function (element) { return element.id !== id })
      localStorage.setItem("arr", JSON.stringify(data1))
      location.reload();
    }
  }

}

let arr2 = []
function check(id) {
  if (event.target.checked) {
    arr2.push(id)
  } else {
    arr2 = arr2.filter(function (element) { return element != id })
  }

}

function deleteBox() {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == arr2[i]) {
      data1 = data1.filter(function (element) { return element.id !== arr2[i] })
      localStorage.setItem("arr", JSON.stringify(data1))
      location.reload()
    }
  }

}


const dragArea = document.querySelector('#rows');
new Sortable(dragArea, {
  animation: 350,
  orderable: true,
  ghostClass: "ghost"

});







