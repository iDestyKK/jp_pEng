//Modules
var v_mod_size = 0;
v_modules            = new Array();
v_module_path        = new Array();
v_module_description = new Array();
v_module_id          = new Array();
v_module_category    = new Array();
v_module_count       = new Array();

vocabulary         = new Array();
vocabulary_romaji  = new Array();
vocabulary_kana    = new Array();
vocabulary_meaning = new Array();
vocabulary_hint    = new Array();
vocabulary_type    = new Array();
count = 0;

function addTerm(jvocabulary, romaji, kana, meaning, hint, type) {
	commastr = "";
	
	vocabulary[count] = commastr + jvocabulary;
	vocabulary_romaji[count] = commastr + romaji;
	vocabulary_kana[count] = commastr + kana;
	vocabulary_meaning[count] = commastr + meaning;
	vocabulary_hint[count] = commastr + hint;
	if (typeof type !== 'undefined')
		vocabulary_type[count] = type;
	else
		vocabulary_type[count] = "";
	count++;
}

function getConjugationCount(type) {
	if (type == "名詞" || type == "形容動詞" || type == "形容詞" || type == "いい-アジェクティブ")
		return 9;
	if (type == "う動詞" || type == "る動詞" || type == "くる-例外動詞" || type == "する-例外動詞")
		return 15;
}

function getConjugateName(i, type) {
	if (type == "名詞" || type == "形容動詞" || type == "形容詞" || type == "いい-アジェクティブ") {
		switch (i) {
			case 1: return "Present Affirmative";
			case 2: return "Past Affirmative";
			case 3: return "Present Negative";
			case 4: return "Past Negative";
			case 5: return "Short Present Affirmative";
			case 6: return "Short Past Affirmative";
			case 7: return "Short Present Negative";
			case 8: return "Short Past Negative";
			case 9: return "To Become";
		}
	}
	
	if (type == "う動詞" || type == "る動詞" || type == "くる-例外動詞" || type == "する-例外動詞") {
		switch (i) {
			case  1: return "Present Affirmative";
			case  2: return "Past Affirmative";
			case  3: return "Present Negative";
			case  4: return "Past Negative";
			case  5: return "Volitional";
			case  6: return "Stem";
			case  7: return "Te Form";
			case  8: return "Potential";
			case  9: return "Short Present Affirmative";
			case 10: return "Short Present Negative (Nai Form)";
			case 11: return "Short Past Affirmative (Ta Form)";
			case 12: return "Short Past Negative";
			case 13: return "Intention";
			case 14: return "Hope/Want to do... (Tai Form)";
			case 15: return "Have the experience of...";
		}
	}
}

function genTeForm(id) {
	var tmp;
	if (vocabulary[id] == "")
		tmp = vocabulary_kana[id];
	else
		tmp = vocabulary[id];
	
	if (vocabulary_type[id] == "う動詞") {
		var last_char = tmp.substr(tmp.length - 1, 1);
		if (last_char == "う" || last_char == "つ" || last_char == "る" || vocabulary[id] == "行く" || vocabulary_kana[id] == "いく")
			return tmp.substr(0, tmp.length - 1) + "って";
			
		if (last_char == "む" || last_char == "ぶ" || last_char == "ぬ")
			return tmp.substr(0, tmp.length - 1) + "んで";
			
		if (last_char == "く")
			return tmp.substr(0, tmp.length - 1) + "いて";
			
		if (last_char == "ぐ")
			return tmp.substr(0, tmp.length - 1) + "いで";
			
		if (last_char == "す")
			return tmp.substr(0, tmp.length - 1) + "して";
	}
	
	if (vocabulary_type[id] == "る動詞") {
		return tmp.substr(0, tmp.length - 1) + "て";
	}
	
	if (vocabulary_type[id] == "くる-例外動詞") {
		return tmp.substr(0, tmp.length - 2) + "きて";
	}
	
	if (vocabulary_type[id] == "する-例外動詞") {
		return tmp.substr(0, tmp.length - 2) + "して";
	}
}

function genTaForm(id) {
	var tmp;
	if (vocabulary[id] == "")
		tmp = vocabulary_kana[id];
	else
		tmp = vocabulary[id];
	
	if (vocabulary_type[id] == "う動詞") {
		var last_char = tmp.substr(tmp.length - 1, 1);
		if (last_char == "う" || last_char == "つ" || last_char == "る" || vocabulary[id] == "行く" || vocabulary_kana[id] == "いく")
			return tmp.substr(0, tmp.length - 1) + "った";
			
		if (last_char == "む" || last_char == "ぶ" || last_char == "ぬ")
			return tmp.substr(0, tmp.length - 1) + "んだ";
			
		if (last_char == "く")
			return tmp.substr(0, tmp.length - 1) + "いた";
			
		if (last_char == "ぐ")
			return tmp.substr(0, tmp.length - 1) + "いだ";
			
		if (last_char == "す")
			return tmp.substr(0, tmp.length - 1) + "した";
	}
	
	if (vocabulary_type[id] == "る動詞") {
		return tmp.substr(0, tmp.length - 1) + "た";
	}
	
	if (vocabulary_type[id] == "くる-例外動詞") {
		return tmp.substr(0, tmp.length - 2) + "きた";
	}
	
	if (vocabulary_type[id] == "する-例外動詞") {
		return tmp.substr(0, tmp.length - 2) + "した";
	}
}

