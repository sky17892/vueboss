/* eslint-disable */

$(document).ready(function() {
    $('.sm_withdrawal').on('click', function() {
        $(this).addClass('on');
        $('.sm_charge').removeClass('on');
        var nh = $('.slot_money_box').css('height');
        if (nh === '180px') {
            $('.slot_money_box').css('height', '27px');
        } else {
            $('.slot_money_box').css('height', '180px');
        }
        $('.sm_charge_box').addClass('dspn');
        $('.sm_withdrawal_box').removeClass('dspn');
    });

    $('.sm_charge').on('click', function() {
        $(this).addClass('on');
        $('.sm_withdrawal').removeClass('on');
        var nh = $('.slot_money_box').css('height');
        if (nh === '180px') {
            $('.slot_money_box').css('height', '27px');
        } else {
            $('.slot_money_box').css('height', '180px');
        }
        $('.sm_charge_box').removeClass('dspn');
        $('.sm_withdrawal_box').addClass('dspn');
    });

    $('.open_slot').on('click', function() {
        var gid = $(this).attr('game-id');
        var gname = $(this).attr('game-name');
        $('.s_name').html(gname);
        if (gid === '0000') {
            alert('점검중입니다.');
            return false;
        }
        get_games(gid);
    });

    $('.open_casino').on('click', function() {
        if (logon !== 'on') {
            alert('로그인 후 이용해주세요.');
            return false;
        }
        var gid = $(this).attr('game-id');
        var gname = $(this).attr('game-name');
        if (gid === '0000') {
            alert('점검중입니다.');
            return false;
        }
        window.open("/game/open_lobby/" + gname, "SlotWin");
    });

    $('.close_box').on('click', function() {
        $('.slot_game_box').css('display', 'none');
    });

    $(document).on('click', '.open_slot_game', function() {
        if (logon !== 'on') {
            alert('로그인 후 이용해주세요.');
            return false;
        }
        var gid = $(this).attr('data-id');
        var tp = $(this).attr('data-tp');
        window.open("/game/open_casino/" + tp + "/" + gid, "SlotWin");
    });
});

function get_games(code) {
    $.ajax({
        type: "get",
        url: '/casino/get_slots/' + code,
        dataType: 'html',
        success: function(data) {
            $('.slot_game_box').css('display', 'block');
            $('.slot_game_box').css('top', $('.contents').scrollTop() + $(document).scrollTop());
            $('.slot_games').html(data);
        }
    });
}
