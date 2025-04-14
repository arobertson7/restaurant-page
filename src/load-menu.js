import brezel from "./brezel-und-weisswurst.jpg";
import kartoffel from "./kartoffel-salat.jpg";
import obst from "./frisches-obst.jpeg";
import kasespatzle from "./kasespaetzle.jpg";
import jagerschnitzel from "./jagerschnitzel.jpg";
import kloßen from "./kloßen.jpeg";
import doner from "./halloumi-doner.jpg";
import helles from "./hb-helles.jpg";
import dunkel from "./hb-dunkel.jpg";
import pilsner from "./pilsner-u.jpg";
import apfelschorle from "./apfelschorle.jpg";
import himbeere from "./himbeere-pastry.jpg";
import zimtschnecken from "./zimtschnecken.jpg";

const loadMenu = function() {
    const contentContainer = document.getElementById("content");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    contentContainer.appendChild(menuContainer);

    const menuBackground = document.createElement("div");
    menuBackground.classList.add("menu-background");
    menuContainer.appendChild(menuBackground);

    const vorspeiseLabel = document.createElement("div");
    vorspeiseLabel.classList.add("category");
    vorspeiseLabel.appendChild(document.createElement("h3"));
    vorspeiseLabel.childNodes[0].textContent = "Vorspeise";
    menuContainer.appendChild(vorspeiseLabel);

    const vorspeise1 = document.createElement("div");
    vorspeise1.classList.add("speise");
    vorspeise1.appendChild(document.createElement("img"));
    vorspeise1.childNodes[0].src = brezel;
    vorspeise1.childNodes[0].alt = "brezel und weißwurst";
    vorspeise1.appendChild(document.createElement("h4"));
    vorspeise1.childNodes[1].textContent = "Weißwurst mit Brezel";
    vorspeise1.appendChild(document.createElement("h5"));
    vorspeise1.childNodes[2].textContent = "€12";
    menuContainer.appendChild(vorspeise1);

    const vorspeise2 = document.createElement("div");
    vorspeise2.classList.add("speise");
    vorspeise2.appendChild(document.createElement("img"));
    vorspeise2.childNodes[0].src = kartoffel;
    vorspeise2.childNodes[0].alt = "kartoffel salat";
    vorspeise2.appendChild(document.createElement("h4"));
    vorspeise2.childNodes[1].textContent = "Kartoffel Salat mit Würstchen";
    vorspeise2.appendChild(document.createElement("h5"));
    vorspeise2.childNodes[2].textContent = "€13";
    menuContainer.appendChild(vorspeise2);

    const vorspeise3 = document.createElement("div");
    vorspeise3.classList.add("speise");
    vorspeise3.appendChild(document.createElement("img"));
    vorspeise3.childNodes[0].src = obst;
    vorspeise3.childNodes[0].alt = "frisches obst";
    vorspeise3.appendChild(document.createElement("h4"));
    vorspeise3.childNodes[1].textContent = "Fresh Fruit";
    vorspeise3.appendChild(document.createElement("h5"));
    vorspeise3.childNodes[2].textContent = "€8";
    menuContainer.appendChild(vorspeise3);

    const hauptspeiseLabel = document.createElement("div");
    hauptspeiseLabel.classList.add("category");
    hauptspeiseLabel.appendChild(document.createElement("h3"));
    hauptspeiseLabel.childNodes[0].textContent = "Hauptspeise";
    menuContainer.appendChild(hauptspeiseLabel);

    const hauptspeise1 = document.createElement("div");
    hauptspeise1.classList.add("speise");
    hauptspeise1.appendChild(document.createElement("img"));
    hauptspeise1.childNodes[0].src = kasespatzle;
    hauptspeise1.childNodes[0].alt = "käsespätzle";
    hauptspeise1.appendChild(document.createElement("h4"));
    hauptspeise1.childNodes[1].textContent = "Käsespätzle";
    hauptspeise1.appendChild(document.createElement("h5"));
    hauptspeise1.childNodes[2].textContent = "€14";
    menuContainer.appendChild(hauptspeise1);

    const hauptspeise2 = document.createElement("div");
    hauptspeise2.classList.add("speise");
    hauptspeise2.appendChild(document.createElement("img"));
    hauptspeise2.childNodes[0].src = jagerschnitzel;
    hauptspeise2.childNodes[0].alt = "jägerschnitzel";
    hauptspeise2.appendChild(document.createElement("h4"));
    hauptspeise2.childNodes[1].textContent = "Jägerschnitzel";
    hauptspeise2.appendChild(document.createElement("h5"));
    hauptspeise2.childNodes[2].textContent = "€16";
    menuContainer.appendChild(hauptspeise2);

    const hauptspeise3 = document.createElement("div");
    hauptspeise3.classList.add("speise");
    hauptspeise3.appendChild(document.createElement("img"));
    hauptspeise3.childNodes[0].src = kloßen;
    hauptspeise3.childNodes[0].alt = "klößen";
    hauptspeise3.appendChild(document.createElement("h4"));
    hauptspeise3.childNodes[1].textContent = "Klößen";
    hauptspeise3.appendChild(document.createElement("h5"));
    hauptspeise3.childNodes[2].textContent = "€14";
    menuContainer.appendChild(hauptspeise3);

    const hauptspeise4 = document.createElement("div");
    hauptspeise4.classList.add("speise");
    hauptspeise4.appendChild(document.createElement("img"));
    hauptspeise4.childNodes[0].src = doner;
    hauptspeise4.childNodes[0].alt = "halloumi doner";
    hauptspeise4.appendChild(document.createElement("h4"));
    hauptspeise4.childNodes[1].textContent = "Halloumi Döner Kebab";
    hauptspeise4.appendChild(document.createElement("h5"));
    hauptspeise4.childNodes[2].textContent = "€10";
    menuContainer.appendChild(hauptspeise4);

    const getränkenlabel = document.createElement("div");
    getränkenlabel.classList.add("category");
    getränkenlabel.appendChild(document.createElement("h3"));
    getränkenlabel.childNodes[0].textContent = "Getränken";
    menuContainer.appendChild(getränkenlabel);

    const getranke1 = document.createElement("div");
    getranke1.classList.add("speise");
    getranke1.appendChild(document.createElement("img"));
    getranke1.childNodes[0].src = helles;
    getranke1.childNodes[0].alt = "hofbräu helles";
    getranke1.appendChild(document.createElement("h4"));
    getranke1.childNodes[1].textContent = "Hofbräu Helles";
    getranke1.appendChild(document.createElement("h5"));
    getranke1.childNodes[2].textContent = "€5";
    menuContainer.appendChild(getranke1);

    const getranke2 = document.createElement("div");
    getranke2.classList.add("speise");
    getranke2.appendChild(document.createElement("img"));
    getranke2.childNodes[0].src = dunkel;
    getranke2.childNodes[0].alt = "hofbräu dunkel";
    getranke2.appendChild(document.createElement("h4"));
    getranke2.childNodes[1].textContent = "Hofbräu Dunkel";
    getranke2.appendChild(document.createElement("h5"));
    getranke2.childNodes[2].textContent = "€5";
    menuContainer.appendChild(getranke2);

    const getranke3 = document.createElement("div");
    getranke3.classList.add("speise");
    getranke3.appendChild(document.createElement("img"));
    getranke3.childNodes[0].src = pilsner;
    getranke3.childNodes[0].alt = "pilsner urquell";
    getranke3.appendChild(document.createElement("h4"));
    getranke3.childNodes[1].textContent = "Pilsner Urquell (Czech)";
    getranke3.appendChild(document.createElement("h5"));
    getranke3.childNodes[2].textContent = "€4";
    menuContainer.appendChild(getranke3);

    const getranke4 = document.createElement("div");
    getranke4.classList.add("speise");
    getranke4.appendChild(document.createElement("img"));
    getranke4.childNodes[0].src = apfelschorle;
    getranke4.childNodes[0].alt = "apfelschorle";
    getranke4.appendChild(document.createElement("h4"));
    getranke4.childNodes[1].textContent = "Apfelschorle";
    getranke4.appendChild(document.createElement("h5"));
    getranke4.childNodes[2].textContent = "€3";
    menuContainer.appendChild(getranke4);

    const nachspeiseLabel = document.createElement("div");
    nachspeiseLabel.classList.add("category");
    nachspeiseLabel.appendChild(document.createElement("h3"));
    nachspeiseLabel.childNodes[0].textContent = "Nachspeise";
    menuContainer.appendChild(nachspeiseLabel);

    const nachspeise1 = document.createElement("div");
    nachspeise1.classList.add("speise");
    nachspeise1.appendChild(document.createElement("img"));
    nachspeise1.childNodes[0].src = himbeere;
    nachspeise1.childNodes[0].alt = "himbeere pastry";
    nachspeise1.appendChild(document.createElement("h4"));
    nachspeise1.childNodes[1].textContent = "Himbeere Pastry";
    nachspeise1.appendChild(document.createElement("h5"));
    nachspeise1.childNodes[2].textContent = "€7";
    menuContainer.appendChild(nachspeise1);

    const nachspeise2 = document.createElement("div");
    nachspeise2.classList.add("speise");
    nachspeise2.appendChild(document.createElement("img"));
    nachspeise2.childNodes[0].src = zimtschnecken;
    nachspeise2.childNodes[0].alt = "zimtschnecken";
    nachspeise2.appendChild(document.createElement("h4"));
    nachspeise2.childNodes[1].textContent = "Zimtschnecken";
    nachspeise2.appendChild(document.createElement("h5"));
    nachspeise2.childNodes[2].textContent = "€6";
    menuContainer.appendChild(nachspeise2);
}

export default loadMenu;