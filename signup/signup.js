let student = [];

function getPreviousValues() {
    if (localStorage.data) {
        student = JSON.parse(localStorage.data);
    }
}

function store() {

    let fn = fname.value;
    let ln = lname.value;
    let em = email.value;
    let pas = pass.value;

    let obj = {
        firstname: fname.value,
        Lastname: lname.value,
        email: email.value,
        todo: [],
        notes: [],
        contacts: [],
        Password: pass.value
    }

    student.push(obj);
    localStorage.data = JSON.stringify(student)
    location.href = "index.html"

}