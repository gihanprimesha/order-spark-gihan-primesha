<template>
  <div>
    <Application/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Application from "./pages/Application.vue"
export default defineComponent({
  name: "App",
  components: {
    Application
  }
});
</script>

<style scoped>
</style>