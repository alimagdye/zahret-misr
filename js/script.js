"use strict";

// data
/////////////////////////////////////////////////////////////////
const products = [
  [
    {
      productName: "Spring Onion",
      image: "spring-onion.png",
      description:
        "Rich in antioxidants that help protect the body from inflammation and cancer, green onions also aid in weight loss, obesity reduction, and bone strengthening due to their vitamin K content.",
      packingOptions: [
        [
          "Box Type: Carton Box",
          "Weight: 2 KG",
          "Contents: 14 Bunches (135-145g each)",
        ],
        [
          "Box Type: Plastic Box",
          "Weight: 2.75 KG",
          "Contents: 20 Bunches (135-145g each)",
        ],
      ],
      harvestMonths: ["January", "February", "October", "November", "December"],
      shippingOptions: ["Air", "Ocean"],
    },
    {
      productName: "Hot Pepper",
      image: "hot-pepper.png",
      description:
        "It is a product that no cook can do without in their kitchen because it gives a scent and flavor even if used sparingly. The benefits of hot pepper include reducing the risk of certain cancers such as stomach, mouth, and colon cancer. It is also very beneficial for men to increase fertility as it increases blood circulation in the body and gives a feeling of warmth. We excel in cultivating all its varieties such as F1 and Habanero.",
      packingOptions: [
        ["Box Type: Carton Box", "Weight: 2.5 KG", "Color: Red or Green Loose"],
        ["Box Type: Carton Box", "Weight: 4 KG", "Color: Red or Green Loose"],
        ["Box Type: Carton Box", "Weight: 5 KG", "Color: Red or Green Loose"],
      ],
      harvestMonths: [
        "January",
        "February",
        "March",
        "April",
        "September",
        "October",
        "November",
        "December",
      ],
      shippingOptions: ["Air", "Ocean"],
    },
    {
      productName: "Pepper Colors",
      image: "pepper-colors.png",
      description:
        "Rich in antioxidants and vitamins, it contains vitamin A, B, and C, making it a strong immune booster, helping to resist colds and coronaviruses. It also aids in weight loss, obesity reduction, and heart enhancement due to its content of folic acid.",
      packingOptions: [
        [
          "Box Type: Carton Box",
          "Weight: 4.5 KG",
          "Color: Red or Yellow Loose",
        ],
        ["Box Type: Carton Box", "Weight: 5 KG", "Color: Red or Yellow Loose"],
        ["Box Type: Plastic Box", "Weight: 5 KG", "Color: Red or Yellow Loose"],
      ],
      harvestMonths: [
        "January",
        "February",
        "March",
        "April",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shippingOptions: ["Air", "Ocean"],
    },
    {
      productName: "Onion",
      image: "onion.png",
      description:
        "Onion is a crop that is found in every household around the world. It contains many important elements for the body, such as sodium, calcium, phosphorus, potassium, and others. In addition to being an indispensable element in most foods, giving them a delicious taste, its benefits to the body are countless. Onions help maintain heart health, strengthen the immune system, reduce bone fragility, provide the body with energy, protect against cancerous tumors, purify the body from toxins, contribute to reducing the appearance of wrinkles, and more.",
      packingOptions: [
        [
          "Box Type: Netbag",
          "Weight: 10 KG",
          "Color: Red or Yellow",
          "Size: (50-70 mm) - (70-90 mm)",
        ],
        [
          "Box Type: Netbag",
          "Weight: 25 KG",
          "Color: Red or Yellow",
          "Size: (50-70 mm) - (70-90 mm)",
        ],
        [
          "Box Type: Jumbo bag",
          "Weight: 1250 KG",
          "Color: Red or Yellow",
          "Size: (50-70 mm) - (70-90 mm)",
        ],
      ],
      harvestMonths: ["March", "April", "May", "June", "July", "August"],
      shippingOptions: ["Ocean"],
    },
    {
      productName: "Cherry Tomato",
      image: "cherry-tomato.png",
      description:
        "A wonderful source of vitamins A, C, and E, as well as vitamin B and folic acid. It also contains abundant reserves of minerals such as calcium, manganese, phosphorus, and potassium. It has numerous benefits including regulating blood pressure, reducing cholesterol levels, preventing heart diseases, osteoporosis, and treating joint inflammation.",
      packingOptions: [
        [
          "Box Type: Carton Box",
          "Weight: 2.25 KG",
          "Contents: 9 Punnets (250g each)",
        ],
        [
          "Box Type: Plastic Box",
          "Weight: 2.25 KG",
          "Contents: 9 Punnets (250g each)",
        ],
      ],
      harvestMonths: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shippingOptions: ["Air", "Ocean"],
    },
    {
      productName: "Limes",
      image: "limes.png",
      description:
        "Lime has a distinctive sour taste, making it a common ingredient in various dishes, especially salads. In addition to its delicious sour taste, lemon can provide the body with many health benefits as it is rich in vitamin C, fiber, and other nutrients and natural compounds beneficial to the body.",
      packingOptions: [
        [
          "Box Type: Carton Box",
          "Weight: 2.5 KG",
          "Contents: 5 Netbags (500g each)",
        ],
        [
          "Box Type: Carton Box",
          "Weight: 5 KG",
          "Contents: 5 Netbags (1KG each)",
        ],
        ["Box Type: Plastic Box", "Weight: 5 KG", "Contents: Loose"],
      ],
      harvestMonths: [
        "January",
        "February",
        "March",
        "April",
        "October",
        "November",
        "December",
      ],
      shippingOptions: ["Air", "Ocean"],
    },
    {
      productName: "Indian Okra",
      image: "indian-okra.png",
      description:
        "Okra is a heart and digestive-friendly vegetable, rich in antioxidants and dietary fiber that help regulate digestion, absorb nutrients, and lower harmful cholesterol levels in the body. It also contains vitamin C and other antioxidants that boost the immune system and enhance immune cell function, helping the body resist infections and diseases. Okra also protects the eyes from oxidative damage, such as age-related vision deterioration and cataracts.",
      packingOptions: [
        ["Box Type: Carton Box", "Weight: 5 KG", "Contents: Loose"],
      ],
      harvestMonths: [
        "April",
        "May",
        "June",
        "July",
        "October",
        "November",
        "December",
      ],
      shippingOptions: ["Air"],
    },
    {
      productName: "Garlic",
      image: "garlic.png",
      description: "empty",
      packingOptions: [["empty"]],
      harvestMonths: ["empty"],
      shippingOptions: ["empty"],
    },
  ],
  [
    {
      productName: "Strawberry",
      image: "strawberry.png",
      description:
        "Strawberry is the fruit of love that everyone adores, especially women and children, and it is the trader of happiness that increases the production of serotonin (one of the happiness hormones) in the body. It strengthens the immune system, protects against the risk of heart attacks, regulates blood pressure. As for the beauty benefits of strawberries, which make them very attractive to women, they include skin lightening and maintaining its radiance, preventing hair loss, strengthening nails and whitening teeth. Strawberries require special care from the planting process to harvesting and Our Strawberry licensed by EMCO CAL Company We are proud to offer fresh and frozen strawberries to the global markets, packaged using modern methods, and at competitive prices.",
      packingOptions: [
        [
          "Box Type: Carton Box",
          "Weight: 2.5 kg",
          "Contents: 10 Bunches (250g each)",
        ],
      ],
      harvestMonths: ["January", "February", "March", "November", "December"],
      shippingOptions: ["Air", "Ocean"],
    },
    {
      productName: "Guava",
      image: "guava.png",
      description:
        "Known as the fruit of paradise, or the fruit of health and beauty, this is what some call the guava fruit; due to its smart aroma, wonderful taste, and amazing health benefits. Guava contains important nutrients for the body such as: Vitamin A, B, C, antioxidants, potassium, and other elements. Among the benefits of guava that many may not know: fighting cancerous tumors, preventing diabetes, improving the immune system, preventing heart diseases suitability for diabetic patients, in addition to its wonderful benefits for women's beauty, and the health of pregnant women and fetuses.",
      packingOptions: [
        [
          "Box Type: Carton Box",
          "Weight: 1.75 kg",
          "Contents: 12 or 15 Pieces",
        ],
        ["Box Type: Carton Box", "Weight: 2.5 kg", "Contents: 20 or 24 Pieces"],
        [
          "Box Type: Plastic Box",
          "Weight: 2 kg",
          "Contents: 12, 15 or 20 Pieces",
        ],
      ],
      harvestMonths: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "September",
        "October",
        "November",
        "December",
      ],
      shippingOptions: ["Air", "Ocean"],
    },
    {
      productName: "Sweet Potatoes",
      image: "sweet-potatoes.png",
      description:
        "A rich source of vitamins and minerals, sweet potatoes contain vitamin A, B, C, and D, as well as iron, magnesium, and potassium. They are also a safe and natural source of sugar, beneficial for the body, hair, and skin. Sweet potatoes help regulate digestion, promote relaxation, and reduce feelings of stress.",
      packingOptions: [
        ["Box Type: Carton Box", "Weight: 3 kg", "Size: S, M, L & XL"],
        ["Box Type: Carton Box", "Weight: 6 kg", "Size: S, M, L & XL"],
      ],
      harvestMonths: [
        "January",
        "February",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shippingOptions: ["Air", "Ocean"],
    },
    {
      productName: "Mango",
      image: "mango.png",
      description:
        'Contains numerous vitamins A, B, C, and E, along with antioxidants that boost and protect the body from various cancers. It is a rich source of potassium and a safe, natural source of sugar. Beneficial for the body, hair, and skin, it helps regulate digestion and elevate mood, earning it the name "fruit of love and happiness."',
      packingOptions: [
        ["Box Type: Carton Box", "Weight: 4 kg", "Contents: Loose"],
      ],
      harvestMonths: [
        "January",
        "July",
        "August",
        "September",
        "October",
        "November",
      ],
      shippingOptions: ["Air", "Ocean"],
    },
    {
      productName: "Custard Apples",
      image: "custard-apples.png",
      description:
        "Custard Apple, also known as Atemoya, is a fruit rich in fiber, vitamins, and minerals. Custard apple supports the immune system, promotes heart and eye health, and helps reduce inflammation. It also contains a high level of antioxidants that combat many chronic diseases such as cancer.",
      packingOptions: [
        ["Box Type: Carton Box", "Weight: 4.5 kg", "Contents: Loose"],
        ["Box Type: Carton Box", "Weight: 5 kg", "Contents: Loose"],
      ],
      harvestMonths: ["October", "November", "December"],
      shippingOptions: ["Air"],
    },
    {
      productName: "Dragon Fruit",
      image: "dragon-fruit.png",
      description:
        "Dragon fruit is a low-calorie fruit, rich in vitamins, fiber, and various minerals. It promotes digestive health, protects against heart diseases, and reduces the risk of various types of cancer.",
      packingOptions: [
        ["Box Type: Carton Box", "Weight: 4 kg", "Contents: Loose"],
      ],
      harvestMonths: ["July", "August", "September", "October"],
      shippingOptions: ["Air"],
    },
    {
      productName: "Barhi Dates",
      image: "barhi-dates.png",
      description:
        "A good source of energy for the body and contains dietary fiber that helps improve the digestive system and maintain healthy skin and hair It is also a healthy alternative to processed sweets",
      packingOptions: [
        ["Box Type: Carton Box", "Weight: 5 kg", "Contents: Loose"],
      ],
      harvestMonths: ["september", "october", "November"],
      shippingOptions: ["Air"],
    },
    {
      productName: "Frozen Strawberry",
      image: "frozen-strawberry.png",
      description:
        "Strawberry is the fruit of love that everyone adores, especially women and children, and it is the trader of happiness that increases the production of serotonin (one of the happiness hormones) in the body. It strengthens the immune system, protects against the risk of heart attacks, regulates blood pressure. As for the beauty benefits of strawberries, which make them very attractive to women, they include skin lightening and maintaining its radiance, preventing hair loss, strengthening nails and whitening teeth. Strawberries require special care from the planting process to harvesting and Our Strawberry licensed by EMCO CAL Company We are proud to offer fresh and frozen strawberries to the global markets, packaged using modern methods, and at competitive prices.",
      packingOptions: [
        ["Box Type: Carton Box", "Weight: 10 kg", "Contents: Loose"],
      ],
      harvestMonths: [
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
      ],
      shippingOptions: ["Ocean"],
    },
  ],
];

/////////////////////////////////////////////////////////////////

// on load
const productsContainers = document.querySelectorAll(".products .cards");
// when loading the page
const onLoad = function () {
  let j = 1;
  for (let i = 0; i < products.length; i++) {
    products[j].forEach((product) => {
      productsContainers[i].insertAdjacentHTML(
        "beforeend",
        `
                <div class="card" data-product-name="${
                  product.productName
                }" data-product-category="${j === 1 ? "fruit" : "vegetable"}">
                  <img
                    loading="lazy"
                    src="images/${product.image}"
                    class="card__image"
                    alt="${product.productName}"
                  />
                  <div class="card__overlay">
                    <div class="card__header">
                      <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path class="to-be-second"/>
                      </svg>

                      <div class="card__header-text">
                        <h3 class="card__title">${product.productName}</h3>
                        <span class="card__status">Product Details &rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>
              `
      );
    });
    j--;
  }
};

onLoad();
console.log("developed by Ali Magdy");

// elements, variables
const phoneNav = document.querySelector(".phone-nav");
const navContent = document.querySelector(".hidden .nav-content");
const navClose = document.querySelector(".hidden .nav-close");
const anchorsInCells = document.querySelectorAll(".nav-content .cell a");
const items = document.querySelectorAll(".accordion button");
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
const cards = document.querySelectorAll(".card");
let isModalOpen = false; // Flag to track if modal is open

// for displaying current year in footer
yearElement.textContent = currentYear;

// functions
function scrollAnchors(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  try{
  const target = document.querySelector(
    event.currentTarget.getAttribute("href")
  ); // Find the target section
  target.scrollIntoView({ behavior: "smooth" });
  }
  catch(error){
    console.log(error, 'the wanted section is not found');
  }
}

// Attach the event listener to all anchor tags with href starting with #
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", scrollAnchors);
});

