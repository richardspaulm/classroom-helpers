var totalWords = 14;
window.onload = function(){
DrawForm();
/*Hide/Show Instruction popup*/
//Show Instructions
$("#scrollButtonTools").click(function(){
	$("#toolInstructions").show();
});
//Hide Instructions
$("#instructionButton").click(function(){
	$("#toolInstructions").hide();
});
var sizeSelect = $("#wordSearchSizeSelect")
sizeSelect.change(function(){
	totalWords = $("#wordSearchSizeSelect option:selected").val();
	DrawForm();
});

//Set Print Button
$("#printButton").click(PrintPenmanship);
function DrawForm(){
	$("#entryDiv").html("");
	var tableHtml = "<table id='penmanshipEntry'>"
	if(totalWords == 14){
		for(i=0; i < totalWords; i++){
			tableHtml += "<tr><td><input id='formInput'></td></tr>";
		}
	}
	else if(totalWords == 28)
	{
		for(j=0; j < (totalWords/2); j++){
			tableHtml += "<tr><td><input id='formInput20'></td><td><input id='formInput20'></td></tr>";
		}
	}
	tableHtml += "</table>";
	$("#entryDiv").append(tableHtml);

}
function PrintPenmanship(){
	var printDiv = $("#printable").append("<div class='randomPrintable' id='randomPrintable'>");
//Add Default Header if Title input is blank, or user-entered header
	if($("#bingoTitle").val() == "")
	$("#randomPrintable").append("<h1 id='bingoHead'>Penmanship!</h1>");
	else if($("#bingoTitle").val() != "")
	$("#randomPrintable").append("<h1 id='bingoHead'>" + $("#bingoTitle").val() + "</h1>");
	
	$("#randomPrintable").append("<div id='linesArea'></div><div id='wordsDiv'></div>");
	var wordsHtml = "";
	//14 Words Loop
	if(totalWords == 14){
		for(k=0; k < totalWords; k++){
			var linesHtml = "<div id='penmanshipLines'><div id='penmanshipDots'></div></div>";
			$("#linesArea").append(linesHtml);
		} 
		var count = 0;
		$("input").each(function(){
			if(count != 0)
			wordsHtml += "<p id='entryWord' style='top: " + (count * 82).toString() +  "px;'>" + $(this).val() + "</p>";
			count ++;
		});
		$("#wordsDiv").append(wordsHtml);
	}
	else if(totalWords == 28){
		for(l=0; l < totalWords; l++){
			var linesHtml = "<div id='penmanshipLines20'><div id='penmanshipDots'></div></div>";
			$("#linesArea").append(linesHtml);
		}
		var count = 0; //To iterate through inputs. Exclude 1st input (its the form title)
		var rowCounter = 1;//Iterate through lines rows
		console.log($("td input").length);
		$("td input").each(function(){
			if(count % 2 == 0){
				wordsHtml += "<p id='entryWord20' style='top: "
				 + (rowCounter * 80).toString()
				  + "px;'>" + $(this).val() + "</p>";
				}
			else if(count % 2 != 0){
				wordsHtml += "<p id='entryWord20' style='left: 500px; top: "
								+ (rowCounter * 80).toString()
								 + "px;'>" + $(this).val() + "</p>";
			rowCounter++;
			}
			count++;
		});
		$("#wordsDiv").append(wordsHtml);
	}
//Print
	var printContents = $("#printable").html()
     var printWindow = window.open()
     printWindow.document.open();
     printWindow.document.write('<html><head><title>Penmanship Printout</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="css/styleSheet.css"><style type="text/css" media="print">@page{size: auto;margin: 0;}</style></head><body id = "printBody"><script>setTimeout(function(){window.print(); window.close()}, 1000)</script></body>')
 	 printWindow.document.write(printContents);
 	 $("#printable").html("");
 	 
}

}