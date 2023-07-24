$(function() {

    $(document).ready(function() {
        $.get('http://data.fixer.io/api/latest', 
        {'access_key': '8c5560d62c357a72c30d02ce689e34e6'}, 
        function(response) {
            var eurusd = parseFloat(response.rates.USD);
            var euruah = parseFloat(response.rates.UAH);
            var total = euruah / eurusd;
            var formattedTotal = total.toFixed(6);
            $('#USD').text(formattedTotal),
            $('#EUR').text(euruah)
        });
    });

    function disableScroll() {
        $('body').addClass('disable-scroll');
    }

    function enableScroll() {
        $('body').removeClass('disable-scroll');
    }


    $('#changeButton')
        .css({
            'color': 'red',
        })

        .click(function() {
            $('.popup-container').fadeIn(500, disableScroll);
        });

    $('.popup-container').click(function(event) {
        if (event.target == this) {
            $(this).fadeOut(500, enableScroll);
        }
    });  

});
        

            // var newElement = $('<h2></h2>');
            // newElement.text('Срочные новости');
            // newElement.prependTo($('#column-left'));

    




            
            // var newElement = document.createElement('h2'); 
            // newElement.innerHTML = 'New Header';
            // newElement.style.color = 'red';                            <-- vanilla.js
            // var leftColumn = document.getElementById('column-left');
            // leftColumn.insertBefore(newElement, leftColumn.firstChild); 


            // $('#column-left').append('<h2>Новый заголовок новостей</h2>');
        



    // $('.news-time').click(function() {
    //     $('#column-left').children().toggleClass('red');
    // })

// .prepend - добавляет элемент в начало указанного блока
// .append - добавляет элемент в конец блока