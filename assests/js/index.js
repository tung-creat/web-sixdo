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
  handleSlide: function () {
    let banner = $$(".banner-slide .banner-slide-item");
    let dot = $$(".dot-slide .dot-slide-item");
    let index = 0;
    let preIndex;
    let checkUserClick = false;
    banner[index].classList.add("active");
    dot[index].classList.add("active");
    setInterval(() => {
      if (!checkUserClick) {
        preIndex = index;
        if (index < banner.length - 1) {
          index++;
        } else {
          index = 0;
        }
        banner[preIndex].classList.remove("active");
        dot[preIndex].classList.remove("active");
        banner[index].classList.add("active");
        dot[index].classList.add("active");
      }
    }, 3000);
    for (let i = 0; i < banner.length; i++) {
      // catch event when user click dot bannner
      dot[i].onclick = () => {
        checkUserClick = true;
        banner[i].classList.add("active");
        dot[i].classList.add("active");
        banner[index].classList.remove("active");
        dot[index].classList.remove("active");
        index = i;
        setTimeout(() => {
          checkUserClick = false;
        }, 4000);
      };
    }
  },
  handleEventMenuTablet: function () {
    let btnArrowInMenu = $$(".c-menu_mobile_item .arrow-detail");

    for (let i = 0; i < btnArrowInMenu.length; i++) {
      btnArrowInMenu[i].onclick = (e) => {
       
          btnArrowInMenu[i].parentElement.parentElement.classList.toggle("active");
      
      };
    }
  },
  start: function () {
    this.handleEvents();
    this.handleSlide();
    this.handleEventMenuTablet();
  },
};
app.start();
