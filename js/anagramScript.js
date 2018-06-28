var sizeSelect = document.getElementById("anagramSizeSelect");
var randomSelect = document.getElementById("anagramRandSelect");
var studentNumDiv = document.getElementById("randomDiv");
var createButton = document.getElementById("wordSearchButton");
createButton.onclick = CreateGrams;
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
function onSelectChanged()
{
	var currentSelect = randomSelect.options[randomSelect.selectedIndex].value;
	if(currentSelect == "random"){
		studentNumDiv.style.display = "block";
		createButton.onclick = RandomGrams;
	} else{
		studentNumDiv.style.display = "none";
		createButton.onclick = CreateGrams;
	}
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
		drawP.style.padding = "10px";
		drawP.style.fontSize = "20px";
		pageDiv.appendChild(drawDiv);
	}
	
	var printContents = document.getElementById("printable").innerHTML;
    document.body.innerHTML = printContents;
    window.print();

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
	drawP.style.padding = "10px";
	drawP.style.fontSize = "20px";
	pageDiv.appendChild(drawDiv);



	var printContents = document.getElementById("printable").innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    //location.reload();
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