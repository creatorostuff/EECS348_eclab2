function alert_paragraph_color(){

	var border_R = document.getElementById("border_R").value;
	var border_G = document.getElementById("border_G").value;
	var border_B = document.getElementById("border_B").value;
	var border_width = document.getElementById("border_width").value;
	var bg_R = document.getElementById("bg_R").value;
	var bg_G = document.getElementById("bg_G").value;
	var bg_B = document.getElementById("bg_B").value;

	document.getElementById("paragraph").style.borderColor ='rgb(' + border_R + ',' + border_G + ',' + border_B + ')';

	document.getElementById("paragraph").style.borderWidth = border_width;

	document.getElementById("paragraph").style.backgroundColor='rgb(' + bg_R + ',' + bg_G + ',' + bg_B + ')';

}


function validate(){
	
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;

	if (pass1.length < 8){
		alert("First Password must be at least 8 characters long!");
	}
	else if (pass2.length < 8){
		alert("Second Password must be at least 8 characters long!");
	}
	else if (pass1 === pass2){
		alert("Passwords correctly matched!");
	}
	else {
		alert("Passwords do not match!");
	}

}
