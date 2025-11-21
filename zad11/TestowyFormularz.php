<!DOCTYPE HTML>
<html>
    <head>
        <title>LOGOWANIE PHP</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="FstylPhp.css" type="text/css">
        
</head>
<body>

<h1>LOGOWANIE</h1>
<form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
    <div id="name">
       <p> Podaj imię:</p><input type="text" id="imię" name="imie">
    </div>
    <div id="sname">
        <p>Podaj nazwisko:</p><input type="text" id="nazw" name="nazwisko">
    </div>
    <div id="usern">
        <p>Podaj nazwę użytkownika:</p><input type="text" id="use" name="username">
    </div>
    <div id="pass">
    <p>Podaj hasło:</p><input type="password" id="has" name="password" required>
    </div>
    <div id="btn">
        <input type="submit" value="wyślij">
    </div>
    <p>Imię:</p>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $name = $_POST['imie'];
        if (empty ($name))
        {
            echo "Nie podano imienia :(";
        } else
            {
                echo $name;
            }
    }
    ?>
    <div>
   <p> Nazwisko: </p>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $surname = $_POST['nazwisko'];
        if (empty ($surname))
        {
            echo "Nie podano nazwiska :(";
        } else
        {
            echo $surname;
        }
    }
    ?>

    <p> Nazwa użytkownika:</p>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $user = $_POST['username'];
        if (empty($user))
        {
            echo "Nie podano nazwy użytkownika :(";
        } else
        {
            echo $user;
        }

    }
    ?>

    <p>Hasło:</p>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $haslo = $_POST['password'];
        if (empty($haslo))
        {
            echo "Nie podano hasła :(";
        } else
        {
            echo $haslo;
        }
    }
    ?>



</div>
</form>
</body>
</html>
