/*****************************************************************************
 * contact.js
 ****************************************************************************/
var YB = require('./namespace.js');

// from elems
YB.contactForm = {
    contact: document.getElementById('js-contact'),
    email:   document.getElementById('js-email'),
    message: document.getElementById('js-message'),
    name:    document.getElementById('js-name'),
    status:  document.getElementById('js-status'),
    subject: document.getElementById('js-subject'),
    submit:  document.getElementById('js-submit')
};

YB.submitForm = function(e) {

    // prevents submission from appending a bunch of query params to the URL
    e.preventDefault();
    
    YB.contactForm.submit.disabled = true;
    YB.contactForm.status.innerHTML = '<p>Sending message . . .</p>';

    var _formData = new FormData();

    _formData.append('name', YB.contactForm.name.value);
    _formData.append('email', YB.contactForm.email.value);
    _formData.append('subject', YB.contactForm.subject.value);
    _formData.append('message', YB.contactForm.message.value);

    var _ajax = new XMLHttpRequest();
    
    _ajax.open('POST', 'contact.php');
    
    _ajax.onreadystatechange = function() {
        if (_ajax.readyState === 4 && _ajax.status === 200) {
            if (_ajax.responseText === "Success") {
                YB.contactForm.contact.innerHTML = '<p>Thank you! Your message has been sent.</p>';
            } else {
                YB.contactForm.status.innerHTML = _ajax.responseText;
                YB.contactForm.submit.disabled = false;
            }
        }
    }

  _ajax.send(_formData);

};

YB.contactForm.contact.addEventListener('submit', YB.submitForm, false);
