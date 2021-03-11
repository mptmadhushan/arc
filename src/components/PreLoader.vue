<template>
  <transition name="fade">
    <div class="page-loader" v-if="isloaded === true">
      <div class="bg">
        <div id="sub-title">
          <div class="container_l">
            <div class="sub-right">
              <div class="center_r">
                <p>
                  <v-card flat color="transparent" class="d-flex flex-row">
                    <v-img
                      contain
                      height="30%"
                      width="20vw"
                      src="../assets/main.png"
                    ></v-img>
                  </v-card>
                </p>
              </div>
            </div>
          </div>
          <div class="clear-both"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// export default {
//   data: () => {
//     return {
//       isloaded: false,
//     };
//   },
//   mounted() {
//     // document.onreadystatechange = () => {
//     // if (document.readyState == "complete") {
//     // setTimeout((this.isloaded = true), 5000);
//     setTimeout(console.log(this.isloaded), 13000);
//     setTimeout((this.isloaded = true), 13000);
//     setTimeout(console.log(this.isloaded), 13000);

//     // }
//     // };
//     // };
//   },
//   methods(){
//     hello(){

//     }
//   }
export default {
  data: () => ({
    isloaded: true,
  }),
  created() {
    // window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    // window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      console.log("scrolled", event);
      this.isloaded = false;
    },
    sendMessage() {
      setTimeout(console.log("hello"), 5000);
      this.newMe();
    },
    newMe() {
      // setTimeout(console.log("hello"), 5000);
      console.log("done");
      // this.isloaded = false;
      console.log(this.isloaded);
      this.$router.push({
        path: "/home",
      });
    },
  },

  mounted() {
    // this.fadeInElements = Array.from(
    //   document.getElementsByClassName("fade-in")
    // );
    // window.addEventListener("scroll", this.handleScroll);

    setTimeout(this.sendMessage, 3000);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
.sub-right {
  float: right;
  height: 100vh;
  width: 100vw;
  opacity: 1;
  transition: 0.9s linear;
  background-image: linear-gradient(to left, white, black);
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
}

.center {
  line-height: 100vh;
  height: 100vh;
  text-align: left;
}

.center p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  color: white;
}
.center_r {
  line-height: 100vh;
  height: 100vh;
  text-align: center;
}

.center_r p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  color: rgb(241, 233, 233);
  font-size: 10vh;
}

/* .container_l:hover .sub-right {
  opacity: 0;
} */
.bg {
  width: 100vw;
  background-size: 100% 100%;
  height: 100vh;
  /* background-image: url("../assets/new_main.jpg"); */
}
/* asdasd */
.error-message {
  animation: fadeOut 2s forwards;
  animation-delay: 5s;
  background: red;
  color: white;
  padding: 10px;
  text-align: center;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
