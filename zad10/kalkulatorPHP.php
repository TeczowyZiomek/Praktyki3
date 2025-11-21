<!doctype html>
<html lang="pl">
<head>
        <title>Kalkulator</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="KalkStyl.css" type="text/css">
</head>
<body>
    <form method="POST" action="">
    <div id="naglowek">
        <?php include 'czas test.php';?>
    <h1>KALKULATOR</h1>
    </div>
    <div id="n1">
      Wpisz liczbę:  <input type="text" id="First" name="liczba1">
    </div>
    
        <p>Wybierz znak:</p>
    
    <div id="radio1">
        <input type="radio" id="r1" name="znak" value="+"> 
        <label for="r1">+</label>
    </div>
    <div id="radio2">
        <input type="radio" id="r2" name="znak" value="-">
        <label for="r2">-</label>
    </div>
    <div id="radio3">
        <input type="radio" id="r3" name="znak" value="*">
        <label for="r3">*</label>
    </div>
    <div id="radio4">
        <input type="radio" id="r4" name="znak" value="/">
        <label for="r4">/</label>
    </div>
    <div id="n2">
      Wpisz liczbę: <input type="text" id="Second" name="liczba2">
    </div>
    <div id="sub">
        <input type="submit" id="btn" value="Licz">
    </div> 
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['liczba1']) && isset($_POST['liczba2']) && isset($_POST['znak'])) {
        $liczba1 = $_POST['liczba1'];
        $liczba2 = $_POST['liczba2'];
        $znak = $_POST['znak'];
        echo 'Wynik: ' . $liczba1 . ' ' . $znak . ' ' . $liczba2 . ' = ';
        switch($znak) 
        {
            case "+":
                echo $liczba1 + $liczba2; break;
            case "-":
                echo $liczba1 - $liczba2; break;
            case "*": 
                echo $liczba1 * $liczba2; break;
            case "/":
                if ($liczba2 != 0) {
                    echo $liczba1 / $liczba2; 
                } else {
                    echo "Błąd: Dzielenie przez zero!";
                }
                break;         
        }
    }
    ?>


</body>
</html>






</body>