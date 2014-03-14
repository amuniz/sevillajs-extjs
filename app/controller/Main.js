Ext.define('SevillaJS.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'PeopleGrid',
        selector: 'peoplegrid'
    }],

    init: function() {
        this.control({
            '#sayhibutton': {
                click: this.sayHi
            },
            '#saybyebutton': {
                click: this.reloadPeopleGrid
            }
        });
    },

    sayHi: function() {
        Ext.Msg.alert('Hi!', 'Hi!');
    },

    reloadPeopleGrid: function() {
        this.getPeopleGrid().getStore().load();
    }
});
