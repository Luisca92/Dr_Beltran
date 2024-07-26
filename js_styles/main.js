// Add a click event listener to the document
document.addEventListener("click", function(event) {
    // Check if the clicked element is an image
    if (event.target.tagName === "IMG") {
      // Toggle the "enlarge" class to make the image larger or smaller
      if (event.target.classList.contains("enlarge")) {
        event.target.classList.remove("enlarge");
        // Show the navigation bar again
        document.querySelector("header").classList.remove("hidden");
      } else {
        event.target.classList.add("enlarge");
        // Hide the navigation bar temporarily
        document.querySelector("header").classList.add("hidden");
        setTimeout(function() {
          document.querySelector("header").classList.remove("hidden");
        }, 3000); // Change this value to adjust the duration of the navigation bar hide time (in milliseconds)
      }
    }
  });
  
  // Add a scroll event listener to the window
  window.addEventListener("scroll", function() {
    // Check if an image is currently enlarged
    if (document.querySelector("img.enlarge")) {
      // Hide the navigation bar
      document.querySelector("header").classList.add("hidden");
    }
  });
  