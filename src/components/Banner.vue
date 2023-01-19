<template>
  <div 
    class="banner"
    id="banner"
    :style="{ 
      backgroundImage: `url(${BannerImage})` 
    }"
  >  
      <!--ссылка на сайт-->
      <div class="banner_site-url">
          <a :href="bannerData.site.url">{{ bannerData.site.title }}</a>
      </div>

       <!--ссылка на сайт-->
      <div class="banner_author-url">
          <a :href="bannerData.author.url">{{ bannerData.author.title }}</a>
      </div>

    
      <div 
        class="banner_block"
      >
        <div class="banner_block-center _anim_items">
            <div class="banner_block-center-title">
              {{ bannerData.title }}
            </div>
            <div class="banner_block-center-days">
              {{ days }}
            </div>

            <div 
              class="banner_block-center-travel-date"
              v-for="(item, index) in bannerData.travelDate"
              :key="index"
            >
              {{ `${item.title}: ${item.start} - ${item.end}` }}
            </div>
        </div>

        <!--кнопка отправки заявки-->
        <div class="request-button">
          <BronButton />
        </div>
      </div>
  </div>
</template>
<script>

import BannerImage from '@/assets/images/banner.jpg'
import BronButton from '@/components/BronButton.vue'

export default {
  name: 'Banner',
  inject: ['bannerData'],
  components: {
    BronButton
  },
  data () {
    return {
      BannerImage
    }
  },
  computed: {
    days () {
      return `${ this.bannerData.amounOfDays.days } дней / ${ this.bannerData.amounOfDays.night } ночей`
    }
  }
}
</script>


<style lang="scss" scoped>
  .banner {
    width: 100%;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover; 
    background-size: cover;
    height: 100vh;
    font-weight: 500;

    &_site-url, &_author-url {
      padding: 5px 20px;
      background-color: rgba(255, 253, 253, 0.35);
      display: inline-block;
      border-radius: 10px;
      margin: 12px 0 0 27px;

      a {
        text-decoration: none;
        color: #000;
        font-size: 20px;
      }
    }

    &_author-url {
      right: 30px;
      position: absolute;

      @media (max-width: 400px) {
        position: inherit;
      }
    }

    .banner_block {
      position: relative;
      top: calc(50vh - 166px);

      @media (min-width: 1336px) {
        top: calc(50vh - 366px);
      }

      .banner_block-center {
          position: relative;
          width: 100%;
          background-color: rgba(91, 65, 40, 0.69);
          color: #fff;
          text-align: center;
          padding: 30px 0px;
          opacity:0;
          transition: all 1s ease 0s;
          transform: translate(0px, 120px);
      
          &-title {
              font-size: 5vw;
              @media (max-width: 1024px) { font-size: 7vw; }
              @media (max-width: 768px) { font-size: 8vw; }
          }


          &-days {
            font-size: 3vw;
            margin: 10px 0px 30px 0;
            @media (max-width: 1024px) { font-size: 4vw; }
            @media (max-width: 768px) { font-size: 5vw; }
          }

          &-travel-date {
            font-size: 3.4vw;
            margin-top: 15px;
            @media (max-width: 1024px) { font-size: 4.4vw; }
            @media (max-width: 768px) { font-size: 5.4vw; }
          }
      }

      .banner_block-center._active {
          transform: translate(0px, 0px);
          opacity: 0.85;
      }

      .request-button {
        margin-top: 60px;
      }
    }
  }
</style>