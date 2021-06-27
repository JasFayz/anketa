$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.header .nav').toggleClass('show')
    });
    (function initSlider() {
        let points = '';
        let track = $('.range_track')

        for (let i = 0; i < 100; i += 25) {
            if (i == 75) {
                points += `<span class="point" style="right: 0"></span>`
            } else {
                points += `<span class="point" style="left: ${i}%"></span>`
            }
        }
        track.append(points)
        let selected_point = $('.selected_point');
        let thumbnail = $('.range_track span.thumbnail')
        track.click(function (e) {
            let cur_point = e.originalEvent.layerX
            let width = $(this).width();
            let ratio = cur_point / width * 100;
            if (ratio > 0 && ratio < 12.5) {
                selected_point.removeAttr('style')
                thumbnail.css({
                    width: 0
                })
                $('#js_level_slider').val(0)
            }
            if (ratio > 12.5 && ratio <= 37.5) {
                selected_point.css({
                    left: 'calc(25% - 12px)'
                })
                thumbnail.css({
                    width: '25%'
                })
                $('#js_level_slider').val(1)
            }
            if (ratio > 37.5 && ratio <= 75) {
                selected_point.css({
                    left: 'calc(50% - 12px)'
                })
                thumbnail.css({
                    width: '50%'
                })
                $('#js_level_slider').val(2)
            }
            if (ratio > 75 && ratio <= 100) {
                selected_point.css({
                    left: 'calc(100% - 12px)'
                })
                thumbnail.css({
                    width: '100%'
                })
                $('#js_level_slider').val(4)
            }
        })

        switch ($('#js_level_slider').val()) {
            case '0':
                selected_point.removeAttr('style')
                thumbnail.css({
                    width: 0
                })
                break;
            case '1':
                selected_point.css({
                    left: 'calc(25% - 12px)'
                })
                thumbnail.css({
                    width: '25%'
                })
                break;
            case '2':

                selected_point.css({
                    left: 'calc(50% - 12px)'
                })
                thumbnail.css({
                    width: '50%'
                })
                break;
            case '3':
            case '4':
                selected_point.css({
                    left: 'calc(100% - 12px)'
                })
                thumbnail.css({
                    width: '100%'
                })
                break;
            default:
                selected_point.removeAttr('style')
                thumbnail.css({
                    width: 0
                })
                break;
        }

    })()


    let year_start = 1940;
    let cur_year = (new Date()).getFullYear()
    console.log(cur_year)

    for (let i = year_start; i <= cur_year; i++) {
        if (i === 1991) {
            $('#birthday').append(`<option value="${i}" selected>${i}</option>`)
        }
        $('#birthday').append(`<option>${i}</option>`)
    }

    $("#birthday").change(function () {
        if($(this).val() == "0") $(this).addClass("empty");
        else $(this).removeClass("empty")
    });
    $("#birthday").change();
    
})

