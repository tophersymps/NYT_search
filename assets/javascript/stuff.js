$("#search").on("click", function(event) {
    var recordNum = document.getElementById("recordNum").value;
    console.log(recordNum);
    var startYear = document.getElementById("startYear").value;
    var endYear = document.getElementById("endYear").value;
    
    var searchTerm = document.getElementById("searchTerm").value;
    
    //Optional Variables for begin and end Years.
    //creates a string to append to the end of the queryURL if a value is typed by the user.
    if (startYear.length > 0) {      
        startYear = "&begin_date=" + startYear + "0101";
        console.log(startYear);
    }

    if (endYear.length > 0) {    
        endYear = "&end_date=" + endYear + "1231";
        console.log(endYear);
    }
    
    console.log(searchTerm);
    //Because it's a submit button, add the below line to prevent the browser from "sending to server" which clears the page.
    event.preventDefault();
    
    var apiKey = "81a3e43da9e24b3285a99005a7c47536";
    var apiKey = "&api_key=" + apiKey;

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + apiKey + startYear + endYear;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var results = response.data;
        console.log(response);

    }); //end then, ajax call
}); //end #search click