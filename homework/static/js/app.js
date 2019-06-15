var ufo_info = data;
var counter = true 

function base_lodaing(info)
{
    
    //console.log(data);
    var tbody = d3.select("tbody");
    tbody.html("");
    info.forEach(ufodata => {
    //console.log(ufodata)
    var row= tbody.append("tr");
        Object.entries(ufodata).forEach(([key,value])=> {
                //console.log(key,value);
                var cell = row.append("td");
                cell.text(value)
            })
    })
}


base_lodaing(ufo_info);









var filter = d3.select("#filter-btn");

// Use D3 `.on` to attach a click handler for the filter
filter.on("click", function() {

counter = false; 
d3.event.preventDefault();
    // Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");
console.log(inputValue);


function date_filter(ufo) 
{
    console.log("Control enetered here");
    console.log(ufo.datetime);
    return ufo.datetime===inputValue;
        
}
    
var selected_type = ufo_info.filter(date_filter);
console.log(`xyz : ${selected_type}`);

base_lodaing(selected_type);


});

