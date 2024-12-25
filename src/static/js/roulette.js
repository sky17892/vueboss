import Swal from 'sweetalert2';
import axios from 'axios';

const runRoulettes = () => {
    const tickSound = new Audio('https://boss-1177.com/static/sound/tick.mp3');
    const celebrationSound = new Audio('https://boss-1177.com/static/sound/celebration.mp3');

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const items = [
        { "ri_title": "1천원", "ri_order": "0" },
        { "ri_title": "3천원", "ri_order": "1" },
        { "ri_title": "5천원", "ri_order": "2" },
        { "ri_title": "7천원", "ri_order": "3" },
        { "ri_title": "1만원", "ri_order": "4" },
        { "ri_title": "2만원", "ri_order": "5" },
        { "ri_title": "3만원", "ri_order": "6" },
        { "ri_title": "10만원", "ri_order": "7" }
    ];
    const colors = ["#66e2e1", "#f7de4b"];
    let startTime = null;
    let tickPlaying = false;
    let lastTickTime = 0;
    let baseTickInterval = 50;
    let lastRotation = 0;
    let pinRotationSpeed = 7;

    // Initialize sounds
    tickSound.volume = 1;
    celebrationSound.volume = 1;

    const newMake = () => {
        const [cw, ch] = [canvas.width / 2, canvas.height / 2];
        const arc = Math.PI / (items.length / 2);
        let startAngle = -(Math.PI / 2);

        items.forEach((item, i) => {
            ctx.beginPath();
            ctx.fillStyle = colors[i % colors.length];
            ctx.moveTo(cw, ch);
            const endAngle = startAngle + arc;
            ctx.arc(cw, ch, cw, startAngle, endAngle);
            ctx.fill();
            ctx.closePath();
            startAngle = endAngle;
        });

        ctx.font = "bold 25px Pretendard";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        items.forEach((item, i) => {
            const angle = startAngle + (arc * i) + (arc / 2);
            ctx.save();
            ctx.translate(
                cw + Math.cos(angle) * (cw - 50),
                ch + Math.sin(angle) * (ch - 50),
            );
            ctx.rotate(angle + Math.PI / 2);
            item.ri_title.split(" ").forEach((text, j) => {
                ctx.fillStyle = (i % 2 === 0) ? "#fff" : "#000";
                ctx.fillText(text, 0, 40 * j);
            });
            ctx.restore();
        });
    };

    newMake();

    const resetRotation = () => {
        canvas.style.transition = 'none';
        canvas.style.transform = `rotate(0deg)`;
        lastRotation = 0;
    };

    const rotate = (item_order, callback) => {
        resetRotation();
        let idx;
        items.forEach((item, i) => {
            if (item.ri_order == item_order) {
                idx = i;
            }
        });

        const pin = document.querySelector(".roulette_pin");
        const rotationDuration = 10; // 10 seconds

        const updatePinAnimation = (currentTime) => {
            if (!tickPlaying) return;
            const elapsedTime = (currentTime - startTime) / 1000;
            const progress = elapsedTime / rotationDuration;
            const currentPinSpeed = pinRotationSpeed * (1 - progress);
            pin.style.transform = `rotate(${currentPinSpeed}deg)`;
            if (progress < 1) {
                requestAnimationFrame(updatePinAnimation);
            } else {
                pin.style.transform = `rotate(0deg)`;
            }
        };

        pin.classList.add("animate");
        setTimeout(() => {
            pin.classList.remove("animate");
            pin.classList.add("animate2");
        }, 2000);
        setTimeout(() => {
            pin.classList.remove("animate2");
        }, 7000);

        const arc = 360 / items.length;
        const baseNum = 5;
        const min = arc * idx + baseNum;
        const max = arc * (idx + 1) - baseNum;
        const addRotate = r(min, max);
        const rotateAmount = 3600 + addRotate;

        setTimeout(() => {
            canvas.style.transition = `${rotationDuration}s cubic-bezier(0.42, 1, 0.58, 1)`;
            canvas.style.transform = `rotate(${lastRotation - rotateAmount}deg)`;
            lastRotation -= rotateAmount;
        }, 50);

        startTime = performance.now();
        tickPlaying = true;

        const animateTickSound = (currentTime) => {
            if (!tickPlaying) return;
            const elapsedTime = (currentTime - startTime) / 1000;
            const progress = elapsedTime / rotationDuration;
            const currentTickInterval = baseTickInterval + progress * 500;
            if (currentTime - lastTickTime > currentTickInterval) {
                tickSound.currentTime = 0;
                tickSound.play().catch(error => console.error("Tick sound playback error:", error));
                lastTickTime = currentTime;
            }
            if (progress < 1) {
                requestAnimationFrame(animateTickSound);
            }
        };

        canvas.addEventListener("transitionend", () => {
            tickPlaying = false;
            pin.classList.remove("animate2");
            Swal.fire({
                title: "룰렛이벤트",
                text: `[${items[idx].ri_title}]이 당첨되었습니다!`,
                icon: "info",
            });
            celebrationSound.play().catch(error => console.error("Celebration sound playback error:", error));
            if (callback) callback();
        }, { once: true });

        requestAnimationFrame(animateTickSound);
        requestAnimationFrame(updatePinAnimation);
    };

    const rouletteBtn = document.querySelector(".roulette_btn");
    rouletteBtn.addEventListener("click", function () {
        if (this.classList.contains("run")) {
            return false;
        }
        this.classList.add("run");
        const r_type = document.querySelector("input[name=r_type]").value;
        /*` + r_type  */
        axios.post(`/roulette/${r_type}`,  {
            headers: {
                    'Content-Type': 'application/json',
           }
        })
        .then(response => response.json())
        .then(won_item => {
            switch (won_item.result) {
                case "lack_cp":
                    Swal.fire({
                        title: "룰렛이벤트",
                        text: "쿠폰이 부족합니다.",
                        icon: "warning",
                    }).then(() => {
                        this.classList.remove("run");
                    });
                    return;
                case "no_item":
                    Swal.fire({
                        title: "룰렛이벤트",
                        text: "룰렛 아이템이 없습니다.",
                        icon: "warning",
                    }).then(() => {
                        this.classList.remove("run");
                    });
                    return;
            }
            rotate(won_item.ri_order, () => {
                this.classList.remove("run");
                //window.location.href = "http://0.0.0.0:8080/roulette";
                this.$router.push('/roulette');
            });
        })
        .catch(error => {
            console.error("Error fetching roulette result:", error);
            this.classList.remove("run");
        });
    });

    rouletteBtn.addEventListener("mouseenter", function() {
        this.querySelector('img').src = 'https://boss-1177.com/static/img/roulette/rul_btn_over.png';
        this.querySelector('img').style.transform = 'scale(1.1)';
    });

    rouletteBtn.addEventListener("mouseleave", function() {
        this.querySelector('img').src = 'https://boss-1177.com/static/img/roulette/rul_btn.png';
        this.querySelector('img').style.transform = 'scale(1.0)';
    });

    function r(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Attach runRoulettes to the global window object after defining it
window.runRoulettes = runRoulettes;

// Call runRoulettes when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", runRoulettes);
