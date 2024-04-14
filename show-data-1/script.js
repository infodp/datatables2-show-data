let table = new DataTable('#myTable', {
    ajax: {
        url: 'https://jsonplaceholder.typicode.com/albums',
        dataSrc: function (data) {
            return data
        }
    },
    columns:[
        {data: 'id'},
        {data: 'userId'},        
        {data: 'title'}
    ]

})