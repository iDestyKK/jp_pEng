/*------------------------------------------*/
/*   JP_PENG XYZ LANGUAGE DATABASE FILE     */
/*------------------------------------------*/

//This file contains data on what languages are available on DERPG's site.
//It also contains the text data for each and every entry translatable on the site.
//Everything is powered by Javascript.

flag_imag = new Array();
flag_code = new Array();
flag_lang = new Array();
var count = 0;

function add_language(language, url, image_url) {
	flag_lang[count  ] = language;
	flag_code[count  ] = url;
	flag_imag[count++] = image_url;
}

//Add in Languages
add_language("English (US)", "en", "images/flags/USA.png");
add_language("Français", "fr", "images/flags/FRANCE.png");
add_language("日本語", "jp", "images/flags/JAPAN.png");
//add_language("한국어", "ko", "images/flags/SOUTHKOREA.png"); //Surprise! I am planning this. ;)

var text_data = {
	//English
	en: 
		{
			//Main
				copyright                     : "jp_pEng - Copyright 2014-2015, All Rights Reserved.",
				version                       : "1.0.5.1"
		},
	//Français
	fr: 
		{
			//Main
				copyright                     : "jp_pEng - Copyright 2014-2015, Tous droits réservés.",
				version                       : "1.0.5.1"
		},
	//日本語
	jp: 
		{
			//Main
				copyright                     : "jp_pEng - Copyright 2014-2015, All Rights Reserved.",
				version                       : "1.0.5.1"
		}
};
