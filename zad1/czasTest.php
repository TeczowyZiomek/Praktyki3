<?php

echo "Dziś jest: " .date("d-m-Y"). "<br>";
echo "Teraz jest: " .date("H:i:s"). "<br>";
date_default_timezone_set("America/New_York");
echo "A w Ameryce: " .date("H:i:s");

?>