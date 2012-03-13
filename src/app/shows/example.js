function( doc, request ) {
    var Utils = {
        Html: require( "modules/html" ).Html,
    };

    if ( !doc ) {
        return {
            code: 404,
            body: Utils.Html.show404(),
        }
    }

    return {
        body: Utils.Html.header( "Example" ) +
            "<h2>" + doc.text + "</h2>" +
            "<p>by " + doc.user + "</p>" +
            Utils.Html.footer(),
    }
}
