$("#b1").click(function(){
    $("#h1").animate({
            left:'300px',
            width:"100px"
        })
});
$("#b2").click(function(){
    $("#h2").animate({
            left:'+=40',
            width:"+=20",
            fontSize:"40px"
        } ,1000, function(){
            console.log("DONE");
        })
});

//https://api.jquery.com/animate/