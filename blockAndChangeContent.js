console.log("page blocked")

window.stop()


setTimeout(function() {

	document.getElementsByTagName('html')[0].removeAttribute('class')
	document.getElementsByTagName('html')[0].removeAttribute('style')
	document.getElementsByTagName('body')[0].removeAttribute('class')
	document.getElementsByTagName('body')[0].removeAttribute('style')

    var nb = document.createElement('body')

    var quote = document.createElement('div')
    quote.style.fontSize = '100px'
    quote.style.color = 'blue'
    quote.style.fontWeight = 'bold'
    nb.style.display = 'flex'
    nb.style.alignItems = 'center'
    nb.style.justifyContent = 'center'
    nb.style.minHeight = '100%'

    quote.textContent = "NO!"
    nb.appendChild(quote)

    document.body = nb

    // function removeStyles(el) {
    //     el.removeAttribute('style');

    //     if(el.childNodes.length > 0) {
    //         for(var child in el.childNodes) {
    //             /* filter element nodes only */
    //             if(el.childNodes[child].nodeType == 1)
    //                 removeStyles(el.childNodes[child]);
    //         }
    //     }
    // }

    // removeStyles(document.body);

    // var stylesheets = document.getElementsByTagName('link'), i, sheet;

    // for(i in stylesheets) {
    //     sheet = stylesheets[i];

    //     if(sheet.getAttribute && sheet.getAttribute('type').toLowerCase() == 'text/css')
    //         sheet.parentNode.removeChild(sheet);
    // }

}, 50)