 
 
 
$(document).ready(function(){

  //click function
  $('#submit').click(function(){

    displayCountryInfo();
    return false;

  });

    function makeElem(type, data, elemToappendTo){
      var childElem = $(type).text(data);

      elemToappendTo.append(childElem);
    }

    function displayCountryInfo(){


       //gives value for selected option
       var selectedCountry = ($('#country :selected').text());
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

        var selectBoxes6 =($('#selectBoxes6 :selected').text()).toLowerCase();

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

      countryDiv.empty();
      $('.results-container').empty();

         makeElem('<p>', "Country: " + selectedCountry,countryDiv);
        
         if(response[0][selectBoxes] != null) {
           makeElem('<p>', selectBoxes +": " + (response[0][selectBoxes]),countryDiv);
         }      
         
         if(response[0][selectBoxes2] != null) {
           makeElem('<p>', selectBoxes2 +": " + (response[0][selectBoxes2]),countryDiv);
         }
         
         if(response[0][selectBoxes3] != null) {
           makeElem('<p>', selectBoxes3 +": " + (response[0][selectBoxes3]),countryDiv);
         }

        if(response[0][selectBoxes4] != null) {
           makeElem('<p>', selectBoxes4 +": " + (response[0][selectBoxes4]),countryDiv);          
        } 

        if(response[0][selectBoxes5] != null){
         makeElem('<p>', selectBoxes5 +": " + (response[0][selectBoxes5]),countryDiv)
        }

       // appending results to main page
      $('.results-container').append(countryDiv);
    
    });


   //------------------------------------------------------------//
      //ajax for giphy api
   
   $.ajax({url: queryURL1, method: 'GET'}).done(function(responseImage){

       console.log(queryURL1);
       console.log(responseImage);

       var result = responseImage.data;

       for(var i = 0; i < result.length; i++){

       var imageDiv = $('<div class ="imageDiv">');

       imageDiv.empty();
       $('.image-container').empty();

       var countryImage = $('<img>');

       countryImage.attr('src',result[i].images.fixed_height_still.url);
      
       imageDiv.append(countryImage);

       $('.image-container').append(imageDiv);

      }
   })
     
 //-----------------------------------------------//

var lifeExpectancy = "life expectancy at birth";
if (selectBoxes == lifeExpectancy || selectBoxes2 == lifeExpectancy || selectBoxes3 == lifeExpectancy || selectBoxes4 == lifeExpectancy || selectBoxes5 == lifeExpectancy || selectBoxes6 == lifeExpectancy ) {


//  Racquel's code for UN Data 
  // make the AJAX request

// http://api.undata-api.org/WHO/Life%20expectancy%20at%20birth/Germany/records?app_id=9ed2c241&app_key=09a895dafcf6e70bad03bef56317f454

 $.getJSON('http://api.undata-api.org/WHO/' + "Life expectancy at birth" + '/' +
  selectedCountry +
  '/records?app_id=9ed2c241&app_key=09a895dafcf6e70bad03bef56317f454',
  function(data) {
    console.log(data);

    // do all this on success       
    var items = [],
      $ul;
    $.each(data, function(key, val) {
      //iterate through the returned data and build a list
        items.push('<li class="table" id="' + key + '"><span>' + val.gender +
          '</span><span> life expectancy was ' + val.value +
          ' years old</span><span> in the year ' + val.year +
          '.</span></li>');
    });
    // append list to page

    $("#contentTwo").empty();

    $ul = $('<ul />').appendTo('#contentTwo');
    //append list items to list
    $ul.append(items);
  });



}

  



 //-----------------------------------------------//
   

   }
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
            "<option>Life Expectancy at Birth</option>" +
            "</select> " +
           "<br />"
            
    )

   
})





  

//--------------------------------------------------------------------

