/* <div class="about-container">
        <div class="about-background"></div>
        <div class="info-container">
            <div>
                <h2>About</h2>
            </div>
            <div class="hours">
                <h4>Hours: <span>Every day 10 - 23 Uhr<span></h4>
            </div>
            <div class="location">
                <h4>Location: <span>Süßekätzchenstraße 6, 04701 Leipzig, Germany</span></h4>
            </div>
            <div class="phone">
                <h4>Tele: <span>+49 646 29573859</span></h4>
            </div>
            <div class="email">
                <h4>Email: <span>dergarten@gefälschteemail.de</span></h4>
            </div>
        </div>
    </div>
*/

const loadAboutPage = function() {
    const content = document.getElementById("content");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    content.appendChild(aboutContainer);

    const aboutBackground = document.createElement("div");
    aboutBackground.classList.add("about-background");
    aboutContainer.appendChild(aboutBackground);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    aboutContainer.appendChild(infoContainer);

    const aboutLabel = document.createElement("div");
    aboutLabel.appendChild(document.createElement("h2"));
    aboutLabel.childNodes[0].textContent = "About";
    infoContainer.appendChild(aboutLabel);

    const hours = document.createElement("div");
    hours.classList.add("hours");
    hours.appendChild(document.createElement("h4"));
    hours.childNodes[0].textContent = "Hours: ";
    const hoursSpan = document.createElement("span");
    hoursSpan.textContent = "Every day 10 - 23 Uhr";
    hours.childNodes[0].appendChild(hoursSpan);
    infoContainer.appendChild(hours);

    const location = document.createElement("div");
    location.classList.add("location");
    location.appendChild(document.createElement("h4"));
    location.childNodes[0].textContent = "Location: ";
    const locationSpan = document.createElement("span");
    locationSpan.textContent = "Süßekätzchenstraße 6, 04701 Leipzig, Germany";
    location.childNodes[0].appendChild(locationSpan);
    infoContainer.appendChild(location);

    const phone = document.createElement("div");
    phone.classList.add("phone");
    phone.appendChild(document.createElement("h4"));
    phone.childNodes[0].textContent = "Phone: ";
    const phoneSpan = document.createElement("span");
    phoneSpan.textContent = "+49 646 29573859";
    phone.childNodes[0].appendChild(phoneSpan);
    infoContainer.appendChild(phone);

    const email = document.createElement("div");
    email.classList.add("email");
    email.appendChild(document.createElement("h4"));
    email.childNodes[0].textContent = "Email: ";
    const emailSpan = document.createElement("span");
    emailSpan.textContent = "dergarten@gefälschteemail.de";
    email.childNodes[0].appendChild(emailSpan);
    infoContainer.appendChild(email);

}

export default loadAboutPage;