<template>
  <transition name="fade">
    <div 
      class="bron_modal"
    >
      <div class="bron_modal-form">
        <NoticeForm 
          v-show="sendMessage"
        />

        <b-form
          v-show="!sendMessage"
          @submit.prevent="sendEmail"
        > 

            <div 
              class="bron_modal-top-button"
              @click="closeModal"
            >
              <img :src="CloseIcon" />
            </div>

            <b-form-group
              label="Имя"
              class="input_group"
            >
                <b-form-input 
                  v-model="form.name"
                  placeholder="Имя"
                  required
                />
            </b-form-group>

            <b-form-group
              label="Номер телефона"
              class="input_group"
            >
                <b-form-input 
                  v-model="form.phone" 
                  placeholder="Номер телефона"
                  type="number"
                  required
                />
            </b-form-group>

            <b-form-group
              label="E-mail"
              class="input_group"
            >
                <b-form-input 
                  v-model="form.email" 
                  placeholder="E-mail"
                  type="email"
                  required
                />
            </b-form-group>

            <b-form-group
              label="Детали"
              class="input_group"
              
            >
                <b-textarea
                  v-model="form.details" 
                  placeholder="Детали"
                  required
                />
            </b-form-group>
            <b-button
              class="dark button"
              type="submit"
            >
                Отправить
            </b-button>
        </b-form>
      </div>
    </div>
  </transition>
</template>
<script>

import axios from 'axios'
/* import components */
import NoticeForm from '@/components/NoticeForm.vue'

/* import icons */
import CloseIcon from '@/assets/icons/close.png'

export default {
  name: 'BronFormModal',
  components: {
    NoticeForm
  },
  data () {
    return {
      sendMessage: false,
      form: {
        name: "",
        phone: "",
        email: "",
        details: ""
      },
      CloseIcon
    }
  },
  methods: {
    closeModal () {
      this.$store.dispatch('toggleModal', false)
    },

    clearForm () {
      this.sendMessage = false;
      this.form = {
        name: "",
        phone: "",
        email: "",
        details: ""
      }
    },
    sendEmail () {
      let formData = new FormData ()

      formData.append("your-name", this.form.name)
      formData.append("your-email", this.form.email)
      formData.append("tel-805", this.form.phone,)
      formData.append("your-message", this.form.details)

      axios.post('https://1class.kg/wp-json/contact-form-7/v1/contact-forms/3060/feedback', formData)
           .then(()=> {
              this.sendMessage = true;
              /* закрываем уведомление через секунду*/
              setTimeout(() => {
                this.closeModal()
              }, 1000)
              //Очищаем форму
              setTimeout(() => {
                this.clearForm()
              }, 2000)
           })
    }
  }
}
</script>
<style lang="scss" scoped>
  .bron_modal {
    height: 100vh;
    background-color: rgba(71, 50, 48, 0.69);
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    transition: 0.5s;

    &-form {
      max-width: 600px; 
      margin: auto;
      margin-top: 100px;
      background-color: #fff;
      padding: 50px;
      @media (max-width: 660px) {
        padding: 30px;
        margin: 100px 30px;
      }

      .input_group {
        margin-bottom: 20px;
      }

      .button {    
          padding: 8px 20px;
          border-radius: 15px;
          border: 1px solid #FFFEFE;
          background-color: #FFCC00;
          color: #000;
          font-size: 18px;
          cursor: pointer;
          transition: 0.5s;
          font-family: 'Oswald', sans-serif;
          letter-spacing: 1px;

          &:hover {
            letter-spacing: 1px;
            transition: 0.5s;
          }
  
      }
    }

    &-top-button {
        width: 30px;
        height: 30px;
        margin-left: auto;
        margin-bottom: 20px;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
        }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>