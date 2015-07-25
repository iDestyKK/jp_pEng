//-------------------------------------------//
//       L4 Vocabulary List - Location       //
//-------------------------------------------//

//This is for mass importing into a group review.
if (typeof mass_import === 'undefined') {
	kanji         = new Array();
	kanji_romaji  = new Array();
	kanji_kana    = new Array();
	kanji_meaning = new Array();
	kanji_hint    = new Array();
	count = 0;
}
else
	sectionmark[section_cnt++] = count;

function addTerm(jkanji, romaji, kana, meaning, hint) {
	commastr = "";
	
	kanji[count] = commastr + jkanji;
	kanji_romaji[count] = commastr + romaji;
	kanji_kana[count] = commastr + kana;
	kanji_meaning[count] = commastr + meaning;
	kanji_hint[count] = commastr + hint;
	count++;
}

//addTerm("", "", "", "", "");
addTerm("右", "migi", "みぎ", "right", "");
addTerm("左", "hidari", "ひだり", "left", "");
addTerm("上", "ue", "うえ", "above;on", "");
addTerm("下", "shita", "した", "below", "");
addTerm("中", "naka", "なか", "middle;inside", "");
addTerm("前", "mae", "まえ", "front", "");
addTerm("後ろ", "ushiro", "うしろ", "behind", "");
addTerm("間", "aida", "あいだ", "between", "");
addTerm("近く", "chikaku", "ちかく", "nearby", "");
addTerm("隣", "tonari", "となり", "next", "");
