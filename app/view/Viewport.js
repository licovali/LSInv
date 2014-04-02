/// <reference path="~/ext/ext-all-debug.js" />
Ext.define('LSInv.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'LSInv.view.Header'
    ],

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'container',
            width: 190,
            collapsible: true,
            region: 'west'
        },
        {
            xtype: 'appheader',
            region: 'north'
        },
        {
            xtype: 'container',
            region: 'center'
        },
        {
            xtype: 'container',
            region: 'south',
            heigth: 30
        }
    ]
});
