document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var formData = new FormData(event.target);

    // Validation: Check if fields are empty
    let allFieldsFilled = true;
    formData.forEach(value => {
        if (value === "") {
            allFieldsFilled = false;
        }
    });

    // If not all fields are filled, display an error and stop form submission
    if (!allFieldsFilled) {
        toastr.error('Please ensure all fields are filled out.');
        return;
    }

    // Submit form data via fetch API
    fetch(event.target.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => {
        toastr.success('Thank you for your message!');
        // Handle success response
    })
    .catch(error => {
        toastr.error('There was a problem submitting your form.');
        // Handle errors
    });
});
