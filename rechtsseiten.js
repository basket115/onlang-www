/* ONLANG – Rechtsseiten: Hinweis bei ?lang=hu bzw. ?lang=en, dass die
   Rechtstexte nur auf Deutsch vorliegen und die deutsche Fassung verbindlich
   ist (Anmeldeseite verlinkt die Seiten mit ?lang=…). Auf Deutsch kein Kasten. */
(function () {
  var TEXTE = {
    hu: '<strong>Megjegyzés:</strong> Jogi szövegeink jelenleg csak német nyelven érhetők el. A német nyelvű változat az irányadó. Kérdés esetén írjon nekünk: <a href="mailto:info@onlang.de">info@onlang.de</a>',
    en: '<strong>Note:</strong> Our legal texts are currently available in German only. The German version is legally binding. If you have any questions, please write to <a href="mailto:info@onlang.de">info@onlang.de</a>'
  };
  var lang = (new URLSearchParams(window.location.search).get('lang') || '').toLowerCase();
  var text = TEXTE[lang];
  var main = document.querySelector('main');
  if (!text || !main) return;
  var kasten = document.createElement('div');
  kasten.className = 'sprach-hinweis';
  kasten.setAttribute('lang', lang);
  kasten.innerHTML = text;
  main.insertBefore(kasten, main.firstChild);
})();