// for expanding and collapsing sections using accordion
function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

const navCloseFunction = function () {
  navContent.style.animation = "fromLeft .5s forwards";
  setTimeout(() => {
    navContent.style.display = "none";
    phoneNav.style.display = "block";
    navContent.style.animation = "";
  }, 500);
};

const displayCardDetails = function (card) {
  // here we get the card clicked using the target
  let cardClicked;
  try {
    cardClicked =
      card.dataset.productCategory === "fruit"
        ? products[1].find(
            (product) => product.productName === card.dataset.productName
          )
        : products[0].find(
            (product) => product.productName === card.dataset.productName
          );
  } catch (error) {
    return;
  }
  if (!cardClicked) {
    return; // Handle case when product is not found
  }
  document.querySelector(".modal").innerHTML = "";
  document.querySelector(".modal").insertAdjacentHTML(
    "afterbegin",
    `<button class="close-modal hide-modal">&times;</button>
      <div class="title">Our Product</div>
      <br />
      <br />
      <figure>
        <img src="./images/${cardClicked.image}" alt="${
      cardClicked.productName
    }" />
      </figure>
            <h1>${cardClicked.productName}</h1>

      <p>
      ${cardClicked.description}
      </p>

      <div class="container">
        <details class="packing">
          <summary>Packing Options:</summary>
          <ol>
          ${cardClicked.packingOptions
            .map(
              (option) =>
                `<li>${option.map((opt) => `<p> ${opt} </p>`).join("")}</li>`
            )
            .join("")}
          </ol>
        </details>
      </div>

      <div class="container">
        <details class="packing">
          <summary>Export Months:</summary>
          <ul>
          ${cardClicked.harvestMonths
            .map((month) => `<li>${month}</li>`)
            .join("")}
          </ul>
        </details>
      </div>
      <div class="container">
        <details class="packing">
          <summary>Shipping Options:</summary>
          <ul>
          ${cardClicked.shippingOptions
            .map((option) => `<li>${option}</li>`)
            .join("")}
          </ul>
        </details>
      </div>
      <div class="contact-btn">
        <button class="contact">Contact Us</button>
      </div>`
  );

  document.querySelector(".close-modal").addEventListener("click", handleClose);
  document.querySelector(".overlay").addEventListener("click", handleClose);
  // Close modal on "Contact Us" click, then scroll to contact section
  document
    .querySelector(".modal .contact-btn .contact")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior
      // Call handleClose first to close the modal
      handleClose();

      // Smooth scroll to the contact section after modal is closed
      const contactSection = document.querySelector("#contact");
      window.scroll({
        top: contactSection.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    });

  isModalOpen = true; // Set the flag when modal opens
  document.querySelector(".close-modal").classList.remove("hide-modal");
  document.querySelector(".modal").classList.remove("hide-modal");
  document.querySelector(".overlay").classList.remove("hide-modal");
  document.body.style.overflow = "hidden"; // Disable scroll
  document.documentElement.style.overflow = "hidden"; // Disable scroll on html
  document.querySelector(".modal").scrollTop = 0; // Reset the scroll position to the top
};

