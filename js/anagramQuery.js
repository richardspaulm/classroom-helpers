var totalWords = 8;
window.onload = function(){
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
/*Size Select*/
var sizeSelect = $("#wordSearchSizeSelect")
sizeSelect.change(function(){
	totalWords = $("#wordSearchSizeSelect option:selected").val();
	console.log(totalWords);
});
function PrintBoards(){
	$("printable").html("");
	var numPages;
	if(!random)
		numPages = 1;
	else
		numPages = $("#bingoStudents").val();
	var wordArray = $("#bingoInput").val().replace(/\n/g, ",").split(",");
	if(totalWords > wordArray.length){
		alert("Not enough words! Either add more words above, or choose a smaller word count!");
		return false;
	}
/*MAIN PAGE LOOP*/
	for(k=0; k < numPages; k++){
		tableData = "";
			var wordArray = $("#bingoInput").val().replace(/\n/g, ",").split(",");
		var printDiv = $("#printable").append("<div class='randomPrintable' id='randomPrintable" + k.toString() + "'>");
	//Add Default Header if Title input is blank, or user-entered header
		if($("#bingoTitle").val() == "")
		$("#randomPrintable" + k.toString()).append("<h1 id='bingoHead'>Anagrams</h1>");
		else if($("#bingoTitle").val() != "")
		$("#randomPrintable" + k.toString()).append("<h1 id='bingoHead'>" + $("#bingoTitle").val() + "</h1>");
	

	var tableHtml = "<div id='anagramTable" + totalWords.toString() + "'>";
	for(i=0; i < (totalWords/2); i++){
		tableHtml += "<div>"
		for(ii=0; ii < 2; ii++){
			tableHtml += "<div id='anagramBlock'><h2 class='anagramText'></h2><div id='anagramTopDiv'></div><div id='anagramBotDiv'></div></div>";
		}
		tableHtml += "</div>"
	}

	$("#randomPrintable" + k.toString()).append(tableHtml);
	var tableData = $("#randomPrintable" + k.toString() + " .anagramText");
	for(j=0; j < totalWords; j++)
	{
		var jumbledWord = jumble_word(wordArray[j]);
		if(jumbledWord = wordArray[j])
			jumbledWord = jumble_word(jumbledWord);
		tableData[j].textContent += jumbledWord;
	}
	var drawHtml = "<div id='drawDiv" + totalWords.toString() + "'>" +
	"<p id='drawP'>Draw your favorite words here!</p></div>";
	 $("#randomPrintable" + k.toString()).append(drawHtml)
	}//End Page Loop
//Print
	var printContents = $("#printable").html()
     var printWindow = window.open()
     printWindow.document.open();
     printWindow.document.write('<html><head><title>Bingo Printout</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="css/styleSheet.css"><style type="text/css" media="print">@page{size: auto;margin: 0;}</style></head><body id = "printBody"><script>setTimeout(function(){window.print(); window.close()}, 1)</script></body>')
 	 printWindow.document.write(printContents);
 	 printContents = "";
}
function jumble_word(str)
{
	var startingWord = str;
	var newWord = "";
	while(str.length > 0)
	{
		var charSpot = Math.floor(Math.random() * str.length);
		newWord += str.charAt(charSpot);
		str = remove_character(str, charSpot);
	}
	return newWord;
}	
function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }
}