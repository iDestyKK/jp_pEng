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

function CheckAnswer(a, b, c) {
	//Checks if the answer is actually correct.
	//a - input
	//b - kanji meaning
	
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
	document.getElementById('kanji').innerHTML = "<ruby><rb><font size='16'>" + kanji[i] + "</font></rb><rp>(</rp><rt><font size='3'>&nbsp;</font></rt><rp>)</rp></ruby>";
	
	document.getElementById('answer').value="";
	
	if (document.getElementById("cb_autoask").checked == true) {
		generateSpeech(kanji_onyomi[i]);
	}
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

function AddCategory(a) {
	//addLesson(lesson, codeid, file)
	modules  [module_id.length  ] = a;
	module_id[module_id.length++] = 0; //Category
	cur_cat++;
	mod_size = 0;
}

function AddModuleCat(a,b,c) {
	//This function adds in modules for you to select in the menu.
	modules           [module_id.length  ] = a;
	module_description[module_id.length  ] = b;
	module_path       [module_id.length  ] = c;
	module_category   [module_id.length  ] = cur_cat;
	module_id         [module_id.length  ] = 1;
	module_count      [module_id.length++] = mod_size; //Question
	mod_size++;
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