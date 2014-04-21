Ext.define('LSInv.store.security.Users', {
    extend: 'Ext.data.Store',
    requires: [
        'LSInv.model.security.User'
    ],
    model: 'LSInv.model.security.User',
    autoLoad: false
});