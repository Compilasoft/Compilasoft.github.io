const showModal = () => {
    let modal = document.querySelector(".modal");
    let contact = document.querySelector("#contact");
    contact.addEventListener("click", () => {
        modal.classList.add("show-modal");
    })
}
showModal();

const hideModal = () => {
    let modal = document.querySelector(".modal");
    let exitModal = document.querySelector("#exit-modal");
    exitModal.addEventListener("click", () => {
        modal.classList.remove("show-modal");
    })
}
hideModal();