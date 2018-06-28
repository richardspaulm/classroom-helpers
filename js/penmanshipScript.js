var totalWords = 15;
var sizeSelect = document.getElementById("sizeSelect");
var entryDiv = document.getElementById("entryDiv");
var button = document.getElementById("wordSearchButton");
wordSearchButton.onclick = CreatePage;
DrawForm();
function onSizeChanged()
{
	var currentSize = sizeSelect.options[sizeSelect.selectedIndex].value;
	if(currentSize == "15"){
		totalWords = 15;
		button.onclick = CreatePage;
	} else if (currentSize == "30"){
		totalWords = 30;
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
	if(totalWords == 15){
		for(y=0; y < totalWords; y++)
		{
			var row=document.createElement("TR");
			entryTable.appendChild(row);
			var data = document.createElement("TD");
			var input = document.createElement("INPUT");
			input.maxLength = 26;	
			input.id="formInput";
			data.appendChild(input);
			row.appendChild(data);
		}
	}
	else if(totalWords == 30)
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
			input.maxLength = 12;
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
		entryWordTop = ((j + 1) * 61).toString() + "px";
		entryWord.style.top = entryWordTop;
		linesDiv.appendChild(dotsDiv);
		linesArea.appendChild(linesDiv);

	}
	
	var printContents = document.getElementById("printable").innerHTML;
	document.body.innerHTML = printContents;
	$(function() { $('body').hide().show(); });
	setTimeout(function(){ 	window.print(); }, 1);




     //document.body.innerHTML = originalContents;
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
	for(k=0; k < 30; k++)
	{

			var linesDiv = document.createElement("DIV");
			linesDiv.id="penmanshipLines20";
			var dotsDiv = document.createElement("DIV");
			dotsDiv.id="penmanshipDots";
			if(k % 2 == 0)
			{
			var entryWord = document.createElement("P");
			entryWord.id="entryWord20";
			entryWordTop = ((rowCounter) * 61).toString() + "px";
			entryWord.style.top = entryWordTop;
			wordsDiv.appendChild(entryWord);
			pList.push(entryWord);
			rowCounter++;
			}
			else
			{
			var entryWord2 = document.createElement("P");
			entryWord2.id="entryWord20";
			entryWord2.style.left = "420px";
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
	document.body.innerHTML = printContents;
	$(function() { $('body').hide().show(); });
	setTimeout(function(){ 	window.print(); }, 1);
}
var popUp = document.getElementById("toolInstructions");
function ShowInstructions()
{
	popUp.style.visibility = "visible";
}function HideInstructions()
{
	popUp.style.visibility = "hidden";
}