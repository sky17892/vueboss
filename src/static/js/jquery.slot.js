import $ from 'jquery';
import logon from 'vue';

$(document).ready(function(){
	$('.sch_slot').on('keyup',function(){
		var str = $(this).val();
		if(str!='') {
			$('.open_slot_game').addClass('dspn');
			$('.open_slot_game[data-name*='+str+']').removeClass('dspn');
		} else {
			$('.open_slot_game').removeClass('dspn');
		}
	});
});

$(document).ready(function(){
    $('.f_list').on('submit',function(){
        if ($('.chk:checked').length < 1)
        {
            alert('삭제할 항목을 선택해주세요');
            return false;
        } else {
            $(this).attr('action','/customer/withdrawal_delete');
            return true;
        }
    });
    $('.select_all').on('change',function(){
        $('.chk').prop('checked',$(this).prop('checked'));
    });
});

/*$(document).ready(function(){
	$('.open_bcr').on('click',function(){
		var casino_name = $(this).attr('data-name');
		var game_name = $(this).attr('data-id');
		if (casino_name=='maintenance')
		{
			alert('점검중입니다.');
		} else {
			onOpenBcr(casino_name,game_name);
		}
	});
});
function onOpenBcr( game,game_name )
{
	if (logon=='on')
	{
		window.open( "https://boss-1177.com/game/open_casino/"+game+"/"+game_name, "SlotWin" );
	} else {
		alert('로그인 후 이용해주세요.');
	}
}*/