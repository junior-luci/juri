<?php 
$url = "http://" . $_SERVER['SERVER_NAME'] ; 
header("Location: $url/grafik.html", TRUE, 301);
exit();
?>