var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log("click event is working")
        const salonName = this.parentNode.parentNode.childNodes[1].innerText
        const location = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        console.log(thumbUp)
        fetch('salonLikes', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'salonName': salonName,
            'location': location,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
          console.log(response)
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});



Array.from(trash).forEach(function(element) {
  
      element.addEventListener('click', function(){
        const salonName = this.parentNode.parentNode.childNodes[1].innerText
        const location = this.parentNode.parentNode.childNodes[3].innerText

        fetch('newSalon', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'salonName': salonName,
            'location': location
          })
        }).then(function (response) {

          window.location.reload()
        })
      });
});
