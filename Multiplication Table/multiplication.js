var color;
document.write("<table border='1px'>");

for(var i = 1; i < 13; i++) {

	document.write("<tr style='height:30px;'>");

	for(var j = 1; j < 13; j++) {

		if(j == 1 || i == 1) {
			color = "#ccc";
		}
		else {
			color = "#fff";
		}

		document.write("<td style='width:30px;background-color:" + color + "'>" + i*j + "</td>");
	}
	document.write("</tr>");
}

document.write("</table>");
