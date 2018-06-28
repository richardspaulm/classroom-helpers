var randomSelect = document.getElementById("wordSearchRandSelect");
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
	randomSelect = document.getElementById("wordSearchRandSelect");
	var studentNumDiv = document.getElementById("randomDivBingo");
	var bingoButton = document.getElementById("bingoButton");
	var currentSelect = randomSelect.options[randomSelect.selectedIndex].value;
	if(currentSelect == "random"){
		studentNumDiv.style.display = "block";
		bingoButton.innerHTML = "Create Random Boards"
		bingoButton.onclick = sendToRand;
	} else{
		studentNumDiv.style.display = "none";
		bingoButton.innerHTML = "Create Blank Template";
		bingoButton.onclick = printDiv;
	}
	console.log("swap");
}


function printDiv() {
			var originalContents = document.body.innerHTML;

	var daForm = document.getElementById("bingoForm");
	var bingoTitle = document.getElementById("bingoTitle").value;
	var printDiv = document.getElementById("printable");
	printDiv.innerHTML="";
	var bingoHead = document.createElement("H1");
	//var bingoHeadText = document.createTextNode("BINGO");
	bingoHead.id = "bingoHead";	
	if(bingoTitle != ""){
	var bingoHeadText = document.createTextNode(bingoTitle);		
	} else{
	var bingoHeadText = document.createTextNode("BINGO");
	}
	bingoHead.appendChild(bingoHeadText);
	printDiv.appendChild(bingoHead)

	var bingoTable = document.createElement("TABLE");
	bingoTable.id = "bingoBoard";
	var row1 = document.createElement("TR");
	var row2 = document.createElement("TR");
	var row3 = document.createElement("TR");
	var row4 = document.createElement("TR");
	var row5 = document.createElement("TR");
	var tableSlot1 = document.createElement("TD");
	var tableSlot2 = document.createElement("TD");
	var tableSlot3 = document.createElement("TD");
	var tableSlot4 = document.createElement("TD");
	var tableSlot5 = document.createElement("TD");
	var tableSlot6 = document.createElement("TD");
	var tableSlot7 = document.createElement("TD");
	var tableSlot8 = document.createElement("TD");
	var tableSlot9 = document.createElement("TD");
	var tableSlot10 = document.createElement("TD");
	var tableSlot11 = document.createElement("TD");
	var tableSlot12 = document.createElement("TD");
	var free = document.createElement("TD");
	var tableSlot14 = document.createElement("TD");
	var tableSlot15 = document.createElement("TD");
	var tableSlot16 = document.createElement("TD");
	var tableSlot17 = document.createElement("TD");
	var tableSlot18 = document.createElement("TD");
	var tableSlot19 = document.createElement("TD");
	var tableSlot20 = document.createElement("TD");
	var tableSlot21 = document.createElement("TD");
	var tableSlot22 = document.createElement("TD");
	var tableSlot23 = document.createElement("TD");
	var tableSlot24 = document.createElement("TD");
	var tableSlot13 = document.createElement("TD");
	tableSlot1.id="bingoTableData";
	tableSlot2.id="bingoTableData";
	tableSlot3.id="bingoTableData";
	tableSlot4.id="bingoTableData";
	tableSlot5.id="bingoTableData";
	tableSlot6.id="bingoTableData";
	tableSlot7.id="bingoTableData";
	tableSlot8.id="bingoTableData";
	tableSlot9.id="bingoTableData";
	tableSlot10.id="bingoTableData";
	tableSlot11.id="bingoTableData";
	tableSlot12.id="bingoTableData";
	free.id="freeSpace";
	tableSlot14.id="bingoTableData";
	tableSlot15.id="bingoTableData";
	tableSlot16.id="bingoTableData";
	tableSlot17.id="bingoTableData";
	tableSlot18.id="bingoTableData";
	tableSlot19.id="bingoTableData";
	tableSlot20.id="bingoTableData";
	tableSlot21.id="bingoTableData";
	tableSlot22.id="bingoTableData";
	tableSlot23.id="bingoTableData";
	tableSlot24.id="bingoTableData";
	tableSlot13.id="bingoTableData";
	var freeText = document.createTextNode("Free Space!");
	free.appendChild(freeText);
	row1.appendChild(tableSlot1);
	row1.appendChild(tableSlot2);
	row1.appendChild(tableSlot3);
	row1.appendChild(tableSlot4);
	row1.appendChild(tableSlot5);
	row2.appendChild(tableSlot6);
	row2.appendChild(tableSlot7);
	row2.appendChild(tableSlot8);
	row2.appendChild(tableSlot9);
	row2.appendChild(tableSlot10);
	row3.appendChild(tableSlot11);
	row3.appendChild(tableSlot12);
	row3.appendChild(free);
	row3.appendChild(tableSlot14);
	row3.appendChild(tableSlot15);
	row4.appendChild(tableSlot16);
	row4.appendChild(tableSlot17);
	row4.appendChild(tableSlot18);
	row4.appendChild(tableSlot19);
	row4.appendChild(tableSlot20);
	row5.appendChild(tableSlot21);
	row5.appendChild(tableSlot22);
	row5.appendChild(tableSlot23);
	row5.appendChild(tableSlot24);
	row5.appendChild(tableSlot13);
	bingoTable.appendChild(row1);
	bingoTable.appendChild(row2);
	bingoTable.appendChild(row3);
	bingoTable.appendChild(row4);
	bingoTable.appendChild(row5);
	printDiv.appendChild(bingoTable);

	var wordList = document.createElement("P");
	var wordsHead = document.createElement("H1");
	wordsHead.id = "wordsHeader";
	wordList.id = "wordsList";
	var wordsHeadText = document.createTextNode("Word List:");
	wordsHead.appendChild(wordsHeadText);
	printDiv.appendChild(wordsHead);
	printDiv.appendChild(wordList);

	var userWords = document.getElementById("bingoInput").value;
	var newstring = userWords.replace(/\n/g, ",")
	var wordArray = newstring.split(",");
	console.log(wordArray.length);

	for(i=0; i < wordArray.length; i++){
		wordList.textContent += wordArray[i].toString() + ", ";
	}
		if(wordArray.length > 30){
		wordList.id="bigWordList";
	}	
	//Print

     var printContents = document.getElementById("printable").innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
     bingoInput.innerHTML = userWords;
     document.getElementById("wordSearchRandSelect").value = 'identical';
}



