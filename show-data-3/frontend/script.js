let table = new DataTable('#myTable', {
    ajax: {
        //url: 'mysql://root:lOUyjoBLuShJPahHwhQKJREBSKSSKmZb@viaduct.proxy.rlwy.net:36966/railway',
        url: 'http://localhost:3000/data',
        dataSrc: function (data) {
            return data
        }
    },
    columns:[
        {data: 'id'},
        {data: 'description'},        
        {data: 'stock'},
        {data: 'price'},
    ]
})