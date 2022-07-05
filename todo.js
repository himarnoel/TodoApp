// let val = JSON.parse(localStorage.getItem("data"));
// let moc, obj;
// for (var i = 0; i < val.length; i++) {
//     if (val[i].notes == "") {
//         moc = val[i].todo
//     }

// }function onl() {
//     for (var i = 0; i < moc.length; i++) {
//         console.log(moc[i]);
//         poxi.innerHTML += `<div class="task d-flex justify-content-around align-items-center mx-auto mb-4 mt-4 ">
//         <p>${moc[i].obj}</p>
//         <div> <button class="btn edit me-3">Edit</button> <button class="btn delete">Delete</button></div>
//     </div>`
//     }

// }



// function add() {
//     obj = [inp.value];
//     moc.push(obj);
//     poxi.innerHTML = "";
//     for (var i = 0; i < moc.length; i++) {
//         // console.log(moc[i]);
//         poxi.innerHTMl += `<div class="task d-flex justify-content-around align-items-center mx-auto mb-4 mt-4 ">
//         <p>${moc[i].obj}</p>
//         <div> <button class="btn edit me-3">Edit</button> <button class="btn delete">Delete</button></div>
//     </div>`
//     console.log(obj)
//     }

//     for (let i = 0; i < val.length; i++) {
//         if (val[i].notes == "") {
//             val[i].todo = moc;
//             console.log(val[i].todo);
//         }
//     }
//     localStorage.data = JSON.stringify(val);
// }