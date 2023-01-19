<template>
  <div 
    class="answers"
  >
    <BlockHeader title="Отвечаю на Ваши вопросы"/>
    <div 
      class="answers_block"
    >
      <div class="answers_block-center _anim_items">
          <AnswersItem 
            v-for="(item, index) in answers"
            :key="index"
            :answer="item"
          />
      </div>
    </div>
  </div>
</template>
<script>
/* import components */
import AnswersItem from '@/components/AnswersItem.vue'
import BlockHeader from '@/components/BlockHeader.vue'
/* import images */
import BannerAnswers from '@/assets/images/answers.jpg'

export default {
  name: "Answers",
  inject: ['answers'],
  components: {
    AnswersItem,
    BlockHeader
  },
  data () {
    return {
      BannerAnswers
    }
  }
}
</script>
<style lang="scss" scoped>
  .answers {
    width: 100%;

    &_block {
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover; 
      background-size: cover;
      padding: 100px 0;

      @media (min-width: 850px) {
        background-image: url('~@/assets/images/answers.jpg');
      }

      &-center {
          width: 60%;
          margin: auto;
          opacity: 0;
          transform: translate(0px, 130px);
          transition: all 1s ease 0s;

          &._active {
            opacity: 1;
            transform: translate(0px, 0px);
          }

          @media (max-width: 1024px) {
            width: 80%;
          }
          @media (max-width: 768px) {
            width: calc(100% - 60px);
            padding: 0 30px;
          }

          @media (max-width: 450px) {
            padding: 0;
          }
      }
    }

    .answers_item-question:nth-last-child(1) {
      border-bottom: 0;
    }
  }
</style>