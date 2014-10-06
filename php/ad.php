<?php
$path = "/var/www/html/elload/image/out/c046c3bb9673409a4a07c811e90111e9217f9ec0(.)";
$mime = shell_exec('file -bi '.escapeshellcmd($path));
$mime = trim($mime);
$mime = preg_replace("/ [^ ]*/", "", $mime);
$typ = 'Content-type: '.$mime;
header($typ);
readfile($path);
?>