Ext.define('LSInv.store.Menu', {
    extend: 'Ext.data.Store',

    requires: [
        'LSInv.model.menu.Root'
    ],

    model: 'LSInv.model.menu.Root',
    autoLoad: false

});