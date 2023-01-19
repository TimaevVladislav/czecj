<template>
  <div class="answers_item">
    <div 
      class="answers_item-question "
      :class="{ 'question-active': active }"
      @click="toggleActive()"
    >
      <div class="answers_item-question-title">
        {{ answer.question }}
      </div>
      <div 
        class="answers_item-question-icon"
        :class="{ 'question-active-icon': active }"
      />
    </div>
    <transition name="fade">
      <div 
        class="answers_item-answer"
        :class="{ 'answer-active': active }"
      >
        {{ answer.answer }}
      </div>
    </transition>
  </div>
</template>
<script>

export default {
  name: 'AnswersItem',
  props: {
    answer: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggleActive () {
      this.active = !this.active
    }
  }
}
</script>
<style lang="scss" scoped>
   .answers_item {
     &-question {
       display: flex;
       padding: 15px 30px;
       background-color: #fff;
       color: #000;
       font-size: 18px;
       border-bottom: 1px solid silver;
       cursor: pointer;

      @media (max-width: 850px) {
         background-color: #443F3D;
         color: #f1f1f1;
      }

       @media (min-width: 1336px) {
         font-size: 1.3vw;
       } 

       @media (max-width: 450px){
         padding: 15px;
       }

       &-title {
         width: calc(100% - 10px);
       } 

       &-icon {
          width: 10px;
          height: 10px;
          transform: rotate(135deg);
          margin-left: auto;
          border-top: 2px solid #443F3D;
          border-right: 2px solid #443F3D;
          
          @media (max-width: 850px) {
            border-top: 2px solid #f1f1f1;
            border-right: 2px solid #f1f1f1;
          }
        
       }
     }

     &-answer {
       background-color: #f1f1f1;
       font-size: 18px;
       height: 0;
       overflow: hidden;
       transition: 0.3s;
       padding: 0 30px;


       @media (min-width: 1336px) {
         font-size: 1.3vw;
       } 
    }

     .question-active { 
          background-color: #443F3D;
          color: #f1f1f1;

          &-icon {
            border-top: 2px solid #f1f1f1;
            border-right: 2px solid #f1f1f1;
          }
      }

      .answer-active {
        height: auto;
        padding: 30px 30px;
        border-bottom: 1px solid silver;
      }
   }
</style>