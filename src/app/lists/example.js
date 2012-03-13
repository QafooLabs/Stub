function ( head, req ) {
    start( {
        "headers": {
            "Content-Type": "text/html"
        }
    } );

    var Utils = {
        Html: require( "modules/html" ).Html,
    };

    send( Utils.Html.header( "Example" ) );
    while ( row = getRow() ) {
        send( Utils.Html.show( row.value ) );
    }
    send( Utils.Html.footer() );
}
