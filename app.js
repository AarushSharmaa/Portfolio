var toggleTheme = document.querySelector(".modeChange");

function changeTheme() {
    //console.log("button is clicked");
    if (toggleTheme.textContent === "Dark") {
        toggleTheme.textContent = "Normal";
        document.body.style.backgroundColor = "whitesmoke";
    } else {
        toggleTheme.textContent = "Dark";
        document.body.style.backgroundColor = "white";
    }
}
toggleTheme.addEventListener("click", changeTheme)