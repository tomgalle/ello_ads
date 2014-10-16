<?php
$file_name = "image.csv";
$fp = fopen( $file_name, 'r' );
$cnt =0;
$tgt = rand(0,3081);
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