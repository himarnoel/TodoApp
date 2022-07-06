function login() {

    let cal;
    let val = JSON.parse(localStorage.getItem("data"));
    if (em.value != "" && pas.value != "") {
        for (const k of val) {
            if (k["email"] == em.value && k['Password'] == pas.value) {
                location.href = "Dashboard.html";
                localStorage.email = JSON.stringify(em.value)
                console.log(k);
            } else {
                alert("Wrong username or password")
            }

        }
    }
    em.value = "";
    pas.value = "";
}