function shiftKanaToVowel(kana_char, amount) {
	//Forces a Kana to shift vowels.
	//0 - あ
	//1 - い
	//2 - う
	//3 - え
	//4 - お
	
	var kana = [ "あ", "い", "う", "え", "お", 
				 "か", "き", "く", "け", "こ", 
				 "さ", "し", "す", "せ", "そ", 
				 "た", "ち", "つ", "て", "と", 
				 "な", "に", "ぬ", "ね", "の", 
				 "は", "ひ", "ふ", "へ", "ほ", 
				 "ま", "み", "む", "め", "も", 
				 "や", "", "ゆ", "", "よ", 
				 "ら", "り", "る", "れ", "ろ", 
				 "わ", "", "", "", "を", 
				 "ん", "", "", "", "",
				 "が", "ぎ", "ぐ", "げ", "ご" ,
				 "ざ", "じ", "ず", "ぜ", "ぞ" ,
				 "だ", "じ", "づ", "で", "ど" ,
				 "ば", "び", "ぶ", "べ", "ぼ" ,
				 "ぱ", "ぴ", "ぷ", "ぺ", "ぽ" ,
				 "", "", "ゔ", "", "" ,
				 "ア", "イ", "ウ", "エ", "オ", 
				 "カ", "キ", "ク", "ケ", "コ", 
				 "サ", "シ", "ス", "セ", "ソ", 
				 "タ", "チ", "ツ", "テ", "ト", 
				 "ナ", "ニ", "ヌ", "ネ", "ノ", 
				 "ハ", "ヒ", "フ", "ヘ", "ホ", 
				 "マ", "ミ", "ム", "メ", "モ", 
				 "ヤ", "", "ユ", "", "ヨ", 
				 "ラ", "リ", "ル", "レ", "ロ", 
				 "ワ", "", "", "", "ヲ", 
				 "ン", "", "", "", "",
				 "ガ", "ギ", "グ", "ゲ", "ゴ" ,
				 "ザ", "ジ", "ズ", "ゼ", "ゾ" ,
				 "ダ", "ヂ", "ヅ", "デ", "ド" ,
				 "バ", "ビ", "ブ", "ベ", "ボ" ,
				 "パ", "ピ", "プ", "ペ", "ポ" ,
				 "", "", "ヴ", "", "" ];
				 
	for (var i = 0; i < kana.length; i++) {
		if (kana_char == kana[i]) {
			return kana[(Math.floor(i / 5) * 5) + amount];
		}
	}
	return kana_char;
}

