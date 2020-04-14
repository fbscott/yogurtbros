<?php 

   if (isset($_POST['name'])) {

      $name       = stripslashes($_POST['name']); // preg_replace()
      $emailFrom  = trim($_POST['email']);
      $subject    = stripslashes($_POST['subject']);
      $message    = nl2br(stripslashes($_POST['message']));

      $emailTo    = "scottcurrell@outlook.com";
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

 ?>
