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
        btnLogin.onclick = () => {
            overLayOut.classList.add("show");
            overLayOut.classList.remove("hidden");
        }
        btnCloseFormLogin.onclick = () => {
             overLayOut.classList.add("hidden");
            overLayOut.classList.remove("show");        
        }
        overLayOut.onclick = (e) => {
            if (!e.target.closest("#form-login")) {
                overLayOut.classList.add("hidden");
                overLayOut.classList.remove("show");   
            }
                   
        }
        btnMenuBar.onclick = (e) => {
            menuMobile.classList.add("show");
              menuMobile.classList.remove("hidden");
            

        }
        btnCloseMenuMobile.onclick=()=> {
              menuMobile.classList.remove("show");
        }
        btnOpenLoginMobile.onclick = () => {
            btnLogin.onclick();
        }
  },

    start: function () {
        this.handleEvents();
  },
};
app.start();
