<template>  
  <transition name="fade">
    <div class="notice_form">
      <img :src="CheckIcon"/>
      <div class="notice_form-title">
        Успешно отправлено
      </div>
    </div>
  </transition>
</template>
<script>
/* import icons */
import CheckIcon from '@/assets/icons/check.png'

export default {
  name: "NoticeForm",
  data () {
    return {
      CheckIcon
    }
  }
}
</script>
<style lang="scss" scoped>
  .notice_form {  
    background-color: #fff;
    display: block;
    flex-direction: column;
    align-items: center;
    padding: 110px 30px;
    text-align: center;
    margin: auto;
    height: 500px;
    transition: 0.5;

    &-title {
      font-size: 30px;
      margin-top: 20px;
    }

    img {
      width: 160px;
      height: 160px;
    }
  }
</style>