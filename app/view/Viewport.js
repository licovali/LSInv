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
            xtype: 'mainmenu',
            width: 220,
            collapsible: true,
            region: 'west'
        },
        {
            xtype: 'appheader',
            region: 'north'
        },
        {
            xtype: 'mainpanel',
            region: 'center'
        },
        {
            xtype: 'statusbar',
            border: 1,
            region: 'south',
            text: '<i class="fa fa-cog fa-spin"></i>' +' LICOVALI Solutions'
        }
    ]
});
