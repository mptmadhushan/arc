<template>
  <v-container fluid :class="isMobile() ? 'mobBack' : 'deskBack'">
    <router-link to="/" v-if="!isMobile()">
      <img
        style=" opacity: 0.5;margin-inline:2px;tint-colot:red"
        height="20vh"
        src="../assets/backArrow.png"
      />
    </router-link>

    <div v-if="isMobile()">
      <router-link to="/">
        <img
          style=" opacity: 0.5;margin-inline:2px;tint-colot:red;-webkit-filter: invert(1);
   filter: invert(1);"
          height="20vh"
          src="../assets/backArrow.png"
        />
      </router-link>
      <v-card flat color="transparent">
        <div
          style="display:flex;flex-direction:row; justify-content:center;align-content:center"
        >
          <a href="/DamindraHouse" class="nav-link pa-2">
            <div class="dami"></div>
          </a>
          <a href="/Arienti" tag="div" class=" pa-2">
            <div class="ari"></div>
          </a>
          <a href="/Hanthana" tag="div" class=" pa-2">
            <div class="Hanthana"></div>
          </a>
        </div>
        <div
          style="display:flex;flex-direction:row; justify-content:center;align-content:center"
        >
          <a href="/Bolgoda" tag="div" class=" pa-2">
            <div class="Bolgoda"></div>
          </a>
          <a href="/DinaliHouse" tag="div" class=" pa-2">
            <div class="DinaliHouse"></div>
          </a>
          <a href="/ChamikaHouse" tag="div" class=" pa-2">
            <div class="ChamikaHouse"></div>
          </a>
        </div>
        <div
          style="display:flex;flex-direction:row; justify-content:center;align-content:center"
        >
          <a href="/StoneHouse" tag="div" class=" pa-2">
            <div class="StoneHouse"></div>
          </a>
          <a href="/ChitraLane" tag="div" class=" pa-2">
            <div class="ChitraLane"></div>
          </a>
          <a href="/maniumpathy" tag="div" class=" pa-2">
            <div class="maniumpathy"></div>
          </a>
        </div>
      </v-card>
      <div style="margin-top:30%;width:100%;min-height:100%">
        <div
          style="display:flex;flex-direction:row;justify-content:space-around;align-items:center"
        >
          <p class="text00f2">Facebook</p>
          <p class="text00f2">|</p>
          <p class="text00f2">Instagram</p>
        </div>
        <p class="text00f1">Telephone : +94 777 613 553</p>
        <p class="text00f1" style="margin-top:-5%">
          Email : chamika@cda-ca.com
        </p>
        <p class="text00f3">
          27/5 Sucharithodaya Road, Pamanuwa, Maharagama, 10230 Sri Lanka.
        </p>
      </div>
    </div>
    <div
      v-else
      class="d-flex flex-row align-top justify-center"
      style="margin-left:20vw"
    >
      <div>
        <v-card
          class="d-flex flex-column align-center justify-center"
          flat
          height="90vh"
        >
          <v-card class="d-flex justify-center " flat>
            <v-card
              class="pa-2"
              flat
              @mouseover="hover4 = true"
              @mouseleave="hover4 = false"
            >
              <a href="/DamindraHouse" tag="div">
                <v-card flat>
                  <div class="sq"></div>
                </v-card>
              </a>
            </v-card>
            <v-card
              @mouseover="hover2 = true"
              @mouseleave="hover2 = false"
              class="pa-2"
              flat
            >
              <a href="/Arienti" tag="div">
                <v-card flat>
                  <div class="tri"></div>
                  <!-- <v-img height="20vh" width="20vh" src="../assets/tri.png"></v-img> -->
                </v-card>
              </a>
            </v-card>
            <v-card
              @mouseover="hover8 = true"
              @mouseleave="hover8 = false"
              class="pa-2"
              flat
            >
              <a href="/Hanthana" tag="div">
                <v-card flat>
                  <div class="cir"></div>
                </v-card>
              </a>
            </v-card>
          </v-card>

          <v-card class="d-flex justify-center" flat>
            <v-card
              @mouseover="hover3 = true"
              @mouseleave="hover3 = false"
              class="pa-2"
              flat
            >
              <a href="/Bolgoda" tag="div">
                <v-card flat>
                  <div class="cir"></div>
                </v-card>
              </a>
            </v-card>
            <v-card
              class="pa-2"
              flat
              @mouseover="hover5 = true"
              @mouseleave="hover5 = false"
            >
              <a href="/DinaliHouse" tag="div">
                <v-card flat>
                  <div class="sq"></div>
                </v-card>
              </a>
            </v-card>
            <v-card
              class="pa-2"
              flat
              @mouseover="hover6 = true"
              @mouseleave="hover6 = false"
            >
              <a href="/ChamikaHouse" tag="div">
                <v-card flat>
                  <div class="tri"></div>
                </v-card>
              </a>
            </v-card>
          </v-card>

          <v-card class="d-flex justify-center" flat>
            <v-card
              class="pa-2"
              flat
              @mouseover="hover7 = true"
              @mouseleave="hover7 = false"
            >
              <a href="/StoneHouse" tag="div">
                <v-card flat>
                  <div class="tri"></div>
                </v-card>
              </a>
            </v-card>

            <v-card
              class="pa-2 "
              flat
              @mouseover="hover = true"
              @mouseleave="hover = false"
            >
              <a href="/ChitraLane" tag="div">
                <v-row align="center" justify="center">
                  <v-col>
                    <!-- <p class="project1B">lorema asdasd asd</p> -->
                    <div class="cir"></div>
                  </v-col>
                </v-row>
              </a> </v-card
            ><v-card
              @mouseover="hover9 = true"
              @mouseleave="hover9 = false"
              class="pa-2"
              flat
            >
              <a href="/maniumpathy" tag="div">
                <v-card flat>
                  <div class="sq"></div>
                </v-card>
              </a>
            </v-card>
          </v-card>
        </v-card>
      </div>
      <div style="width:20vw;margin-top:10vw;padding-left:5vw" flat>
        <div v-if="hover">
          <p class="textPro">CDA071</p>
          <p class="textPro">Colombo 05</p>
        </div>
        <div v-if="hover2">
          <p class="textPro">CDA058</p>
          <p class="textPro">Colombo 03</p>
          <!-- <p class="textPro">Arienti</p> -->
        </div>
        <div v-if="hover3">
          <p class="textPro">CDA033</p>
          <p class="textPro">Bolgoda Lake</p>
        </div>
        <div v-if="hover5">
          <p class="textPro">CDA084</p>
          <p class="textPro">Colombo 07</p>
        </div>
        <div v-if="hover6">
          <p class="textPro">CDA005</p>
          <p class="textPro">Maharagama</p>
        </div>
        <div v-if="hover9">
          <p class="textPro">CDA019</p>
          <p class="textPro">Colombo 07</p>
          <!-- <p class="textPro">Maniumpathy</p> -->
        </div>
        <div v-if="hover8">
          <p class="textPro">CDA094</p>
          <p class="textPro">Hanthana</p>
          <!-- <p class="textPro">W15</p> -->
        </div>
        <div v-if="hover7">
          <p class="textPro">CDA003</p>
          <p class="textPro">Kandy</p>
          <!-- <p class="textPro">Stone House</p> -->
        </div>
        <div v-if="hover4">
          <p class="textPro">CDA047</p>
          <p class="textPro">Colombo 06</p>
          <!-- <p class="textPro">Havelock Road</p> -->
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  mounted() {
    localStorage.setItem("isloaded", false);
    document.cookie = "username=John Doe";
    // const hey = localStorage.getItem("1");
  },
  methods: {
    clickedCard() {
      alert("hhh");
      // const hey = val;
      // localStorage.setItem(hey, true);
      this.$store.dispatch("removeTv");
    },
  },
  data: () => ({
    hover: false,
    hover2: false,
    hover3: false,
    hover4: false,
    hover5: false,
    hover6: false,
    hover7: false,
    hover8: false,
    hover9: false,
    myImage:
      "https://s-media-cache-ak0.pinimg.com/originals/bd/5d/84/bd5d845c980508d41b0329dc21d08d2b.jpg",
    otherImage:
      "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg",
  }),
  computed: {
    totalTvCount() {
      return this.$store.state.totalTvCount;
    },
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      console.log("route parameter changed");
      console.log(to.params.id);
      console.log(from.params.id);
    },
  },
};
</script>

