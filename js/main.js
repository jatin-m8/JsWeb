function getRandomJSMACRO() {
  const str = "JSMACRO".split("");
  for (let i = str.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [str[i], str[j]] = [str[j], str[i]];
  }
  return str.join("");
}

// Example usage:
const uniqueID = getRandomJSMACRO();
console.log(`${uniqueID}`);



    

var link = "";
function val(id){
	return $("#"+id).val();
}
function senddata(data){
	$("iframe").attr("src",$("#webhookurl").val()+data);
}
$(document).ready(function(){
	$(".title").append("<br>");
	$("button").before("<br>");
	$(".xy").trigger("click");
	$("#simple").trigger("click");
	$("iframe").hide();
})




$(".xy").click(function(){
	$("section").hide();
	$("#xy").show();
	$('.TA-BTN').removeClass("selected");
	$(this).addClass("selected");
})
$(".text").click(function(){
	$("section").hide();
	$("#text").show();
	$('.TA-BTN').removeClass("selected");
	$(this).addClass("selected");
})
$(".gesture").click(function(){
	$("section").hide();
	$("#gesture").show();
	$('.TA-BTN').removeClass("selected");
	$(this).addClass("selected");
})
$(".id").click(function(){
	$("section").hide();
	$("#id").show();
	$('.TA-BTN').removeClass("selected");
	$(this).addClass("selected");
})




$("#advanced").click(function(){
	$("#advancedvar").show();
	$("#simplevar").hide();
})
$("#simple").click(function(){
	$("#simplevar").show();
	$("#advancedvar").hide();
})
$("#websaver").click(function(){
	if($("#webhookurl").val()){
		link = $("#webhookurl").val();
		$(".modalDialog").hide(150);
	}else{
		$("#warning").css("color","white");
		$("#warning").css("text-shadow","0px 2px 4px red");
		$("#warning").text("Please Enter Webhook URL Before Proceeding...");
	}
})

