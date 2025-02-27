//your JS code here. If required.
  document.addEventListener("DOMContentLoaded", function() {
            let listItems = document.querySelectorAll("ul li");
            listItems.forEach(item => {
                item.textContent += " development";
            });
        });