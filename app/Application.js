/// <reference path="~/ext/ext-all-debug.js" />
Ext.define('LSInv.Application', {
    name: 'LSInv',
    extend: 'Ext.app.Application',
    requires: [
        'Ext.layout.*',
        'Ext.form.*',
        'Ext.menu.*'
    ],
    views: [
        
    ],

    controllers: [
        'TranslationManager',
        'Login',
        'Menu'
    ],

    stores: [
        // TODO: add stores here
    ],

    init: function() {
        splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');
        splashscreen.addCls('splashscreen');
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },

    launch: function () {
        Ext.tip.QuickTipManager.init();

        var task = new Ext.util.DelayedTask(function () {
            //Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });
            
            //Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function (el, startTime, eOpts) {
                        Ext.widget('login');
                    }
                }
            });
        });
        
        task.delay(2000);
        LSInv.UserLogged = '';
        LSInv.baseUrlToken = '../LSWA';
        LSInv.baseUrl = '../LSWA/api';
        console.log('Welcome');
    }
});
