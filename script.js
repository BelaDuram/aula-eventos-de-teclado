const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkMeusDados = document.getElementById("link-perfil-dados");

document.addEventListener("keyup", (event)=> {
    if (event.code == "Escape") {
        navSecundaria.style.display = "none"
    }

    if (event.code == "Didit1") {
        if (navSecundaria.style.display == "block") {
            linkMeusDados.click()
    } else {
        navSecundaria.style.display = "block";
    }
};
})
