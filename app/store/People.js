Ext.define('SevillaJS.store.People', {
    extend: 'Ext.data.Store',

    model: 'SevillaJS.model.Person',
    proxy: {
        type: 'ajax',
        url: 'people.json',
        reader: {
            type: 'json',
            root: 'people'
        }
    },
    autoLoad: true
});