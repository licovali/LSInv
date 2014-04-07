Ext.define('LSInv.store.Menu', {
    extend: 'Ext.data.Store',

    requires: [
        'LSInv.model.menu.Root'
    ],

    model: 'LSInv.model.menu.Root',
    
    proxy: {
        type: 'ajax',
        //url: 'php/menu.php',
        
        reader: {
            type: 'json',
            root: 'items'
        },
        listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});