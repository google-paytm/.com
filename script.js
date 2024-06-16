
$(document).ready(() => {

        $(".loader").on("taphold",function(){
          $('.loader').hide();
        $('.dataContainer').show() 
        });                       
        $(".menu").on("click",function(){
          $('.loader').show();
          $('.mainOuter').hide()
          $('.menu').css('display','none') 
        });                       
      
    $('button').click(()=>{
        $('.dataContainer').hide() 
        $('.mainOuter').show()
        $('.menu').css('display','flex')
        let from = $('#from').val()
        let to = $('#to').val()
       let amt = $('#amt').val()
       $('.from p').text(`${from}`)
       $('.to p').text(`${to}`)
       $('.amt p').text(`₹${amt}`)
       $('.dataRight h4').text(`₹${amt}`)
       $('.accRight h4').text(`₹${amt}`)
       $('.timeShow p').text(`${day()} ${mon()} ${year()}, ${hour()}:${min()} ${ampm()}`)
       $('.orderDiv h4').text(`order ID: ${id()}`)
       $('.tranId h4').text(`transaction ID: ${id()}`)
    })
    $('.viewTicket button').on('click',function(){
        $('.loader').show()
        $('.mainOuter').hide() 
          $('.menu').css('display','none')
    })
    $('.left i').on('click',function(){
        $('.loader').show()
        $('.mainOuter').hide()
          $('.menu').css('display','none') 
    })
    $('.right p').on('click',function(){
        $('.loader').show()
        $('.mainOuter').hide()
          $('.menu').css('display','none') 
    })
})

function id() {
    let arr = []
    for (let i = 0; i < 11; i++) {
        arr[i] = Math.round(Math.random() * 9)
    }
    if (arr[0] == 0) {
        arr[0] = 2
    }
    return arr.join('')
}

let second = 60
let minute = 59
let hourr = 1
$('.hour h4').text(`0${hourr}`)
$('.min h4').text(minute)
$('.sec h4').text(second)
setInterval(() => {
    second--
    $('.sec h4').text(second)
    if (second < 10) {
        $('.sec h4').text(`0${second}`)
        if (second < 1) {
            second = 60
            setTimeout(() => {
                minute--
                $('.min h4').text(minute)
                if (minute < 1) {
                    minute = 60
                    setTimeout(() => {
                        hourr--
                        $('.hour h4').text(`0${hourr}`)
                    }, 1000)
                }
            }, 1000)
        }
    }
}, 1000);

function day() {
    let a = new Date()
    let option = {
        day: 'numeric',
    }
    let b = a.toLocaleDateString(undefined, option)
    return b
}
function mon() {
    let a = new Date()
    let option = {
        month: 'short',
    }
    let b = a.toLocaleDateString(undefined, option)
    return b
}
function year() {
    let a = new Date()
    let option = {
        year: 'numeric',
    }
    let b = a.toLocaleDateString(undefined, option)
    return b
}
let akko
function hour() {
    let a = new Date()
    let b = a.getHours()
    akko = b
    return b
}
function min() {
    let a = new Date()
    let b = a.getMinutes()
    return b
}

function ampm(hour) {
    if (akko > 12) {
        return 'PM'
    }
    else {
        return 'AM'
    }
}
