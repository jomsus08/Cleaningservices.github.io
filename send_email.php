<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Include PHPMailer library

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recipient and sender details
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    try {
        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        // Server settings
        $mail->SMTPDebug = 2; // Set to 2 for debugging information
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Change this to your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'jomspadonan15@gmail.com'; // Your Gmail email address
        $mail->Password = 'P7VnHa3QnfMDFfbUudxt152508'; // Your Gmail password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Recipient and sender details
        $mail->setFrom('jomspadonan15@gmail.com', 'Jomar Padonan'); // Replace with your email and name
        $mail->addAddress($email, $name); // Set recipient email and name

        // Email content
        $mail->isHTML(false);
        $mail->Subject = 'New Email from Website';
        $mail->Body = "Name: $name\n\nEmail: $email\n\nMessage: $message";

        // Send the email
        $mail->send();

        echo json_encode(["success" => true, "message" => "Email sent successfully!"]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Failed to send email. Please try again."]);
    }
}
?>
