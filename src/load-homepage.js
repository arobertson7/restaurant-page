/* <div class="welcome-message-container">
    <div>
        <h2>Der Garten</h2>
        <p>seit 1977</p>
    </div>
    <p>Serving traditional German fare and refreshingly smooth beer in a lively outdoor atmosphere. Sip on a Helles and bite into a Knödel while relaxing in the shade of the garden trees. Prost!</p>
</div> */
import backgroundImage from "./garten2.jpg";

const loadHomepage = function() {
    // change #content background image
    const content = document.getElementById("content");

    const homepageContainer = document.createElement("div");
    homepageContainer.classList.add("homepage-container");
    content.appendChild(homepageContainer);

    const homepageBackground = document.createElement("div");
    homepageBackground.classList.add("homepage-background");
    homepageContainer.appendChild(homepageBackground);

    const welcomeMessageContainer = document.createElement("div");
    welcomeMessageContainer.classList.add("welcome-message-container");
    const welcomeMessageHeader = document.createElement("div");
    welcomeMessageHeader.appendChild(document.createElement("h2"));
    welcomeMessageHeader.appendChild(document.createElement("p"));
    welcomeMessageHeader.childNodes[0].textContent = "Der Garten";
    welcomeMessageHeader.childNodes[1].textContent = "seit 1977";
    welcomeMessageContainer.appendChild(welcomeMessageHeader);
    const message = document.createElement("p");
    message.textContent = "Traditional German fare and refreshingly smooth beer in a lively outdoor atmosphere. Sip on a Helles and bite into a Knödel while relaxing in the shade of the garden trees. Prost!";
    welcomeMessageContainer.appendChild(message);
    homepageContainer.appendChild(welcomeMessageContainer);
}

export default loadHomepage;