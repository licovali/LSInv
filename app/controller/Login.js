/// <reference path="~/ext/ext-all-debug.js" />
Ext.define('LSInv.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: [
        'LSInv.util.MD5',
        'LSInv.util.Alert',
        'LSInv.util.Util',
        'LSInv.util.SessionMonitor'
    ],
    views: [
        'Login',
        'authentication.CapsLockTooltip'
    ],
    refs: [
        {
            ref: 'capslockTooltip',
            selector: 'capslocktooltip'
        }
    ],
    init: function (application) {
        this.control({
            'login form button#submit': {
                click: this.onButtonClickSubmit
            },
            'login form button#cancel': {
                click: this.onButtonClickCancel
            },
            'login form textfield': {
                specialkey: this.onTextfieldSpecialKey
            },
            'login form textfield[name=password]': {
                keypress: this.onTextfieldKeyPress
            }
        });
    },

    onButtonClickSubmit: function (button, e, options) {
        var formPanel = button.up('form'),
            login = button.up('login'),
            user = formPanel.down('textfield[name=user]').getValue(),
            pass = formPanel.down('textfield[name=password]').getValue();
        pass = LSInv.util.MD5.encode(pass);
        
        login.close();
        Ext.create('LSInv.view.Viewport');
    },
    onButtonClickCancel: function (button, e, options) {
        button.up('form').getForm().reset();
    },
    onTextfieldSpecialKey: function (field, e, options) {
        if (e.getKey() == e.ENTER) {
            var submitBtn = field.up('form').down('button#submit');
            submitBtn.fireEvent('click', submitBtn, e, options);
        }
    },
    onTextfieldKeyPress: function (field, e, options) {
        var charCode = e.getCharCode();
        
        if ((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)) {

            if (this.getCapslockTooltip() == undefined) {
                Ext.widget('capslocktooltip');
            }

            this.getCapslockTooltip().show();

        } else {

            if (this.getCapslockTooltip() != undefined) {
                this.getCapslockTooltip().hide();
            }
        }
    }
});