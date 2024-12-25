let rollImg2 = null; // 초기화
let rollImg3 = null; // 초기화
let nowBanner2 = 1;
let nowBanner3 = 1;

const updateBanner = (bannerClass, current) => {
  const banners = document.querySelectorAll(`.${bannerClass}`);
  banners.forEach((banner, index) => {
    const position = index + 1 === current ? '0' : (index + 1 < current ? '-100%' : '100%');
    banner.style.left = position;
  });
};

const nextBanner2 = () => {
  nowBanner2 = nowBanner2 === 4 ? 1 : nowBanner2 + 1;
  updateBanner('mb_1', nowBanner2);
  updateControls('btn_mb_ctr2', nowBanner2);
};

const nextBanner3 = () => {
  nowBanner3 = nowBanner3 === 5 ? 1 : nowBanner3 + 1;
  updateBanner('mb_2', nowBanner3);
  updateControls('btn_mb_ctr3', nowBanner3);
};

const updateControls = (buttonClass, current) => {
  const buttons = document.querySelectorAll(`.${buttonClass}`);
  buttons.forEach((button, index) => {
    button.classList.toggle('btn_mb_ctr_on', index + 1 === current);
  });
};

const handleButtonClick = (buttonClass, isBanner2) => {
  const buttons = document.querySelectorAll(`.${buttonClass}`);
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      if (isBanner2) {
        if (rollImg2) clearInterval(rollImg2);
      } else {
        if (rollImg3) clearInterval(rollImg3);
      }

      const nextBanner = Number(this.getAttribute('data-id'));
      
      if (nextBanner === (isBanner2 ? nowBanner2 : nowBanner3)) return;

      if (nextBanner > (isBanner2 ? nowBanner2 : nowBanner3)) {
        document.querySelector(`.mb_1${nextBanner}`).style.left = '100%';
        setTimeout(() => {
          document.querySelector(`.mb_1${nextBanner}`).style.left = '0';
          document.querySelector(`.mb_1${isBanner2 ? nowBanner2 : nowBanner3}`).style.left = '-100%';
        }, 0);
      } else {
        document.querySelector(`.mb_1${nextBanner}`).style.left = '-100%';
        setTimeout(() => {
          document.querySelector(`.mb_1${nextBanner}`).style.left = '0';
          document.querySelector(`.mb_1${isBanner2 ? nowBanner2 : nowBanner3}`).style.left = '100%';
        }, 0);
      }

      if (isBanner2) {
        nowBanner2 = nextBanner;
        rollImg2 = setInterval(nextBanner2, 3000);
      } else {
        nowBanner3 = nextBanner;
        rollImg3 = setInterval(nextBanner3, 3000);
      }

      updateControls(buttonClass, nextBanner);
    });
  });
};

const startSlides = () => {
  rollImg2 = setInterval(nextBanner2, 3000);
  rollImg3 = setInterval(nextBanner3, 3000);
};

document.addEventListener('DOMContentLoaded', () => {
  handleButtonClick('btn_mb_ctr2', true);
  handleButtonClick('btn_mb_ctr3', false);
  startSlides();
});

// Cleanup function
const cleanup = () => {
  if (rollImg2) clearInterval(rollImg2);
  if (rollImg3) clearInterval(rollImg3);
};

// Export cleanup function if needed in the future
export { cleanup };
