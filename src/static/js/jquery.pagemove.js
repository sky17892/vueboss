
import $ from 'jquery';

$(document).ready(function(){
    $('.btn_list_del').on('click',function(){
        if ($('.chk:checked').length < 1)
        {
            alert('삭제할 항목을 선택해주세요');
            return false;
        } else {
            $('.f_list').attr('action','/del_mini');
            $('.f_list').submit();
        }
    });
    $('.btn_send').on('click',function(){
        if ($('.chk:checked').length < 1)
        {
            alert('첨부할 항목을 선택해주세요');
            return false;
        } else {
            $('.f_list').attr('action','/cs_write/');
            $('.f_list').submit();
        }
    });
    $('.btn_chk_all').on('click',function(){
        var st = $(this).attr('data-stat');
        if(st=='no') {
            $('.chk').prop('checked',true);
            $(this).attr('data-stat','yes');
        } else {
            $('.chk').prop('checked',false);
            $(this).attr('data-stat','no');
        }
    });
});