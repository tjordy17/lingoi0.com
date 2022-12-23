<?php
  // Get the form data
  $tel = $_POST['tel'];

  // Set the email subject and message
  $subject = 'Comfirmation';
  $message = "Phone: $tel";

  // Send the email
  mail($_POST['mailto'], $subject, $message);
?>