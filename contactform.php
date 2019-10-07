<?php

if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $services = $_POST['service'];
  $subject = $_POST['subject'];


  $mailTo = "benbasty@gmail.com"
  $headers = "From: $mailFrom \r\n";
  // $txt = "You have received an email from ".$name.".\n\n".$subject;
  $txt = "User Name: $name.\n".
         "User email: $mailFrom.\n".
         "User message: $subject.\n";



  mail($mailTo, $services, $txt, $headers);
  header("Location: index.html");


}


 ?>
