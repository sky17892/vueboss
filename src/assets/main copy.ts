let nowBanner2: number = 1;
let nowBanner3: number = 1;
let rollImg2: ReturnType<typeof setInterval>;
let rollImg3: ReturnType<typeof setInterval>;

const updateBanner = (bannerClass: string, current: number) => {
  const banners = document.querySelectorAll(`.${bannerClass}`);
  banners.forEach((banner, index) => {
    (banner as HTMLElement).style.left = index + 1 === current ? '0' : (index + 1 < current ? '-100%' : '100%');
  });
};

const nextBanner2 = () => {
  nowBanner2 = nowBanner2 === 4 ? 1 : nowBanner2 + 1;
  updateBanner('mb_1', nowBanner2);
};

const nextBanner3 = () => {
  nowBanner3 = nowBanner3 === 5 ? 1 : nowBanner3 + 1;
  updateBanner('mb_2', nowBanner3);
};

const startSlides = () => {
  rollImg2 = setInterval(nextBanner2, 3000);
  rollImg3 = setInterval(nextBanner3, 3000);
};

// DOMContentLoaded 이벤트가 발생한 후 슬라이드를 시작합니다.
document.addEventListener('DOMContentLoaded', () => {
  startSlides();
});

// 클린업 함수 (옵션)
const cleanup = () => {
  clearInterval(rollImg2);
  clearInterval(rollImg3);
};

// export 할 필요가 있을 경우
export { startSlides, cleanup };
