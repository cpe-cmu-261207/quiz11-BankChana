//your code here!
document.querySelector('#form').addEventListener('submit',function(event){

    event.preventDefault()

    let id = document.getElementById('input-number').value
    if(id.length == 0){
        620612145-id
    }
   
    function tableCreate() {
        //body reference 
        var body = document.getElementsByTagName("body")[0];
      
        // create elements <table> and a <tbody>
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
      
        // cells creation
        for (var j = 0; j <= 5; j++) {
          // table row creation
          var row = document.createElement("tr");
      
          for (var i = 0; i < 5; i++) {
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode("cell is row " + j + ", column " + i);
      
            cell.appendChild(cellText);
            row.appendChild(cell);
          }
      
          //row added to end of table body
          tblBody.appendChild(row);
        }
      
        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        body.appendChild(tbl);
        // tbl border attribute to 
        tbl.setAttribute("border", "2");
      }