$(document).ready(function() {
    $( "#name" ).keyup(function(event) {
        console.log(event.target.value)
        $("#svgname").html(event.target.value);
    });
    $( "#cardnumber" ).keyup(function(event) {
        console.log(event.target.value)
        $("#svgnumber").html(event.target.value);
    });
    $("#securitycode" ).keyup(function(event) {
        console.log(event.target.value)
        $("#svgsecurity").html(event.target.value);
    });
    $("#expirationdate" ).keyup(function(event) {
        console.log(event.target.value)
        $("#svgexpire").html(event.target.value);
    });
    $('.card__next-button, .card__done-button').click(function(){
        $('.card__rotate').toggleClass('card__active')
      })
      document.querySelector('.preload').classList.remove('preload');
document.querySelector('.creditcard').addEventListener('click', function () {
    if (this.classList.contains('flipped')) {
        this.classList.remove('flipped');
    } else {
        this.classList.add('flipped');
    }
})

//On Focus Events
document.getElementById('name').addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
});

cardnumber.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
});

expirationdate.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
});

securitycode.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.add('flipped');
});
})

