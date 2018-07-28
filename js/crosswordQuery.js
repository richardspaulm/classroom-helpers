window.onload = function(){
$("#size1").css("background-color",  "red");
var formScale = 10;
var formHeight = 8;
var formSize = 1;
/*Hide/Show Instruction popup*/
//Show Instructions
$("#scrollButtonTools").click(function(){
	$("#toolInstructions").show();
});
//Hide Instructions
$("#instructionButton").click(function(){
	$("#toolInstructions").hide();
});	
//Set Form Size
$("#sizeButton1").click(function(){
	if(formSize > 1){
		formSize--;
		if(formSize >= 1){
			$("#size1").css("background-color", "red");
		}if(formSize >= 2){
			$("#size2").css("background-color", "red");
		}else{
			$("#size2").css("background-color", "#E7E2E6");
		}if(formSize >= 3){
			$("#size3").css("background-color", "red");
		}else{
			$("#size3").css("background-color", "#E7E2E6");
		}if(formSize >= 4){
			$("#size4").css("background-color", "red");
		}else{
			$("#size4").css("background-color", "#E7E2E6");
		}if(formSize >= 5){
			$("#size5").css("background-color", "red");
		}else{
			$("#size5").css("background-color", "#E7E2E6");
		}
	}
	entryDiv.innerHTML = "";
	DrawForm();
});
$("#sizeButton2").click(function(){
	if(formSize < 5){
		formSize++;
		if(formSize >= 1){
			$("#size1").css("background-color", "red");
		}if(formSize >= 2){
			$("#size2").css("background-color", "red");
		}else{
			$("#size2").css("background-color", "#E7E2E6");
		}if(formSize >= 3){
			$("#size3").css("background-color", "red");
		}else{
			$("#size3").css("background-color", "#E7E2E6");
		}if(formSize >= 4){
			$("#size4").css("background-color", "red");
		}else{
			$("#size4").css("background-color", "#E7E2E6");
		}if(formSize >= 5){
			$("#size5").css("background-color", "red");
		}else{
			$("#size5").css("background-color", "#E7E2E6");
		}
	}
	entryDiv.innerHTML = "";
	DrawForm();
});
//Draw Initial Form
DrawForm();
var inputNumbers = $(".numberList");
var inputText = $(".crossInput");

function DrawForm(){

	$("#entryDiv").empty();
	if(formSize == 1){
		formScale = 10;
		formHeight = 8;
		var entryTableId = "entryTable1";
	} else if(formSize == 2){
		formScale = 12;
		formHeight = 8;
		var entryTableId = "entryTable2";
	} else if(formSize == 3){
		formScale = 14;
		formHeight = 9;
		var entryTableId = "entryTable3";
	} else if(formSize == 4){
		formScale = 16;
		formHeight = 10;
		var entryTableId = "entryTable4";
	} else if(formSize == 5){
		formScale = 18;
		formHeight = 10;
		var entryTableId = "entryTable5"
	}
	var formHtml = "<table id='" + entryTableId + "'>";
	for(i = 0; i < formHeight; i++){
		formHtml += "<tr id='divRow'>";
		for(ii=0; ii < formScale; ii++){
			formHtml += "<td style='background-color: '#E7E2E6'><input maxlength='1' class='crossInput'><p class='numberList'></p><td>";
		}
		formHtml += "</tr>";
	}
	$("#entryDiv").append(formHtml);
	inputNumbers = $(".numberList");
	inputText = $(".crossInput");

}
//Check if input is filled
$(document).delegate("td input", "keyup", function(){
	if($(this).val().length > 0)
		$(this).css("background-color", "blue");
	else
		$(this).css("background-color", "#E7E2E6");
});
//Set Clue Number
$(document).delegate("td p", "click", function(){
	if($(this).html() == ""){
		var str = "1";
		$(this).html(str);
	} else if($(this).html() == "1"){
		var str = "2";
		$(this).html(str);
	} else if($(this).html() == "2"){
		var str = "3";
		$(this).html(str);		
	} else if($(this).html() == "3"){
		var str = "4";
		$(this).html(str);		
	} else if($(this).html() == "4"){
		var str = "5";
		$(this).html(str);		
	} else if($(this).html() == "5"){
		var str = "6";
		$(this).html(str);		
	} else if($(this).html() == "6"){
		var str = "7";
		$(this).html(str);		
	} else if($(this).html() == "7"){
		var str = "8";
		$(this).html(str);		
	} else if($(this).html() == "8"){
		var str = "9";
		$(this).html(str);		
	} else if($(this).html() == "9"){
		var str = "";
		$(this).html(str);
	}
});
//Add Vertical Clue
var vertCount = 1;
$("#newVerticalClue").click(function(){
	vertCount++;
	var vertClueHtml = "<div id='hint'><p>" + vertCount.toString() + "</p><textarea id='verticalClue'></textarea></div>";
	$("#verticalClueGroup").append(vertClueHtml);
});
//Remove Vertical Clue
$("#removeVerticalClue").click(function(){
	if(vertCount >= 2){
		$("#verticalClueGroup").children().last().remove();
		vertCount -= 1;
	}
});
//Add Horizontal Clue
var horiCount = 1;
$("#newHorizontalClue").click(function(){
	horiCount++;
	var horiClueHtml = "<div id='hint'><p>" + horiCount.toString() + "</p><textarea id='horizontalClue'></textarea></div>";
	$("#horizontalClueGroup").append(horiClueHtml);
});
//Remove Horizontal Clue
$("#removeHorizontalClue").click(function(){
	if(horiCount >= 2){
		$("#horizontalClueGroup").children().last().remove();
		horiCount -= 1;
	}
});

$("#printButton").click(DrawBoard);
/*PRINT PAGE*/
function DrawBoard(){
	var printDiv = $("#printable").append("<div class='randomPrintable' id='randomPrintable'>");
	if($("#bingoTitle").val() == "")
	$("#randomPrintable").append("<h1 id='bingoHead'>Crossword!</h1>");
	else if($("#bingoTitle").val() != "")
	$("#randomPrintable").append("<h1 id='bingoHead'>" + $("#bingoTitle").val() + "</h1>");
	
	var tableString = "table" + formScale.toString();
	var tableHtml = "<table id='" + tableString + "'>";
	var totalCount = 0;
	for(j = 0; j < formHeight; j++){
		tableHtml += "<tr>";
		for(jj = 0; jj < formScale; jj++){
			tableHtml += "<td class='crossData'>" + inputNumbers[totalCount].innerHTML + "</td>";
			totalCount++;
		}
		tableHtml += "</tr>";
	}
	tableHtml += "</table>";
	$("#randomPrintable").append(tableHtml);
	var checkCount = 0;
	var crossInput = $(".crossInput");
	$(".crossData").each(function(){
		if(crossInput[checkCount].value.length > 0){
			$(this).attr("id", "filled");
		}
		checkCount++;
	});
	var clueHtml = "<h1 id='wordsHeaderCross'>Clues</h1><div><div id='verticalClueContainer'><h3>Vertical Clues</h3></div><div id='horizontalClueContainer'><h3>Horizontal Clues</div></div>"
	$("#randomPrintable").append(clueHtml);
	var vertGroup = $("#verticalClueGroup textarea");
	for(k = 0; k < $("#verticalClueGroup").children().length; k++){
		var clueDiv = "<div id='clueDiv'><p id='clueCount'>" + (k+1).toString() 
			+ "</p><p id='clueText'>" + vertGroup[k].value + "</p></div>";
			$("#verticalClueContainer").append(clueDiv);
	}
	var horiGroup = $("#horizontalClueGroup textarea");
	for(kk = 0; kk < $("#horizontalClueGroup").children().length; kk++){
		var clueDiv = "<div id='clueDiv'><p id='clueCount'>" + (kk+1).toString() 
			+ "</p><p id='clueText'>" + horiGroup[kk].value + "</p></div>";
			$("#horizontalClueContainer").append(clueDiv);
	}
//Print
	var printContents = $("#printable").html()
     var printWindow = window.open()
     printWindow.document.open();
     printWindow.document.write('<html><head><title>Bingo Printout</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="css/styleSheet.css"><style type="text/css" media="print">@page{size: auto;margin: 0;}</style></head><body id = "printBody"><script>setTimeout(function(){window.print(); window.close()}, 1)</script></body>')
 	 printWindow.document.write(printContents);
 	 printContents = "";
}





}//End of Onload