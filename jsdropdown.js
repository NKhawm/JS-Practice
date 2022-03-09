function myFunction(){
    var x = document.getElementById('mySelect');
    x.remove(x.selectedIndex);
}

//display the color

  var color = ['red','blue','green','yellow',]
  var i =0;
  document.querySelector('#btn').addEventListener('click',function(){
      i = i < color.length ? ++i :0;
      document.querySelector('section').style.background =color[i]

  })