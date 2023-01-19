<template>
  <div class="footer">
    <div class="footer_columun-left">
        <div 
          class="footer_columun-left-item"
          v-for="(item, index) in footer.left"
          :key="index"
        >
            {{ item }}
        </div>
    </div>
    <div class="footer_columun-center">
      <div class="footer_columun-phone">
          {{ footer.center.phone }}
      </div>
      <a :href="`mailto:${footer.center.email.name}`" class="footer_columun-email">
          <img :src="require(`../assets/icons/footer/${footer.center.email.icon}.png`)" />
          {{ footer.center.email.name }}
      </a>
      <div 
        class="footer_columun-social"
      >
        <a 
         v-for="(item, index) in footer.center.social"
         :key="index"
         :href="item.url"
        >
          <img :src="require(`../assets/icons/footer/${item.icon}.png`)" />
        </a>
      </div>
    </div>
    <div class="footer_columun-right">
      <img :src="require(`../assets/icons/footer/${footer.right.icon}.png`)" />    
      <div 
        class="footer_columun-right-text"
      >
        <p
          v-for="(item, index) in footer.right.locations"
          :key="index"
        > 
          <span>
            {{ item.address }}
          </span>
          <span>
            {{ item.phone }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  inject:['footer']
}
</script>
<style lang="scss" scoped>
  .footer {
    background-color: #382F2C;
    color: #fff;
    display: flex;
    padding: 30px;
    padding-bottom: 80px;

    @media(min-width: 1336px) {
      font-size: 1.3vw;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &_columun {
      
      &-center {
        width: 40%;
        text-align: center;

        @media (max-width: 768px) {
          width: 100%;
          margin-top: 30px;
        }
      }

      &-phone {
        font-size: 24px;
        font-weight: 500;
      }

      &-email {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px;
        color: #fff;
        text-decoration: none;

        img {
          margin-right: 5px;
        }
      }

      &-social {
        display: flex;
        text-align: center;
        justify-content: center;
      }

      &-left {
        width: 30%;
        text-align: left;

        &-item {
          padding-bottom: 20px;
        }

        @media (max-width: 768px) {
          width: 100%;
          text-align: center;
          margin-top: 30px;
        }
      }

      &-right {
        width: 30%;
        display: flex;
        @media (max-width: 768px) {
          width: 100%;
          justify-content: center;
          margin-top: 30px;
        }


        img {
          margin-right: 10px;
        }

        &-text {
          p {
            margin-top: 0;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;

            span {
              margin-top: 4px;
            }
          }
        } 
      }
    }

    img {
      width: 30px;
      height: 30px;
      margin-left: 15px;


      @media(min-width: 1336px) {
        width: 40px;
        height: 40px;
      }
    }
  }
</style>