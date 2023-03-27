<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "genseldata";


$conn = new mysqli($servername, $username, $password, $dbname);


    $pref = $_POST['user__prefix'];
$firstName = $_POST['user__firstName'];
$middleName = $_POST['user__middleName'];
$lastName = $_POST['user__lastName'];
$affiliation = $_POST['user__affiliation'];
$city = $_POST['user__city'];
$zipCode = $_POST['user__zipCode'];
$country = $_POST['user__country'];
$email = $_POST['user__email'];
$password = $_POST['user__password'];
$orcidID = preg_replace('/[^0-9]/', '', $_POST['user__orcidID']);

$password = md5($password);

    $sql = "INSERT INTO user (user_prefix_id, user_first_name, user_middle_name, user_last_name, user_affiliation,user_city_id ,user_country_id , user_email, user_pass, user_status_id, user_orcid, user_zipcode) 
    VALUES ('1', '$firstName','$middleName', '$lastName', '$affiliation','3','1', '$email', '$password', '1', '$orcidID', '$zipCode')";
    
    $conn->query($sql);
    header('Location: ../mainAuthorizated.html');
    

$conn->close();

?>