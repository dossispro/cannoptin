// require(["dojo/parser", "dojo/dom", "dojo/on", "dojo/domReady!"], function(parser, dom, on) {
//     parser.parse();

//     // Add submit button click handler
//     on(dom.byId("submitButton"), "click", function() {
//         const checkbox = dom.byId("checkbox1");
//         const errorMessage = dom.byId("error-message");

//         if (!checkbox.checked) {
//             errorMessage.style.display = "inline"; // Show error message
//         } else {
//             errorMessage.style.display = "none"; // Hide error message
//             alert("Form submitted successfully!");
//             // Perform form submission or further processing here
//         }
//     });
// });