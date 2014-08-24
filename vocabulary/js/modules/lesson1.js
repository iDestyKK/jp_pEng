//------------------------------------//
//         L1 Vocabulary List         //
//------------------------------------//

kanji         = new Array();
kanji_romaji  = new Array();
kanji_kana    = new Array();
kanji_meaning = new Array();
kanji_hint    = new Array();
count = 0;

function addTerm(jkanji, romaji, kana, meaning, hint) {
	commastr = "";
	
	kanji[count] = commastr + jkanji;
	kanji_romaji[count] = commastr + romaji;
	kanji_kana[count] = commastr + kana;
	kanji_meaning[count] = commastr + meaning;
	kanji_hint[count] = commastr + hint;
	count++;
}

addTerm("", "ano", "あの", "Um", "Eh...");
addTerm("今", "ima", "いま", "Now", "The time is ___!");
addTerm("英語", "eigo", "えいご", "English", "The language this hint is written in...");
addTerm("", "ee", "ええ", "yes", "はい");
addTerm("学生", "gakusei", "がくせい", "student", "Your occupation in this class.");
addTerm("語", "go", "ご", "language", "e.g. nihon\"go\".");
addTerm("高校", "koukou", "こうこう", "High School", "Where you usually go before college and after middle school.");
addTerm("午後", "gogo", "ごご", "P.M.;PM", "Afternoon time reading");
addTerm("午前", "gozen", "ごぜん", "A.M.;AM", "If it isn't PM, it is...?");
addTerm("歳", "sai", "さい", "age", "How old are you? I am most curious.");
addTerm("", "san", "さん", "Mr./Ms.;Mr. and Ms.;Mr.Ms.;Mr Ms", "はい");
addTerm("時", "ji", "じ", "o'clock;oclock", "What time is it?");
addTerm("人", "jin", "じん", "people;person", "e.g. nihon\"jin\"");
addTerm("専攻", "senkou", "せんこう", "Major", "What are you studying to be in college?");
addTerm("先生", "sensei", "せんせい", "Teacher", "Who is teaching you?");
addTerm("", "soudesu", "そうです", "That's right", "If you answer \"4\" to a question of 2 + 2, what would your teacher say?");
addTerm("大学", "daigaku", "だいがく", "College", "Comes after Grade School if you pursue education.");
addTerm("電話", "denwa", "でんわ", "Telephone", "What do you use to call someone?");
addTerm("友達", "tomodachi", "ともだち", "friend", "はい");
addTerm("名前", "namae", "なまえ", "name", "Sometimes, people want to know more about you. What would the first question be about?");
addTerm("何", "nani", "なに", "what", "A question word... that is all.");
addTerm("日本", "nihon", "にほん", "Japan", "Country with the language you are training to speak.");
addTerm("年生", "nensei", "ねんせい", "year student", "n/a");
addTerm("", "hai", "はい", "yes", "ええ");
addTerm("半", "han", "はん", "half", "6:30... hm...");
addTerm("番号", "bangou", "ばんごう", "number", "Let's count... something!");
addTerm("留学生", "ryuugakusei", "りゅうがくせい", "international student", "This kind of student is from out of the country!");
addTerm("私", "watashi", "わたし", "I", "Pronounced like \"eye\"");

/*var str = "私,,僕,,君,彼,彼女,私達,彼等,,";
kanji = str.split(",");
str = "watashi,atashi,boku,anata,kimi,kare,kanojo,watashitachi,karera,kore,sore";
kanji_romaji = str.split(",");
str = "わたし,あたし,ぼく,あなた,きみ,かれ,かのじょ,わたしたち,かれら,これ,それ,";
kanji_kana = str.split(",");
str = "I,I,I,you,you,he,she,we,they,this,that";
kanji_meaning = str.split(",");
str = "Most basic way of saying \"I\"... xD,Female's common (and cute) way of saying \"I\". Normally it's the same as the neutral way only without the \"w\" at the start.,The male word that you hate... Nuff' said xD,___ are reading this.,Similar to あなた only showing respect. Like talking to a lord or superior.";
kanji_hint = str.split(",");*/