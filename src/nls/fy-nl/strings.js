/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "GENERIC_ERROR": "(flater {0})",
    "NOT_FOUND_ERR": "It bestân / de map koe net fûn wurde.",
    "NOT_READABLE_ERR": "It bestân / de map koe net lêzen wurde.",
    "EXCEEDS_MAX_FILE_SIZE": "Bestannen grutter as {0} MB kinne net yn {APP_NAME} iepene wurde.",
    "FILE_EXISTS_ERR": "It bestân of de map bestiet al.",
    "FILE": "bestân",
    "FILE_TITLE": "Bestân",
    "DIRECTORY": "map",
    "DIRECTORY_TITLE": "Map",
    "DIRECTORY_NAMES_LEDE": "Mapnammen",
    "FILENAMES_LEDE": "Bestânsnammen",
    "FILENAME": "Bestânsnamme",
    "DIRECTORY_NAME": "Mapnamme",
    "ERROR_OUT_OF_SPACE_TITLE": "Maksimale projektgrutte berikke",
    "ERROR_PROJECT_SIZE_EXCEEDED": "De totale grutte fan de bestannen yn jo projekt is grutter as de maksimale beskikbere romte. Jo kinne allinnich nije bestannen tafoegje as jo oare bestannen fuortsmite om romte frij te meitsjen.",
    "FILE_EXISTS_HEADER": "It bestân bestiet al.",
    "OPEN_DIALOG_ERROR": "Der is in flater bard by it iepenjen fan it dialoochfinster foar iepenjen fan bestannen. (flater {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "Der is in flater bard by it lêzen fan de ynhâld fan de map <span class='dialog-filename'>{0}</span>. (fout {1})",
    "ERROR_OPENING_FILE_TITLE": "Flater by iepenjen fan bestân",
    "ERROR_OPENING_FILE": "Der is in flater bard by it iepenjen fan it bestân <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_OPENING_FILES": "Der is in flater bard by it iepenjen fan de folgjende bestannen:",
    "ERROR_SAVING_FILE_TITLE": "Flater by bewarjen fan bestân",
    "ERROR_SAVING_FILE": "Der is in flater bard by it bewarjen fan it bestân <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Flater by omneamen fan bestân",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Flater by omneamen fan map",
    "ERROR_RENAMING_FILE": "Der is in flater bard by it omneamen fan it bestân <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_DIRECTORY": "Der is in flater bard by it omneamen fan de map <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_FILE_TITLE": "Flater by fuortsmiten fan bestân",
    "ERROR_DELETING_DIRECTORY_TITLE": "Flater by fuortsmiten fan map",
    "ERROR_DELETING_FILE": "Der is in flater bard by it fuortsmiten fan it bestân <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_DIRECTORY": "Der is in flater bard by it fuortsmiten fan de map <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE": "Unjildige bestânsnamme",
    "INVALID_DIRNAME_TITLE": "Unjildige mapnamme",
    "INVALID_FILENAME_MESSAGE": "Bestânsnammen kinne gjin troch it systeem reservearre wurden brûke; einigje mei punten (.) of brûk ien of mear fan de folgjende tekens: <code class='emphasized'>{1}</code>",
    "INVALID_DIRNAME_MESSAGE": "Mapnammen kinne gjin troch it systeem reservearre wurden brûke; einigje mei punten (.) of brûk ien of mear fan de folgjende tekens: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "Der bestiet al in bestân of map mei de namme <span class='dialog-filename'>{0}</span>.",
    "ERROR_CREATING_FILE_TITLE": "Flater by meitsjen fan bestân",
    "ERROR_CREATING_DIRECTORY_TITLE": "Flater by meitsjen fan map",
    "ERROR_CREATING_FILE": "Der is in flater bard by it meitsjen fan it bestân <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_CREATING_DIRECTORY": "Der is in flater bard by it meitsjen fan de map <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_MAX_FILES_TITLE": "Flater by yndeksearjen fan bestannen",
    "EXT_MODIFIED_TITLE": "Eksterne wizigingen",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> is op skiif wizige bûten {APP_NAME}.<br /><br />Wolle jo it bestân bewarje en dy wizigingen oerskriuwe?",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> is op skiif wizige bûten {APP_NAME}, mar befettet ek net-bewarre wizigingen yn {APP_NAME}.<br /><br />Hokker ferzje wolle jo behâlde?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> is op skiif fuortsmiten bûten {APP_NAME}, mar befettet net-bewarre wizigingen yn {APP_NAME}.<br /><br />Wolle jo jo wizigingen behâlde?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Fuortsmiten befêstigje",
    "CONFIRM_FOLDER_DELETE": "Bine jo wis dat jo de map <span class='dialog-filename'>{0}</span> fuortsmite wolle?",
    "CONFIRM_FILE_DELETE": "Binne jo wis dat jo <span class='dialog-filename'>{0}</span> fuortsmite wolle?",
    "FILE_DELETED_TITLE": "Bestân fuortsmiten",
    "DONE": "Dien",
    "OK": "OK",
    "CANCEL": "Annulearje",
    "SAVE_AND_OVERWRITE": "Oerskriuwe",
    "DELETE": "Fuortsmite",
    "BUTTON_YES": "Ja",
    "BUTTON_NO": "Nee",
    "USE_IMPORTED": "Nije bestân brûke",
    "KEEP_EXISTING": "Besteande bestân behâlde",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "Gjin Fluch bewurkjen beskikber foar aktuele cursorposysje",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS - Fluch bewurkjen: pleats cursor op in inkelde klassenamme",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS - Fluch bewurkjen: net folslein klasseattribút",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS - Fluch bewurkjen: net folslein id-attribút",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS - Fluch bewurkjen: pleats cursor yn label, klasse of id",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS - Timingfunksje Fluch bewurkjen: net jildige syntaksis",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS - Fluch bewurkjen: pleats cursor yn funksjenamme",
    "BUTTON_NEW_RULE": "Nije rigel",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "Gjin Flugge docs beskikber foar aktuele cursorposysje",
    "CMD_FILE_NEW": "Nij bestân",
    "CMD_FILE_NEW_FOLDER": "Nije map",
    "CMD_FILE_RENAME": "Omneame",
    "CMD_FILE_DELETE": "Fuortsmite",
    "CMD_FILE_DOWNLOAD": "Downloade",
    "CMD_CUT": "Knippe",
    "CMD_COPY": "Kopiearje",
    "CMD_PASTE": "Plakke",
    "CMD_SELECT_ALL": "Alles selektearje",
    "CMD_TOGGLE_QUICK_EDIT": "Fluch bewurkje",
    "CMD_TOGGLE_QUICK_DOCS": "Flugge docs",
    "DND_MAX_SIZE_EXCEEDED": "bestân giet oer maksimaal stipe grutte: {0} MB.",
    "DND_UNSUPPORTED_FILE_TYPE": "net-stipe bestânstype",
    "DND_ERROR_UNZIP": "kin zip-bestân net útpakke",
    "DND_ERROR_UNTAR": "kin tar-bestân net útpakke",
    "DND_SUCCESS_UNZIP_TITLE": "Zip-bestân mei sukses útpakt",
    "DND_SUCCESS_UNTAR_TITLE": "Tar-bestân mei sukses útpakt",
    "DND_FILE_REPLACE": "Der bestiet al in bestân mei de namme <span class='dialog-filename'>{0}</span>. Wolle jo it nij bestân brûke of it besteande behâlde?",
    "IMAGE_FILE_TITLE": "Ofbyldingsbestân",
    "IMAGE_DIMENSIONS_1": "{0} &times; {1} pixels",
    "IMAGE_ALT_TEXT": "Ofbyldingsbeskriuwing",
    "IMAGE_FILTERS_TITLE": "Ofbyldingsfilter",
    "IMAGE_FILTER_PINHOLE": "Pinhole",
    "IMAGE_FILTER_SEPIA": "Sepia",
    "IMAGE_FILTER_CONTRAST": "Kontrast",
    "IMAGE_FILTER_VINTAGE": "Klassyk",
    "IMAGE_FILTER_SUNRISE": "Sinneopgong",
    "IMAGE_FILTER_EMBOSS": "Reliëf",
    "IMAGE_FILTER_GLOWING_SUN": "Gloeiende sinne",
    "IMAGE_SAVE_WITH_FILTERS": "Tapasse",
    "IMAGE_RESET_FILTERS": "Annulearje",
    "FONT_FILE": "Lettertypebestân",
    "USE_FONT_INSTRUCTIONS": "Kopiearje en plak dizze koade yn jo CSS-bestân om dit lettertype te brûken.",
    "FONT_TYPE_BOLD": "Fet",
    "FONT_TYPE_ITALIC": "Skreef",
    "FONT_BOLD_HTML_TAG": "Pleats tekst binnen in <code>&lt;strong&gt;&lt;/strong&gt;</code>-label.",
    "FONT_BOLD_CSS_RULE": "Foegje in <code>font-weight: bold;</code> CSS-rigel ta.",
    "FONT_ITALIC_HTML_TAG": "Pleats tekst binnen in <code>&lt;em&gt;&lt;/em&gt;</code>-label.",
    "FONT_ITALIC_CSS_RULE": "Foegje in <code>font-weight: italic;</code> CSS-rigel ta.",
    "VIDEO_FILE": "Fideobestân",
    "VIDEO_OPTIONS": "Fideo-opsjes",
    "VIDEO_CODE_SAMPLE": "Kopiearje en plak dizze koade  yn jo HTML-side om dizze fideo ta te foegjen",
    "VIDEO_OPTION_SHOW_CONTROLS": "Fideobetsjinning toane",
    "VIDEO_OPTION_AUTOPLAY": "Ofspyljen fideo automatysk starte",
    "VIDEO_OPTION_LOOPING": "Fideo opnij starte as dy oer is",
    "VIDEO_OPTION_DISABLE_AUDIO": "Lûd útskeakelje",
    "AUDIO_FILE": "Audiobestân",
    "AUDIO_OPTIONS": "Audio-opsjes",
    "AUDIO_OPTION_SHOW_CONTROLS": "Audiobetsjinningen toane (as útskeakele audiospiler net sichtber is)",
    "AUDIO_OPTION_AUTOPLAY": "Audio automatysk werjaan",
    "AUDIO_OPTION_LOOPING": "Audio opnij ôfspylje as it einige is",
    "AUDIO_OPTION_DISABLE_AUDIO": "Audiospiler sûnder lûd starte",
    "BINARY_FILE_TITLE": "Net-bewurkber bestân",
    "BINARY_FILE_CANNOT_EDIT": "Thimble wit net krekt hoe't it dit bestân bewurkje moat!",
    "BINARY_FILE_OPTIONS_TITLE": "Mar jo kinne...",
    "BINARY_FILE_DOWNLOAD": "It iepenje",
    "BINARY_FILE_OPEN": "It iepenje yn in nij ljepblêd",
    "BINARY_FILE_TRY_EDIT": "It probearje te bewurkjen",
    "PDF_FILE_TITLE": "PDF-bestân",
    "INDIVIDUAL_CORNERS": "Yndividuele hoeken",
    "ALL_CORNERS": "Alle hoeken",
    "PIXEL_UNIT": "piksels",
    "PERCENTAGE_UNIT": "persintaazje",
    "EM_UNIT": "em lettertypeformaat",
    "ALL_SIDE": "Alle siden",
    "INDIVIDUAL_SIDES": "Yndividuele siden",
    "SET_PADDING_FOR": "Padding ynstelle foar",
    "SET_MARGIN_FOR": "Marzje ynstelle foar",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Aktuele kleur",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Oarspronklike kleur",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa-yndieling",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Hex-yndieling",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa-yndieling",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} ({1} maal brûkt)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} ({1} maal brûkt)",
    "CMD_JUMPTO_DEFINITION": "Nei definysje",
    "CMD_SHOW_PARAMETER_HINT": "Parameterhint toane",
    "NO_ARGUMENTS": "<gjin parameters>",
    "DETECTED_EXCLUSION_TITLE": "Ofliedingsprobleem yn JavaScript-bestân",
    "CMD_ENABLE_QUICK_VIEW": "Fluch werjaan by oanwizen",
    "DOCS_MORE_LINK": "Mear ynfo",
    "UPLOAD_FILES_DIALOG_HEADER": "Bestannen oplade",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...of bestannen hjirhinne slepe.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "OK, bestannen frijjaan!",
    "UPLOADING_INDICATOR": "Oplade...",
    "BUTTON_FROM_YOUR_COMPUTER": "Fan jo kompjûter ôf...",
    "TAKE_A_SELFIE": "In selfie meitsje...",
    "CMD_MOVE_FILE": "Ferpleatse nei...",
    "PROJECT_ROOT": "Haadmap fan projekt",
    "PICK_A_FOLDER_TO_MOVE_TO": "In map kieze",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Flater by ferpleatsen",
    "UNEXPECTED_ERROR_MOVING_FILE": "Der is in ûnferwachte flater bard by it ferpleatsen fan {0} nei {1}",
    "ERROR_MOVING_FILE_SAME_NAME": "Der bestiet al in bestân of map mei de namme {0} yn {1}. Jou ien derfan in are namme om troch te gean.",
    "CONSOLE_TITLE": "Console",
    "CONSOLE_TOOLTIP": "De JavaScript-console iepenje",
    "CONSOLE_CLEAR": "Wiskje",
    "CONSOLE_CLEAR_TOOLTIP": "De console wiskje",
    "CONSOLE_CLOSE_TOOLTIP": "De console slute",
    "CONSOLE_EMPTY_STRING": "Lege tekenreeks",
    "CONSOLE_HELPTEXT": "Foegje <code>console.log(&quot;Hallo wrâld!&quot;);</code> ta oan jo JavaScript-bestân om de console te brûken."
});
