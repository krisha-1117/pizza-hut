// Simple alert function for order confirmation
function showAlert(message) {
  alert(message);
}

// Calculate price dynamically on order page
document.addEventListener("DOMContentLoaded", function () {
  const pizzaSelect = document.getElementById("pizza");
  const quantityInput = document.getElementById("quantity");

  if (pizzaSelect && quantityInput) {
    const prices = {
      margherita: 5,
      pepperoni: 7,
      veggie: 6
    };

    const priceDisplay = document.createElement("p");
    priceDisplay.id = "priceDisplay";
    pizzaSelect.parentElement.appendChild(priceDisplay);

    function updatePrice() {
      const selectedPizza = pizzaSelect.value;
      const quantity = parseInt(quantityInput.value) || 1;
      const totalPrice = prices[selectedPizza] * quantity;
      priceDisplay.textContent = `Total Price: rupees {totalPrice.toFixed(2)}`;
    }

    pizzaSelect.addEventListener("change", updatePrice);
    quantityInput.addEventListener("input", updatePrice);
    updatePrice();
  }
});

// Contact form validation
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = document.getElementById("name").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !message) {
        e.preventDefault();
        alert("Please fill in all fields before sending.");
      } else {
        alert("Thank you for contacting us, " + name + "! We'll get back to you soon.");
      }
    });
  }
});
