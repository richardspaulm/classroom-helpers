var sizeDown = document.getElementById("decreaseSize");
var size1 = document.getElementById("size1");
var size2 = document.getElementById("size2");
var size3 = document.getElementById("size3");
var size4 = document.getElementById("size4");
var size5 = document.getElementById("size5");
var formScale;
var formHeight = 8;
var entryDiv = document.getElementById("entryDiv");
var puzzleTable = document.createElement("TABLE");
var tableData = [];
var numberData = [];
var bonusVertical = [];
var bonusHorizontal = [];
var formSize = 1;
var vertGroup = document.getElementById("verticalClueGroup");
var horGroup = document.getElementById("horizontalClueGroup");
var vertCount = 1;
var horCount = 1;
var popUp = document.getElementById("toolInstructions");
function ShowInstructions()
{
	popUp.style.visibility = "visible";
}function HideInstructions()
{
	popUp.style.visibility = "hidden";
}
size1.style.backgroundColor = "red";

DrawForm();

function IncreaseForm(){

	if(formSize < 5){
		formSize++;
		if(formSize >= 1){
			size1.style.backgroundColor = "red";
		}
		if(formSize >= 2){
			size2.style.backgroundColor = "red";
		}
		else{
			size2.style.backgroundColor = "#E7E2E6";
		}
		if(formSize >= 3){
			size3.style.backgroundColor = "red";
		}
		else{
			size3.style.backgroundColor = "#E7E2E6";
		}
		if(formSize >= 4){
			size4.style.backgroundColor = "red";
		}
		else{
			size4.style.backgroundColor = "#E7E2E6";
		}
		if(formSize >= 5){
			size5.style.backgroundColor = "red";
		}
		else{
			size5.style.backgroundColor = "#E7E2E6";
		}
	}
	entryDiv.innerHTML = "";
	DrawForm();
return false;
}
function DecreaseForm(){

	if(formSize > 1){
			formSize--;
		if(formSize >= 1){
			size1.style.backgroundColor = "red";
		}
		if(formSize >= 2){
			size2.style.backgroundColor = "red";
		}
		else{
			size2.style.backgroundColor = "#E7E2E6";
		}
		if(formSize >= 3){
			size3.style.backgroundColor = "red";
		}
		else{
			size3.style.backgroundColor = "#E7E2E6";
		}
		if(formSize >= 4){
			size4.style.backgroundColor = "red";
		}
		else{
			size4.style.backgroundColor = "#E7E2E6";
		}
		if(formSize >= 5){
			size5.style.backgroundColor = "red";
		}
		else{
			size5.style.backgroundColor = "#E7E2E6";
		}
	}
	entryDiv.innerHTML = "";
	DrawForm();
	return false;
}

