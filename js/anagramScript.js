var sizeSelect = document.getElementById("wordSearchSizeSelect");
var randomSelect = document.getElementById("anagramRandSelect");
var studentNumDiv = document.getElementById("divToHide");
var createButton = document.getElementById("wordSearchButton");
var totalWords = 8
var popUp = document.getElementById("toolInstructions");
function ShowInstructions()
{
	popUp.style.visibility = "visible";
}function HideInstructions()
{
	popUp.style.visibility = "hidden";
}
function onSizeChanged()
{
	var currentSize = sizeSelect.options[sizeSelect.selectedIndex].value;
	if(currentSize == "6"){
		totalWords = 6;
	} else if (currentSize == "8"){
		totalWords = 8;
	} 
	else if (currentSize == "10")
	{
		totalWords = 10;
	}
	else if (currentSize == "12")
	{
		totalWords = 12;
	} 
	console.log(totalWords);
}
function handleClick(sender)
{
	var currentValue = sender.value;
	if(currentValue == "random")
	{
		studentNumDiv.style.display = "block";
		printButton.onclick = RandomGrams;
	}
	else if (currentValue =="blank") 
	{
		studentNumDiv.style.display = "none";
		printButton.onclick = CreateGrams;

	}
}
function CountWords(){
	var countWords = document.getElementById("bingoInput").value;
	var countstring = countWords.replace(/\n/g, ",")
	var countArray = countstring.split(",");
	wordCount.innerHTML = countArray.length.toString();
}
function RandomGrams()
{
	var originalContents = document.body.innerHTML;
	var userWords = document.getElementById("bingoInput").value;
	var newstring = userWords.replace(/\n/g, ",")
	var wordArray = newstring.split(",");
	wordArray = wordArray.filter(v=>v!='');
	for(p=0; p<wordArray.length; p++)
	{
		wordArray[p] = wordArray[p].trim();
	}
	if(totalWords > wordArray.length)
	{
		alert("Not enough words! Either add some more words to your list, or select a smaller word count.");
		return false;
	}
	var studentNum = document.getElementById("bingoStudents").value;
	var studentInt = parseInt(studentNum);
	var printDiv = document.getElementById("printable");
	printDiv.innerHTML = "";
	if(studentNum <= 0)
	{
		alert("Please enter at least one student for the number of students box, or select the identical page option to generate a single page.")
	}
	else
	{
	for(z=0; z < studentInt; z++)
	{
		console.log(studentInt);
		var pageDiv = document.createElement("DIV");
		printDiv.appendChild(pageDiv);
		pageDiv.id="randomPrintable";
		var tableSlots = [];
		var bingoTitle = document.getElementById("bingoTitle").value;
		var bingoHead = document.createElement("H1");
		bingoHead.id = "bingoHead";	
		if(bingoTitle != ""){
		var bingoHeadText = document.createTextNode(bingoTitle);		
		} else{
		var bingoHeadText = document.createTextNode("Anagrams!");
		}
		bingoHead.appendChild(bingoHeadText);
		pageDiv.appendChild(bingoHead);	
		var pageTable = document.createElement("DIV");
		var tableIdString = "anagramTable" + totalWords.toString();
		pageTable.id=tableIdString;
		for(q=0; q < (totalWords/2); q++)
		{
			var row = document.createElement("DIV");
			pageTable.appendChild(row);	
			for(qq=0; qq < 2; qq++)
			{
				var totalDiv = document.createElement("DIV");
				var divText = document.createElement("H2");
				var topAndDot = document.createElement("DIV");
				var bottomLine = document.createElement("DIV");
				totalDiv.id="anagramBlock";
				divText.id="anagramText";
				topAndDot.id="anagramTopDiv";
				bottomLine.id="anagramBotDiv";
				totalDiv.appendChild(divText);
				totalDiv.appendChild(topAndDot);
				totalDiv.appendChild(bottomLine);
				row.appendChild(totalDiv);
				tableSlots.push(divText);
			}
		}
		

		for(r=0; r < totalWords; r++)
		{
			var jumbledWord = jumble_word(wordArray[r]);
			if(jumbledWord = wordArray[r])
			{
				jumbledWord = jumble_word(jumbledWord)
			}
			var finishedJumble = document.createTextNode(jumbledWord);
			tableSlots[r].appendChild(finishedJumble);
		}
		pageDiv.appendChild(pageTable);
		var drawDiv = document.createElement("DIV");
		var drawDivId = "drawDiv" + totalWords.toString();
		drawDiv.id = drawDivId;
		var drawP = document.createElement("P");
		var drawInstructions = document.createTextNode("Draw your favorite word here!");
		drawP.appendChild(drawInstructions);
		drawDiv.appendChild(drawP);
		drawP.id="drawP";
		pageDiv.appendChild(drawDiv);
	}
	
     var printContents = document.getElementById("printable").innerHTML;
     var printWindow = window.open()
     printWindow.document.open();
     printWindow.document.write('<html><head><title>Bingo Printout</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="css/styleSheet.css"><style type="text/css" media="print">@page{size: auto;margin: 0;}</style></head><body onfocus="setTimeout(function() {window.print(); window.close(); }, 100);">')
 	 printWindow.document.write(printContents);
 	 printWindow.document.write('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script></body></html>');
 	 var printedDiv = document.getElementById("printable");
 	 printedDiv.innerHTML = "";
 	}

}
function CreateGrams()
{
	var userWords = document.getElementById("bingoInput").value;
	var newstring = userWords.replace(/\n/g, ",")
	var wordArray = newstring.split(",");
	wordArray = wordArray.filter(v=>v!='');
	for(p=0; p<wordArray.length; p++)
	{
		wordArray[p] = wordArray[p].trim();
	}
	if(totalWords > wordArray.length)
	{
		alert("Not enough words! Either add some more words to your list, or select a smaller word count.");
		return false;
	}
	var originalContents = document.body.innerHTML;
	var tableSlots = [];
	var bingoTitle = document.getElementById("bingoTitle").value;
	var printDiv = document.getElementById("printable");
	printDiv.innerHTML="";
	var pageDiv = document.createElement("DIV");
	pageDiv.id="randomPrintable";
	printDiv.appendChild(pageDiv);
	var bingoHead = document.createElement("H1");
	bingoHead.id = "bingoHead";	
	if(bingoTitle != ""){
	var bingoHeadText = document.createTextNode(bingoTitle);		
	} else{
	var bingoHeadText = document.createTextNode("Anagrams!");
	}
	bingoHead.appendChild(bingoHeadText);
	pageDiv.appendChild(bingoHead);	

	var pageTable = document.createElement("DIV");
	var anagramIdString = "anagramTable" + totalWords.toString();
	pageTable.id = anagramIdString;
	for(q=0; q < (totalWords/2); q++)
	{
		var row = document.createElement("DIV");
		pageTable.appendChild(row);	
		for(qq=0; qq < 2; qq++)
		{
			var totalDiv = document.createElement("DIV");
			var divText = document.createElement("H2");
			var topAndDot = document.createElement("DIV");
			var bottomLine = document.createElement("DIV");
			totalDiv.id="anagramBlock";
			divText.id="anagramText";
			topAndDot.id="anagramTopDiv";
			bottomLine.id="anagramBotDiv";
			totalDiv.appendChild(divText);
			totalDiv.appendChild(topAndDot);
			totalDiv.appendChild(bottomLine);
			row.appendChild(totalDiv);
			tableSlots.push(divText);
		}
	}
	

	for(r=0; r < totalWords; r++)
	{
		var jumbledWord = jumble_word(wordArray[r]);
		if(jumbledWord = wordArray[r])
		{
			jumbledWord = jumble_word(jumbledWord)
		}
		var finishedJumble = document.createTextNode(jumbledWord);
		tableSlots[r].appendChild(finishedJumble);
	}
	pageDiv.appendChild(pageTable);
	var drawDiv = document.createElement("DIV");
	var drawDivId = "drawDiv" + totalWords.toString();
	drawDiv.id = drawDivId;
	var drawP = document.createElement("P");
	var drawInstructions = document.createTextNode("Draw your favorite word here!");
	drawP.appendChild(drawInstructions);
	drawDiv.appendChild(drawP);
	drawP.id="drawP";
	pageDiv.appendChild(drawDiv);


     var printContents = document.getElementById("printable").innerHTML;
     var printWindow = window.open()
     printWindow.document.open();
     printWindow.document.write('<html><head><title>Bingo Printout</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="css/styleSheet.css"><style type="text/css" media="print">@page{size: auto;margin: 0;}</style></head><body onfocus="setTimeout(function() {window.print(); window.close(); }, 100);">')
 	 printWindow.document.write(printContents);
 	 printWindow.document.write('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script></body></html>');
 	 var printedDiv = document.getElementById("printable");
 	 printedDiv.innerHTML = "";
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