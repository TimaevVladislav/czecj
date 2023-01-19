<template>
  <div class="tour_program">
    <BlockHeader :title="tourProgramFirst.title" />
    <div class="tour_program-list">
        <div 
          class="tour_program-list-item"
          v-for="(item, index) in tourProgramFirst.list"
          :key="index"
        >   
         
            <div class="text">
              <button class="text_title">
                 {{ item.title }}
              </button>
              <p 
                class="text_text"
                v-for="(paragraph, index) in item.text"
                :key="index"
              >
                 {{ paragraph }}
              </p>
              <img
                class="text_icon"
                v-if="item.icon"
                :src="require(`../assets/icons/tour_program/${item.icon}.png`)" 
              />
            </div>
            
            <div class="image">
              <img :src="require(`../assets/images/tour_program/${item.image}.jpg`)" />
            </div>
        </div>
    </div>
  </div>
</template>
<script>

/* import components */
import BlockHeader from '@/components/BlockHeader.vue'

export default {
  name: 'TourProgram',
  inject: ['tourProgramFirst'],
  components: {
    BlockHeader
  }
}
</script>
<style lang="scss" scoped>
  .tour_program {

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

    &-list {
      &-item {
        display: flex;
        margin-top: 0px;

        @media (max-width: 768px) { 
          flex-direction: column; 
          margin-bottom: -5px;
        }

        .text {
          width: 50%;
          padding: 30px;
          
          @media (max-width: 768px) { 
            width: calc(100% - 60px);
          }

          &_title {
              border: none;
              border-radius: 5px;
              color: #fff;
              background-color: #3EB5F1;
              margin-bottom: 20px;
              font-size: 24px;
              font-weight: 600;
          }

          &_text {
            font-size: 1.3vw;
            @media (max-width: 768px) { 
              font-size: 18px;
            }
          }

          &_icon {
            margin: auto;
            display: flex; 
            
            @media (max-width: 500px) { width: 100% }
          }
        }
  
        .image {
          width: 50%;
          @media (max-width: 768px) { 
            width: 100%;
          }

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      &-item:nth-child(2n - 1) {
        background: #f1f1f1;
      }

      &-item:nth-child(2n) {
        background: #c4c4c4;
       
        @media (max-width: 768px) {  margin-top: -5px; }

        .text {
          order: 2;
          @media (max-width: 768px) { order: 0 }
        }
      }
    }
  }
</style>