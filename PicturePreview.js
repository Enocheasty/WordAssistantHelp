function imagePreview(imageName){
    var modal = document.getElementById('myModal');
    var img = document.getElementById(imageName);
    var modalImg = document.getElementById("image01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    modal.addEventListener("click",function(event){
       if (event.target !== modalImg) {
           modal.style.display = "none";
       } 
    });
}