<style scoped>
.text00f1 {
  font-family: "Josefin Sans", sans-serif;
  margin-left: 25vw;
  color: white;
  font-size: 2vh;
}
.text00f2 {
  font-family: "Josefin Sans", sans-serif;
  color: white;
  font-size: 3vh;
}
.text00f3 {
  font-family: "Josefin Sans", sans-serif;
  color: white;
  font-size: 3vw;
  text-align: center;
}
.mobBack {
  background-color: rgb(15, 14, 14);
  height: 100vh;
  width: 100vw;
}
.deskBack {
  background-color: blue;
  height: 100vh;
  width: 100vw;
}
.maniumpathy {
  height: 25vw;
  width: 25vw;
  /* background-size: 100% 100%; */
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../assets/Maniumpathy/1.png");
}
.ChitraLane {
  height: 25vw;
  width: 25vw;
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url("../assets/Chitra_Lane/_SDS3756.JPG.jpg");
}
.StoneHouse {
  height: 25vw;
  width: 25vw;
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url("../assets/Stone_House/Stone House_DSC5533.JPG.jpg");
}
.ChamikaHouse {
  height: 25vw;
  width: 25vw;
  background-size: 100% 100%;
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../assets/chamika_house/_SDS3079-HDR_1.jpg");
}
.DinaliHouse {
  height: 25vw;
  width: 25vw;
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url("../assets/Dinali_House/_SDS2871.JPG.jpg");
}
.Bolgoda {
  height: 25vw;
  width: 25vw;
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url("../assets/Bolgoda/_SDS1498.JPG.jpeg");
}
.ari {
  height: 25vw;
  width: 25vw;
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url("../assets/Arienti/_SDS7737.jpeg");
}
.dami {
  height: 25vw;
  width: 25vw;
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url("../assets/Damindra_House/_SDS7569.JPG.jpg");
}
.Hanthana {
  height: 25vw;
  width: 25vw;
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url("../assets/hanthana/1st.jpeg");
}
.ari {
  height: 25vw;
  width: 25vw;
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url("../assets/Arienti/_SDS7737.jpeg");
}
.dami {
  height: 25vw;
  width: 25vw;
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url("../assets/Damindra_House/_SDS7569.JPG.jpg");
}
.Hanthana {
  height: 25vw;
  filter: grayscale(100%);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  width: 25vw;
  background-size: 100% 100%;
  background-image: url("../assets/hanthana/1st.jpeg");
}
.textProHead {
  font-family: "Josefin Sans", sans-serif;
  text-align: left;
  font-size: 2.5vh;
  font-weight: bold;
  color: #11111193;
}
.textPro {
  margin-top: -0.9vh;
  font-family: "Josefin Sans", sans-serif;
  text-align: left;
  font-size: 1.5vh;
  color: #11111193;
}
.project1B {
  background-color: red;
}
.project1B:hover .project1 {
  opacity: 0;
  background-color: blue;
}
.project1B:hover {
  background-color: blue;
}
.project1 {
  color: aqua;
}
.cir {
  height: 20vh;
  width: 20vh;
  opacity: 0.4;
  padding: -10vh;
  background-size: 100% 100%;
  background-image: url("../assets/cir.png");
}
.cir.ac {
  height: 20vh;
  width: 20vh;
  opacity: 0.4;
  padding: -10vh;
  background-size: 100% 100%;
  background-image: url("../assets/cir.png");
}
.cir:hover {
  height: 20vh;
  width: 20vh;
  transition: 2s ease;
  opacity: 1;
  background-size: 100% 100%;
  background-image: url("../assets/cirHover.png");
}
.sq {
  height: 20vh;
  width: 20vh;
  background-size: 100% 100%;
  opacity: 0.4;
  background-image: url("../assets/sqHover.png");
}
.sq.ac {
  height: 20vh;
  width: 20vh;
  background-size: 100% 100%;
  opacity: 1;
  background-image: url("../assets/sqHover.png");
}
.sq:hover {
  height: 20vh;
  width: 20vh;
  opacity: 1;
  transition: 1s ease;
  background-size: 100% 100%;
  background-image: url("../assets/sq.png");
}
.tri {
  height: 20vh;
  width: 20vh;
  opacity: 0.4;
  background-size: 100% 100%;
  background-image: url("../assets/triHover.png");
}
.tri.ac {
  height: 20vh;
  width: 20vh;
  opacity: 1;
  background-size: 100% 100%;
  background-image: url("../assets/triHover.png");
}
.tri:hover {
  height: 20vh;
  width: 20vh;
  opacity: 1;
  transition: 1s ease;
  background-size: 100% 100%;
  background-image: url("../assets/tri.png");
}
</style>
