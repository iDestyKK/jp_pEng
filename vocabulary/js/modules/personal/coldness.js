﻿//-----------------------------------------------------//
//         Personal Vocabulary List - Coldness         //
//-----------------------------------------------------//

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
//addTerm("新しい", "atarashii", "あたらしい", "new", "");
addTerm("零下", "reika", "れいか", "Below Zero", "");
addTerm("氷", "koori", "こおり", "Ice", "");
addTerm("南極大陸", "nankyokutairiku", "なんきょくたいりく", "Antarctica", "");
addTerm("凍みる", "shimiru", "しみる", "Freeze", "");
addTerm("風が身に凍みる", "kaze ga mi ni shimiru", "かぜがみにしみる", "Wind feels like biting into my body", "");

