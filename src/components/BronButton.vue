<template>
   <div class="button">
      <button
        @click="showModal"
        class="button-request"
      >
        Забронировать место в группе
      </button>
   </div>
</template>
<script>
export default {
  name:'BronButton',
  methods: {
    showModal() {
      this.$store.dispatch('toggleModal', true)
    }
  }
}
</script>
<style lang="scss" scoped>
  .button {
    display: flex;
    justify-content: center;

    &-request {
      padding: 10px 30px;
      border-radius: 15px;
      border: 1px solid #FFFEFE;
      background-color: #FFCC00;
      color: #000;
      font-size: 1.6vw;
      cursor: pointer;
      transition: 0.5s;
      font-family: 'Oswald', sans-serif;

      @media (max-width: 1024px) { font-size: 2.3vw; }
      @media (max-width: 768px) { font-size: 2.9vw; }
      @media (max-width: 450px) { font-size: 3.5vw; }

      &:hover {
        letter-spacing: 1px;
        transition: 0.5s;
      }
    }
  }
</style>