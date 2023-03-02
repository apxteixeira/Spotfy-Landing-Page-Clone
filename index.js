    const checkbox = document.querySelector(".toggler");
    const background = document.querySelector(".backgroundScreen");
    
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            background.style.visibility = "visible";
        } else {
            background.style.visibility = "hidden";
        }
    }); 