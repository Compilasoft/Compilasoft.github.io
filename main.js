const showContactModal = () => {
    let modal = document.querySelector("#contact-modal");
    let contact = document.querySelector("#contact");
    contact.addEventListener("click", () => {
        modal.classList.add("show-modal");
    })
}
showContactModal();

const hideContactModal = () => {
    let modal = document.querySelector("#contact-modal");
    let exitModal = document.querySelector("#exit-contact-modal");
    exitModal.addEventListener("click", () => {
        modal.classList.remove("show-modal");
    })
}
hideContactModal();

const showWebDesignModal = () => {
    let modal = document.querySelector("#web-design-modal");
    let button = document.querySelector("#web-design-button");
    button.addEventListener("click", () => {
        modal.classList.add("show-modal");
    });
}
showWebDesignModal();

const hideWebDesignModal = () => {
    let modal = document.querySelector("#web-design-modal");
    let exitModal = document.querySelector("#exit-web-design-modal");
    exitModal.addEventListener("click", () => {
        modal.classList.remove("show-modal");
    });
}
hideWebDesignModal();

const showWebDevelopmentModal = () => {
    let modal = document.querySelector("#web-development-modal");
    let button = document.querySelector("#web-development-button");
    button.addEventListener("click", () => {
        modal.classList.add("show-modal");
    });
}
showWebDevelopmentModal();

const hideWebDevelopmentModal = () => {
    let modal = document.querySelector("#web-development-modal");
    let exitModal = document.querySelector("#exit-web-development-modal");
    exitModal.addEventListener("click", () => {
        modal.classList.remove("show-modal");
    });
}
hideWebDevelopmentModal();

const showMobileApplicationModal = () => {
    let modal = document.querySelector("#mobile-application-modal");
    let button = document.querySelector("#mobile-application-button");
    button.addEventListener("click", () => {
        modal.classList.add("show-modal");
    });
}
showMobileApplicationModal();

const hideMobileApplicationModal = () => {
    let modal = document.querySelector("#mobile-application-modal");
    let exitModal = document.querySelector("#exit-mobile-application-modal");
    exitModal.addEventListener("click", () => {
        modal.classList.remove("show-modal");
    });
}
hideMobileApplicationModal();