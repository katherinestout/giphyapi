
  

  var topics = ['mean girls', 'Bob Ross','Jersey Shore', 'ducks', 
'figure skating','barbie', 'sound of music'];




function displayGif(){

    $("#newGifs").empty();

    var topic = $(this).attr("data-name");


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=C3PI5AGfGcUmb8dIKbGlyuFoUh08PbKO";



    $.ajax({
        url: queryURL,
        method: "GET"
      })
      
      .then(function(response) {

        //console.log(response);
        //storing array of reults in the results variable
      var results = response.data;
      //loop!
      for(var i = 0; i < results.length; i++){

         //store rating
         var rating = results[i].rating;
         //making a p with rating in it
         var imgURL = results[i].images.fixed_height_still.url;

            var image = $("<img>").attr("src", imgURL);

            $(image).addClass("gif");

            $("#newGifs").append(image);
       
        $("#newGifs").append("rating: " + rating).append(image);

}
});
}

function makeButtons (){
$("#newButtons").empty();

for (var i = 0; i < topics.length; i++){

    var a = $("<button>");

    a.addClass("gif-btn");

    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#newButtons").append(a);
}

}

$("#add-gif").on("click", function(event){
    event.preventDefault();
    var topic = $("#gif-input").val().trim();
    topics.push(topic);
    makeButtons();
});

$(document).on("click", ".gif-btn", displayGif);

makeButtons();
