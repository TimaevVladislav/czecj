<template>
  <div class="tour_program_second">
      <!--верхняя часть-->
      <div class="top">
          <div class="top_title">
            {{ tourProgramSecond.top.title }}
          </div>
          <div 
            class="top_images"
            v-for="(item, index) in tourProgramSecond.top.images"
            :key="index"
          >   
              <img :src="require(`../assets/images/tour_program/${item}.jpg`)" />
          </div>
      </div>
      <!--нижняя часть-->
      <div class="bottom">
          <div class="bottom_left">
            <img :src="require(`../assets/images/tour_program/${tourProgramSecond.bottom.image}.jpg`)" />
            <div class="bottom_left-widget">
                {{ tourProgramSecond.bottom.widget.text }}
                <img 
                  class="bottom_left-widget-icon"
                  :src="require(`../assets/icons/tour_program/${tourProgramSecond.bottom.widget.icon}.png`)"
                />
            </div>
          </div>
          <div class="bottom_right">
            <p 
              class="bottom_text-text"
              v-for="(item, index) in tourProgramSecond.bottom.text"
              :key="index"
            >
               {{ item }}
            </p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'TourProgramSecond',
  inject:['tourProgramSecond']
}
</script>

<style lang="scss" scoped>
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -5px;
    
    &_title {
      position: absolute;
      background-color: rgba(71, 50, 48, 0.69);
      color: #fff;
      padding: 25px;
      font-size: 3.5vw;
      margin: auto;
      justify-content: center;
      display: flex;

      @media (max-width: 768px) { 
          width: calc(100% - 50px);
          font-size: 4vw;
          padding: 10px;
      }
    }

    &_images {
      width: 50%;

      img {
        width: 100%;
      }
    }
  }

  .bottom {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    &_right {
      width: 50%;
      background-color: #F1F1F1;
      color: #000000;
      padding: 30px;
      font-size: 1.3vw;
      @media (max-width: 768px) { 
          width: 100%;
          font-size: 18px;
      }
    }

    &_left {
      width: 50%;
      @media (max-width: 768px) { 
          width: 100%;
      }

      &-widget {
        width: 210px;
        background-color: rgba(255, 254, 254, 0.68);
        position: absolute;
        margin-top: -50%;
        border-radius: 5px;
        margin-left: 60px;
        padding: 20px 10px;
        font-size: 18px;
        line-height: 28px;

        @media (max-width: 768px) { 
          margin-top: -100%;
        }

        @media (max-width: 500px) { 
          margin-left: calc(50% - 115px);
        }
           

        &-icon {
            width: 30px !important;
            height: 30px !important;
            position: absolute;
            margin-left: 40px;
            margin-top: 10px;
        }
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