const work = function () {
  document.querySelector("#Developer").innerHTML = "";
  document.querySelector("#Developer").insertAdjacentHTML(
    "afterbegin",
    ` Made with ❤️ by
        <a
          href="https://github.com/alimagdye"
          title="Ali Magdy Github"
          target="_blank"
          >Ali Magdy</a
        >`
  );
};

work();

const handleClose = function () {
  isModalOpen = false; // Reset the flag when modal closes
  document.querySelector(".close-modal").classList.add("hide-modal");
  document.querySelector(".modal").classList.add("hide-modal");
  document.querySelector(".overlay").classList.add("hide-modal");
  document.body.style.overflow = "auto"; // Enable scroll
  document.documentElement.style.overflow = "auto"; // Re-enable scroll on html
};

// event listeners:
phoneNav.addEventListener("click", function () {
  phoneNav.style.display = "none";
  navContent.style.display = "block";
});

navClose.addEventListener("click", navCloseFunction);

anchorsInCells.forEach((anchor) => {
  anchor.addEventListener("click", navCloseFunction);
});

items.forEach((item) => item.addEventListener("click", toggleAccordion));

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    !document.querySelector(".modal").classList.contains("hide-modal")
  )
    handleClose();
});

// delegation for cards
cards.forEach(
  (
    cardCategory // cards is the grandparent div
  ) =>
    cardCategory.addEventListener("click", function (e) {
      const cardDiv = e.target.closest(".card");
      if (cardDiv && cardCategory.contains(cardDiv)) {
        displayCardDetails(cardDiv); // Call the function with the parent div as the target
      }
    })
);

// form
/////////////////////////////////////////////////////////////////
const form = document.getElementById("form");
const modalMessage = document.querySelector(".modal-message");
const modalMessage2 = document.querySelector(".modal-message2");
const error = document.querySelector("#error");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector("#hiddenDate").value = new Intl.DateTimeFormat(
    "en-US",
    {
      hour12: true,
      dateStyle: "full",
      timeStyle: "long",
    }
  ).format(new Date());
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  document.querySelector("#successModal").style.display = "block";

  modalMessage.textContent = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        document.querySelector("#successModal .icon").style.display = "block";
        modalMessage.textContent = "Thank you";
        modalMessage.style.color = "#008B05";
        modalMessage2.textContent =
          "We'll get back to you as soon as possible!";
      } else {
        console.log(response);
        modalMessage.textContent = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      error.style.display = "block";
      modalMessage.textContent = "Something went wrong!";
      modalMessage.style.color = "#FB0102";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        document.querySelector("#successModal").style.display = "none";
        document.querySelector("#successModal .icon").style.display = "none";
        error.style.display = "none";
        modalMessage.textContent = modalMessage2.textContent = "";
      }, 3000);
    });
});
