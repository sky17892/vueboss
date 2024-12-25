// base.js

function un_number(x) {
    return x.replace(/,/g, '');
  }
  
  function number_format(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function only_number_format(input) {
    input.value = number_format(un_number(input.value));
  }
  
  // DOM 조작 관련 함수
  function setupSelectMoney() {
    document.querySelectorAll('.select_money').forEach(function(button) {
      button.addEventListener('click', function() {
        const nm = un_number(document.querySelector('.sm_c_money').value);
        const sm = un_number(this.getAttribute('data-amt'));
        const mm = un_number(document.querySelector('.money').innerHTML);
        const total = parseInt(nm) + parseInt(sm);
        
        if (total > mm) {
          alert('보유금이 부족합니다.');
          return false;
        }
        document.querySelector('.sm_c_money').value = total;
        only_number_format(document.querySelector('.sm_c_money'));
      });
    });
  
    document.querySelectorAll('.select_money2').forEach(function(button) {
      button.addEventListener('click', function() {
        const nm = un_number(document.querySelector('.sm_w_money').value);
        const sm = un_number(this.getAttribute('data-amt'));
        const mm = un_number(document.querySelector('.cmoney').innerHTML);
        const total = parseInt(nm) + parseInt(sm);
        
        if (total > mm) {
          alert('카지노머니가 부족합니다.');
          return false;
        }
        document.querySelector('.sm_w_money').value = total;
        only_number_format(document.querySelector('.sm_w_money'));
      });
    });
  }
  
  // 이 함수는 Vue에서 호출됩니다.
  export function initBaseFunctions() {
    setupSelectMoney();
  }
  
  