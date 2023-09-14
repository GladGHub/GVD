    <?php
    // Check if the form was submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $name = $_POST["name"];
        $mobile = $_POST["mobile"];
        $email = $_POST["email"];
        $town = $_POST["town"];
        
        // Display the submitted data
        echo "<p><strong>Name:</strong> $name</p>";
        echo "<p><strong>Mobile Number:</strong> $mobile</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Town:</strong> $town</p>";
    } else {
        // If the form was not submitted, display an error message
        echo "<p>Form submission failed. Please try again.</p>";
    }
    ?>
    <p><a href="form.html">Go back to the form</a></p>

