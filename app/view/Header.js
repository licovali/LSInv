﻿/// <reference path="~/ext/ext-all-debug.js" />
Ext.define('LSInv.view.Header', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.appheader', 
    height: 35, 
    ui: 'footer', 
    style: 'border-bottom: 4px solid #4c72a4;', 
    items: [
        {
            xtype: 'label', 
            html: '<div id="titleHeader">LSInv<span style="font-size:12px;"> - v1.0.0</span></div>'
        },
        {
            xtype: 'tbfill'
        },
        {
            xtype: 'tbseparator'
        },
        {
            xtype: 'button',
            text: 'Logout',
            itemId: 'logout',
            iconCls: 'logout'
        }
    ]
});