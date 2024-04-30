function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("b/be1.jpg")) 
    {
      image.src = "b/be2.jpg";
    } 
    else if (image.src.match("b/be2.jpg")) 
    {
      image.src = "b/be3.jpg";
      
    } 
    else if (image.src.match("b/be3.jpg")) 
    {
      image.src = "b/be4.jpg";
      
    } 
    else if (image.src.match("b/be4.jpg")) 
    {
      image.src = "b/be5.jpg";
      
    }
    else if (image.src.match("b/be5.jpg")) 
    {
      image.src = "b/be6.jpg";
      
    } 
    else if (image.src.match("b/be6.jpg")) 
    {
      image.src = "b/be7.jpg";
      
    } 
    else if (image.src.match("b/be7.jpg")) 
    {
      image.src = "b/be8.jpg";
      
    } 
    else if (image.src.match("b/be8.jpg")) 
    {
      image.src = "b/be9.jpg";
      
    } 
    else if (image.src.match("b/be9.jpg")) 
    {
      image.src = "b/be10.jpg";
      
    } 
    else 
    {
      image.src = "b/be1.jpg";
    }
  }