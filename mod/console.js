//jp_pEng Javascript Console JS
//
//This script file contains functions that power the jp_pEng console.
//This console may be accessed at: http://jppeng.derpg.xyz/mod/console.html
//~Clara

function import_vocabulary() {
	//document.write('<script src="../vocabulary/js/main.js" type="text/javascript"></script>');
	document.write('<scr'+'ipt src="http://jppeng.derpg.xyz/vocabulary/js/modules/subete_no_module/tango.js" type="text/javascript" ></scr'+'ipt>');
	return 1;
}

function import_kanji() {
	//document.write('<script src="../kanji/js/main.js" type="text/javascript"></script>');
	document.write('<scr'+'ipt src="http://jppeng.derpg.xyz/kanji/js/modules/subete_no_module/kanji.js" type="text/javascript" ></scr'+'ipt>');
	return 1;
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function add_line_to_console(str) {
	document.getElementById("console-content").innerHTML += str + "</br>";
	document.getElementById("console-content").scrollTop = document.getElementById("console-content").scrollHeight;
}

function process_args(command) {
	//First off, check if there is a space. If not, then it is a single command and we do not need to run it.
	cmd_args = new Array();
	var first_bracket_pos = command.indexOf(" ");
	if (first_bracket_pos != -1) {
		cmd_args = command.split(" "); //The commands are separated by space.
	}
	
	return cmd_args;
}

function display_about() {
	add_line_to_console("---------------------------------------------------------------");
	add_line_to_console("jp_pEng version " + text_data["en"]["version"] + " Console");
	add_line_to_console("Please note, this console is for developer's use only!");
	add_line_to_console("Users are welcome to experiment. To start, try typing \"help\".");
	add_line_to_console("---------------------------------------------------------------");
}

function display_help() {
	//Program General Options
	add_line_to_console("<u>General commands:</u>");
	add_line_to_console("	about / について          - displays console information");
	add_line_to_console("	help                      - displays this help dialog");
	add_line_to_console("	clear / cls / クリア      - clears the console window");
	add_line_to_console("");
	
	//Kanji Options
	add_line_to_console("<u>Kanji commands:</u>");
	add_line_to_console("	kanji_list                - displays all 漢字リスト Kanji (Careful!)");
	add_line_to_console("	kanji_info / 漢字について - displays info about a Kanji from 漢字リスト");
	add_line_to_console("	rand_kanji                - displays a random Kanji from 漢字リスト");
	add_line_to_console("	kanji_onyomi  / 音読み    - displays onyomi  for kanji (if available in 漢字リスト)");
	add_line_to_console("	kanji_kunyomi / 訓読み    - displays kunyomi for kanji (if available in 漢字リスト)");
	add_line_to_console("");
	
	//Vocabulary Commands
	add_line_to_console("<u>Vocabulary commands:</u>");
	add_line_to_console("	vocab_list                - displays all 辞書 vocabulary words (Careful!)");
	add_line_to_console("	vocab_info / 単語について - displays information for vocabulary word (if available in 辞書)");
	add_line_to_console("	vocab_conjugate           - displays conjugations for vocabulary word (if available in 辞書)");
	add_line_to_console("	rand_vocab                - displays a random vocabulary word from 辞書");
}

function display_clear() {
	document.getElementById("console-content").innerHTML = "";
}

function display_vocab_info(i) {
	add_line_to_console("");
	if (vocabulary[i] == "")
		add_line_to_console("<u>VOCABULARY INFO FOR \"" + vocabulary_kana[i] + "\":</u>");
	else
		add_line_to_console("<u>VOCABULARY INFO FOR \"" + vocabulary[i] + "\":</u>");
	add_line_to_console("	Kanji   : " + vocabulary[i]);
	add_line_to_console("	Kana    : " + vocabulary_kana[i]);
	add_line_to_console("	Meaning : " + vocabulary_meaning[i].replace(/;/g, ", "));
	add_line_to_console("	Type    : " + vocabulary_type[i]);
	add_line_to_console("");
	
	//display_vocab_conjugation(i);
	
	if (vocabulary[i] == "")
		add_line_to_console("	For conjugations, please type \"vocab_conjugate " + vocabulary_kana[i] + "\".");
	else
		add_line_to_console("	For conjugations, please type \"vocab_conjugate " + vocabulary[i] + "\".");
}

function display_vocab_conjugation(i) {
	add_line_to_console("");
	if (vocabulary[i] == "")
		add_line_to_console("<u>VOCABULARY CONJUGATIONS FOR \"" + vocabulary_kana[i] + "\" (" + vocabulary_type[i] + "):</u>");
	else
		add_line_to_console("<u>VOCABULARY CONJUGATIONS FOR \"" + vocabulary[i] + "\" (" + vocabulary_type[i] + "):</u>");
	
	dhtml = "<table class = \"none\"><tr><td style = \"border-bottom: 1px solid white; text-align: right;\">#&nbsp;</td><td style = \"border-bottom: 1px solid white;\">Form</td><td style = \"border-bottom: 1px solid white;\">Conjugation</td></tr>";
	//add_line_to_console("<table><tr><td>Kanji</td><td>Kana</td></tr>");
	for (var a = 0; a < getConjugationCount(vocabulary_type[i]); a++) {
		dhtml += "<tr><td style = \"text-align: right;\">" + (a + 1) + "&nbsp;</td><td>" + getConjugateName(a + 1, vocabulary_type[i]) + "</td><td>" + conjugate(i, a + 1) + "</td></tr>";
		//add_line_to_console(str_setw_l(vocabulary[i], 8) + str_setw_l(vocabulary_kana[i], 16));
	}
	dhtml += "</table>";
	add_line_to_console(dhtml);
}

function display_kanji_info(i) {
	add_line_to_console("");
	add_line_to_console("<u>KANJI INFO FOR \"" + kanji[i] + "\":</u>"); //Unlike the Vocabulary Equivalent Function, this one is guaranteed.
	add_line_to_console("	Kanji   : " + kanji[i]);
	add_line_to_console("	音読み  : " + kanji_onyumi[i].replace(/;/g, ", "));
	add_line_to_console("	訓読み  : " + kanji_kunyumi[i].replace(/;/g, ", "));
	add_line_to_console("	Meaning : " + kanji_meaning[i].replace(/;/g, ", "));
}

function display_kanji_onyomi(i) {
	add_line_to_console("「" + kanji[i] + "」の音読み  : " + kanji_onyumi[i].replace(/;/g, ", "));
}

function display_kanji_kunyomi(i) {
	add_line_to_console("「" + kanji[i] + "」の訓読み  : " + kanji_kunyumi[i].replace(/;/g, ", "));
}

function str_setw_l(str, length) {
	//Sets a string so it is at least "length" size. This is done by filling extra spots with spaces.
	var tmp_str = str;
	while (tmp_str.length < length)
		tmp_str += " ";
	
	return tmp_str;
}

function get_vocab_index(str) {
	var index = -1;
	if (vocabulary.indexOf(str) != -1)
		index = vocabulary.indexOf(str);
	else
	if (vocabulary_kana.indexOf(str) != -1)
		index = vocabulary_kana.indexOf(str);
	else
	if (vocabulary_romaji.indexOf(str) != -1)
		index = vocabulary_romaji.indexOf(str);
	else
	if (vocabulary_meaning.indexOf(str) != -1)
		index = vocabulary_meaning.indexOf(str);
	
	return index;
}

function display_vocab_table() {
	dhtml = "<table class = \"none\"><tr><td style = \"border-bottom: 1px solid white; text-align: right;\">#&nbsp;</td><td style = \"border-bottom: 1px solid white;\">Kanji</td><td style = \"border-bottom: 1px solid white;\">Kana</td><td style = \"border-bottom: 1px solid white;\">Meaning</td><td style = \"border-bottom: 1px solid white;\">Type</td></tr>";
	//add_line_to_console("<table><tr><td>Kanji</td><td>Kana</td></tr>");
	for (var i = 0; i < vocabulary.length; i++) {
		dhtml += "<tr><td style = \"text-align: right;\">" + (i + 1) + "&nbsp;</td><td>" + vocabulary[i] + "</td><td>" + vocabulary_kana[i] + "</td><td>" + vocabulary_meaning[i].replace(/;/g, ", ") + "</td><td>" + vocabulary_type[i] + "</td></tr>";
		//add_line_to_console(str_setw_l(vocabulary[i], 8) + str_setw_l(vocabulary_kana[i], 16));
	}
	dhtml += "</table>";
	add_line_to_console(dhtml);
}

function display_vocab_table_filtered(filter) {
	add_line_to_console("Filtered to show entries with romaji, definition, kana, or kanji matching \"" + filter + "\".");
	dhtml = "<table class = \"none\"><tr><td style = \"border-bottom: 1px solid white; text-align: right;\">#&nbsp;</td><td style = \"border-bottom: 1px solid white;\">Kanji</td><td style = \"border-bottom: 1px solid white;\">Kana</td><td style = \"border-bottom: 1px solid white;\">Meaning</td><td style = \"border-bottom: 1px solid white;\">Type</td></tr>";
	//add_line_to_console("<table><tr><td>Kanji</td><td>Kana</td></tr>");
	for (var i = 0; i < vocabulary.length; i++) {
		if ( vocabulary_meaning[i].toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
		     vocabulary_romaji [i].toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
			 vocabulary_kana   [i].toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
			 vocabulary        [i].toLowerCase().indexOf(filter.toLowerCase()) > -1 )
			dhtml += "<tr><td style = \"text-align: right;\">" + (i + 1) + "&nbsp;</td><td>" + vocabulary[i] + "</td><td>" + vocabulary_kana[i] + "</td><td>" + vocabulary_meaning[i].replace(/;/g, ", ") + "</td><td>" + vocabulary_type[i] + "</td></tr>";
		//add_line_to_console(str_setw_l(vocabulary[i], 8) + str_setw_l(vocabulary_kana[i], 16));
	}
	dhtml += "</table>";
	add_line_to_console(dhtml);
}

function display_kanji_table() {
	dhtml = "<table class = \"none\"><tr><td style = \"border-bottom: 1px solid white; text-align: right;\">#&nbsp;</td><td style = \"border-bottom: 1px solid white;\">Kanji</td><td style = \"border-bottom: 1px solid white;\">音読み</td><td style = \"border-bottom: 1px solid white;\">訓読み</td><td style = \"border-bottom: 1px solid white;\">Meaning</td><td style = \"border-bottom: 1px solid white;\">Type</td></tr>";
	//add_line_to_console("<table><tr><td>Kanji</td><td>Kana</td></tr>");
	for (var i = 0; i < kanji.length; i++) {
		dhtml += "<tr><td style = \"text-align: right;\">" + (i + 1) + "&nbsp;</td><td>" + kanji[i] + "</td><td>" + kanji_onyumi[i].replace(/;/g, ", ") + "</td><td>" + kanji_kunyumi[i].replace(/;/g, ", ") + "</td><td>" + kanji_meaning[i].replace(/;/g, ", ") + "</td><td>" + kanji_type[i] + "</td></tr>";
		//add_line_to_console(str_setw_l(vocabulary[i], 8) + str_setw_l(vocabulary_kana[i], 16));
	}
	dhtml += "</table>";
	add_line_to_console(dhtml);
}

function process_command(command) {
	if (command.indexOf(";") != -1) {
		add_line_to_console("Recursively processing commands: \"" + command + "\"");
		var commands = command.split(";");
		for (var i = 0; i < commands.length; i++)
			process_command(commands[i]); //YEAH RECURSION IN JAVASCRIPT!
	}
	else {
		add_line_to_console("> " + command);
		//Check if it is a blank string... and ignore it if so.
		if (command.length == 0)
			exit;
		var first_bracket_pos = command.indexOf(" ");
		if (first_bracket_pos == -1)
			//Either it is a command with no arguments or it is garbage.
			if (command == "about" || command == "について")
				display_about();
			else
			if (command == "clear" || command == "cls" || command == "クリア")
				display_clear();
			else
			if (command == "help")
				display_help();
			else
			if (command == "kanji_list") {
				display_kanji_table();
			}
			else
			if (command == "rand_kanji") {
				var i = Math.floor((Math.random()*kanji.length));
				display_kanji_info(i);
			}
			else
			if (command == "vocab_list") {
				display_vocab_table();
			}
			else
			if (command == "rand_vocab") {
				var i = Math.floor((Math.random()*vocabulary.length));
				display_vocab_info(i);
			}
			else
			if (command == "漢字について" || command == "kanji_info") {
				add_line_to_console("	Usage: kanji_info [kanji] [...]");
				add_line_to_console("");
				add_line_to_console("	Function: Gives information about Kanji.");
				add_line_to_console("");
				add_line_to_console("	Examples:");
				add_line_to_console("		kanji_info 女");
				add_line_to_console("		kanji_info 女 男 私");
			}
			else
			if (command == "音読み" || command == "kanji_onyomi") {
				add_line_to_console("	Usage: kanji_onyomi [kanji] [...]");
				add_line_to_console("");
				add_line_to_console("	Function: Returns the 音読み of a Kanji.");
				add_line_to_console("");
				add_line_to_console("	Examples:");
				add_line_to_console("		kanji_onyomi 女");
				add_line_to_console("		kanji_onyomi 女 男 私");
			}
			else
			if (command == "訓読み" || command == "kanji_kunyomi") {
				add_line_to_console("	Usage: kanji_kunyomi [kanji] [...]");
				add_line_to_console("");
				add_line_to_console("	Function: Returns the 訓読み of a Kanji.");
				add_line_to_console("");
				add_line_to_console("	Examples:");
				add_line_to_console("		kanji_kunyomi 女");
				add_line_to_console("		kanji_kunyomi 女 男 私");
			}
			else
			if (command == "vocab_conjugate") {
				add_line_to_console("	Usage: vocab_conjugate [word] [...]");
				add_line_to_console("");
				add_line_to_console("	Function: Conjugates vocabulary words from the 辞書 and displays them in the console.");
				add_line_to_console("");
				add_line_to_console("	Examples:");
				add_line_to_console("		vocab_conjugate 食べる");
				add_line_to_console("		vocab_conjugate 図書館 としょかん toshokan Library");
			}
			else
			if (command == "単語について" || command == "vocab_info") {
				add_line_to_console("	Usage: vocab_info [word] [...]");
				add_line_to_console("");
				add_line_to_console("	Function: Gives information about a vocabulary word from the 辞書.");
				add_line_to_console("");
				add_line_to_console("	Examples:");
				add_line_to_console("		vocab_info 日本");
				add_line_to_console("		vocab_info 映画 たべもの asagohan Hotel");
			}
			else
				add_line_to_console("Error: \"" + command + "\" is not a valid command!");
		else {
			//Assuming it is a command...
			cmd_args = process_args(command);
			switch (cmd_args[0]) {
				case "漢字について":
				case "kanji_info":
					//Needs only one argument... but can take unlimited and display them all!
					for (var i = 1; i < cmd_args.length; i++) {
						if (kanji.indexOf(cmd_args[i]) == -1)
							add_line_to_console("Error: Kanji \"" + cmd_args[i] + "\" not found in 漢字リスト!");
						else
							display_kanji_info(kanji.indexOf(cmd_args[i]));
					}
					break;
				case "音読み":
				case "kanji_onyomi":
					//Needs only one argument... but can take unlimited and display them all!
					for (var i = 1; i < cmd_args.length; i++) {
						if (kanji.indexOf(cmd_args[i]) == -1)
							add_line_to_console("Error: Kanji \"" + cmd_args[i] + "\" not found in 漢字リスト!");
						else
							display_kanji_onyomi(kanji.indexOf(cmd_args[i]));
					}
					break;
				case "訓読み":
				case "kanji_kunyomi":
					//Needs only one argument... but can take unlimited and display them all!
					for (var i = 1; i < cmd_args.length; i++) {
						if (kanji.indexOf(cmd_args[i]) == -1)
							add_line_to_console("Error: Kanji \"" + cmd_args[i] + "\" not found in 漢字リスト!");
						else
							display_kanji_kunyomi(kanji.indexOf(cmd_args[i]));
					}
					break;
				case "vocab_conjugate":
					//Needs only one argument... but can take unlimited and display them all!
					for (var i = 1; i < cmd_args.length; i++) {
						var index = get_vocab_index(cmd_args[i]);
						
						if (index == -1)
							add_line_to_console("Error: Word \"" + cmd_args[i] + "\" not found in 辞書!");
						else
							display_vocab_conjugation(index);
					}
					break;
				case "単語について":
				case "vocab_info":
					//Needs only one argument... but can take unlimited and display them all!
					for (var i = 1; i < cmd_args.length; i++) {
						var index = get_vocab_index(cmd_args[i]);
						
						if (index == -1)
							add_line_to_console("Error: Word \"" + cmd_args[i] + "\" not found in 辞書!");
						else
							display_vocab_info(index);
					}
					break;
				case "vocab_list":
					//Requires only one argument. Can not go over.
					if (cmd_args.length > 2)
						add_line_to_console("Error: Too many arguments! (1 required, " + parseInt(cmd_args.length - 1) + " given)");
					else {
						//Filter results.
						display_vocab_table_filtered(cmd_args[1]);
					}
					break;
			}
		}
	}
}
