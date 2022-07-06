var val = JSON.parse(localStorage.getItem("data"));
var mail = JSON.parse(localStorage.getItem("email"));
let com, obj;
for (var i = 0; i < val.length; i++) {
    if (val[i].email == mail) {
        com = val[i].contacts
    }
}

function onl() {
    for (var i = com.length - 1; i >= 0; i--) {
        holder.innerHTML += ` <div class="container cal  col-2 card mb-2 d-flex justify-content-around">
                <div class="fs-3 text-light">${com[i].name}</div>
                <p class="text-light">${com[i].phone}</p>
                <p class="text-light">${com[i].address}</p>
                <div class="container d-flex justify-content-end">
                    <div><button class="btn edit me-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='edit()'>Edit</button><button class="btn delete" onclick='del(${i})'>Del</button> </div>
                </div>
            </div>`
    }

}
const del = (index) => {
    let arr = com.filter((item, ind) => index != ind);
    com = arr;
    for (var i = 0; i < val.length; i++) {
        if (val[i].email == mail) {
            val[i].contacts = com;

        }
    }
    holder.innerHTML = "";
    onl()
    localStorage.data = JSON.stringify(val);

}
const edit = () => {
    obj = {
        name: nam.value,
        phone: ph.value,
        address: add.value
    }
}

function addNote() {

    obj = {
        name: nam.value,
        phone: ph.value,
        address: add.value
    }
    com.push(obj);
    holder.innerHTML = "";
    onl();
    for (var i = 0; i < val.length; i++) {
        if (val[i].email == mail) {
            val[i].contacts = com;
            console.log(val[i].notes);
        }
    }
    localStorage.data = JSON.stringify(val);
    nam.value = "";
    ph.value = "";
    add.value = "";
}