function DrawForm(){
	tableData = [];
	numberData = [];
	var entryTable = document.createElement("TABLE");
	if(formSize == 1){
		formScale = 10;
		formHeight = 8;
		entryTable.id = "entryTable1";
	} else if(formSize == 2){
		formScale = 12;
		formHeight = 8;
		entryTable.id = "entryTable2";
	} else if(formSize == 3){
		formScale = 14;
		formHeight = 9;
		entryTable.id = "entryTable3";
	} else if(formSize == 4){
		formScale = 16;
		formHeight = 10;
		entryTable.id = "entryTable4";
	} else if(formSize == 5){
		formScale = 18;
		formHeight = 10;
		entryTable.id = "entryTable5"
	}
	for(i=0; i < formHeight; i++)
	{
		var row = document.createElement("TR");
		row.id="divRow";
		entryTable.appendChild(row);
		for(ii=0; ii < formScale; ii++)
		{
			var dataDiv = document.createElement("TD");
			var number = document.createElement("P");
			var input = document.createElement("INPUT");
			dataDiv.appendChild(input);
			dataDiv.appendChild(number);
			input.onkeyup = CheckInput;
			number.onclick = InputClicked;
			dataDiv.style.backgroundColor = "#E7E2E6";
			numberData.push(number);
			tableData.push(input);
			row.appendChild(dataDiv);
		}
	}
	entryDiv.appendChild(entryTable);
}
function InputClicked(event)
{
	var clickedElement = event.target;
	if(clickedElement.innerHTML == "")
	{	
		var str = "1";
		clickedElement.innerHTML = str;
	}
	else if(clickedElement.innerHTML == "1"){
		var str = "2";
		clickedElement.innerHTML = str;
	}	else if(clickedElement.innerHTML == "2"){
		var str = "3";
		clickedElement.innerHTML = str;
	}	else if(clickedElement.innerHTML == "3"){
		var str = "4";
		clickedElement.innerHTML = str;
	}	else if(clickedElement.innerHTML == "4"){
		var str = "5";
		clickedElement.innerHTML = str;
	}	else if(clickedElement.innerHTML == "5"){
		var str = "6";
		clickedElement.innerHTML = str;
	}	else if(clickedElement.innerHTML == "6"){
		var str = "7";
		clickedElement.innerHTML = str;
	}	else if(clickedElement.innerHTML == "7"){
		var str = "8";
		clickedElement.innerHTML = str;
	}else if(clickedElement.innerHTML == "8"){
		var str = "9";
		clickedElement.innerHTML = str;
	}else if(clickedElement.innerHTML == "9"){
		var str = "";
		clickedElement.innerHTML = str;
	}
}
function CheckInput(event){
	var pressedInput = event.target;
	if(pressedInput.value.length > 0){
		pressedInput.style.backgroundColor = "blue";
	} else {
		pressedInput.style.backgroundColor = "white";
	}
}
function NewVerticalClue()
{
	vertCount++;
	var newClueDiv = document.createElement("DIV");
	newClueDiv.id="hint";
	var newClueInt = document.createElement("P");
	newClueInt.innerHTML = vertCount.toString();
	var newClueInput = document.createElement("TEXTAREA");
	newClueInput.id="verticalClue";
	newClueDiv.appendChild(newClueInt);
	newClueDiv.appendChild(newClueInput);
	vertGroup.appendChild(newClueDiv);
	bonusVertical.push(newClueDiv);
	console.log(bonusVertical[bonusVertical.length-1]);
	return false;
}
function RemoveVerticalClue()
{
	if(vertCount >= 2)
	{	
		bonusVertical[bonusVertical.length-1].remove();
		bonusVertical.splice((bonusVertical.length-1), 1);
		vertCount -= 1;
	}
}
function RemoveHorizontalClue()
{
	if(horCount >= 2)
	{	
		bonusHorizontal[bonusHorizontal.length-1].remove();
		bonusHorizontal.splice((bonusHorizontal.length-1), 1);
		horCount -= 1;
	}
}
function NewHorizontalClue()
{
	horCount++;
	var newClueDiv = document.createElement("DIV");
	newClueDiv.id="hint";
	var newClueInt = document.createElement("P");
	newClueInt.innerHTML = horCount.toString();
	var newClueInput = document.createElement("TEXTAREA");
	newClueInput.id="horizontalClue";
	newClueDiv.appendChild(newClueInt);
	newClueDiv.appendChild(newClueInput);
	horGroup.appendChild(newClueDiv);
	bonusHorizontal.push(newClueDiv);
	console.log(vertCount);
	return false;
}

