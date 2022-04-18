function getUsers() {
  fetch("https://randomuser.me/api/?results=200")
    .then((res) => {
      console.log(res.json);
      return res.json();
    })
    .then((data) => {
      console.log(data.results);
      var tableRef = document.createElement("table");
      var trRef1 = document.createElement("tr");

      var thRef1 = document.createElement("th");
      var thRef2 = document.createElement("th");
      var thRef3 = document.createElement("th");
      var thRef4 = document.createElement("th");

      thRef1.innerText = "First Name";
      thRef2.innerText = "Last Name";
      thRef3.innerText = "Email";
      thRef4.innerText = "Gender";

      trRef1.appendChild(thRef1);
      trRef1.appendChild(thRef2);
      trRef1.appendChild(thRef3);
      trRef1.appendChild(thRef4);

      tableRef.appendChild(trRef1);

      data.results.map(function (ele) {
        //created row
        var trRef2 = document.createElement("tr");
        //created 4 columns
        var tdRef1 = document.createElement("td");
        var tdRef2 = document.createElement("td");
        var tdRef3 = document.createElement("td");
        var tdRef4 = document.createElement("td");

        //Appended data in the cell(td)

        tdRef1.innerText = ele.name.first;
        tdRef2.innerText = ele.name.last;
        tdRef3.innerText = ele.email;
        tdRef4.innerText = ele.gender;

        //append td into tr
        trRef2.appendChild(tdRef1);
        trRef2.appendChild(tdRef2);
        trRef2.appendChild(tdRef3);
        trRef2.appendChild(tdRef4);

        //append tr into table
        tableRef.appendChild(trRef2);
        return;
      });
      tableRef.style.border = 2;
      tableRef.style.borderStyle = "solid";
      tableRef.style.margin = "10px";
      document.querySelector("body").appendChild(tableRef);
    });
}

function createTable() {}
