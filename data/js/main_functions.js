//Basic Functions
function CorrectAnswer() {
	document.getElementById('correctind').innerHTML = 'Correct! :)';
	//setTimeout("location.reload(true);",1000);
	GenerateQuestion()
	//setTimeout("GenerateQuestion()",2000);
	setTimeout("document.getElementById('correctind').innerHTML = '';",2000);
	correct += 1;
	document.getElementById("rating_correct"  ).style.width = parseInt((  correct / (incorrect + correct)) * 100) + "%";
	document.getElementById("rating_incorrect").style.width = parseInt((incorrect / (incorrect + correct)) * 100) + "%";
	document.getElementById('correct').innerHTML = "<center>" + correct + "</center>";
}
	
function WrongAnswer() {
	document.getElementById('correctind').innerHTML = 'Incorrect :(';
	setTimeout("document.getElementById('correctind').innerHTML = '';",2000);
	incorrect += 1;
	document.getElementById("rating_correct"  ).style.width = parseInt((  correct / (incorrect + correct)) * 100) + "%";
	document.getElementById("rating_incorrect").style.width = parseInt((incorrect / (incorrect + correct)) * 100) + "%";
	document.getElementById('incorrect').innerHTML = "<center>" + incorrect + "</center>";
}

function CheckAnswer(a, b, c, d) {
	//Checks if the answer is actually correct.
	//a - input
	//b - kanji meaning
	//c - kanji romaji
	
	//Romaji will come into play later (With a 4th argument).
	//Check ALL possible answer choices.
	var res = b.split(";");
	var ans = false;
	
	for (var i = 0; i < res.length; i++) {
		//SCAN THEM!
		if (a.toLowerCase() == res[i].toLowerCase()) {
			ans = true;
			break;
		}
	}
	
	if (ans == true)
		CorrectAnswer();
	else
		WrongAnswer();
}
	
function GenerateQuestion() {
	i = Math.floor((Math.random()*kanji.length));
	if (kanji[i] != "" && filter != "nokanji" && filter != "romaji")
		document.getElementById('kanji').innerHTML = "<ruby><rb><font size='16'>" + kanji[i] + "</font></rb><rp>(</rp><rt><font size='3'>" + kanji_kana[i] + "</font></rt><rp>)</rp></ruby>";
	else
	if (filter == "romaji")
		document.getElementById('kanji').innerHTML = "<ruby><rb><font size='16'>" + kanji_romaji[i] + "</font></rb><rp>(</rp><rt><font size='3'>&nbsp;</font></rt><rp>)</rp></ruby>";
	else
		document.getElementById('kanji').innerHTML = "<ruby><rb><font size='16'>" + kanji_kana[i] + "</font></rb><rp>(</rp><rt><font size='3'>&nbsp;</font></rt><rp>)</rp></ruby>";
	
	document.getElementById('answer').value="";
}
	
function ShowHint() {
	clearTimeout(hint_timeout);
	document.getElementById('hint').innerHTML = kanji_hint[i];
	var hint_timeout = setTimeout("document.getElementById('hint').innerHTML = '';",5000);
}

function AddModule(a,b,c) {
	//This function adds in modules for you to select in the menu.
	modules           [mod_size] = a;
	module_description[mod_size] = b;
	module_path       [mod_size] = c;
	mod_size += 1;
}