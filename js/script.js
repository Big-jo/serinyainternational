/////////////////////////////////////////////////////////////////////
// CONTACT US BUTTON & POPUP CONTROLS
var contact = document.getElementById("contact");
var contactList = document.getElementById("contactList");
var closeContact = document.getElementById("closeContact");

// Display the contact list on botton click
contact.onclick = function () {
  contactList.style.display = "block";
};

// Close the contact list on the close botton click
closeContact.onclick = function () {
  contactList.style.display = "none";
};

/////////////////////////////////////////////////////////////////////////
// Terms and Shipping Controls
var terms = document.getElementById("terms");
var shipping = document.getElementById("shipping");
var notice = document.getElementById("notice");
var shippingNotice = document.getElementById("shipping-notice");
var termsNotice = document.getElementById("terms-notice");
var closeNotice = document.getElementById("close-notice");

terms.onclick = function () {
  notice.style.display = "flex";
  termsNotice.style.display = "block";
  shippingNotice.style.display = "none";
  closeNotice.style.display = "block";
};

shipping.onclick = function () {
  notice.style.display = "flex";
  shippingNotice.style.display = "block";
  termsNotice.style.display = "none";
  closeNotice.style.display = "block";
};

closeNotice.onclick = function () {
  notice.style.display = "none";
};

//////////////////////////////////////////////////////////////////////
// Get in Touch POST Controls
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyNm9JdiB_PzXZvn70bsW8FWvjm90Cln-FDCt9nW8hnvY7tgJ80wEKQBI-GBJRY1jIF/exec";

const messages = document.forms["get-in-touch-form"];

const inputEmail = messages.elements["Email"];

const inputMessage = messages.elements["Message"];

messages.addEventListener("submit", (e) => {
  e.preventDefault();

  // Regular expression to validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (inputEmail.value === "") {
    alert("Please, email cannot be blank");
  } else if (!emailPattern.test(inputEmail.value)) {
    alert("Please enter a valid email address");
  } else if (inputMessage.value === "") {
    alert("Please, message field cannot be blank");
  } else {
    fetch(scriptURL, { method: "POST", body: new FormData(messages) })
      .then((response) =>
        alert(
          "Thank you, your message has been recieved and we will respond shortly."
        )
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  }
});
