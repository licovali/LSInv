Ext.define('LSInv.model.menu.Root', {
    extend: 'Ext.data.Model',

    uses: [
        'LSInv.model.menu.Item'
    ],

    idProperty: 'id',

    fields: [
        {
            name: 'text'
        },
        {
            name: 'iconCls'
        },
        {
            name: 'id'
        }
    ],

    hasMany: {
        model: 'LSInv.model.menu.Item',
        foreignKey: 'parent_id',
        name: 'items'
    }
});