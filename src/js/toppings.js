/*****************************************************************************
 * toppings.js
 * @type {Object}
 * 
 * Description:
 * - Global namespace.
 *
 * JS Dependencies:
 * - None. Vanilla JS.
 *
 * DOM Dependencies:
 * - None.
 ****************************************************************************/
YB.toppings = {
    el: document.getElementsByClassName('js-toppings')
}

// YB.toppings.classLists.add();
// YB.toppings.style.background = 'url(/assets/img/M&M.jpg)';

// [].forEach.call(YB.toppings.el, function(el) {
//     console.log(el);
// });

// for (el of YB.toppings.el) {
//     console.log(el);
// }

for (var i = 0; i < YB.toppings.el.length; i++) {
    YB.toppings.el[i].classList.add('derp');
}

(function() {
    console.log('Hello, world!');
})();

console.log('derp');

// var materials = [
//   'Hydrogen',
//   'Helium',
//   'Lithium',
//   'Beryllium'
// ];

// console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
