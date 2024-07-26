console.log('app.js loaded')

// Loading bar
window.addEventListener("load", function () {
    const loader = document.getElementById("loading-bar-inner");
    loader.style.width = "100%";
    setTimeout(() => {
      loader.style.width = "0%";
    }, 1000);
  });
  
