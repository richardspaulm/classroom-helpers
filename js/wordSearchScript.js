var randomSelect = document.getElementById("wordSearchRandSelect");
var sizeSelect = document.getElementById("wordSearchSizeSelect");
var studentNumDiv = document.getElementById("randomDiv");
	var searhTable = document.createElement("TABLE");
searhTable.id="wordsFifteen";
var puzzleSize = 15;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var popUp = document.getElementById("toolInstructions");
function ShowInstructions()
{
	popUp.style.visibility = "visible";
}function HideInstructions()
{
	popUp.style.visibility = "hidden";
}
function onSelectChanged()
{
	var currentSelect = randomSelect.options[randomSelect.selectedIndex].value;
	if(currentSelect == "random"){
		studentNumDiv.style.display = "block";
	} else{
		studentNumDiv.style.display = "none";
	}
}
function onSizeChanged()
{
	var currentSize = sizeSelect.options[sizeSelect.selectedIndex].value;
	if(currentSize == "10"){
		puzzleSize = 10;
	} else if (currentSize == "15"){
		puzzleSize = 15;
		searhTable.id = "wordsFifteen";
	} else if (currentSize == "20"){
		puzzleSize = 20;
		searhTable.id="wordsFifteen";
	} else if (currentSize == "25"){
		puzzleSize = 25;
	} else if (currentSize == "30"){
		puzzleSize = 30;
	}
}

function CreatePuzzle()
{
	var originalContents = document.body.innerHTML;
	var tableData = [];
	var daForm = document.getElementById("wordSearchForm");
	var bingoTitle = document.getElementById("bingoTitle").value;
	var printDiv = document.getElementById("printable");
	printDiv.innerHTML="";
	var pageDiv = document.createElement("DIV");
	printable.appendChild(pageDiv);
	var bingoHead = document.createElement("H1");
	bingoHead.id = "bingoHead";	
	if(bingoTitle != ""){
	var bingoHeadText = document.createTextNode(bingoTitle);		
	} else{
	var bingoHeadText = document.createTextNode("Word Search");
	}
	bingoHead.appendChild(bingoHeadText);
	pageDiv.appendChild(bingoHead);
	//Create Word List
	var wordList = document.createElement("P");
	var wordsHead = document.createElement("H1");
	wordsHead.id = "wordsHeader";
	wordList.id = "wordsList";
	var wordsHeadText = document.createTextNode("Word List:");
	wordsHead.appendChild(wordsHeadText);
	var userWords = document.getElementById("bingoInput").value;
	var newstring = userWords.replace(/\n/g, ",")
	var wordArray = newstring.split(",");
	wordArray = wordArray.filter(v=>v!='');
	for(p=0; p<wordArray.length; p++)
	{
		wordArray[p] = wordArray[p].trim();
	}
	//generate table rows
	var arrayCount = 0;
	var rowIndex = 0;
	for(i=0; i < puzzleSize; i++){
		var row = document.createElement("TR");
		searhTable.appendChild(row);
		row.id= rowIndex.toString();
		rowIndex++;

		for(j=0; j < puzzleSize; j++){
			var data = document.createElement("TD");
			var alphabetIndex = Math.floor(Math.random() * 26);
			//data.textContent += alphabet[alphabetIndex];
			row.appendChild(data);
			tableData.push(data);
			data.id=(rowIndex-1).toString() + "x" + data.cellIndex.toString();
		}
	}	
	pageDiv.appendChild(searhTable);
	pageDiv.appendChild(wordsHead);
	pageDiv.appendChild(wordList);
	if(wordArray.length > 30){
		wordList.id="bigWordList";
	}
	for(j=0; j < wordArray.length; j++){
		wordList.textContent += wordArray[j] + ", ";
	}
	var noneCount = 0;
	//place words
	while(wordArray.length > 0){
		if (noneCount > 100){
			console.log("Too Many Tries, splicing " + wordArray[0]);
			wordArray.splice(0, 1);
			noneCount = 0;
		}
		if(wordArray.length == 0){
			break;
		}
		var checkCount = 0;
		var directionInt = Math.floor(Math.random() * 3);
		//		var directionInt = 2;
		var randomRow = Math.floor(Math.random() * puzzleSize);
		var randomColumn = Math.floor(Math.random() * puzzleSize);
		var coordString = randomRow.toString() + "x" + randomColumn.toString();
		var currentCoord =  document.getElementById(coordString);
		//horizontal check
		if(directionInt == 0){
			if((puzzleSize - currentCoord.cellIndex) >= wordArray[0].length)
			{
				for(o=0; o < wordArray[0].length; o++)
					{
						var checkString = randomRow.toString() + "x" + (randomColumn + o).toString();
						var checkTD = document.getElementById(checkString);
						if(checkTD.innerHTML == "" ||  checkTD.innerHTML == wordArray[0].charAt(o)){
							checkCount++;
						}
					}
				if (checkCount >= wordArray[0].length)
				{
					console.log("writing " + wordArray[0]);
					for(m = 0; m < wordArray[0].length; m++)
					{
						var editString = randomRow.toString() + "x" + (randomColumn + m).toString();
						var editTD = document.getElementById(editString);
						editTD.innerHTML = wordArray[0].charAt(m);
					}
					wordArray.splice(0,1);
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
			if((puzzleSize - randomRow) >= wordArray[0].length)
			{
				for(q=0; q<wordArray[0].length; q++)
				{
					var checkHeight = (randomRow + q).toString() + "x" + randomColumn.toString();
					var checkHeightTD = document.getElementById(checkHeight);
					if(checkHeightTD.innerHTML == "" || checkHeightTD.innerHTML == wordArray[0].charAt(q))
					{
						checkCount++;
					}
				}
				if(checkCount >= wordArray[0].length)
				{
					console.log("writing " + wordArray[0]);
					for(r=0; r< wordArray[0].length; r++)
					{
						var editHeight = (randomRow + r).toString() + "x" + randomColumn.toString();
						var editHeightTD = document.getElementById(editHeight);
						editHeightTD.innerHTML = wordArray[0].charAt(r);
					}
					wordArray.splice(0, 1);
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
		  if((puzzleSize - randomRow) >= wordArray[0].length && (puzzleSize - randomColumn) >= wordArray[0].length)
		  {
		  	for(s=0; s<wordArray[0].length; s++)
		  	{
		  		var checkDiag = (randomRow + s).toString() + "x" + (randomColumn + s).toString();
		  		var checkDiagTD = document.getElementById(checkDiag);
		  		if(checkDiagTD.innerHTML == "" || checkDiagTD.innerHTML == wordArray[0].charAt(s))
		  		{
		  			checkCount++;
		  		}
		  	}
		  	if(checkCount >= wordArray[0].length)
		  	{
		  		console.log("writing " + wordArray[0]);
		  		for(t=0; t < wordArray[0].length; t++)
		  		{
		  			var editDiag = (randomRow + t).toString() + "x" + (randomColumn + t).toString();
		  			var editDiagTD = document.getElementById(editDiag);
		  			editDiagTD.innerHTML = wordArray[0].charAt(t);
		  		}
		  		wordArray.splice(0, 1);
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
	//place letters
	for(n = 0; n < tableData.length; n++){
		if(tableData[n].innerHTML == "")
		{
			var alphabetIndex = Math.floor(Math.random() * 26);
			tableData[n].innerHTML = alphabet[alphabetIndex];
			}
	}
	 var printContents = document.getElementById("printable").innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     location.reload();
}