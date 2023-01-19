<template>
  <div class="header">
    {{ title }}
  </div>
</template>
<script>
export default {
  name: 'BlockHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
   .header {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 73px;
      font-size: 36px;
      background: #443F3D;
      color: #fff;
      font-family: 'Oswald', sans-serif;
      font-weight: 300;
      padding: 10px 0;

      @media (max-width: 950px) {
        font-size: 4vw;
      }

      @media (max-width: 678px){
        font-size: 7vw;
      }
    }
</style>