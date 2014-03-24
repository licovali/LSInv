/// <reference path="~/ext/ext-all-debug.js" />
Ext.define('LSInv.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.login',

    autoShow: true,
    height: 170,
    width: 360,
    layout: {
        type: 'fit'
    },
    title: 'Login',
    closeAction: 'hide',
    closable: false
});