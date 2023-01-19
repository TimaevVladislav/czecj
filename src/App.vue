<template>
  <div id="app">
    <router-view/>
    <Footer />
  </div>
</template>
<script>

/* import components */
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>