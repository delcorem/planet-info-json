$(document).ready(function()  {
		
    // Takes the planets.json file and loads all the data into the html table
	$.getJSON("json/planets.json", function (data) {
			for (i=0; i < data.SOLAR_SYSTEM.PLANETS.PLANET.length; i++) {
				index = i + 1;
                planet = data.SOLAR_SYSTEM.PLANETS.PLANET;
				$("#pname"+index).append(planet[i].NAME);
				$("#distance"+index).append(planet[i].DISTANCE);
				$("#radius"+index).append(planet[i].RADIUS);
                $("#year"+index).append(planet[i].LENGTH_OF_YEAR);
                $("#day"+index).append(planet[i].DAY);
                $("#mass"+index).append(planet[i].MASS);
                $("#density"+index).append(planet[i].DENSITY);

                // Checks if satellite info exists, and if it does, loads it into a list in the satellite column
                if(planet[i].hasOwnProperty("SATELLITES")) {

                    // Checks if length is undefined, which means that there is only one satellite value
                    if(planet[i].SATELLITES.SATELLITE.length === undefined) {
                        $("#satellites"+index).append("<ul><li><strong>Name:</strong> " 
                            + planet[i].SATELLITES.SATELLITE.NAME 
                            + "</li><li><strong>Distance from Planet:</strong> " 
                            + planet[i].SATELLITES.SATELLITE.DISTANCE_FROM_PLANET 
                            + "</li><li><strong>Orbit:</strong> " 
                            + planet[i].SATELLITES.SATELLITE.ORBIT 
                            + "</li></ul>");
                    }
                    else {
                        // Adds an unordered list for each satellite orbiting the planet
                        for(j=0; j < planet[i].SATELLITES.SATELLITE.length; j++) {
                        $("#satellites"+index).append("<ul><li><strong>Name:</strong> " 
                            + planet[i].SATELLITES.SATELLITE[j].NAME 
                            + "</li><li><strong>Distance from Planet:</strong> " 
                            + planet[i].SATELLITES.SATELLITE[j].DISTANCE_FROM_PLANET 
                            + "</li><li><strong>Orbit:</strong> " 
                            + planet[i].SATELLITES.SATELLITE[j].ORBIT 
                            + "</li></ul>");
                        }
                    }
                }
                else {
                    // If there is no satellite, then N/A
                    $("#satellites"+index).append("N/A");
                }
		}  
	});
});