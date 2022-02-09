//create an initialize function
function initialize(){
    cities();
};

function cities(){
    //define an array of objects for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];
    //create a table 
	var table = document.createElement("table");

	//create a header and add it
	var headerRow = document.createElement("tr");
	table.appendChild(headerRow);

	//Add in titles for city and population values
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
	
	//Add new row for each value in the cityPop array
    cityPop.forEach(function(cityPop){
		
		var rowHtml = "<tr><td>" + cityPop.city + "</td><td>" + cityPop.population + "</td></tr>";
		table.insertAdjacentHTML('beforeend',rowHtml);
	})
	
	//Add the created table to the div with id 'mydiv'
	document.querySelector("#mydiv").appendChild(table);
    //call addEvents function
    addEvents();
    //call addColumns function and pass cityPop array through it
    addColumns(cityPop);
    
}

//call the initialize function
window.onload = initialize();
//create function to add another column to the table
function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
            //Add a new column title called 'City Size' in the first row
    		row.insertAdjacentHTML('beforeend', '<th> City Size</th>');
    	} else {
            //create a new variable 'citySize' and assign it a value of Small, Medium or Large based on the population
    		var citySize;
            
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';

    		};

            //create new table element 'td' and then assign the new cell the value of citySize
    		var newColumn = document.createElement('td')
			newColumn.innerHTML = citySize
			row.appendChild(newColumn)	
          	

			    
    	};
    });
};
//create function to add events
function addEvents(){
    //create a mousover event
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){
            //color is picked randomly
			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
            };
		};
        //assign the randomly selected color to the table on mouseover
		document.querySelector("table").style.color = color;
	});
    //create a new function for click
	function clickme(){

		alert('Hey, you clicked me!');
	};
    //create click event that displays the given text
	document.querySelector("table").addEventListener("click", clickme)
};

