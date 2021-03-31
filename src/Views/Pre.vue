<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="logo"></div>
      <p>CDA</p>
    </div>
  </transition>
</template>
<style scoped></style>
<script>
export default {
  name: "preloader",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    // eslint-disable-next-line no-extra-boolean-cast
    if (Boolean(this.show)) this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 700);
    },
  },
};
</script>
