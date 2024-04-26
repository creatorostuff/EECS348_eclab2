<?php

echo "<table border=\"1\">";

$val = $_POST["size"];

echo('<tr><td></td>');
for ($j=1; $j<=$val; $j++){
	echo('<td>' .$j.'</td>');
}
echo('</tr>');

for ($i=1; $i<=$val; $i++){

	echo('<tr><td>' .$i.'</td>');

	for($k=1; $k<=$val; $k++){
		echo( '<td>' .$k*$i.'</td>');
	}

	echo('</tr>');

}

echo("</table>");
?>
