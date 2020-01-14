window.addEventListener( "load", function( windowLoadE ) {
    var elements = document.body.querySelectorAll( "[id]" );
    for ( var i = 0; i < elements.length; i++ ) {
        elements[ i ].style.position = "relative";
        var tooltip = document.createElement( "div" );
        tooltip.setAttribute( "class", "tooltip" );
        tooltip.innerText = document.getElementById("textDiv1621").innerText.replace(/&nbsp;&nbsp;/g, "",).replace(/&nbsp;/g, " ").replace(/tmp_report/g, "kenshoointernal.ticket");
        elements[ i ].appendChild( tooltip );
        elements[ i ].addEventListener( "click", function( elMouseEneterE ) {
            var tooltip = this.querySelector( "div.tooltip" );
            tooltip.style.display = "inline";
        } );
        elements[ i ].addEventListener( "mouseleave", function( elMouseEneterE ) {
            var tooltip = this.querySelector( "div.tooltip" );
            tooltip.style.display = "none";
        } );
    }
} );