const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = {
  handleEvents: function () {
    let btnLogin = $("#btn-open-login");
    let overLayOut = $(".c_mem_overlay");
    let btnCloseFormLogin = $("#btn-close-login");
    let btnMenuBar = $("#menu_bar");
    let menuMobile = $(".c-box-mmenu");
    let btnCloseMenuMobile = $("#btn_close_c_box_mmenu");
    let btnOpenLoginMobile = $("#btn_open_login_mobile");
    let btnOpenSearch = $("#btn_open_search");
    let navRegistration = $("#registration").parentElement;
    let navSignIn = $("#sing-in").parentElement;
    let formRegistration = $(".form-login-main .form-login-main-registration");
    let formLogin = $(".form-login-main .form-login-main-sign-in");
    btnLogin.onclick = () => {
      //open Login
      overLayOut.classList.add("show");
      overLayOut.classList.remove("hidden");
    };
    btnCloseFormLogin.onclick = () => {
      // close form Login
      overLayOut.classList.add("hidden");
      overLayOut.classList.remove("show");
    };
    overLayOut.onclick = (e) => {
      // close form Login when user click over lay
      if (!e.target.closest("#form-login")) {
        btnCloseFormLogin.onclick();
      }
    };
    btnMenuBar.onclick = (e) => {
      // Open MenuBar , this is be use when mobile screen is acttive or tablet
      menuMobile.classList.add("show");
      menuMobile.classList.remove("hidden");
    };
    btnCloseMenuMobile.onclick = () => {
      // close MenuBar Mobile or tablet
      menuMobile.classList.remove("show");
    };
    btnOpenLoginMobile.onclick = () => {
      // OpenLoginMobile
      btnLogin.onclick();
    };
    btnOpenSearch.onclick = () => {
      //Open Search Quick
      btnOpenSearch.classList.add("active");
    };
    window.onclick = (e) => {
      //when user click every where at page box open search quick will close
      if (!e.target.closest("#btn_open_search"))
        btnOpenSearch.classList.remove("active");
    };
    navRegistration.onclick = (e) => {
      if (!navRegistration.classList.contains("active")) {
        navRegistration.classList.add("active");
        navSignIn.classList.remove("active");
        formRegistration.classList.remove("hidden");
        formLogin.classList.add("hidden");
      }
    };
    navSignIn.onclick = (e) => {
      if (!navSignIn.classList.contains("active")) {
        navSignIn.classList.add("active");
        navRegistration.classList.remove("active");
        formLogin.classList.remove("hidden");
        formRegistration.classList.add("hidden");
      }
    };
  },

  start: function () {
    this.handleEvents();
  },
};
app.start();
