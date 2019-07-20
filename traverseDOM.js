/*
   NOTE : firstChild also returns text/comment nodes
   while firstElementChild ignores those
*/

/***
 *  Executes a callback for 
 *  all the nodes in the dom 
 * 
 */
function traverseDOM(element, callback) {

    if (element) {
        callback(element);
    }

    element = element.firstElementChild;

    while (element) {
      callback(element);
      traverseDOM(element);

      element = element.nextElementSibling;

    }
}