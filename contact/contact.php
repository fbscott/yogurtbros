<?php 
   virtual ("/assets/inc/page-open.htm");
 ?>
  <title>Contact Us | Yogurt Brothers</title>
  <meta name="description" content="Contact Us">
  <meta name="keywords" content="contact">
  <meta name="author" content="Scott Currell">
</head>
<body><div id="container">

<?php 
  virtual ("/assets/inc/header.htm");
 ?>

  <!--------------------------------- features --------------------------------->
<?php 
  virtual ("/assets/inc/page-header-open.htm");
 ?>
        <h1>Contact Us</h1>
<?php 
  virtual ("/assets/inc/page-header-close.htm");
 ?>
  <!--------------------------------- end features ----------------------------->
  <!--------------------------------- Contact ---------------------------------->
  <section class="bg-color-smoke">
    <div class="row">
      <div class="column medium-6 large-8 margin-50-on-xsmall">
        <div>
          <p class="margin-0-on-xsmall">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit sit amet dolor sit amet dignissim. Pellentesque ut rhoncus quam. Etiam sem magna, malesuada ac magna eget, vestibulum tincidunt ipsum. Aenean nec nibh erat. Sed fermentum maximus turpis vitae molestie.</p>
        </div>
      </div>
      <div class="columns medium-6 large-4 margin-50-on-xsmall">
         <h2 class="text-center">How Are We Doing?</h2>
         <form id="yb-contact" method="post" action="/assets/inc/contact_form.php">
         <!-- <form id="yb-contact" method="post" action="contact_form.php"> -->
            <div class="row">
               <div class="columns small-6">
                  <!-- <label for="first-name">First Name</label> -->
                  <input type="text" name="first" id="first-name" placeholder="First Name" required />
               </div>
               <div class="columns small-6">
                  <!-- <label for="last-name">Last Name</label> -->
                  <input type="text" name="last" id="last-name" placeholder="Last Name" required />
               </div>
            </div>
            <!-- <label for="email">Email</label> -->
            <input type="email" name="email" id="email" placeholder="Email Address" required /><br />
            <div class="row">
               <div class="columns xsmall-4">
                  <!-- <label for="area-code">Phone</label> -->
                  <input type="text" name="areaCode" id="area-code" class="margin-0-bottom-on-xsmall" placeholder="303" />
               </div>
               <div class="columns xsmall-4">
                  <!-- <label for="prefix">&nbsp;</label> -->
                  <input type="text" name="prefix" id="prefix" class="margin-0-bottom-on-xsmall" placeholder="555" />
               </div>
               <div class="columns xsmall-4">
                  <!-- <label for="line-number">&nbsp;</label> -->
                  <input type="text" name="lineNum" id="line-number" class="margin-0-bottom-on-xsmall" placeholder="1234" />
               </div>
            </div>
            <div class="row">
               <div class="column">
                  <p class="optional">(optional)</p>
               </div>
            </div>
            <!-- <label for="subject">Subject</label> -->
            <input type="text" name="subject" id="subject" placeholder="Subject" required /><br />
            <!-- <label for="message">Message</label> -->
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message . . ." required></textarea><br />
            <input type="submit" name="submit" class="button expand" value="SEND">
         </form>
      </div>
    </div>
  </section>
  <!--------------------------------- end Contact ------------------------------>

      $emailTo    = "scottcurrell@outlook.com";
      $emailSubj  = "NEW yogurtbrothers.com submission. Re: " . $subject;
      $emailIntro = "You have received the following message from yogurtbrothers.com:";

  <!-- page-specific scripts -->
  <!-- end page-specific scripts -->
</div><!-- end #container --></body>
</html>
