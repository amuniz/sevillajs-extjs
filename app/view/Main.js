Ext.define('SevillaJS.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.window.MessageBox',
        'SevillaJS.store.People',
        'SevillaJS.view.PeopleGrid'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Center Tab 1',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            margins: 20,
            items: [{
                xtype: 'peoplegrid',
                width: 400,
                height: 200
            }, {
                border: false,
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'middle'
                },
                defaults: {
                    width: 100,
                    height: 50,
                    margin: 10
                },
                items: [{
                    xtype: 'button',
                    text: 'Say hi!',
                    itemId: 'sayhibutton'
                }, {
                    xtype: 'button',
                    text: 'Say bye!',
                    itemId: 'saybyebutton'
                }]
            }]
        }]
    }]
});