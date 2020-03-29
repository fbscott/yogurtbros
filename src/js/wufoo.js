/*****************************************************************************
 * wufoo.js
 * @type {Object}
 * 
 * Description:
 * - WuFoo contact form.
 *
 * JS Dependencies:
 * - None. Vanilla JS.
 *
 * DOM Dependencies:
 * - None.
 ****************************************************************************/
var m1hawus109tcmdd;(function(d, t) {
  var s = d.createElement(t), options = {
    'userName':'currell',
    'formHash':'m1hawus109tcmdd',
    'autoResize':true,
    'height':'600',
    'async':true,
    'host':'wufoo.com',
    'header':'show',
    'ssl':true
  };
  s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'secure.wufoo.com/scripts/embed/form.js';
  s.onload = s.onreadystatechange = function() {
    var rs = this.readyState;
    if (rs) if (rs != 'complete') if (rs != 'loaded') return;
    try {
      m1hawus109tcmdd = new WufooForm();m1hawus109tcmdd.initialize(options);m1hawus109tcmdd.display();
    } catch (e) {}
  };
  var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');
