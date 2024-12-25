<template>
  <div class="deposit">
    <h1>This is an deposit page</h1>
    <h3><router-link to="/">logout</router-link></h3>
  </div>
</template>

<script>
import '@/assets/index.js';
//import { open_payback } from '@/static/js/base.ts';
//import '@/assets/tracking.js';
import loadLiveChat from '@/assets/livechat.js';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'pbg_pwb5Page',

  setup() {
    const isMenuOpened = ref(false);
    const isLoginVisible = ref(false);
    const isLoginVisible2 = ref(true);
	  const isExpanded = ref(false);

    const toggleMenu = () => {
      isMenuOpened.value = !isMenuOpened.value;
    };

    const showLogin = () => {
      isLoginVisible.value = true;
    };

    const hideLogin = () => {
      isLoginVisible.value = false;
    };

    const showLogin2 = () => {
      isLoginVisible2.value = true;
    };

    const hideLogin2 = () => {
      isLoginVisible2.value = false;
    };

	const toggleHeight = () => {
      isExpanded.value = !isExpanded.value;
    };
    
    return {
      isMenuOpened,
      toggleMenu,
      isLoginVisible,
      isLoginVisible2,
      showLogin,
      hideLogin,
      showLogin2,
      hideLogin2,
	    isExpanded,
      toggleHeight,
    };       
  },

  async mounted() {
    const scripts = [
      '/static/js/jquery-3.6.0.min.js',
      '/static/js/jquery.cookie.js',
      '/static/js/base.js?v=37',
      '/static/js/sweetalert2.min.js?v=1',
      'https://kit.fontawesome.com/f4e3549fc3.js',
      '/assets/tracking.js',
    ];

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScriptsSequentially = async () => {
      for (const src of scripts) {
        try {
          await loadScript(src);
        } catch (error) {
          console.error(`Failed to load script: ${src}`, error);
        }
      }
    };

    await loadScriptsSequentially();

    loadLiveChat();

  },
  methods: {
    refreshPage() {
      location.reload();
    },
  }    
});
</script>

<style scoped>
@import url('@/assets/base.css');
@import url('@/assets/sweetalert2.min.css');
@import url('@/assets/im.css');
@import url('@/assets/all.min.css');
@import url('https://boss-1177.com/static/css/min.css?v=22') screen and (max-width:767px);
@import url('https://boss-1177.com/static/css/max.css?v=12') screen and (min-width:768px);
</style>

<style scoped>
.wrap{
  height:100%;
  background:#090909;
}
</style>
<style scoped>
.cls-1{fill:#858e99;}
				</style>
<style scoped>
a {
  color: black !important;
}
</style>