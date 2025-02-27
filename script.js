// //your JS code here. If required.
//   document.addEventListener("DOMContentLoaded", function() {
//             let listItems = document.querySelectorAll("ul li");
//             listItems.forEach(item => {
//                 item.textContent += " development";
//          });
//         });


document.addEventListener("DOMContentLoaded", () => 
    document.querySelectorAll("ul li").forEach(item => item.append(" development"))
);
H