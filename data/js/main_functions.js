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
	i = Math.floor((Math.random()*vocabulary.length));
	if (vocabulary[i] != "" && filter != "nokanji" && filter != "romaji")
		document.getElementById('kanji').innerHTML = "<ruby><rb><font size='16'>" + vocabulary[i] + "</font></rb><rp>(</rp><rt><font size='3'>" + vocabulary_kana[i] + "</font></rt><rp>)</rp></ruby>";
	else
	if (filter == "romaji")
		document.getElementById('kanji').innerHTML = "<ruby><rb><font size='16'>" + vocabulary_romaji[i] + "</font></rb><rp>(</rp><rt><font size='3'>&nbsp;</font></rt><rp>)</rp></ruby>";
	else
		document.getElementById('kanji').innerHTML = "<ruby><rb><font size='16'>" + vocabulary_kana[i] + "</font></rb><rp>(</rp><rt><font size='3'>&nbsp;</font></rt><rp>)</rp></ruby>";
	
	document.getElementById('answer').value="";
	
	if (document.getElementById("cb_autoask").checked == true) {
		generateSpeech(vocabulary_kana[i]);
	}
}
	
function ShowHint() {
	clearTimeout(hint_timeout);
	document.getElementById('hint').innerHTML = vocabulary_hint[i];
	var hint_timeout = setTimeout("document.getElementById('hint').innerHTML = '';",5000);
}

function AddModule(a,b,c) {
	//This function adds in modules for you to select in the menu.
	v_modules           [v_mod_size] = a;
	v_module_description[v_mod_size] = b;
	v_module_path       [v_mod_size] = c;
	v_mod_size += 1;
}

function AddCategory(a) {
	//addLesson(lesson, codeid, file)
	v_modules  [v_module_id.length  ] = a;
	v_module_id[v_module_id.length++] = 0; //Category
	cur_cat++;
	v_mod_size = 0;
}

function AddVModuleCat(a,b,c) {
	//This function adds in modules for you to select in the menu.
	v_modules           [v_module_id.length  ] = a;
	v_module_description[v_module_id.length  ] = b;
	v_module_path       [v_module_id.length  ] = c;
	v_module_category   [v_module_id.length  ] = cur_cat;
	v_module_id         [v_module_id.length  ] = 1;
	v_module_count      [v_module_id.length++] = v_mod_size; //Question
	v_mod_size++;
}