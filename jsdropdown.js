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