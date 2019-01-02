/*****************************************************************************
 * footer.js
 * @type {Object}
 * 
 * Description:
 * - Update copyright year
 *
 * JS Dependencies:
 * - None. Vanilla JS.
 *
 * DOM Dependencies:
 * - p, span, etc. with class "js-copyright"
 *   e.g., <span class="js-copyright"></span>
 ****************************************************************************/
// Footer copyright date
YB.footer = function(copyright) {
    // Copyright span
    var _copyright = document.getElementById('js-copyright');
    // Current year
    var _currentYear = new Date().getFullYear();

    // Set copyright span to current year
    _copyright.innerHTML = _currentYear;
};

YB.footer();
