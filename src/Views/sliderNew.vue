<template>
  <div
    class="relative flex flex-col w-full transition duration-500 ease-in-out"
    :class="this.bgColor"
  >
    <div ref="section2" class="relative h-screen">
      <div class="flex flex-col justify-center w-full h-full text-center">
        <h1 class="text-5xl leading-normal">
          We're Heesh.
        </h1>
        <br />
        <h1 class="text-5xl leading-normal font-semibold">
          We help move your <br />
          business forward with <br />
          design, technology & creativity.
        </h1>
      </div>
    </div>
    <div
      ref="section3"
      class="relative block m-auto w-full"
      style="height:300vw"
    >
      <div
        class="sticky top-0 flex justify-between items-center pt-8 pb-8 h-screen"
        style="width:300vw;will-change:transform;transform-style:preserve-3d"
        :style="{ transform: 'translate3d(' + this.X + 'px ,0px ,0px)' }"
      >
        <div
          id="img1"
          class="bg-contain bg-center bg-no-repeat w-1/2 h-full"
        ></div>
        <div
          id="img2"
          class="bg-contain bg-center bg-no-repeat w-1/2 h-full"
        ></div>
        <div
          id="img3"
          class="bg-contain bg-center bg-no-repeat w-1/2 h-full"
        ></div>
        <div
          id="img4"
          class="bg-contain bg-center bg-no-repeat w-1/2 h-full"
        ></div>
        <div
          id="img5"
          class="bg-contain bg-center bg-no-repeat w-1/2 h-full"
        ></div>
        <div
          id="img6"
          class="bg-contain bg-center bg-no-repeat w-1/2 h-full"
        ></div>
        <div
          id="img7"
          class="bg-contain bg-center bg-no-repeat w-1/2 h-full"
        ></div>
        <div
          id="img8"
          class="bg-contain bg-center bg-no-repeat w-1/3 h-full"
        ></div>
      </div>
    </div>
    <div class="relative h-screen">
      <div class="flex flex-col justify-center w-full h-full text-center">
        <h1 class="text-5xl leading-normal font-semibold">
          We want to build <br />
          excitement around your <br />
          vision and accelerate the <br />
          growth of your business.
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    X: "",
    bgColor: "",
  }),
  mounted() {
    console.log("asdasd", this.X);
    document.addEventListener("scroll", this.handleScroll);
    document.addEventListener("scroll", this.handleScroll2);
  },
  methods: {
    handleScroll() {
      console.log(this.$refs.section1.offsetHeight);
      if (window.scrollY >= this.$refs.section1.offsetHeight) {
        this.X = -(window.scrollY - this.$refs.section1.offsetHeight);
      }
      if (this.X <= -(this.$refs.section2.offsetHeight - window.innerWidth)) {
        this.X = -(this.$refs.section2.offsetHeight - window.innerWidth);
      }
      if (window.scrollY < this.$refs.section1.offsetHeight) {
        console.log("ææææææææææææ", this.$refs.section1.offsetHeight);
        this.X = 0;
      }
    },
    handleScroll2() {
      //   console.log('handle2')

      if (window.scrollY <= this.$refs.section1.offsetHeight) {
        this.bgColor = "hey1";
      }
      if (window.scrollY >= this.$refs.section1.offsetHeight) {
        this.bgColor = "hey2";
      }
      if (window.scrollY >= this.$refs.section2.offsetHeight) {
        this.bgColor = "hey3";
      }
    },
  },
};
</script>
<style scoped>
.hey1 {
  background-color: red;
}
.hey2 {
  background-color: blue;
}
.hey3 {
  background-color: green;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#img1 {
  background-image: url("../assets/Chitra_Lane/_SDS3756.JPG.jpg");
}
#img2 {
  background-image: url("../assets/Chitra_Lane/_SDS3756.JPG.jpg");
}
#img3 {
  background-image: url("../assets/Chitra_Lane/_SDS3747-HDR.JPG.jpg");
}
#img4 {
  background-image: url("../assets/Chitra_Lane/_SDS3752.JPG.jpg");
}
#img5 {
  background-image: url("../assets/Chitra_Lane/_SDS3747-HDR.JPG.jpg");
}
#img6 {
  background-image: url("../assets/Chitra_Lane/_SDS3752.JPG.jpg");
}
#img7 {
  background-image: url("../assets/Chitra_Lane/_SDS3747-HDR.JPG.jpg");
}
#img8 {
  background-image: url("../assets/Chitra_Lane/_SDS3752.JPG.jpg");
}
* {
  overflow-x: hidden;
}
</style>
