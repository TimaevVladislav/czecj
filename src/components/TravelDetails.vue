<template>
  <div class="travel_details">
      <BlockHeader title="Детали путешествия"/>


      <div class="travel_details-block">
        <div class="travel_details-block-left _anim_items">
          <div 
            class="travel_details-block-left-item"
            v-for="(item, index) in travelDetails.left"
            :key="index"
          >
            <img 
              :src="require(`../assets/icons/travel_details/${item.icon}.png`)" 
            />
            <div class="item_text">
              <div class="item_text-title">
                  {{ item.title }}:
                  <span v-if="item.grade">
                    {{ item.grade }}
                  </span>
              </div>
              <div
                class="item_text-text"
                v-for="(text, index) in item.text"
                :key="index"
              >
                 <span 
                  v-if="item.groupCount"
                  class="item_text-text-count"
                > 
                    {{ item.groupCount }} -
                 </span>
                 {{ text }}
              </div>
            </div>
          </div>
        </div>
        <div class="travel_details-block-right _anim_items">
            <div class="title">
                {{ travelDetails.right.title }}
            </div>
            <ul class="text">
              <li 
                class="text_item"
                v-for="(item, index) in travelDetails.right.text"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
        </div>
      </div>
  </div>
</template>
<script>
/* import components */
import BlockHeader from '@/components/BlockHeader.vue'

export default {
  name: "Travel details",
  inject:['travelDetails'],
  components: {
    BlockHeader
  }
}
</script>
<style lang="scss" scoped>
  .travel_details {

    &-header {
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

    &-block {
      padding: 30px 30px;
      display: flex;
      @media (max-width: 1024px) { flex-direction: column; }

      &-left {
        display: flex;
        width: calc(100% - 400px);
        justify-content: left;
        opacity: 0;
        transition: all 1s ease 0s;
        transform: translate(0px, 120px);

        &._active {
          opacity: 1;
          transform: translate(0px, 0px);
        }

        @media (min-width: 1336px) { 
          width: 600px;
          width: calc(100% - 600px);
        }
        @media (max-width: 1024px) { width: 100% }
        @media (max-width: 650px) { flex-direction: column; }

        &-item {
          font-size: 18px;

          @media (min-width: 1336px) {
            margin-right: 20px;
          }

          @media (min-width: 650px) {
            &:nth-last-child(1) {
              padding-left: 20px;
            }

            &:nth-last-child(3){
              padding-right: 20px;
            } 
          }

          @media (max-width: 650px) { 
            padding: 0 0px; 
            margin-top: 30px;
          }


          .item_text {
            margin-top: 30px;
            font-size: 18px;
            @media (min-width: 1336px){
              font-size: 1.3vw;
            }

            &-title {
              margin: 10px 0;
              font-weight: 500;

              span {
                font-weight: 600;
              }
            }

            &-text {
              color: #3e3d3d;

              span {
                font-weight: 600;
                color: #000;
              }
            }
          }

          img {
            width: 45px;
            height: 45px;

            @media (min-width: 1336px) {
                width: 4vw;
                height: 4vw;
            }
          }
        }
      }

      &-right {
          width: 400px;
          opacity: 0;
          transition: all 1s ease 0.3s;
          transform: translate(0px, 120px);

          &._active {
            opacity: 1;
            transform: translate(0px, 0px);
          }

          @media (min-width: 1336px) {
             width: 600px;
          }

          @media (max-width: 1024px) { 
            width: 100%;
            margin-top: 40px;
          }

          .title {
            font-size: 24px;
            background-color: #eeff8a;

            @media (min-width: 1336px) {
              font-size: 2vw;
            }
          }

          .text {
            padding-left: 15px;
            margin-top: 20px;
            font-size: 18px;

            @media (min-width: 1336px) {
              font-size: 1.3vw;
            }

            li {
              margin: 10px 0;
            }
          }
      }
    }
  }
</style>