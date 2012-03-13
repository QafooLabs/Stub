function ( newDoc, oldDoc, userContext ) {

    // Disabled validation for now.
    return;

    // Only allow logged in users to change documents
    if ( !userContext.name ) {
        throw ( { forbidden: "Please login first." } );
    }

    // Chack for document deletion
    if ( newDoc._deleted ) {
        throw ( { unauthorized: "THOU SHALL NOT DELETE ANYTHING!" } );
    }

    // Validate depending on document type
    if ( newDoc.type == "user" )
    {
        if ( ( newDoc.name !== userContext.name ) ||
             ( oldDoc.name !== userContext.name ) ) {
            throw ( { unauthorized: "You may only create / edit your own documents." } );
        }

        return;
    }

    // By default: reject.
    throw ( { unauthorized: "You tried to create an invalid document." } );
}
