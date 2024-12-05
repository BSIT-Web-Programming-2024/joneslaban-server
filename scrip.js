document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission

    // Get form data
    var formData = new FormData(this);

    // Create an XMLHttpRequest object to handle the AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "submit_form.php", true);
    
    // Define the onload event
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Display the result
            document.getElementById("formStatus").innerHTML = "Message sent successfully!";
        } else {
            document.getElementById("formStatus").innerHTML = "Error: " + xhr.responseText;
        }
    };

    // Send the form data
    xhr.send(formData);
});
