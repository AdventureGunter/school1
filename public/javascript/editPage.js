var userListData = [];

$(document).ready(function(){
    $("#btnGetParents").click(function(){
        getUsersList(2);
        $('.edtUserForm .form-group #status').val(2);
    });
    $("#btnGetStudents").click(function(){
        getUsersList(3);
        $('.edtUserForm .form-group #status').val(3);
    });
    $("#btnGetTeachers").click(function(){
        getUsersList(4);
        $('.edtUserForm .form-group #status').val(4);
    });
    $('#userList table tbody').on('click', 'td button#edit', function(){
        $('.edtUserForm').show();
        $('.edtUserForm .form-group #id').val($(this).attr('rel'));
    });
});

function getUsersList (status) {
    var tableContent = '';
    // jQuery AJAX call for JSON
    $.getJSON( '/getUsers?q=' + status, function( data ) {
        
        // Stick our user data array into a userlist variable in the global object
        userListData = data;
        //console.log("data - "  + data[0].username);
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.username + '</td>';
            tableContent += '<td>' + this.status + '</td>';
            tableContent += '<td><button id="edit" rel="' + this._id + '">Edit</button></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
}