$(document).ready(function()  {
		
	$.getJSON("json/planets.json", function (data) {
			for (i=0; i < data.SOLAR_SYSTEM.PLANETS.PLANET.length; i++) {
				index = i + 1;
				$("#pname"+index).append(data.students.studentRec[i].name);
				$("#sage"+index).append(data.students.studentRec[i].age);
				$("#sgender"+index).append(data.students.studentRec[i].gender);
				prog = data.programs.program;
				for (j=0; j < prog.length; j++) {
					if (data.students.studentRec[i].program == prog[j].prog.substr(0,2)) {
						$("#sprogram"+index).html(prog[j].prog.substr(3,prog[j].prog.length));

					}
				}
				if (data.students.studentRec[i].coop) {
					$("#scoop"+index).append("COOP");}
				else { $("#scoop"+index).append("No COOP"); }
				for (j=0; j < data.students.studentRec[i].emails.length; j++) {
					$("#semails"+index).append(data.students.studentRec[i].emails[j] + "<br>");
				}

		}  
	});
});