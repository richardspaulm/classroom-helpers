var randomSelect = document.getElementById("wordSearchRandSelect");
var sizeSelect = document.getElementById("wordSearchSizeSelect");
var studentNumDiv = document.getElementById("divToHide");
var theButton = document.getElementById("wordSearchButton");


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
function handleClick(sender)
{
	var currentValue = sender.value;
	if(currentValue == "random")
	{
		studentNumDiv.style.display = "block";
		printButton.onclick = RandomPuzzles;
	}
	else if (currentValue =="blank") 
	{
		studentNumDiv.style.display = "none";
		printButton.onclick = CreatePuzzle;

	}
}
function CountWords(){
	var countWords = document.getElementById("bingoInput").value;
	var countstring = countWords.replace(/\n/g, ",")
	var countArray = countstring.split(",");
	wordCount.innerHTML = countArray.length.toString();
}
function onSizeChanged()
{
	var currentSize = sizeSelect.options[sizeSelect.selectedIndex].value;
	if(currentSize == "10"){
		puzzleSize = 10;
	} else if (currentSize == "15"){
		puzzleSize = 15;
	} else if (currentSize == "20"){
		puzzleSize = 20;
	} else if (currentSize == "25"){
		puzzleSize = 25;
	} 
}
function RandomPuzzles()
{
	var puzzleNum = -1;
	var studentNum = document.getElementById("bingoStudents").value;
	var originalContents = document.body.innerHTML;
	var bingoTitle = document.getElementById("bingoTitle").value;
	var printDiv = document.getElementById("printable");
	printDiv.innerHTML="";
	if(studentNum <= 0)
	{
		alert("Please enter a value greater that 0 for the number of students, or choose the identical option to get a single page!")
	}
	else{
		for(qqq=0; qqq < studentNum; qqq++){
			puzzleNum++;
			var userWords = document.getElementById("bingoInput").value;
			console.log(qqq);	
			var searhTable = document.createElement("TABLE");
			searhTable.id="words15";
			if(puzzleSize == 25)
			{
				searhTable.id="wordsLarge";
			}
			var tableData = [];
			var pageDiv = document.createElement("DIV");
			pageDiv.id="randomPrintable";
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
					data.id=puzzleNum.toString() + "x" + (rowIndex-1).toString() + "x" + data.cellIndex.toString();
				}
			}	
			pageDiv.appendChild(searhTable);
			pageDiv.appendChild(wordsHead);
			pageDiv.appendChild(wordList);
			if(wordArray.length > 30){
				wordList.id="bigWordList";
			}
		for(j=0; j < wordArray.length; j++){
			if(j == (wordArray.length-1))
			{
				wordList.textContent += wordArray[j] + ".";
			}
			else
			{
				wordList.textContent += wordArray[j] + ", ";
			}
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
				var coordString = puzzleNum.toString() + "x" + randomRow.toString() + "x" + randomColumn.toString();
				var currentCoord =  document.getElementById(coordString);
				//horizontal check
				if(directionInt == 0){
					if((puzzleSize - currentCoord.cellIndex) >= wordArray[0].length)
					{
						for(o=0; o < wordArray[0].length; o++)
							{
								var checkString = puzzleNum.toString() + "x" + randomRow.toString() + "x" + (randomColumn + o).toString();
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
								var editString = puzzleNum.toString() + "x" + randomRow.toString() + "x" + (randomColumn + m).toString();
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
							var checkHeight = puzzleNum.toString() + "x" + (randomRow + q).toString() + "x" + randomColumn.toString();
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
								var editHeight = puzzleNum.toString() + "x" + (randomRow + r).toString() + "x" + randomColumn.toString();
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
				  		var checkDiag = puzzleNum.toString() + "x" + (randomRow + s).toString() + "x" + (randomColumn + s).toString();
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
				  			var editDiag = puzzleNum.toString() + "x" + (randomRow + t).toString() + "x" + (randomColumn + t).toString();
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
function CreatePuzzle()
{
	var searhTable = document.createElement("TABLE");
	searhTable.id="words15";
	if(puzzleSize == 25)
		{
			searhTable.id="wordsLarge";
		}
	var originalContents = document.body.innerHTML;
	var tableData = [];
	var daForm = document.getElementById("wordSearchForm");
	var bingoTitle = document.getElementById("bingoTitle").value;
	var printDiv = document.getElementById("printable");
	printDiv.innerHTML="";
	var pageDiv = document.createElement("DIV");
	pageDiv.id="randomPrintable";
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
			if(j == (wordArray.length-1))
			{
				wordList.textContent += wordArray[j] + ".";
			}
			else
			{
				wordList.textContent += wordArray[j] + ", ";
			}
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
     var printWindow = window.open()
     printWindow.document.open();
     printWindow.document.write('<html><head><title>Bingo Printout</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="css/styleSheet.css"><style type="text/css" media="print">@page{size: auto;margin: 0;}</style></head><body onfocus="setTimeout(function() {window.print(); window.close(); }, 100);">')
 	 printWindow.document.write(printContents);
 	 printWindow.document.write('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script></body></html>');
 	 var printedDiv = document.getElementById("printable");
 	 printedDiv.innerHTML = "";
}