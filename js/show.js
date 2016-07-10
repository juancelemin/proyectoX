     
$('#Showbutton').click(function(event){
	
	var p = $('#Showbutton').text();

	
	if (p =="mostar mas") {
		$('#Showbutton').text("ocultar");
	} else{
		$('#Showbutton').text("mostar mas");
		$('#Showbutton').attr({'href':"#Showbutton"})
	};
	
	$('.descripcion').toggle("display")
	

});


     