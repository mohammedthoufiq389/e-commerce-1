document.addEventListener("DOMContentLoaded", () => {
  // --- Sidebar Toggle ---
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");

  if (hamburger && sidebar && closeSidebar) {
    hamburger.addEventListener("click", () => sidebar.classList.add("active"));
    closeSidebar.addEventListener("click", () =>
      sidebar.classList.remove("active")
    );
  }

  // --- Search Functionality ---
  const searchInput = document.getElementById("searchInput");
  const products = document.querySelectorAll(".box");

  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      const searchText = searchInput.value.toLowerCase();
      products.forEach((product) => {
        const text = product.innerText.toLowerCase();
        product.style.display = text.includes(searchText)
          ? "inline-block"
          : "none";
      });
    });
  }

  // --- Chat Box ---
  const openBtn = document.getElementById("openMsgBtn");
  const closeBtn = document.getElementById("closeMsgBtn");
  const chatBox = document.getElementById("chatBox");
  const chatInput = document.querySelector(".chat-footer input");
  const sendBtn = document.querySelector(".chat-footer button");

  if (openBtn && closeBtn && chatBox) {
    openBtn.addEventListener("click", () => (chatBox.style.display = "flex"));
    closeBtn.addEventListener("click", () => (chatBox.style.display = "none"));
  }

  function sendMessage() {
    if (!chatInput) return;
    const message = chatInput.value.trim();
    if (!message) return alert("Please type a message before sending.");

    const phoneNumber = "916381853505";
    const formattedMessage = encodeURIComponent(
      `Perfumy Customer Message:\n${message}`
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${formattedMessage}`,
      "_blank"
    );
    chatInput.value = "";
  }

  if (sendBtn && chatInput) {
    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendMessage();
    });
  }

  // --- SIGN IN MODAL ---
  const signinBtn = document.querySelector(".signin-btn");
  const signinModal = document.getElementById("signinModal");
  const closeModal = document.getElementById("closeModal");
  const signinForm = document.getElementById("signinForm");

  if (signinBtn && signinModal && closeModal) {
    signinBtn.addEventListener("click", (e) => {
      e.preventDefault();
      signinModal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
      signinModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === signinModal) signinModal.style.display = "none";
    });
  }

  // --- Prevent Form Submit & Handle Login ---
  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault(); // stop real form submission
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!username || !password) {
        alert("Please enter both username and password");
        return;
      }

      // ✅ Replace this with real login logic (API call, validation, etc.)
      alert(`Logged in as ${username}`);
      signinModal.style.display = "none"; // Close modal after login
    });
  }

  // --- ABOUT US MODAL ---
  const aboutLink = document.querySelector(".aboutLink");
  const aboutModal = document.getElementById("aboutModal");
  const closeAboutModal = document.getElementById("closeAboutModal");

  if (aboutLink && aboutModal && closeAboutModal) {
    aboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      aboutModal.style.display = "block";
    });
    closeAboutModal.addEventListener(
      "click",
      () => (aboutModal.style.display = "none")
    );
    window.addEventListener("click", (e) => {
      if (e.target === aboutModal) aboutModal.style.display = "none";
    });
  }

  // --- HELP MODAL ---
  const helpModal = document.getElementById("helpModal");
  const openHelpModal = document.getElementById("openHelpModal");
  const closeHelpModal = document.getElementById("closeHelpModal");

  if (openHelpModal && helpModal && closeHelpModal) {
    openHelpModal.addEventListener("click", (e) => {
      e.preventDefault();
      helpModal.style.display = "flex";
    });
    closeHelpModal.addEventListener(
      "click",
      () => (helpModal.style.display = "none")
    );
    window.addEventListener("click", (e) => {
      if (e.target === helpModal) helpModal.style.display = "none";
    });
  }

  // --- DELIVERY MODAL ---
  const deliveryLink = document.querySelector(".deliveryLink");
  const deliveryModal = document.getElementById("deliveryModal");
  const closeDeliveryModal = document.getElementById("closeDeliveryModal");

  if (deliveryLink && deliveryModal && closeDeliveryModal) {
    deliveryLink.addEventListener("click", (e) => {
      e.preventDefault();
      deliveryModal.style.display = "block";
    });
    closeDeliveryModal.addEventListener(
      "click",
      () => (deliveryModal.style.display = "none")
    );
    window.addEventListener("click", (e) => {
      if (e.target === deliveryModal) deliveryModal.style.display = "none";
    });
  }

  // --- TRACK ORDER MODAL ---
  const trackLink = document.querySelector(".trackLink");
  const trackModal = document.getElementById("trackModal");
  const closeTrackModal = document.getElementById("closeTrackModal");
  const trackForm = document.getElementById("trackForm");

  if (trackLink && trackModal && closeTrackModal) {
    trackLink.addEventListener("click", (e) => {
      e.preventDefault();
      trackModal.style.display = "block";
    });
    closeTrackModal.addEventListener(
      "click",
      () => (trackModal.style.display = "none")
    );
    window.addEventListener("click", (e) => {
      if (e.target === trackModal) trackModal.style.display = "none";
    });
  }

  if (trackForm) {
    trackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const orderNumber = document.getElementById("orderNumber").value;
      alert(`Tracking order ${orderNumber} for ${email}`);
      // Add real tracking logic here
    });
  }

  // --- PRODUCT IMAGE FULLSCREEN MODAL ---
  const productImgs = document.querySelectorAll(".product-img");
  const imageModal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalProductName = document.getElementById("modalProductName");
  const closeImgModal = document.getElementById("closeImgModal");
  const qtySpan = document.querySelector(".qty");
  const minusBtn = document.querySelector(".qty-btn.minus");
  const plusBtn = document.querySelector(".qty-btn.plus");
  const addToCartBtn = document.querySelector(".add-to-cart-btn");
  const goToCartBtn = document.querySelector(".go-to-cart-btn");

  let quantity = 1;

  if (productImgs && imageModal && modalImg && modalProductName) {
    productImgs.forEach((img) => {
      img.addEventListener("click", () => {
        modalImg.src = img.src;
        modalProductName.innerText = img.nextElementSibling.innerText;
        imageModal.style.display = "flex";
        quantity = 1;
        qtySpan.innerText = quantity;
      });
    });
  }

  if (closeImgModal) {
    closeImgModal.addEventListener(
      "click",
      () => (imageModal.style.display = "none")
    );
  }

  if (plusBtn) {
    plusBtn.addEventListener("click", () => (qtySpan.innerText = ++quantity));
  }

  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      if (quantity > 1) qtySpan.innerText = --quantity;
    });
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      alert(`${modalProductName.innerText} (x${quantity}) added to cart!`);
    });
  }

  if (goToCartBtn) {
    goToCartBtn.addEventListener("click", () => {
      alert("Redirecting to cart...");
      window.location.href = "#"; // Replace with your cart page URL
    });
  }
});
