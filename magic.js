function showPrice (){
    var age = document.getElementById('ageGroup').value;

    if (age==10 || age < 10)
    {
        alert('£5')

    }
    else if (age>10 && age<18)
    {
        alert("£8")

    }
    else if (age > 17 && age<65)
    {
        alert('£12')
    }
    else if (age==65 || age > 65)
    {
        alert('£8')
    }
   
}