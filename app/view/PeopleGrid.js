Ext.define('SevillaJS.view.PeopleGrid', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.peoplegrid',

    initComponent: function() {
        this.store = Ext.create('SevillaJS.store.People');
        this.columns = [{
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        }, {
            text: 'Surname',
            dataIndex: 'surname'
        }, {
            text: 'Age',
            dataIndex: 'age',
            renderer: function(value) {
                if(value > 35) {
                    return '<span style="color:red;">' + value + '</span>';
                } else {
                    return '<span style="color:green;">' + value + '</span>';
                }
            }
        }];
        this.callParent(arguments);
    }
});