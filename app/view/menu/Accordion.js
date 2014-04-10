Ext.define('LSInv.view.menu.Accordion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainmenu',

    width: 320,
    layout: {
        type: 'accordion',
        pack: 'start'
    },
    frame: true,
    multi: true,
    collapsible: false,
    hideCollapseTool: false,
    iconCls: 'sitemap',
    title: translations.menu
});