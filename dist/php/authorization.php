<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "genseldata";


$conn = new mysqli($servername, $username, $password, $dbname);


  
$user_email = $_POST['user__email'];
$user_password = md5($_POST['user__password']);
$user_orcidID = preg_replace('/[^0-9]/', '', $_POST['user__orcidID']);

    $result = $conn->query("SELECT * FROM user WHERE user_email = '$user_email' AND user_pass = '$user_password'");
    
    If (mysqli_num_rows($result) > 0){
        header('Location: ../mainAuthorizated.html');
    }

      

$conn->close();
?>