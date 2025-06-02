  const hamburger = document.getElementById("hamburger");
  const overlay = document.getElementById("menuOverlay");

  hamburger.addEventListener("click", () => {
            overlay.classList.toggle("open");
        });

        overlay.addEventListener("click", () => {
            overlay.classList.remove("open");
        });
        
        const video = document.getElementById('vid');
        video.playbackRate = 0.8;