<template>
  <div class="bron">
    <BlockHeader :title="bron.title" />
    <div class="bron_top">
      <div 
        class="bron_top-item _anim_items"
        v-for="(item, index) in bron.points"
        :key="index"
        :style="{
          transition:  `all 1s ease ${index / 3}s`
        }"
      >
        <div class="bron_top-item-number">
           {{ item.number }}
        </div>
        <div class="bron_top-item-text">
            <div class="title">
               {{ item.title }}
            </div>
            <div class="text">
               {{ item.text }}
            </div>
        </div>
      </div>
    </div>
    <div 
      class="bron_bottom"
      :style="{ 
        backgroundImage: `url(${BronImage})` 
      }"
    >
       <!--кнопка отправки заявки-->
       <div class="request-button">
          <BronButton />
       </div>

      <div class="bron_bottom-block">
        <div 
          class="bron_bottom-timer _anim_items"
          :class="`bron_bottom-timer-${key}`"
          v-for="(itemTimer, key) in bron.timer"
          :key="key"
        >
          <div class="timer_title">
            {{ itemTimer.title }}
          </div>
          <div class="timer_block">
            <div 
              class="timer_block-item"
              v-for="(item, index) in timer[key]"
              :key="index"
            >
              <div class="timer_block-item-timer">
                <span v-if="item.timer < 10">
                  0
                </span>
                {{ item.timer }}
              </div>
              <div class="timer_block-item-title">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

/* import components */
import BronButton from '@/components/BronButton.vue'
import BlockHeader from '@/components/BlockHeader.vue'

/* import images */
import BronImage from '@/assets/images/bron/bron.png'

export default {
  name: 'Bron',
  inject: ['bron', 'bannerData'],
  components: {
    BronButton,
    BlockHeader
  },
  data () {
    return {
      BronImage,
      timer: {
        firstGroup: [],
        secondGroup: []
      }
    }
  },
  mounted () {
    /* запускаем таймер */
    setInterval(this.startTimer, 1000);
  },
  methods: {
    /* записывем время */
    startTimer () {
      this.timer.firstGroup = this.getTimer(this.bron.timer.firstGroup.out)
      this.timer.secondGroup = this.getTimer(this.bron.timer.secondGroup.out)
    },

    /* получаем время */
    getTimer (out) {
        let startDate = +new Date(out)
        let differenceTime =  new Date( startDate - +new Date())
        

        /* proba */

        const timeDiff = new Date (out) - new Date ()
        
        const days = Math.ceil(timeDiff / (1000 * 3600 * 24))

    


        return [
          {
            timer: days,
            title: "дней" 
          },
          {
            timer: differenceTime.getHours(),
            title: "часов" 
          },
          {
            timer: differenceTime.getMinutes(),
            title: "минуты" 
          },
          {
            timer: differenceTime.getSeconds(),
            title: "секунды" 
          }
        ]
    }
  }
}
</script>
<style lang="scss" scoped>
    .bron {
      
      &_header {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 73px;
        font-size: 3vw;
        background: #443F3D;
        color: #fff;
        
        @media (max-width: 950px) {
          font-size: 4vw;
        }

        @media (max-width: 678px){
          font-size: 5vw;
        } 
      }

      &_top {
        display: flex;
        flex-wrap: wrap;
        width: calc(100% - 60px);
        padding: 30px 30px;

        &-item {
          width: 25%;
          display: flex;
          opacity: 0;
          transform: translate(0px, 120px);

          &._active {
            opacity: 1;
            transform: translate(0px, 0px);
          }


          @media (max-width: 1024px) { 
            width: 50%; 
            margin-bottom: 30px;
          }

          @media (max-width: 768px) { 
            width: 100%; 
            margin-bottom: 30px;
          }

          &-number {
            font-size: 48px;
            color:#F7A963;
            margin-right: 10px;
            font-weight: 600;
          }

          &-text {
            padding: 5px 10px;
            color: #3E3D3D;
            font-size: 18px;

            @media (min-width: 1336px) {
              font-size: 1.3vw;
            }

            .title {
              margin-bottom: 10px;
              font-weight: 600;
            }
          }
        }
      }

      &_bottom {

        .bron_bottom-block {
          display: flex;
          height: calc(100% - 240px);
          align-items: center;

          @media (max-width: 1022px) {
            flex-direction: column;
          }
        }

        .request-button {
          padding-top: 120px;
          
          @media (max-width: 1024px) {
            padding-top: 0px;
          }
        }

        height: 100vh;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover; 
        background-size: cover;

        @media (max-width: 1024px) {
          height: auto;
          padding: 50px 0 100px 0;
          
        }

        &-timer-firstGroup, &-timer-secondGroup {
          opacity: 0;
          transform: translate(0px, -120px);
        }

        &-timer-secondGroup {
           transition: all 1s ease 0.8s;

           &._active {
            transform: translate(0px, 0px);
            opacity: 1;
           }
        }

        &-timer-firstGroup {
          transition: all 1s ease 0.5s;
          
          &._active {
            transform: translate(0px, 0px);
            opacity: 1;
          }
        }

        &-timer {
          width: 420px;
          padding: 20px 20px;
          background: rgba(2, 39, 66, 0.6);
          font-weight: 500;

          @media (min-width: 1336px) {
            width: 600px;
          }

          @media (min-width: 1700px) {
            width: 700px;
          }

          @media (min-width: 2000px) {
            width: 900px;
          }
          
          @media (max-width: 1024px) {
            margin: 20px;
          }

          @media (max-width: 420px) {
            width: 350px;
            padding: 10px 10px;
          }

          @media (max-width: 350px) {
            width: 300px;
            padding: 10px 10px;
          }

          span {
            margin-right: -10px;
          }

          .timer_title {
            color: #fff;
            font-size: 24px;
            text-align: center;
            margin-bottom: 10px;


            @media (min-width: 1336px) {
              font-size: 2vw;
            }

            @media (max-width: 420px) {
                font-size: 20px;
            }

            @media (max-width: 350px) {
                font-size: 16px;
            }
          }

          .timer_block {
            display: flex;
            margin-bottom: 20px;

            &-item {
              width: 25%;

              &-timer {
                font-size: 64px;
                color: #fff;
                text-align: center;

                @media (min-width: 1336px) {
                  font-size: 5vw;
                }

                @media (max-width: 420px) {
                  font-size: 50px;
                }

                @media (max-width: 350px) {
                  font-size: 40px;
                }
              }

              &-title {
                color: #fff;
                font-size: 18px;
                text-align: center;

                @media (min-width: 1336px) {
                  font-size: 1.3vw;
                }
                @media (max-width: 420px) {
                  font-size: 15px;
                }

                @media (max-width: 350px) {
                  font-size: 12px;
                }
              }
            }
          }
        }

        @media (min-width: 1024px) {
          &-timer:nth-last-child(1) {
            margin-left: auto;
            margin-right: 30px;
          }

          &-timer:nth-last-child(2) {
            margin-right: auto;
            margin-left: 30px;
          }
        }
      }
    }
</style>