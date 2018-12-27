/*****************************************************************************
 * strapline.js
 * @type {Object}
 * 
 * Description:
 * - Site slogan: Be Happy, Be Healthy, Be You!
 * - Iterates through slogan "parts" and updates the DOM accordingly.
 * - Current configuration loops through only once. Can be configured for
 *   continuous looping by uncommenting the following:
 *       updateStrapline(arr, ++i % arr.length, delay);
 *   and commenting the following:
 *       updateStrapline(arr, ++i, delay);
 * 
 * JS Dependencies:
 * - None. Vanilla JS.
 *
 * DOM Dependencies:
 * - Element with ID "js-strapline"
 *   E.g., <span id="js-strapline">&nbsp;</span>
 ****************************************************************************/
YB.strapline = {
    sloganArr: ['Be Happy!', 'Be Healthy!', 'Be You!'],
    el: document.getElementById('js-strapline')
};

/**
 * Update strapline contents (loop through items in the array one-by-one).
 * @param  {Array} arr     slogan parts
 * @param  {Integer} i     iterator
 * @param  {Integer} delay time interval
 */
(function updateStrapline(arr, i, delay) {
    // don't run through the loop more than is needed
    if (i < arr.length) {
        setTimeout(function() {
            // DOM element to be updated
            YB.strapline.el.innerHTML = arr[i];
            // to start the loop over again
            // updateStrapline(arr, ++i % arr.length, delay);
            // loop through just once
            updateStrapline(arr, ++i, delay);
        // interval
        }, delay);
    }
// args
})(YB.strapline.sloganArr, 0, 3000);
