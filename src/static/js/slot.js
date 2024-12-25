// slot.js

function initializeSlot(logonStatus) {
    const logon = logonStatus;

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.sm_withdrawal').forEach(function(element) {
            element.addEventListener('click', function() {
                this.classList.add('on');
                document.querySelector('.sm_charge').classList.remove('on');
                var nh = getComputedStyle(document.querySelector('.slot_money_box')).height;
                document.querySelector('.slot_money_box').style.height = (nh === '180px') ? '27px' : '180px';
                document.querySelector('.sm_charge_box').classList.add('dspn');
                document.querySelector('.sm_withdrawal_box').classList.remove('dspn');
            });
        });

        document.querySelectorAll('.sm_charge').forEach(function(element) {
            element.addEventListener('click', function() {
                this.classList.add('on');
                document.querySelector('.sm_withdrawal').classList.remove('on');
                var nh = getComputedStyle(document.querySelector('.slot_money_box')).height;
                document.querySelector('.slot_money_box').style.height = (nh === '180px') ? '27px' : '180px';
                document.querySelector('.sm_charge_box').classList.remove('dspn');
                document.querySelector('.sm_withdrawal_box').classList.add('dspn');
            });
        });

        document.querySelectorAll('.open_slot').forEach(function(element) {
            element.addEventListener('click', function() {
                var gid = this.getAttribute('game-id');
                var gname = this.getAttribute('game-name');
                document.querySelector('.s_name').innerHTML = gname;
                if (gid === '0000') {
                    alert('점검중입니다.');
                    return false;
                }
                get_games(gid);
            });
        });

        document.querySelectorAll('.open_casino').forEach(function(element) {
            element.addEventListener('click', function() {
                if (logon !== 'on') {
                    alert('로그인 후 이용해주세요.');
                    return false;
                }
                var gid = this.getAttribute('game-id');
                var gname = this.getAttribute('game-name');
                if (gid === '0000') {
                    alert('점검중입니다.');
                    return false;
                }
                window.open("/game/open_lobby/" + gname, "SlotWin");
            });
        });

        document.querySelectorAll('.close_box').forEach(function(element) {
            element.addEventListener('click', function() {
                document.querySelector('.slot_game_box').style.display = 'none';
            });
        });

        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('open_slot_game')) {
                if (logon !== 'on') {
                    alert('로그인 후 이용해주세요.');
                    return false;
                }
                var gid = e.target.getAttribute('data-id');
                var tp = e.target.getAttribute('data-tp');
                window.open("/game/open_casino/" + tp + "/" + gid, "SlotWin");
            }
        });
    });
}

function get_games(code) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/slot/' + code, true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            document.querySelector('.slot_game_box').style.display = 'block';
            document.querySelector('.slot_game_box').style.top = (document.querySelector('.contents').scrollTop + window.scrollY) + 'px';
            document.querySelector('.slot_games').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

export { initializeSlot };
