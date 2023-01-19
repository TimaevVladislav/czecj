<template>
  <div class="global">
  
    <Banner />
    <!--Сервисы-->
    <Services />
    <!--Программа тура-->
    <TourProgramFirst />
    <TourProgramSecond />
  
    <Answers />
   
    <TravelDetails />

    <Bron />
    <!--Модалка-->
    <BronFormModal 
      v-show="showBronModal"
    />
    <!--Скролл вверх-->
    <div 
      class="global_arrow"
      @click="scrollBanner"
    >
      <ArrowIcon />
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

/* import icons */
import ArrowIcon from '@/assets/icons/arrow.svg'

/* import components */
import Banner from '@/components/Banner.vue'
import Services from '@/components/Services.vue'
import TourProgramFirst from '@/components/TourProgramFirst.vue'
import TourProgramSecond from '@/components/TourProgramSecond.vue'
import Answers from '@/components/Answers.vue'
import TravelDetails from '@/components/TravelDetails.vue'
import Bron from '@/components/Bron.vue'
import BronFormModal from '@/components/BronFormModal.vue'

export default {
  name: 'Global',
  inject:['animOnScroll'],
  components: {
    Banner,
    Services,
    TourProgramFirst,
    TourProgramSecond,
    Answers,
    TravelDetails,
    Bron,
    BronFormModal,
    ArrowIcon
  },
  computed: {
    ...mapGetters(['showBronModal'])
  },
  mounted () {
    this.handleScroll()
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
     handleScroll() {
      let animItems = document.querySelectorAll('._anim_items');
      if (animItems.length > 0) {
        this.animOnScroll(animItems)
      }
    },
    scrollBanner () {
      const banner = document.getElementById('banner')
      console.log(banner)
      banner.scrollIntoView({
        behavior: "smooth", 
        block: "start"
      });
    },
  }
}
</script>

<style lang="scss">
  .global {
    width: 100%;

     &_arrow {
        position: fixed;
        right: 30px;
        margin-top: -100px;
        cursor: pointer;
        bottom: 30px;
        visibility: hidden;
        transition: all 0.5s ease 0.5s;
        opacity: 0;

        &-active {
          visibility: visible;
          opacity: 1;
        }

        svg circle {
          transition: all 0.5s ease 0s;
          z-index: 1;  
        }

        svg circle:hover {
          fill: #FFCC00;
        }
      }
  }
</style>