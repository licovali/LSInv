/// <reference path="~/ext/ext-all-debug.js" />
Ext.define('LSInv.model.security.User', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        { name: 'id' },
        { name: 'user' },
        { name: 'username' },
        { name: 'role_id'}
    ]
});