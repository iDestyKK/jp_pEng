//jp_pEng Javascript Module Creation JS
//
//This script file contains functions that power the jp_pEng console.
//This console may be accessed at: http://jppeng.derpg.xyz/mod/module_create.html
//~Clara

//Create a new array.
var tango = new Array();

function add_tango(kanji, kana, romaji, meaning, hint, type) {
	tango[tango.length] = [kanji, kana, romaji, meaning, hint, type];
	
	//Update previous entries.
	update_list();
	update_code();
}

function generate_file() {
	dstr = "";
	for (var i = 0; i < tango.length; i++)
		//jp_pEng takes these in a different order. 021345
		dstr += "addTerm(\"" + tango[i][0] + "\", \"" + tango[i][2] + "\", \"" + tango[i][1] + "\", \"" + tango[i][3] + "\", \"" + tango[i][4] + "\", \"" + tango[i][5] + "\");\n";
	
	return dstr;
}

function autoAdd() {
	add_tango(
		document.getElementById('kanji').value,
		document.getElementById('kana').value,
		document.getElementById('romaji').value,
		document.getElementById('meaning').value,
		document.getElementById('hint').value,
		document.getElementById('type').value
	);
}

function update_list() {
	dstr = "<table>";
	dstr += "<tr><td class = \"underlined_td\">Kanji</td><td class = \"underlined_td\">Kana</td><td class = \"underlined_td\">Romaji</td><td class = \"underlined_td\">Meaning</td><td class = \"underlined_td\">Hint</td><td class = \"underlined_td\">Type</td></tr>";
	for (var i = 0; i < tango.length; i++) {
		dstr += "<tr>";
		//jp_pEng takes these in a different order. 021345
		for (var a = 0; a < tango[i].length; a++)
			dstr += "<td>" + tango[i][a] + "</td>";
		
		dstr += "</tr>";
	}
	
	dstr += "</table>";
	
	document.getElementById('tango_list').innerHTML = dstr;
}

function update_code() {
	document.getElementById('genCode').innerHTML = generate_file();
}
