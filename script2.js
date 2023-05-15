const linkPagPrincipal = document.getElementById("link-pagina-principal");

document.addEventListener("keyup", (event) => {
    if (event.code == "Backspace"){
        linkPagPrincipal.click();
    }
})
