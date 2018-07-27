var totalWords = 14;
var sizeSelect = document.getElementById("wordSearchSizeSelect");
var entryDiv = document.getElementById("entryDiv");
var button = document.getElementById("printButton");
button.onclick = CreatePage;
DrawForm();
function onSizeChanged()
{
	var currentSize = sizeSelect.options[sizeSelect.selectedIndex].value;
	if(currentSize == "14"){
		totalWords = 14;
		button.onclick = CreatePage;
	} else if (currentSize == "28"){
		totalWords = 28;
		button.onclick = CreateTwenty;
	} 
	DrawForm();
}

function DrawForm()
{
	console.log(totalWords);
	entryDiv.innerHTML = "";
	var entryTable = document.createElement("TABLE");
	entryTable.id="penmanshipEntry";
	if(totalWords == 14){
		for(y=0; y < totalWords; y++)
		{
			var row=document.createElement("TR");
			entryTable.appendChild(row);
			var data = document.createElement("TD");
			var input = document.createElement("INPUT");
			input.maxLength = 20;	
			input.id="formInput";
			data.appendChild(input);
			row.appendChild(data);
		}
	}
	else if(totalWords == 28)
	{
	for(i=0; i < (totalWords/2); i++)
	{
		var row = document.createElement("TR");
		entryTable.appendChild(row);
		for(ii=0; ii < 2; ii++)
		{
			var data = document.createElement("TD");
			var input = document.createElement("INPUT");
			input.id="formInput20"
			input.maxLength = 9;
			data.appendChild(input);
			row.appendChild(data);
		}
	}
	}
	entryDiv.appendChild(entryTable);
}
function CreatePage()
{
	var originalContents = document.body.innerHTML;
	var bingoTitle = document.getElementById("bingoTitle").value;
	var inputWords = document.querySelectorAll("#formInput");
	console.log(inputWords[0]);
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
	var bingoHeadText = document.createTextNode("Penmanship!");
	}
	bingoHead.appendChild(bingoHeadText);
	pageDiv.appendChild(bingoHead);

	var linesArea = document.createElement("DIV");
	linesArea.id = "linesArea";
	var wordsDiv = document.createElement("DIV");
	wordsDiv.id="wordsDiv";
	pageDiv.appendChild(linesArea);
	pageDiv.appendChild(wordsDiv);
	for(j=0; j < totalWords; j++)
	{
		var linesDiv = document.createElement("DIV");
		linesDiv.id="penmanshipLines";
		var dotsDiv = document.createElement("DIV");
		dotsDiv.id="penmanshipDots";
		var entryWord = document.createElement("P");
		var entryWordText = document.createTextNode(inputWords[j].value);
		entryWord.appendChild(entryWordText);
		wordsDiv.appendChild(entryWord);
		entryWord.id="entryWord";
		entryWordTop = ((j + 1) * 82).toString() + "px";
		entryWord.style.top = entryWordTop;
		linesDiv.appendChild(dotsDiv);
		linesArea.appendChild(linesDiv);

	}
     var printContents = document.getElementById("printable").innerHTML;
     var printWindow = window.open()
     printWindow.document.open();
     printWindow.document.write('<html><head><title>Bingo Printout</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="css/styleSheet.css"><style type="text/css" media="print">@page{size: auto;margin: 0;}</style></head><body onfocus="setTimeout(function() {window.print(); window.close(); }, 1000);">')
 	 printWindow.document.write(printContents);
 	 printWindow.document.write('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>  <script type="text/javascript" charset="utf-8">$(function() { $("body").hide().show(); });</script></body></html>');
 	 var printedDiv = document.getElementById("printable");
 	 printedDiv.innerHTML = "";


}

function CreateTwenty()
{
	var originalContents = document.body.innerHTML;
	var wordList = [];
	var pList = [];
	var bingoTitle = document.getElementById("bingoTitle").value;
	var inputWords20 = document.querySelectorAll("#formInput20");
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
	var bingoHeadText = document.createTextNode("Penmanship!");
	}
	bingoHead.appendChild(bingoHeadText);
	pageDiv.appendChild(bingoHead);

	var linesArea = document.createElement("DIV");
	linesArea.id = "linesArea";
	var wordsDiv = document.createElement("DIV");
	wordsDiv.id="wordsDiv20";
	pageDiv.appendChild(linesArea);
	pageDiv.appendChild(wordsDiv);
	for(l=0; l < inputWords20.length; l++)
	{
		wordList.push(inputWords20[l].value);

	}
	rowCounter = 1;
	for(k=0; k < 28; k++)
	{

			var linesDiv = document.createElement("DIV");
			linesDiv.id="penmanshipLines20";
			var dotsDiv = document.createElement("DIV");
			dotsDiv.id="penmanshipDots";
			if(k % 2 == 0)
			{
			var entryWord = document.createElement("P");
			entryWord.id="entryWord20";
			entryWordTop = ((rowCounter) * 80).toString() + "px";
			entryWord.style.top = entryWordTop;
			wordsDiv.appendChild(entryWord);
			pList.push(entryWord);
			rowCounter++;
			}
			else
			{
			var entryWord2 = document.createElement("P");
			entryWord2.id="entryWord20";
			entryWord2.style.left = "500px";
			entryWord2.style.top = entryWordTop;
			wordsDiv.appendChild(entryWord2);
			pList.push(entryWord2);
			}	



			linesDiv.appendChild(dotsDiv);
			linesArea.appendChild(linesDiv);
	}
	for(m=0; m < wordList.length; m++)
	{
		var currentWord = document.createTextNode(wordList[m]);
		pList[m].appendChild(currentWord);
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
var popUp = document.getElementById("toolInstructions");
function ShowInstructions()
{
	popUp.style.visibility = "visible";
}function HideInstructions()
{
	popUp.style.visibility = "hidden";
}