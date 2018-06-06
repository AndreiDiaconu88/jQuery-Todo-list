// check off specific todos by clicking

$("ul").on("click", "li", function(){ 
	$(this).toggleClass("completed");
});


$("ul").on("click", "span",  function(e){
	$(this).parent().fadeOut(500, function(){ 
		$(this).remove();  
	}); 
	e.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newToDo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newToDo + "</li>")
	}
});


$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});
