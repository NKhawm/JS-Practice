function myFunction(){
    var x = document.getElementById('mySelect');
    x.remove(x.selectedIndex);
}

//display the color

  var color = ['red','blue','green','yellow',]
  var i =0;
  document.querySelector('#btn').addEventListener('click',function(){
      i = i < color.length ? ++i :0;
      document.querySelector('#sec').style.background =color[i]

  })

  //add row to table

  function insert_Row(){
      var x = document.getElementById('table').insertRow(0);
      var y = x.insertCell(0);
      var z = x.insertCell(1);
      y.innerHTML = 'New Cell1';
      z.innerHTML = 'New Cell2';

  }

  //accept row and column and update string

  function createTbl(){
      row = prompt('Input number of rows' ,1);
      column = prompt ('Input number of columns',1);
      
      for (var r=0; r<parseInt (row,10);r++)
      {
          var x = document.getElementById('tble').insertRow(r);
          for (var c=0; c<parseInt(column,10);c++)
          {
              var y= x.insertCell(c);
              y.innerHTML="Row" +r+"Column"+c;
          }
      }
  }