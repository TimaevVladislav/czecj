<template>
  <div 
    class="services"
    :style="{ 
      backgroundImage: `url(${ServicesImages})` 
    }"
  >  
      <div class="services_header">
          <!--Титул-->
          <div class="services_header-title">
              {{ servicesData.title }}
          </div>
          <!--Иконки-->
          <div class="services_header-icons">

              <div 
                class="services_header-icons-item"
                v-for="(item, index) in servicesData.icons"
                :key="index"
              > 
                <div class="services_header-icons-item-icon">
                  <img :src="require(`../assets/icons/services/${item.icon}.png`)" />
                </div>
                <div class="services_header-icons-item-title"> 
                  {{ item.title }}
                </div>
              </div>
          </div>
      </div>
      <!---->
      <div 
        class="services_list"
      >
        <div 
          class="services_list-first _anim_items"
        >
          <div class="services_list-title">
            <p>{{ servicesData.listWhatIsIncluded.title  }}</p>
          </div>
          <!-- вывод списка -->
          <div 
            class="services_list-item"
            v-for="(item, index) in servicesData.listWhatIsIncluded.list"
            :key="index"
          >
            <CheckIcon />
            <p class="services_list-item-text">
              {{ item }}
            </p>
          </div>
        </div>

        <div class="services_list-second _anim_items">
          <div class="services_list-title">
            <p>{{ servicesData.listOnRequestForFee.title  }}</p>
          </div>
          <!-- вывод списка -->
          <div 
            class="services_list-item"
            v-for="(item, index) in servicesData.listOnRequestForFee.list"
            :key="index"
          >
            <CheckIcon />

            <p class="services_list-item-text">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>

/* import images */
import ServicesImages from '@/assets/images/services.jpg'
import CheckIcon from '@/assets/icons/services/check.svg'

export default {
  name: 'Services',
  inject:['servicesData'],
  components: {
    CheckIcon
  },
  data () {
    return {
      ServicesImages,
    }
  },
}
</script>
<style lang="scss" scoped>
  .services {
    width: 100%;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover; 
    background-size: cover;

    /* header */
    &_header {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #fff;
      @media (max-width: 1131px) { flex-direction: column; }
      @media (max-width: 950px) {
        font-size: 4vw;
      }
      @media (max-width: 678px){
        font-size: 5vw;
      }

      &-title {
        width:349px;
        display: flex;
        align-items: center;
        font-size:36px;
        background-color: #F48D36;
        color: #fff;
        justify-content: center;
        font-weight: 500;

        @media (max-width: 1131px) { 
          width: 100%;  
          height: 52px;
        }
      }

      &-icons {
        display: flex;
        width: 100%;
        background-color: #fff;

        @media (max-width: 940px) { 
          flex-wrap: wrap;
        }

        &-item {
          width: calc(100% / 8);
          justify-content: center;
          text-align: center;
          padding: 10px 0px;
          line-height: 5px;

          @media (max-width: 940px) { 
            width: calc(100% / 4);
          }

          @media (max-width: 500px) { 
            width: calc(100% / 2);
          }

          &-icon {
            width: 70px;
            height: 48px;
            margin: auto;
            margin-bottom: 10px;
          }

          &-title {
            font-size: 14px;
            text-transform: uppercase;
          }
        }
      }
    }

    /* list */

    &_list {
      display: flex;
      justify-content: center;
      padding: 20px 0px;    

      @media (max-width: 936px) { 
        flex-direction: column; 
      }

      @media (max-width: 450px) { 
        padding: 0 20px;
      }

      &-title {
        font-size: 1.4vw;
        margin-bottom: 20px;

        @media (max-width:1336px) {
          font-size: 24px;
        }

        p {
          font-weight: 600;
          margin:0;
        }
      }

      &-first, &-second {
        min-width: 200px;
        max-width: 356px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 20px;
        transition: all 1s ease 0s;
        opacity: 0;

        @media (min-width: 1400px) {
          max-width: 430px;
        }

        @media (min-width: 1600px) {
          max-width: 500px;
        }

        @media (min-width: 1900px) {
          max-width: 550px;
        }

         @media (min-width: 2300px) {
          max-width: 600px;
        }
      }

      &-first {
        margin-right: 75px;
       transform: translate(-220px, 0px);
        @media (max-width: 968px) { margin: 10px auto }
      }
      
      &-second {
        margin-left: 75px;
        transform: translate(-220px, 0px);
        @media (max-width: 968px) { margin: 10px auto  }
      }

      &-first._active , &-second._active {
        transform: translate(0px, 0px);
        opacity: 1;
      }

   

      &-item {
        display: flex;
        width: 100%;
        font-size: 1.2vw;

        @media (max-width: 1336px) {
          font-size: 18px;
        }

        svg {
          width: 30px;
          height: 30px;
          padding-top: 5px;
        }

        &-text {
          width: calc(100% - 30px);
          margin: 5px 0;
        }
      }
    }
  }
</style>