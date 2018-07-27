<?php
$name = $email = $message ="";
$textFile = "messages.txt";
if ($_SERVER["REQUEST_METHOD"] == "POST"){
	$name = test_input($_POST["name"]);
	$email = test_input($_POST["email"]);
	$message = test_input($_POST["message"]);
}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
$contents = "CUSTOMER MESSAGE" . "\n" . "NAME: " . $name . "\n" . "EMAIL: " . $email . "\n" . "MESSAGE: " . $message . "\n \n";
$file = fopen($textFile, "a");
fwrite($file, $contents);
fclose($file);
die(header("Location: ".$_SERVER["HTTP_REFERER"]));
?>