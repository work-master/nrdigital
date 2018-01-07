<?php
// Define some constants
define( "RECIPIENT_NAME", "CSA Security Form" );
define( "RECIPIENT_EMAIL", "nr@nrdigitalbranding.com" );

// Read the form values
$success = false;
$senderName = isset( $_POST['username'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['username'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";

// If all values exist, send the email
if ( $senderName && $senderEmail) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $senderName . " <" . $senderEmail . ">";
  $msgBody = " Message: You have a new subscriber!";
  $success = mail( $recipient, $headers, $msgBody );
}
?>