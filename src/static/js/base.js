function number_format(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function un_number(x) {
    return x.replace(/,/g, '');
}

function only_number_format(input) {
    const value = un_number(input.value);
    input.value = number_format(value);
}

// 예시로 이벤트 리스너를 추가하는 코드
document.querySelectorAll('.sm_c_money').forEach(input => {
    input.addEventListener('focus', function() {
        this.value = '';
    });

    input.addEventListener('keyup', function() {
        only_number_format(this);
    });

    input.addEventListener('focusout', function() {
        if (this.value === '' || Number(this.value) < 1000) {
            this.value = '0';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.go_to_withdrawal').addEventListener('click', function() {
        money_refresh();
        var mm = un_number(document.querySelector('.cmoney').innerHTML);
        var amt = un_number(document.querySelector('.sm_w_money').value);

        if (amt < 1) {
            alert('출금하실 금액을 설정해주세요.');
            return false;
        } else if (amt > mm) {
            alert('카지노머니가 부족합니다.');
            return false;
        } else if (confirm('카지노머니를 보유머니로 전환하시겠습니까?')) {
            fetch('/casino/withdrawal_slot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ money: amt })
            })
            .then(response => response.json())
            .then(data => {
                alert(data.msg);
                if (data.code === '1') {
                    document.querySelector('.sm_w_money').value = 0;
                    document.querySelector('.slot_money_box').style.height = '20px';
                    money_refresh();
                }
            });
        } else {
            alert('취소되었습니다.');
        }
    });

    document.querySelector('.close_login_pop').addEventListener('click', function() {
        document.querySelector('.pop_login').style.display = 'none';
    });

    document.querySelector('.sm_withdrawal2').addEventListener('click', function() {
        var nh = document.querySelector('.slot_money_box2').style.height;
        document.querySelector('.slot_money_box2').style.height = nh === '161px' ? '20px' : '161px';
        document.querySelector('.sm_charge_box2').classList.add('dspn');
        document.querySelector('.sm_withdrawal_box2').classList.remove('dspn');
    });

    document.querySelector('.sm_charge2').addEventListener('click', function() {
        var nh = document.querySelector('.slot_money_box2').style.height;
        document.querySelector('.slot_money_box2').style.height = nh === '160px' ? '20px' : '160px';
        document.querySelector('.sm_charge_box2').classList.remove('dspn');
        document.querySelector('.sm_withdrawal_box2').classList.add('dspn');
    });

    var smCMoney = document.querySelector('.sm_c_money');
    smCMoney.addEventListener('focus', function() {
        this.value = '';
    });
    smCMoney.addEventListener('keyup', function() {
        only_number_format(this);
    });
    smCMoney.addEventListener('focusout', function() {
        if (this.value === '' || this.value < 1000) {
            this.value = '0';
        }
    });

    document.querySelectorAll('.select_money').forEach(function(button) {
        button.addEventListener('click', function() {
            var nm = un_number(smCMoney.value);
            var sm = un_number(this.getAttribute('data-amt'));
            var mm = un_number(document.querySelector('.money').innerHTML);
            var total = nm + sm;
            if (total > mm) {
                alert('보유금이 부족합니다.');
                return false;
            }
            smCMoney.value = total;
            only_number_format(smCMoney);
        });
    });

    document.querySelectorAll('.select_money2').forEach(function(button) {
        button.addEventListener('click', function() {
            var nm = un_number(document.querySelector('.sm_w_money').value);
            var sm = un_number(this.getAttribute('data-amt'));
            var mm = un_number(document.querySelector('.cmoney').innerHTML);
            var total = nm + sm;
            if (total > mm) {
                alert('카지노머니가 부족합니다.');
                return false;
            }
            document.querySelector('.sm_w_money').value = total;
            only_number_format(document.querySelector('.sm_w_money'));
        });
    });

    document.querySelector('.select_max').addEventListener('click', function() {
        var mm = un_number(document.querySelector('.money').innerHTML);
        smCMoney.value = mm;
        only_number_format(smCMoney);
    });

    document.querySelector('.select_max2').addEventListener('click', function() {
        money_refresh();
        if (confirm('카지노머니를 보유머니로 전환하시겠습니까?')) {
            fetch('/casino/withdrawal_slot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ money: 'all' })
            })
            .then(response => response.json())
            .then(data => {
                if (data.code === '1') {
                    document.querySelector('.cmoney').innerHTML = '0';
                    document.querySelector('.slot_money_box').style.height = '20px';
                    document.querySelector('.slot_money_box2').style.height = '20px';
                } else {
                    alert(data.msg);
                }
            });
        } else {
            alert('취소되었습니다.');
        }
    });

    document.querySelector('.sm_refresh').addEventListener('click', function() {
        money_refresh();
    });

    document.querySelector('.go_to_charge').addEventListener('click', function() {
        var nm = un_number(smCMoney.value);
        var mm = un_number(document.querySelector('.money').innerHTML);
        if (nm < 1000) {
            alert("충전금액을 확인해주세요.");
            return false;
        }
        if (nm > mm) {
            alert('보유금이 부족합니다.');
            return false;
        }
        if (confirm('보유머니를 카지노머니로 전환하시겠습니까?')) {
            fetch('/casino/charge_slot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ money: nm })
            })
            .then(response => response.json())
            .then(data => {
                if (data.code === '1') {
                    alert(data.msg);
                    smCMoney.value = '0';
                    document.querySelector('.slot_money_box').style.height = '20px';
                    document.querySelector('.slot_money_box2').style.height = '20px';
                    money_refresh();
                } else {
                    alert(data.msg);
                }
            });
        }
    });
});

function money_refresh() {
    fetch('/casino/get_slot_money/')
        .then(response => response.json())
        .then(data => {
            if (data.code !== '1') {
                alert("머니조회실패. 고객센터에 문의해주세요.");
            } else {
                document.querySelector('.cmoney').innerHTML = data.money;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("요청 중 오류가 발생했습니다.");
        });
}