function PrintCrossword()
{	
	var printDiv = document.getElementById("printable");
	var crosswordTitle = document.getElementById("bingoTitle").value;
	var bingoHead = document.createElement("H1");
	bingoHead.id = "bingoHead";	
	if(crosswordTitle != ""){
	var bingoHeadText = document.createTextNode(crosswordTitle);		
	} else{
	var bingoHeadText = document.createTextNode("Crossword Puzzle");
	}
	bingoHead.appendChild(bingoHeadText);
	printDiv.appendChild(bingoHead);
	var tableString = "table" + formScale.toString();
	puzzleTable.id = tableString;
	var totalCount = 0;
	for(j=0; j < formHeight; j++)
	{
		var row = document.createElement("TR");
		puzzleTable.appendChild(row);
		for(jj=0; jj < formScale; jj++)
		{
			var data = document.createElement("TD");
			row.appendChild(data);
			if(tableData[totalCount].style.backgroundColor == "blue")
			{
				data.id = "filled";
				data.innerHTML = numberData[totalCount].innerHTML; 
			}
			totalCount++;
		}
	}
	printDiv.appendChild(puzzleTable);
	var clueHeader = document.createElement("H1");
	var clueHeaderText = document.createTextNode("Clues");
	clueHeader.appendChild(clueHeaderText);
	clueHeader.id="wordsHeaderCross";
	printDiv.appendChild(clueHeader);
	var clueContainer = document.createElement("DIV");
	var verticalContainer = document.createElement("DIV");
	var horizontalContainer = document.createElement("DIV");
	clueContainer.appendChild(verticalContainer);
	clueContainer.appendChild(horizontalContainer);
	verticalContainer.id="verticalClueContainer";
	horizontalContainer.id="horizontalClueContainer";
	var verticalClueList = document.querySelectorAll("[id = verticalClue]");
	var horizontalClueList = document.querySelectorAll("[id = horizontalClue]")
		var vertClueHeader = document.createElement("H3");
		var verticalClueHead = document.createTextNode("Vertical");
		vertClueHeader.appendChild(verticalClueHead);
		verticalContainer.appendChild(vertClueHeader);
		vertClueHeader.style.textAlign = "center";
				var horClueHeader = document.createElement("H3");
		var horizontalClueHead = document.createTextNode("Horizontal");
		horClueHeader.appendChild(horizontalClueHead);
		horizontalContainer.appendChild(horClueHeader);	
	for(k=0; k < verticalClueList.length; k++)
	{
		var currentClueDiv = document.createElement("DIV");
		currentClueDiv.id="clueDiv";

		var currentClueCount = document.createElement("P");
		currentClueCount.id="clueCount";
		currentClueCount.innerHTML = (k+1).toString();
		var currentClueText = document.createElement("P");
		currentClueText.id="clueText";
		currentClueText.innerHTML = verticalClueList[k].value;
		currentClueDiv.appendChild(currentClueCount);
		currentClueDiv.appendChild(currentClueText);
		verticalContainer.appendChild(currentClueDiv);
	}	
	for(kk=0; kk < horizontalClueList.length; kk++)
	{
		var currentClueDiv = document.createElement("DIV");
		currentClueDiv.id="clueDiv";

		var currentClueCount = document.createElement("P");
		currentClueCount.id="clueCount";
		currentClueCount.innerHTML = (kk+1).toString();
		var currentClueText = document.createElement("P");
		currentClueText.id="clueText";
		currentClueText.innerHTML = horizontalClueList[kk].value;
		currentClueDiv.appendChild(currentClueCount);
		currentClueDiv.appendChild(currentClueText);
		horizontalContainer.appendChild(currentClueDiv);
	}



	printDiv.appendChild(clueContainer);

     var printContents = document.getElementById("printable").innerHTML;
     var printWindow = window.open()
     printWindow.document.open();
     printWindow.document.write('<html><head><title>Bingo Printout</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="css/styleSheet.css"><style type="text/css" media="print">@page{size: auto;margin: 0;}</style></head><body onfocus="setTimeout(function() {window.print(); window.close(); }, 100);">')
 	 printWindow.document.write(printContents);
 	 printWindow.document.write('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script></body></html>');
 	 var printedDiv = document.getElementById("printable");
 	 printedDiv.innerHTML = "";
}