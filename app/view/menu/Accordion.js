Ext.define('LSInv.view.menu.Accordion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainmenu',

    width: 320,
    layout: {
        type: 'accordion',
        pack: 'start'
    },
    frame: true,
    border: 1,
    multi: true,
    collapsible: false,
    hideCollapseTool: false,
    title: '<i class="fa fa-sitemap"></i> ' + translations.menu
});