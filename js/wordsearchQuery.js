window.onload = function(){
var puzzleSize = 15;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];	
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
$("#printButton").click(PrintEm);
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

/*Size Select*/
var sizeSelect = $("#wordSearchSizeSelect")
sizeSelect.change(function(){
	puzzleSize = $("#wordSearchSizeSelect option:selected").val();
});

/*Textarea Word Counter*/
$("#bingoInput").keypress(function(){
	var editString = $("#bingoInput").val().replace(/\n/g, ",").split(",");
	$("#wordCount").html(editString.length.toString());
});

/*MAIN PRINT*/
function PrintEm(){
	$("#printable").html("");
//Check if template or random and assign number of pages
	var numPages;
	if(!random)
		numPages = 1;
	else
		numPages = $("#bingoStudents").val();


/*MAIN PAGE LOOP*/
	
	var puzzleNum = 0;
	for(k=0; k < numPages; k++){
		var wordArray = $("#bingoInput").val().replace(/\n/g, ",").split(",");
		var printDiv = $("#printable").append("<div class='randomPrintable' id='randomPrintable" + k.toString() + "'>");
	//Add Default Header if Title input is blank, or user-entered header
		if($("#bingoTitle").val() == "")
		$("#randomPrintable" + k.toString()).append("<h1 id='bingoHead'>Word Search!</h1>");
		else if($("#bingoTitle").val() != "")
		$("#randomPrintable" + k.toString()).append("<h1 id='bingoHead'>" + $("#bingoTitle").val() + "</h1>");
	//Create and Set Puzzle ID
		if(puzzleSize == 25)
			var tableHtml = "<table id='wordsLarge'>";
		else
			var tableHtml = "<table id='words15'>";
	//Create and fill table
		for(i=0; i < puzzleSize; i++){
			tableHtml += "<tr>"
			for(ii=0; ii < puzzleSize; ii++){
				tableHtml += "<td id='" + puzzleNum.toString() + "x" + i.toString() + "x" + ii.toString() + "'></td>";
			}
			tableHtml += "</tr>"
		}
		tableHtml += "</table>";
		$("#randomPrintable" + k.toString()).append(tableHtml);



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


	//Place Words
		var wordsToPlace = $("#bingoInput").val().replace(/\n/g, ",").split(",");

		while(wordsToPlace.length > 0){
			var noneCount = 0;
			if(noneCount > 100){
				console.log("Too Many Tries, splicing " + wordsToPlace[0]);
				wordsToPlace.splice(0, 1);
				noneCount = 0;
			}
			if(wordsToPlace.length == 0)
				break;
			var checkCount = 0;
			var directionInt = Math.floor(Math.random() * 3);
			var randomRow = Math.floor(Math.random() * puzzleSize);
			var randomColumn = Math.floor(Math.random() * puzzleSize);
			var coordString = puzzleNum.toString() + "x" + randomRow.toString() + "x" + randomColumn.toString();
			var currentCoord = document.getElementById(coordString);
			console.log(currentCoord.innerHTML);

			//Horizontal Check
			if(directionInt == 0){
					if((puzzleSize - currentCoord.cellIndex) >= wordsToPlace[0].length)
					{
						for(o=0; o < wordsToPlace[0].length; o++)
							{
								var checkString = puzzleNum.toString() + "x" + randomRow.toString() + "x" + (randomColumn + o).toString();
								var checkTD = document.getElementById(checkString);
								if(checkTD.innerHTML == "" ||  checkTD.innerHTML == wordsToPlace[0].charAt(o)){
									checkCount++;
								}
							}
						if (checkCount >= wordsToPlace[0].length)
						{
							console.log("writing " + wordsToPlace[0]);
							for(m = 0; m < wordsToPlace[0].length; m++)
							{
								var editString = puzzleNum.toString() + "x" + randomRow.toString() + "x" + (randomColumn + m).toString();
								var editTD = document.getElementById(editString);
								editTD.innerHTML = wordsToPlace[0].charAt(m);
							}
							wordsToPlace.splice(0,1);
						}
						else
						{
							noneCount++;
						}
					} 
					else
					{
						noneCount++
					}
			}
				//vertical check 
				else if (directionInt == 1){
					if((puzzleSize - randomRow) >= wordsToPlace[0].length)
					{
						for(q=0; q<wordsToPlace[0].length; q++)
						{
							var checkHeight = puzzleNum.toString() + "x" + (randomRow + q).toString() + "x" + randomColumn.toString();
							var checkHeightTD = document.getElementById(checkHeight);
							if(checkHeightTD.innerHTML == "" || checkHeightTD.innerHTML == wordsToPlace[0].charAt(q))
							{
								checkCount++;
							}
						}
						if(checkCount >= wordsToPlace[0].length)
						{
							console.log("writing " + wordsToPlace[0]);
							for(r=0; r< wordsToPlace[0].length; r++)
							{
								var editHeight = puzzleNum.toString() + "x" + (randomRow + r).toString() + "x" + randomColumn.toString();
								var editHeightTD = document.getElementById(editHeight);
								editHeightTD.innerHTML = wordsToPlace[0].charAt(r);
							}
							wordsToPlace.splice(0, 1);
						}
						else
						{
							noneCount++;
						}
					}
					else
					{
						noneCount++;
					}
				}
				// diagonal check 
				else if (directionInt == 2){
				  if((puzzleSize - randomRow) >= wordsToPlace[0].length && (puzzleSize - randomColumn) >= wordsToPlace[0].length)
				  {
				  	for(s=0; s<wordsToPlace[0].length; s++)
				  	{
				  		var checkDiag = puzzleNum.toString() + "x" + (randomRow + s).toString() + "x" + (randomColumn + s).toString();
				  		var checkDiagTD = document.getElementById(checkDiag);
				  		if(checkDiagTD.innerHTML == "" || checkDiagTD.innerHTML == wordsToPlace[0].charAt(s))
				  		{
				  			checkCount++;
				  		}
				  	}
				  	if(checkCount >= wordsToPlace[0].length)
				  	{
				  		console.log("writing " + wordsToPlace[0]);
				  		for(t=0; t < wordsToPlace[0].length; t++)
				  		{
				  			var editDiag = puzzleNum.toString() + "x" + (randomRow + t).toString() + "x" + (randomColumn + t).toString();
				  			var editDiagTD = document.getElementById(editDiag);
				  			editDiagTD.innerHTML = wordsToPlace[0].charAt(t);
				  		}
				  		wordsToPlace.splice(0, 1);
				  	}
				  	else
				  	{
				  		noneCount++;
				  	}
				  }
				  else
				  {
				  	noneCount++;
				  }
				}
			}
	//place 
		var tableData = $("#randomPrintable" + k.toString() +" td");
		for(n = 0; n < tableData.length; n++){
			if(tableData[n].innerHTML == "")
			{
				var alphabetIndex = Math.floor(Math.random() * 26);
				tableData[n].innerHTML = alphabet[alphabetIndex];
				}
		}		



	puzzleNum++;
	}//End of Page Loop
//Print
	var printContents = $("#printable").html()
     var printWindow = window.open()
     printWindow.document.open();
     printWindow.document.write('<html><head><title>Bingo Printout</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="css/styleSheet.css"><style type="text/css" media="print">@page{size: auto;margin: 0;}</style></head><body id = "printBody"><script>setTimeout(function(){window.print(); window.close()}, 1)</script></body>')
 	 printWindow.document.write(printContents);
 	 $("#printable").html("");
}//End of Print function
}//End of Doc Ready