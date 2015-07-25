//Modules
var mod_size = 0;

modules            = new Array();
module_path        = new Array();
module_description = new Array();
module_id          = new Array();
module_category    = new Array();
module_count       = new Array();

kanji          = new Array();
kanji_onyumi   = new Array();
kanji_kunyumi  = new Array();
kanji_meaning  = new Array();
kanji_hint     = new Array();
kanji_type     = new Array();

//Vocabulary Modules (This is for pulling up Vocabulary with a kanji in it...
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
v_count = 0;

function addKanji(jkanji, onyoumi, kunyoumi, meaning, hint, type) {
	commastr = "";
	
	kanji        [count] = commastr + jkanji;
	kanji_onyumi [count] = commastr + onyoumi;
	kanji_kunyumi[count] = commastr + kunyoumi;
	kanji_meaning[count] = commastr + meaning;
	kanji_hint   [count] = commastr + hint;
	if (typeof type !== 'undefined')
		kanji_type[count] = type;
	else
		kanji_type[count] = "";
	count++;
}

function addTerm(jvocabulary, romaji, kana, meaning, hint, type) {
	commastr = "";
	
	vocabulary[v_count] = commastr + jvocabulary;
	vocabulary_romaji[v_count] = commastr + romaji;
	vocabulary_kana[v_count] = commastr + kana;
	vocabulary_meaning[v_count] = commastr + meaning;
	vocabulary_hint[v_count] = commastr + hint;
	if (typeof type !== 'undefined')
		vocabulary_type[v_count] = type;
	else
		vocabulary_type[v_count] = "";
	v_count++;
}

//Current category.
var cur_cat = 0;

AddCategory("げんき１");
AddModuleCat("デートの約束","第3課. 15字.","http://jppeng.derpg.xyz/kanji/js/modules/genki1/lesson3.js");
AddModuleCat("初めてのデート","第4課. 14字.","http://jppeng.derpg.xyz/kanji/js/modules/genki1/lesson4.js");
AddModuleCat("沖縄旅行","第5課. 14字.","http://jppeng.derpg.xyz/kanji/js/modules/genki1/lesson5.js");
AddModuleCat("ロバートさんの一日","第6課. 15字.","http://jppeng.derpg.xyz/kanji/js/modules/genki1/lesson6.js");
AddModuleCat("家族の写真","第7課. 14字.","http://jppeng.derpg.xyz/kanji/js/modules/genki1/lesson7.js");
AddModuleCat("バーベキュー","第8課. 14字.","http://jppeng.derpg.xyz/kanji/js/modules/genki1/lesson8.js");
AddModuleCat("かぶき","第9課. 15字.","http://jppeng.derpg.xyz/kanji/js/modules/genki1/lesson9.js");

//AddCategory("教育漢字");
//AddModuleCat("一年生","First year 教育漢字. 80 total.","js/modules/kyouiku/grade1.js");

//AddCategory("Personal Lessons");
//AddModuleCat("Coldness", "Words for scenarios such as in the cold.","js/modules/personal/coldness.js");
