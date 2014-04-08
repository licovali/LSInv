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
            width: 200,
            collapsible: true,
            region: 'west'
        },
        {
            xtype: 'appheader',
            region: 'north'
        },
        {
            xtype: 'tabpanel',
            region: 'center'
        },
        {
            xtype: 'statusbar',
            region: 'south',
            text: 'LICOVALI Solutions'
        }
    ]
});
