import "./styles.css";
import generateHomepage from "./load-homepage";
import generateMenu from "./load-menu";
import generateAboutPage from "./load-about-page";


const siteHandler = (function() {
    const homeButton = document.getElementById("home-button");
    const menuButton = document.getElementById("menu-button");
    const aboutButton = document.getElementById("about-button");

    function clearContent() {
        const content = document.getElementById("content");
        for (let i = content.childNodes.length - 1; i >= 0; i--) {
            content.removeChild(content.childNodes[i]);
        }
    }

    function callHomepage() {
        clearContent();
        generateHomepage();
    }

    function callMenu() {
        clearContent();
        generateMenu();
    }

    function callAboutPage() {
        clearContent();
        generateAboutPage();
    }

    function initializeTabFunctionality() {
        homeButton.addEventListener("click", () => {
            if (homeButton.classList.contains("button-inactive")) {
                callHomepage();
                homeButton.classList.remove("button-inactive");
                homeButton.classList.add("button-active");

                if (menuButton.classList.contains("button-active")) {
                    menuButton.classList.remove("button-active");
                    menuButton.classList.add("button-inactive");
                }
                else {
                    aboutButton.classList.remove("button-active");
                    aboutButton.classList.add("button-inactive");
                }
            }
        })

        menuButton.addEventListener("click", () => {
            if (menuButton.classList.contains("button-inactive")) {
                callMenu();
                menuButton.classList.remove("button-inactive");
                menuButton.classList.add("button-active");

                if (homeButton.classList.contains("button-active")) {
                    homeButton.classList.remove("button-active");
                    homeButton.classList.add("button-inactive");
                }
                else {
                    aboutButton.classList.remove("button-active");
                    aboutButton.classList.add("button-inactive");
                }
            }
        })

        aboutButton.addEventListener("click", () => {
            if (aboutButton.classList.contains("button-inactive")) {
                callAboutPage();
                aboutButton.classList.remove("button-inactive");
                aboutButton.classList.add("button-active");

                if (homeButton.classList.contains("button-active")) {
                    homeButton.classList.remove("button-active");
                    homeButton.classList.add("button-inactive");
                }
                else {
                    menuButton.classList.remove("button-active");
                    menuButton.classList.add("button-inactive");
                }
            }
        })
    }

    function start() {
        callHomepage();
        initializeTabFunctionality();
    }

    return {start};

})();

siteHandler.start();