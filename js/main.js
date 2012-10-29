// New App Form

$(document).on("pageinit", function (){


	$('#addRecipe').on("pageinit", function (){
		
		/*
var save = $('#submit');
		save.on('click')
*/
		
	});


	
	$('#data').on('pageinit', function() {
		
		

	// JSON Data Loader
	    $('#Json').on("click", function(){
		    console.log("Json");
	        $('#LoadedData').empty();
	        $.ajax({
	            url: 'xhr/recipes.JSON',
	            type: 'GET',
	            dataType: 'json',
	            success: function(response){
					console.log(response);
					$.each(response, function(key, value) {
						$(''+
							'<div">' +
								'<p>' + value.recipename[0] + " " + value.recipename[1] + '</p>' +
								'<p>' + value.groups[0] + " " + value.groups[1] + '</p>' +
								'<p>' + value.rating[0] + " " + value.rating[1] + '</p>' +
								'<p>' + value.date[0] + " " + value.date[1] +  '</p>' +
								'<p>' + value.checks[0] + " " + value.checks[1] + '</p>' +
								'<p>' + value.directions[0] + " " + value.directions[1] + '</p>' +
								'<hr />' +
							'</div>'
						).appendTo('#LoadedData');
					});
	            },
	            error: function(msg) {
	            	console.log("Error.");
	            	console.log(msg);
	            }
	        });
	    });
	
	// XML Data Loader	
		    $('#XML').on("click", function(){
		   	console.log("XML");
	        $('#LoadedData').empty();
	        $.ajax({
	            url: 'xhr/recipes.xml',
	            type: 'GET',
	            dataType: 'xml',
	            success: function(xml){
	            	// console.log(xml);
	                $(xml).find('recipe').each(function(){
	                    var XMLRec = {};
	                    XMLRec.recipename = $(this).find('recipeName').text();
	                    XMLRec.group = $(this).find('group').text();
	                    XMLRec.rating = $(this).find('rating').text();
	                    XMLRec.date = $(this).find('date').text();
	                    XMLRec.checks = $(this).find('checks').text();
	                    XMLRec.directions = $(this).find('directions').text();
	                    $(' '+
	                        '<div>'+
	                            '<p>'+ 'Recipe name: ' + XMLRec.recipename +'</p>'+
	                            '<p>'+ 'Group: ' + XMLRec.group +'</p>'+
	                            '<p>'+ 'Rating: ' + XMLRec.rating +'</p>'+
	                            '<p>'+ 'Date: ' + XMLRec.date +'</p>'+
	                            '<p>'+ 'Meal Time: ' + XMLRec.checks +'</p>'+
	                            '<p>'+ 'Directions ' + XMLRec.directions +'</p>' +
	                            '<hr/>' +
	                            
	                        '</div>'
	                    ).appendTo('#LoadedData');
	                    console.log(xml);
	                });
	            },
	        });
	    });

	
	 });

});