function sendToRand(){
	var studentNum = document.getElementById("bingoStudents").value;
	if(studentNum > 0){
		randomPrint();
	} else{
		window.alert("Please enter how many students you are creating boards for, or select the 'Blank Template' option");
	}
}






function randomPrint(){
	var originalContents = document.body.innerHTML;

	var daForm = document.getElementById("bingoForm");
	var bingoTitles = document.getElementById("bingoTitle").value;
	var title = bingoTitle.value;
	var printDiv = document.getElementById("printable");
	var studentNum = document.getElementById("bingoStudents").value;
	var studentInt = parseInt(studentNum);
	printDiv.innerHTML="";
	

	for(i=0; i < studentInt; i++){
	var pageDiv = document.createElement("DIV");
	printable.appendChild(pageDiv);
	pageDiv.id = "randomPrintable";
	var bingoHead = document.createElement("H1");
	bingoHead.id = "bingoHead";	
	if(bingoTitles != ""){
	var bingoHeadText = document.createTextNode(bingoTitles)	;		
	} else{
	var bingoHeadText = document.createTextNode("BINGO");
	}
	bingoHead.appendChild(bingoHeadText);
	pageDiv.appendChild(bingoHead)


	var bingoTable = document.createElement("TABLE");
	bingoTable.id = "bingoBoard";
	var row1 = document.createElement("TR");
	var row2 = document.createElement("TR");
	var row3 = document.createElement("TR");
	var row4 = document.createElement("TR");
	var row5 = document.createElement("TR");
	var tableSlot1 = document.createElement("TD");
	var tableSlot2 = document.createElement("TD");
	var tableSlot3 = document.createElement("TD");
	var tableSlot4 = document.createElement("TD");
	var tableSlot5 = document.createElement("TD");
	var tableSlot6 = document.createElement("TD");
	var tableSlot7 = document.createElement("TD");
	var tableSlot8 = document.createElement("TD");
	var tableSlot9 = document.createElement("TD");
	var tableSlot10 = document.createElement("TD");
	var tableSlot11 = document.createElement("TD");
	var tableSlot12 = document.createElement("TD");
	var free = document.createElement("TD");
	var tableSlot14 = document.createElement("TD");
	var tableSlot15 = document.createElement("TD");
	var tableSlot16 = document.createElement("TD");
	var tableSlot17 = document.createElement("TD");
	var tableSlot18 = document.createElement("TD");
	var tableSlot19 = document.createElement("TD");
	var tableSlot20 = document.createElement("TD");
	var tableSlot21 = document.createElement("TD");
	var tableSlot22 = document.createElement("TD");
	var tableSlot23 = document.createElement("TD");
	var tableSlot24 = document.createElement("TD");
	var tableSlot13 = document.createElement("TD");
	var tableArray = [tableSlot1, tableSlot2, tableSlot3, tableSlot4, tableSlot5, tableSlot6, tableSlot7, tableSlot8, tableSlot9, tableSlot10, 
	tableSlot11, tableSlot12, tableSlot13, tableSlot14, tableSlot15, tableSlot16, tableSlot17, tableSlot18, tableSlot19, tableSlot20, tableSlot21, tableSlot22, 
	tableSlot23, tableSlot24]
	tableSlot1.id="bingoTableData";
	tableSlot2.id="bingoTableData";
	tableSlot3.id="bingoTableData";
	tableSlot4.id="bingoTableData";
	tableSlot5.id="bingoTableData";
	tableSlot6.id="bingoTableData";
	tableSlot7.id="bingoTableData";
	tableSlot8.id="bingoTableData";
	tableSlot9.id="bingoTableData";
	tableSlot10.id="bingoTableData";
	tableSlot11.id="bingoTableData";
	tableSlot12.id="bingoTableData";
	free.id="freeSpace";
	tableSlot14.id="bingoTableData";
	tableSlot15.id="bingoTableData";
	tableSlot16.id="bingoTableData";
	tableSlot17.id="bingoTableData";
	tableSlot18.id="bingoTableData";
	tableSlot19.id="bingoTableData";
	tableSlot20.id="bingoTableData";
	tableSlot21.id="bingoTableData";
	tableSlot22.id="bingoTableData";
	tableSlot23.id="bingoTableData";
	tableSlot24.id="bingoTableData";
	tableSlot13.id="bingoTableData";
	var freeText = document.createTextNode("Free Space!");
	free.appendChild(freeText);
	row1.appendChild(tableSlot1);
	row1.appendChild(tableSlot2);
	row1.appendChild(tableSlot3);
	row1.appendChild(tableSlot4);
	row1.appendChild(tableSlot5);
	row2.appendChild(tableSlot6);
	row2.appendChild(tableSlot7);
	row2.appendChild(tableSlot8);
	row2.appendChild(tableSlot9);
	row2.appendChild(tableSlot10);
	row3.appendChild(tableSlot11);
	row3.appendChild(tableSlot12);
	row3.appendChild(free);
	row3.appendChild(tableSlot13);
	row3.appendChild(tableSlot14);
	row4.appendChild(tableSlot15);
	row4.appendChild(tableSlot16);
	row4.appendChild(tableSlot17);
	row4.appendChild(tableSlot18);
	row4.appendChild(tableSlot19);
	row5.appendChild(tableSlot20);
	row5.appendChild(tableSlot21);
	row5.appendChild(tableSlot22);
	row5.appendChild(tableSlot23);
	row5.appendChild(tableSlot24);

	bingoTable.appendChild(row1);
	bingoTable.appendChild(row2);
	bingoTable.appendChild(row3);
	bingoTable.appendChild(row4);
	bingoTable.appendChild(row5);
	pageDiv.appendChild(bingoTable);

	var wordList = document.createElement("P");
	var wordsHead = document.createElement("H1");
	wordsHead.id = "wordsHeader";
	wordList.id = "wordsList";
	var wordsHeadText = document.createTextNode("Word List:");
	wordsHead.appendChild(wordsHeadText);
	pageDiv.appendChild(wordsHead);
	pageDiv.appendChild(wordList);

	var userWords = document.getElementById("bingoInput").value;
	var newstring = userWords.replace(/\n/g, ",")
	var wordArray = newstring.split(",");
	if(wordArray.length > 30){
		wordList.id="bigWordList";
	}
	for(j=0; j < wordArray.length; j++){
		wordList.textContent += wordArray[j] + ", ";
	}
	while(wordArray.length > 24){
		var randSplice = Math.floor(Math.random() * wordArray.length);
		wordArray.splice(randSplice, 1)
	}
	while (wordArray.length > 0){
		var count = 0;
		var tableIndex = Math.floor(Math.random() * tableArray.length);
		tableArray[tableIndex].textContent += wordArray[count];
		tableArray.splice(tableIndex, 1);
		wordArray.splice(count, 1);
		count++;
	}

}

	//Print

     var printContents = document.getElementById("printable").innerHTML;


     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
     bingoInput.innerHTML = userWords;
}