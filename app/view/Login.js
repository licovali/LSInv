/// <reference path="~/ext/ext-all-debug.js" />
Ext.define('LSInv.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.login',
    requires: [
        'LSInv.view.Translation'
    ],
    autoShow: true,
    height: 170,
    width: 360,
    layout: {
        type: 'fit'
    },
    iconCls: 'key',
    title: translations.login,
    closeAction: 'hide',
    closable: false,
    items: [
        {
            xtype: 'form',
            frame: false,
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 60,
                allowBlank: false,
                //vtype: 'alphanum',
                minLength: 3
            },
            items: [
                {
                    name: 'user',
                    fieldLabel: translations.user,
                    maxLength: 25
                },
                {
                    inputType: 'password',
                    name: 'password',
                    fieldLabel: translations.password,
                    enableKeyEvents: true,
                    id: 'password'
                    //vtype: 'customPass',
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'translation'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            //iconCls: 'cancel',
                            text: '<i class="fa fa-lock"></i> ' + translations.cancel
                        },
                        {
                            xtype: 'button',
                            itemId: 'submit',
                            formBind: true,
                            //iconCls: 'key-go',
                            text: '<i class="fa fa-unlock"></i> ' + translations.submit
                        }
                    ]
                }
            ]
        }
    ]
});