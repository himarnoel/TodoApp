var val = JSON.parse(localStorage.getItem("data"));
let com, obj;
for (var i = 0; i < val.length; i++) {
    if (val[i].email == "olaniyi.emmanuel@lmu.ng") {
        com = val[i].notes
    }
}

function onl() {
    for (var i = 0; i < com.length; i++) {
        console.log(com[i].title);
        holder.innerHTML += `<div class="container cal bg-success col-2 card mb-2 d-flex justify-content-around">
            <div class="fs-3 text-light">${com[i].title}</div>
            <p class="text-light">${com[i].notes}</p>

            <div class="container  d-flex justify-content-end  ">
                <div><button class="btn edit me-3">Edit</button> <button class="btn delete">Del</button> </div>
            </div>
        </div>`
    }

}


function addNote() {
    obj = {
        title: title.value,
        notes: content.value,
    }
    com.push(obj);
    holder.innerHTML = "";
    for (var i = 0; i < com.length; i++) {
        console.log(com[i].title);
        holder.innerHTML += `<div class="container cal bg-success col-2 card mb-2 d-flex justify-content-around">
            <div class="fs-3 text-light">${com[i].title}</div>
            <p class="text-light">${com[i].notes}</p>

            <div class="container  d-flex justify-content-end  ">
                <div><button class="btn edit me-3">Edit</button> <button class="btn delete">Del</button> </div>
            </div>
        </div>`
    }


    title.value = "";
    content.value = "";
    for (var i = 0; i < val.length; i++) {
        if (val[i].email == "olaniyi.emmanuel@lmu.ng") {
            val[i].notes = com;
            console.log(val[i].notes);
        }
    }
    localStorage.data = JSON.stringify(val);
}