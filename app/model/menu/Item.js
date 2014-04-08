Ext.define('LSInv.model.menu.Item', {
    extend: 'Ext.data.Model',

    uses: [
        'LSInv.model.menu.Root'
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
            name: 'className'
        },
        {
            name: 'id'
        },
        {
            name: 'parent_id'
        }
    ],

    belongsTo: {
        model: 'LSInv.model.menu.Root',
        foreignKey: 'parent_id'
    }
});