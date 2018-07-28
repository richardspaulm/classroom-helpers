window.onload = function() {

/*Hide/Show Instruction popup*/
//Show Instructions
$("#scrollButtonTools").click(function(){
	$("#toolInstructions").show();
});
//Hide Instructions
$("#instructionButton").click(function(){
	$("#toolInstructions").hide();
});

/*Random Puzzle or Template Select*/

//Set Default click to Random
$("#printButton").click(PrintBoards);

//Event Listener for radio buttons
var random = true;
$("#randomRadio, #blankRadio").click(function(sender){
	if($(this).val() == "random")
	{
		$("#divToHide").show();
		random = true;
	} 
	else if($(this).val() == "blank")
	{
		$("#divToHide").hide();
		random = false;
	}
});

/*Textarea Word Counter*/
$("#bingoInput").keypress(function(){
	var editString = $("#bingoInput").val().replace(/\n/g, ",").split(",");
	$("#wordCount").html(editString.length.toString());
});

/* !!!MAIN CREATE & PRINT FUNCTION!!! */
function PrintBoards(){
//Get User Inputed Words
var checkArray = $("#bingoInput").val().replace(/\n/g, ",").split(",");
if(checkArray.length < 24)
{
	alert("You need a minimum of 24 word to play bingo! You currently have " + 
		checkArray.length.toString() + " words.")
}
else
{


	$("#printable").html("");
//Check if template or random and assign number of pages
	var numPages;
	if(!random)
		numPages = 1;
	else
		numPages = $("#bingoStudents").val();

//MAIN PAGE NUMBER LOOP
	for(k=0; k<numPages; k++)
	{
		var wordArray = $("#bingoInput").val().replace(/\n/g, ",").split(",");

	var printDiv = $("#printable").append("<div class='randomPrintable' id='randomPrintable" + k.toString() + "'>");
//Add Default Header if Title input is blank, or user-entered header
	if($("#bingoTitle").val() == "")
	$("#randomPrintable" + k.toString()).append("<h1 id='bingoHead'>BINGO!</h1>");
	else if($("#bingoTitle").val() != "")
	$("#randomPrintable" + k.toString()).append("<h1 id='bingoHead'>" + $("#bingoTitle").val() + "</h1>");

//Create Bingo Board
	var tableHtml = "<table id='bingoBoard'>";

//BLANK TEMPLATE BOARD
if(!random){
	for(i=0; i < 5; i++){
	if(i==2)
	tableHtml += "<tr><td></td><td></td><td>Free Space!</td><td></td><td></td></tr>";
	else	
	tableHtml += "<tr><td></td><td></td><td></td><td></td><td></td></tr>";
	}
	tableHtml += "</table>"
	$("#randomPrintable" + k.toString()).append(tableHtml);
	}	
//If it's not a blank template, place the words on the page
if(random){
	for(m=0; m < 5; m++){
	if(m==2)
	tableHtml += "<tr><td></td><td></td><td>Free Space!</td><td></td><td></td></tr>";
	else	
	tableHtml += "<tr><td></td><td></td><td></td><td></td><td></td></tr>";
	}
	tableHtml += "</table>"
	$("#randomPrintable" + k.toString()).append(tableHtml);
	var tableData = $("#randomPrintable" + k.toString() + " td");
	var placeList = wordArray;
	var count = 0;
	for(n=0; n<=24; n++){
		if(n != 12){
		var randInt = Math.floor(Math.random() * (placeList.length));
		tableData[n].textContent += placeList[randInt];
		placeList.splice(randInt, 1);
		}
	}

}	
	var wordsList = $("#bingoInput").val().replace(/\n/g, ",").split(",");
//Create word list at bottom of page
	var listHtml = "<h1 id='wordsHeader'>Word List:<h1><p id='wordsList'>"

	for(j=0; j<wordsList.length; j++)
	{
		if(j != wordsList.length - 1)
		{
			listHtml += wordsList[j] + ", ";
		}
		else
		{
			listHtml += wordsList[j] + ".";
		}
	}
	listHtml += "</p>";
	$("#randomPrintable" + k.toString()).append(listHtml);

	}//Close Pagenum Loop

//Print
	var printContents = $("#printable").html()
     var printWindow = window.open()
     printWindow.document.open();
     printWindow.document.write('<html><head><title>Bingo Printout</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="css/styleSheet.css"><style type="text/css" media="print">@page{size: auto;margin: 0;}</style></head><body id = "printBody"><script>setTimeout(function(){window.print(); window.close()}, 1)</script></body>')
 	 printWindow.document.write(printContents);
 	 $("#printable").html("");

}//end
}//End Board Function



}//End Doc ready function