(() => {
  const refs = {
    openMobMenuBtn: document.querySelector(".mob-menu"),
    btnClose: document.querySelector(".btn-close"),
    boxMobMenu: document.querySelector(".box-mob-menu"),
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.btnClose.addEventListener("click", toggleMobMenu);
  refs.openMobMenuBtn.addEventListener("click", toggleMobMenu);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function toggleMobMenu() {
    refs.boxMobMenu.classList.toggle("is-hidden");
  }
})();
