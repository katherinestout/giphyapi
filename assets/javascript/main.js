
  
//topics array, we will dynamically create some buttons for this! and
//push more buttons in the array!
  var topics = ['mean girls', 'Bob Ross','Jersey Shore', 'ducks', 
'figure skating','barbie', 'sound of music'];




function displayGif(){
//empty 
    $("#newGifs").empty();

    var topic = $(this).attr("data-name");

//query url with api key
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=C3PI5AGfGcUmb8dIKbGlyuFoUh08PbKO";


//ajax call!
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      
      .then(function(response) {

        console.log(response);

        //I was thinking to limit the responses to use .slice or .val
        //results.slice (0,10);
        //$(results).val(10);

        //storing array of reults in the results variable
      var results = response.data;
      //loop!
      for(var i = 0; i < results.length; i++){

         //store rating
         var rating = results[i].rating;
         //making a p with rating in it
         var imgURL = results[i].images.fixed_height_still.url;

            var image = $("<img>").attr("src", imgURL);
            //add gif class

            $(image).addClass("gif");

            $("#newGifs").append(image);
       
        $("#newGifs").append("rating: " + rating).append(image);

}
});
}

function makeButtons (){
$("#newButtons").empty();
//empty the div

for (var i = 0; i < topics.length; i++){
    //loop over the topics you already made, and make buttons for them

    var a = $("<button>");

    a.addClass("gif-btn");

    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#newButtons").append(a);
}

}
//onclick event for the gif input
$("#add-gif").on("click", function(event){
    event.preventDefault();
    var topic = $("#gif-input").val().trim();
    topics.push(topic);
    makeButtons();
});

//necessary to make the gifs appear

$(document).on("click", ".gif-btn", displayGif);

makeButtons();




//add the pause and start!!!:(
