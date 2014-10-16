<?php
$tp = $_GET["type"];
$file_name = "image_".$tp.".csv";
$fp = fopen( $file_name, 'r' );
$cnt =0;
if($tp=="s"){
	$tgt = rand(0,873);
}
if($tp=="v"){
	$tgt = rand(0,247);
}
if($tp=="h"){
	$tgt = rand(0,724);
}
while( $ret_csv = fgetcsv( $fp ) ) {
	if($cnt == $tgt){
		$sps = $ret_csv;
		//echo($sps);
	}
	$cnt += 1;
  }
fclose( $fp );
$path = "http://www.shiroari.com/elload/".$sps[2];
$mime = shell_exec('file -bi '.escapeshellcmd($path));
$mime = trim($mime);
$mime = preg_replace("/ [^ ]*/", "", $mime);
$typ = 'Content-type: '.$mime;
echo '<a href="'.$sps[3].'"><img src="'.$path.'" /></a>';
//header($typ);
//readfile($path);
?>