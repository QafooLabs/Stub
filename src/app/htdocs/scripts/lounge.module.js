/**
 * Example module
 *
 * Copyright (c) 2011 Qafoo GmbH
 * Dual licensed under the MIT and GPL licenses.
 */
;( function( $ ) {
    $.fn.module = function()
    {
        var doSomething = function( e, eventData )
        {
            // @TODO: Implement.
        };

        return this.each( function()
        {
            $(this).bind( "something", doSomething );
        } );
    };
}( jQuery ) );
