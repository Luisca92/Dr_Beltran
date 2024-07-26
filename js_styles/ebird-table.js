$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "ebird_world_life_list.csv",
      dataType: "text",
      success: function(data) {
        var rows = data.split("\n");
        var headers = rows[0].split(",");
        var html = "<thead><tr>";
        for (var i = 0; i < headers.length; i++) {
          html += "<th>" + headers[i] + "</th>";
        }
        html += "</tr></thead><tbody>";
        for (var i = 1; i <= 10; i++) {
          var cells = rows[i].split(",");
          if (cells.length == headers.length) {
            html += "<tr>";
            for (var j = 0; j < cells.length; j++) {
              html += "<td>" + cells[j] + "</td>";
            }
            html += "</tr>";
          }
        }
        html += "</tbody>";
        $("#ebird-table").html(html);
      }
    });
  });
  