function conjugate(id, i) {
	var tmp;
	if (vocabulary[id] == "")
		tmp = vocabulary_kana[id];
	else
		tmp = vocabulary[id];
	
	if (vocabulary_type[id] == "名詞" || vocabulary_type[id] == "形容動詞") {
		//名詞と形容動詞の共軛が同です。
		switch (i) {
			case 1: return tmp + "です";
			case 2: return tmp + "でした";
			case 3: return tmp + "じゃないです";
			case 4: return tmp + "じゃなかったです";
			case 5: return tmp + "だ";
			case 6: return tmp + "だった";
			case 7: return tmp + "じゃない";
			case 8: return tmp + "じゃなかった";
			case 9: return tmp + "になる";
		}
	}
	
	if (vocabulary_type[id] == "いい-アジェクティブ") {
		switch (i) {
			case 1: return tmp.substr(0, tmp.length - 2) + "いいです";
			case 2: return tmp.substr(0, tmp.length - 2) + "よかったです";
			case 3: return tmp.substr(0, tmp.length - 2) + "よくないです";
			case 4: return tmp.substr(0, tmp.length - 2) + "よくなかったです";
			case 5: return tmp.substr(0, tmp.length - 2) + "いい";
			case 6: return tmp.substr(0, tmp.length - 2) + "よかった";
			case 7: return tmp.substr(0, tmp.length - 2) + "よくない";
			case 8: return tmp.substr(0, tmp.length - 2) + "よくなかった";
			case 9: return tmp + "になる";
		}
	}
	
	if (vocabulary_type[id] == "形容詞") {
		switch (i) {
			case 1: return tmp.substr(0, tmp.length - 1) + "いです";
			case 2: return tmp.substr(0, tmp.length - 1) + "かったです";
			case 3: return tmp.substr(0, tmp.length - 1) + "くないです";
			case 4: return tmp.substr(0, tmp.length - 1) + "くなかったです";
			case 5: return tmp;
			case 6: return tmp.substr(0, tmp.length - 1) + "かった";
			case 7: return tmp.substr(0, tmp.length - 1) + "くない";
			case 8: return tmp.substr(0, tmp.length - 1) + "くなかった";
			case 9: return tmp.substr(0, tmp.length - 1) + "くなる";
		}
	}
	
	if (vocabulary_type[id] == "う動詞") {
		switch (i) {
			case  1: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "ます";
			case  2: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "ました";
			case  3: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "ません";
			case  4: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "ませんでした";
			case  5: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "ましょう";
			case  6: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1);
			case  7: return genTeForm(id);
			case  8: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 3) + "る";
			case  9: return tmp;
			case 10: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 0) + "ない";
			case 11: return genTaForm(id);
			case 12: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 0) + "なかった";
			case 13: return tmp + "つもり";
			case 14: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "たい";
			case 14: return tmp.substr(0, tmp.length - 1) + shiftKanaToVowel(tmp.substr(tmp.length - 1, 1), 1) + "たい";
			case 15: return genTaForm(id) + "ことがある";
		}
	}
	
	if (vocabulary_type[id] == "る動詞") {
		switch (i) {
			case  1: return tmp.substr(0, tmp.length - 1) + "ます";
			case  2: return tmp.substr(0, tmp.length - 1) + "ました";
			case  3: return tmp.substr(0, tmp.length - 1) + "ません";
			case  4: return tmp.substr(0, tmp.length - 1) + "ませんでした";
			case  5: return tmp.substr(0, tmp.length - 1) + "ましょう";
			case  6: return tmp.substr(0, tmp.length - 1);
			case  7: return genTeForm(id);
			case  8: return tmp.substr(0, tmp.length - 1) + "られる";
			case  9: return tmp;
			case 10: return tmp.substr(0, tmp.length - 1) + "ない";
			case 11: return genTaForm(id);
			case 12: return tmp.substr(0, tmp.length - 1) + "なかった";
			case 13: return tmp + "つもり";
			case 14: return tmp.substr(0, tmp.length - 1) + "たい";
			case 15: return genTaForm(id) + "ことがある";
		}
	}
	
	if (vocabulary_type[id] == "くる-例外動詞") {
		switch (i) {
			case  1: return tmp.substr(0, tmp.length - 2) + "きます";
			case  2: return tmp.substr(0, tmp.length - 2) + "きました";
			case  3: return tmp.substr(0, tmp.length - 2) + "きません";
			case  4: return tmp.substr(0, tmp.length - 2) + "きませんでした";
			case  5: return tmp.substr(0, tmp.length - 2) + "きましょう";
			case  6: return tmp.substr(0, tmp.length - 2);
			case  7: return genTeForm(id);
			case  8: return tmp.substr(0, tmp.length - 2) + "こられる";
			case  9: return tmp;
			case 10: return tmp.substr(0, tmp.length - 2) + "こない";
			case 11: return genTaForm(id);
			case 12: return tmp.substr(0, tmp.length - 2) + "こなかった";
			case 13: return tmp + "つもり";
			case 14: return tmp.substr(0, tmp.length - 2) + "きたい";
			case 15: return genTaForm(id) + "ことがある";
		}
	}
	
	if (vocabulary_type[id] == "する-例外動詞") {
		switch (i) {
			case  1: return tmp.substr(0, tmp.length - 2) + "します";
			case  2: return tmp.substr(0, tmp.length - 2) + "しました";
			case  3: return tmp.substr(0, tmp.length - 2) + "しません";
			case  4: return tmp.substr(0, tmp.length - 2) + "しませんでした";
			case  5: return tmp.substr(0, tmp.length - 2) + "しましょう";
			case  6: return tmp.substr(0, tmp.length - 2);
			case  7: return genTeForm(id);
			case  8: return tmp.substr(0, tmp.length - 2) + "できる";
			case  9: return tmp;
			case 10: return tmp.substr(0, tmp.length - 2) + "しない";
			case 11: return genTaForm(id);
			case 12: return tmp.substr(0, tmp.length - 2) + "しなかった";
			case 13: return tmp + "つもり";
			case 14: return tmp.substr(0, tmp.length - 2) + "したい";
			case 15: return genTaForm(id) + "ことがある";
		}
	}
	
	return vocabulary[id];
}

document.write('<scr'+'ipt src="http://jppeng.derpg.xyz/vocabulary/js/modules.js" type="text/javascript" ></scr'+'ipt>');
