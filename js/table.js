$(document).ready(function() {

    $(".col1").click(function() {
        // get cell prefix in 'r#c' format
        var cell = $(this).attr("id");
        var cellPrefix = cell.slice(0, -1);

        // define & hide column 2 cell
        var hideCell = cellPrefix + '2';
        $("#" + hideCell).hide(); 

        // define & show column 3 cell
        var revealCell = cellPrefix + '3';
        $("#" + revealCell).show(); 

        hideCell = '';
        revealCell = '';

        $('#resetBtn').show();


    });

    $('#resetBtn').click(function() {
        location.reload();
      });

});