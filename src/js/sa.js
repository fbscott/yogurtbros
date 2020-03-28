/**
 * sa.js
 *
 * Sweet Alerts Configurations - Pretty Alert Boxes
 * Docs: https://github.com/t4t5/sweetalert
 *       https://sweetalert.js.org/docs/
 * 
 * JS DEPENDENCIES
 * - CDN: https://unpkg.com/sweetalert/dist/sweetalert.min.js
 * 
 * DOM DEPENDENCIES
 * - _assets/css/lib.min.css
 * - .js-sa     button/link that will trigger the alert
 * - data-sa    alert content message (optional)
 */

import swal from 'sweetalert';

swal('Hello, World!');

YB.sa = function() { // can't use default params due to IE 11 :(
    // alert title
    var _title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Functionality Disabled';
    // alert content
    var _body  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'This functionality is disabled in this online demonstration.\n\nPlease contact a Treasury Management representative at (303) 235-1378 or (855) 426-1500 for information about this feature or if you have questions about Internet Cash Management.';
    // alert icon ['warning' 'error', 'success', or 'info']
    var _icon  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'info';

    // sweet alerts - https://github.com/t4t5/sweetalert
    swal({
        title : _title,
        text  : _body,
        icon  : _icon
    });
}

/**
* define sweet alert arguments and call the alert box
* used to tell the user the page is unavailable in the online demo
*/
YB.defineSAArgsAndCall = function() {
    // content string "{'title':'Title Text', 'body':'Body content.'}"
    var _alertMessage = this.getAttribute('data-sa');
    // content object {'title':'Title Text', 'body':'Body content.'}
    var _messageObj;

    // define the content object (and convert it from a string) if it exists
    if (!!_alertMessage) {_messageObj = JSON.parse(_alertMessage.replace(/'/g, '"'))}

    if (!!_messageObj) {
        // pass both params
        if (_messageObj.hasOwnProperty('title') && _messageObj.hasOwnProperty('body')) {
            YB.sa(_messageObj.title, _messageObj.body);
        // pass title only
        } else if (_messageObj.hasOwnProperty('title')) {
            YB.sa(_messageObj.title);
        // pass body only
        } else if (_messageObj.hasOwnProperty('body')) {
            YB.sa('Page Unavailable', _messageObj.body);
        }
    } else {
        // call sa() with default params if no content object exists
        YB.sa();
    }
};

// links array
YB.saElems = document.getElementsByClassName('js-sa');

// listen for click on all links and add alert callback
for (var i = 0; i < YB.saElems.length; i++) {
    YB.saElems[i].addEventListener('click', YB.defineSAArgsAndCall, false);
}
