 
 
 
$(document).ready(function(){
  //click function
  $('#submit').click(function(){
  	function makeElem(type, data, elemToappendTo){
  		var childElem = $(type).text(data);

  		elemToappendTo.append(childElem);
  	}

  	function displayCountryInfo(){
  	   //gives value for selected option
  	   var selectedCountry = ($('#country :selected').text()).toLowerCase();
  	     //alert(selectedCountry);
  	       //console.log(selectedCountry);
  	
  	   var selectBoxes =($('#selectBoxes :selected').text()).toLowerCase();
  	    // alert(selectBoxes); 

  	   var selectBoxes2 =($('#selectBoxes2 :selected').text()).toLowerCase();
         //alert(selectBoxes2);

       var selectBoxes3 =($('#selectBoxes3 :selected').text()).toLowerCase();
        // alert(selectBoxes3);

       var selectBoxes4 =($('#selectBoxes4 :selected').text()).toLowerCase();
        // alert(selectBoxes4);

       var selectBoxes5 =($('#selectBoxes5 :selected').text()).toLowerCase();
         //alert(selectBoxes5);
         //restcountry api  
  	   var queryURL = ("https://restcountries.eu/rest/v1/name/" + selectedCountry );
     
       //console.log(queryURL);
         //giphy api
       var queryURL1 = "https://api.giphy.com/v1/gifs/search?q=" + selectedCountry + "+map&api_key=dc6zaTOxFJmzC&limit=1";
  
       //console.log(queryURL1);
    
       
  //ajax for restcountry api

   $.ajax({url: queryURL, method: 'GET'}).done(function(response){

  	 console.log(response[0][selectBoxes]);

     console.log(response[0].Capital);
  
     //prints facts results
      
      var countryDiv = $('<div class = "countryDiv" >');

         makeElem('<p>', "Country: " + selectedCountry,countryDiv);
      
         makeElem('<p>', selectBoxes +": " + (response[0][selectBoxes]),countryDiv);
         
         makeElem('<p>', selectBoxes2 +": " + (response[0][selectBoxes2]),countryDiv);
         
         makeElem('<p>', selectBoxes3 +": " + (response[0][selectBoxes3]),countryDiv);

         makeElem('<p>', selectBoxes4 +": " + (response[0][selectBoxes4]),countryDiv);

         makeElem('<p>', selectBoxes5 +": " + (response[0][selectBoxes5]),countryDiv)
       // appending results to main page
      $('.container').append(countryDiv);
    
    });


   //------------------------------------------------------------//
      //ajax for giphy api
   
   $.ajax({url: queryURL1, method: 'GET'}).done(function(responseImage){

       console.log(queryURL1);
       console.log(responseImage);

       var result = responseImage.data;

       for(var i = 0; i < result.length; i++){

       var imageDiv = $('<div class ="imageDiv">');

       var countryImage = $('<img>');

       countryImage.attr('src',result[i].images.fixed_height_still.url);
      
       imageDiv.append(countryImage);

       $('.container').append(imageDiv);

      }
   })
     
 //-----------------------------------------------//
   
   return false;

   }
  	 $(document).on('click', displayCountryInfo);
  });
});
 
 
//--------------------------------------------------------------------
//adds new dropdown line for more facts
var number = 1;


  $("#add").on("click",function(){
    number++;
   $("#selectBoxes"+number).append(
    
           "<select class='form-control'>"+
            "<option>Select</option> " +
            "<option>Region</option> " +
            "<option>Subregion</option> " +
            "<option>Capital</option> " +
            "<option>Area</option> " +
            "<option>Population</option> " +
            
            "</select> " +
           "<br />"
            
    )

   
})





  

//--------------------------------------------------------------------

