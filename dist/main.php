<?php require_once('php/registration.php')?>

<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="wigth=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.min.css">
    <title>GenSelData</title>
</head>
    <body>

    <?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "genseldata";

// Создаем соединение с базой данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение на ошибки
if ($conn->connect_error) {
    die("Ошибка соединения: " . $conn->connect_error);
}
echo "Соединение с базой данных установлено успешно";


$query = "SELECT animal_category_id FROM animal_category"; //готовим запрос. будем выбирать все из //таблицы workers

$result = $conn->query($query); // выполняем запрос query.
//объект результата сохраняем в $result

while ($row = $result->fetch_assoc()) {
    echo $row["animal_category_id"];
}
$conn->close();

?>
    
        <header class = "header lock-padding">   
    <div class="container">
        <a href="main.html"><img src="../img/logo.svg" alt="Logo"></a>
        <div class="menu">
            <nav class="menu__body">
                <ul class="menu__list">
                    <li class="menu__item"><a href="" class="menu__link1">Library</a></li>
                    <li class="menu__item"><a href="" class="menu__link2">Help</a></li>
                </ul> 
            </nav>
        </div>
        <a href="#login" class="header__user popup-link">Log In</a>
    </div>        
</header>
        <div id="login" class="popup">
    <div class="popup__body">
        <div class="popup__content">
            <h1>Log In</h1>
            <form action="#" method="post" enctype="multipart/form-data">
                <div class="email">
                    <p>E-mail*</p>
                    <input tabindex="1" required name="user__email" placeholder="E-mail" type="email">
                </div>
                <div class="password">
                    <p>Password*</p>
                    <input tabindex="2" required name="user__password" placeholder="Password" type="password">
                </div>
                <a href="#forgotPas" class="popup-link">Forgot your password?</a>
                <div class="orcidID">
                    <p>Orcid ID*</p>
                    <input tabindex="3" required data-mask="orcidid" name="user__orcidID" placeholder="xxxx-xxxx-xxxx-xxxx" type="text">
                </div>
                <div class="submitButton">
                    <button type="submit">Log In</button>
                </div>
                <a href="#registration" class="popup-link">Don’t have an account? Join us</a>
            </form>
        </div>
    </div>
</div>
        <div id="forgotPas" class="popup">
    <div class="popup__body">
        <div class="popup__content">
            <h1>Forgot your password?</h1>
            <div class="text">
                Enter the email address associated with your account and we’ll
                send you a link to reset your password.</div>
            <form action="#" method="post" enctype="multipart/form-data">
                <div class="email">
                    <p>E-mail*</p>
                    <input tabindex="1" required name="user__email" placeholder="E-mail" type="email">
                </div>
                <div class="submitButton">
                    <button type="submit">Send password reset instructions</button>
                </div>
            </form>
        </div>
    </div>
</div>
        <div id="registration" class="popup">
    <div class="popup__body">
        <div class="popup__content">
            <h1>Sign Up</h1>
            <a href="#login" class="popup-link">Already have an account? Log In</a>
            <form action="#" method="post" enctype="multipart/form-data">
                
                <div class="form">
                    <div class="column1">

                    
                <div class="prefix">
                    <p>Prefix*</p>
                    <select name="user__prefix" tabindex="1" required>
                        <option value="0">None</option>
                        <option value="1">Mr</option>
                        <option value="2">Mrs</option>
                        <option value="3">Miss</option>
                        <option value="4">Ms</option>
                        <option value="5">Mx</option>
                        <option value="6">Dr</option>
                        <option value="7">Prof</option>
                    </select>
                </div>   

                <div class="firstName">
                    <p>First Name*</p>
                    <input tabindex="2" name="user__firstName" placeholder="First Name" required type="text">
                </div>

                <div class="middleName">
                    <p>Middle Name</p>
                    <input tabindex="3" name="user__middleName" placeholder="Middle Name" type="text">
                </div>

                <div class="lastName">
                    <p>Last Name*</p>
                    <input tabindex="4" name="user__lastName" placeholder="Last Name" required type="text">
                </div>

                <div class="affiliation">
                    <p>Affiliation* (Please, use the official name of the Institution)</p>
                    <input tabindex="5" name="user__affiliation" placeholder="Affiliation" required type="text">
                </div>
            </div>

                <div class="column2">
                <div class="city">
                    <p>City*</p>
                    <input tabindex="6" name="user__city" placeholder="City" required type="text">
                </div>

                <div class="zipCode">
                    <p>Zip Code*</p>
                    <input tabindex="7" name="user__zipCode" placeholder="Zip Code" data-mask="zipCode" required type="text">
                </div>

                <div class="country">
                    <p>Country*</p>
                    <select name="user__country" id="countriesList" tabindex="8" required>
                        <option value="">--Choose country--</option>
                        
                    </select>
                </div>

                <div class="email">
                    <p>E-mail*</p>
                    <input tabindex="9" name="user__email" placeholder="E-mail" required type="email">
                </div>

                <div class="orcidID">
                    <p>Orcid ID*</p>
                    <input tabindex="10" required data-mask="orcidid" name="user__orcidID" placeholder="xxxx-xxxx-xxxx-xxxx" type="text">
                </div>
            </div>

                <div class="password">
                    <p>Password*</p>
                    <input tabindex="11" required name="user__password" placeholder="Password" type="password" >
                </div>

                <div class="submitButton">
                    <button type="submit">Sign Up</button>
                </div>
            </div>
            </form>
        </div>
    </div>
</div>
        <script src="js/app.min.js"></script>
    </body>
</html>