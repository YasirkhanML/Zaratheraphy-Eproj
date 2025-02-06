
  var swiper = new Swiper('.mySwiperteam', {
    slidesPerView: 1,
    spaceBetween: 10,
    
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  var swiper = new Swiper(".mySwiperservices", {
    slidesPerView: 1,
    spaceBetween: 10,
    //  effect: "coverflow",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  var swiper = new Swiper("mySwiperteam", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

var productSwiper = new Swiper(".productSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-product",
    prevEl: ".swiper-button-prev-product"
  },
 
});
function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Validate Name
    const name = document.getElementById("name").value.trim();
    if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
      document.getElementById("nameError").textContent = "Please enter a valid full name.";
      isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value.trim();
    if (email === "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate Message
    const message = document.getElementById("message").value.trim();
    if (message === "" || message.length < 10) {
      document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
      isValid = false;
    }

    // If valid, show a success message
    if (isValid) {
      alert("Your message has been sent successfully!");
      document.getElementById("contactForm").reset();
    }
  }

  function getLocation() {
    const output = document.getElementById("output");

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          output.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
          const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          window.open(googleMapsUrl, "_blank");
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              output.textContent = "User denied the request for Geolocation.";
              break;
            case error.POSITION_UNAVAILABLE:
              output.textContent = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              output.textContent = "The request to get user location timed out.";
              break;
            case error.UNKNOWN_ERROR:
              output.textContent = "An unknown error occurred.";
              break;
          }
        }
      );
    } else {
      output.textContent = "Geolocation is not supported by your browser.";
    }
  }

