const Modal = {
    open() {
      //Open modal;
      // add class active to modal;
      document.querySelector(".modal-overlay").classList.add("active");
    },
    close() {
      //Close modal;
      //remove class active to modal;
      document.querySelector(".modal-overlay").classList.remove("active");
    },
  };