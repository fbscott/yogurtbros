<?php 

   if (isset($_POST['name'])) {

      $name       = cleanString($_POST['name']);
      $emailFrom  = trim($_POST['email']);
      $subject    = cleanString($_POST['subject']);
      $message    = nl2br(cleanString($_POST['message']));

      $emailTo    = "scottcurrell2@gmail.com";
      $emailSubj  = "NEW yogurtbrothers.com submission. Re: " . $subject;
      $emailIntro = "You have received the following message from yogurtbrothers.com:";

      $emailBody = $emailIntro . "<br /><br />" .
                   "From: " . $name . "\n" .
                   "Email: " . $emailFrom . "<br /><br />" .
                   $message;

      $headers = "From: " . $emailFrom . "\r\n";
      // $headers .= "MIME-Version: 1.0\n";
      $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

      if ( mail($emailTo, $emailSubj, $emailBody, $headers) ) {
         echo "Success";
      } else {
         echo "Failure";
      }

   }

   function cleanString($string) {
      return preg_replace('/[^\w\s\d\.\,\?\!]/', '', $string); // Removes special chars.
   }

 ?>
