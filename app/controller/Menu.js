/// <reference path="~/ext/ext-all-debug.js" />
Ext.define('LSInv.controller.Menu', {
    extend: 'Ext.app.Controller',

    //requires: [
    //    'LSInv.view.security.Profile',
    //    'LSInv.view.security.GroupPermissions'
    //], 

    models: [
        'menu.Root',
        'menu.Item'
    ],
    stores: [
        'Menu'
    ],
    views: [
        'menu.Accordion',
        'menu.Item'
    ],

    refs: [
        {
            ref: 'mainPanel',
            selector: 'mainpanel'
        }
    ],

    onPanelRender: function (abstractcomponent, options) {
        this.getMenuStore().setProxy({
            type: 'ajax',
            url: '../LSWA/api/menu',
            reader: {
                type: 'json',
                root: 'items'
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + LSInv.UserLogged.access_token
            },
            listeners: {
                exception: function (proxy, response, operation) {
                    Ext.MessageBox.show({
                        title: 'REMOTE EXCEPTION',
                        msg: operation.getError(),
                        icon: Ext.MessageBox.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }
            }
        });
        
        this.getMenuStore().load(function(records, op, success){

            var menuPanel = Ext.ComponentQuery.query('mainmenu')[0];

            Ext.each(records, function(root){

                var menu = Ext.create('LSInv.view.menu.Item',{
                    title: root.get('text'),
                    iconCls: root.get('iconCls')
                });

                Ext.each(root.items(), function(itens){

                    Ext.each(itens.data.items, function(item){

                        menu.getRootNode().appendChild({
                            text: item.get('text'), 
                            leaf: true, 
                            iconCls: item.get('iconCls'),
                            id: item.get('id'),
                            className: item.get('className') 
                        });
                    });  
                });

                menuPanel.add(menu);
            }); 
        });
    },

    onTreepanelSelect: function(selModel, record, index, options) {
        //console.log(record.raw.className);

        var mainPanel = this.getMainPanel();

        var newTab = mainPanel.items.findBy(
        function (tab){ 
            return tab.title === record.get('text'); 
        });

        //console.log(record.raw.className);

        if (!newTab){
            newTab = mainPanel.add({
                xtype: record.raw.className,
                closable: true,
                iconCls: record.get('iconCls'),
                title: record.get('text')
            });
        }

        mainPanel.setActiveTab(newTab);
    },

    onTreepanelItemClick: function(view, record, item, index, event, options){
        this.onTreepanelSelect(view, record, index, options);
    },

    init: function(application) {
        this.control({
            "mainmenu": {
                render: this.onPanelRender
            },
            "mainmenuitem": {
                //select: this.onTreepanelSelect,
                itemclick: this.onTreepanelItemClick
            }
        });
    }

});
