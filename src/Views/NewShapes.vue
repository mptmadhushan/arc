<template>
  <v-container fluid style="height:100vh">
    <router-link to="/">
      <img
        style=" opacity: 0.5;margin-inline:20px;margin-top:1vh"
        height="20vh"
        src="../assets/backArrow.png"
      />
    </router-link>

    <div v-if="isMobile()">
      <v-card flat style="margin-top: 5vh">
        <v-layout row wrap justify-center>
          <v-flex md12 xs6 sm6>
            <a href="/ChitraLane" class="nav-link">
              <v-row align="center" justify="center">
                <v-col>
                  <div class="sq"></div>
                </v-col>
              </v-row>
            </a>
          </v-flex>
          <v-flex md2 xs6 sm6>
            <a href="/Arienti" tag="div">
              <v-card flat>
                <div class="tri"></div>
              </v-card>
            </a>
          </v-flex>
          <v-flex md2 xs6 sm6>
            <a href="/Bolgoda" tag="div">
              <v-card flat>
                <div class="cir"></div>
              </v-card>
            </a>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex md2 xs6 sm12>
            <a href="/DamindraHouse" tag="div">
              <v-card flat>
                <div class="cir"></div>
              </v-card>
            </a>
          </v-flex>
          <v-flex md2 xs6 sm12>
            <a href="/DinaliHouse" tag="div">
              <v-card flat>
                <div class="sq"></div>
              </v-card>
            </a>
          </v-flex>

          <v-flex md2 xs6 sm12>
            <a href="/ChamikaHouse" tag="div">
              <v-card flat>
                <div class="tri"></div>
              </v-card>
            </a>
          </v-flex> </v-layout
        ><v-layout row wrap justify-center>
          <v-flex md2 xs6 sm12>
            <a href="/StoneHouse" tag="div">
              <v-card flat>
                <div class="tri"></div>
              </v-card>
            </a>
          </v-flex>
          <v-flex md2 xs6 sm12>
            <a href="/Hanthana" tag="div">
              <v-card flat>
                <div class="cir"></div>
              </v-card>
            </a>
          </v-flex>
          <v-flex md2 xs6 sm12>
            <a href="/maniumpathy" tag="div">
              <v-card flat>
                <div class="sq"></div>
              </v-card>
            </a>
          </v-flex>
        </v-layout>
      </v-card>
    </div>

    <div v-else>
      <v-card
        class="d-flex flex-column align-center justify-center  mb-6"
        flat
        height="90vh"
      >
        <v-card class="d-flex justify-center" flat>
          <v-card class="pa-2" flat>
            <a href="/ChitraLane" class="nav-link">
              <!-- <a to="/ChitraLane" :key="$route.fullPath" tag="div"> -->
              <v-row align="center" justify="center">
                <v-col>
                  <div class="sq"></div>
                </v-col>
              </v-row>
            </a> </v-card
          ><v-card class="pa-2" flat>
            <a href="/Arienti" tag="div">
              <v-card flat>
                <div class="tri"></div>
                <!-- <v-img height="20vh" width="20vh" src="../assets/tri.png"></v-img> -->
              </v-card>
            </a> </v-card
          ><v-card class="pa-2" flat>
            <a href="/Bolgoda" tag="div">
              <v-card flat>
                <div class="cir"></div>
              </v-card>
            </a>
          </v-card>
        </v-card>

        <v-card class="d-flex justify-center" flat>
          <v-card class="pa-2" flat>
            <a href="/DamindraHouse" tag="div">
              <v-card flat>
                <div class="cir"></div>
              </v-card>
            </a> </v-card
          ><v-card class="pa-2" flat>
            <a href="/DinaliHouse" tag="div">
              <v-card flat>
                <div class="sq"></div>
              </v-card>
            </a> </v-card
          ><v-card class="pa-2" flat>
            <a href="/ChamikaHouse" tag="div">
              <v-card flat>
                <div class="tri"></div>
              </v-card>
            </a>
          </v-card>
        </v-card>

        <v-card class="d-flex justify-center" flat>
          <v-card class="pa-2" flat>
            <a href="/StoneHouse" tag="div">
              <v-card flat>
                <div class="tri"></div>
              </v-card>
            </a> </v-card
          ><v-card class="pa-2" flat>
            <a href="/Hanthana" tag="div">
              <v-card flat>
                <div class="cir"></div>
              </v-card>
            </a> </v-card
          ><v-card class="pa-2" flat>
            <a href="/maniumpathy" tag="div">
              <v-card flat>
                <div class="sq"></div>
              </v-card>
            </a>
          </v-card>
        </v-card>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  mounted() {
    localStorage.setItem("isloaded", false);
  },
  data: () => ({
    myImage:
      "https://s-media-cache-ak0.pinimg.com/originals/bd/5d/84/bd5d845c980508d41b0329dc21d08d2b.jpg",
    otherImage:
      "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg",
  }),
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
.cir {
  height: 20vh;
  width: 20vh;
  opacity: 0.4;
  background-size: 100% 100%;
  background-image: url("../assets/cir.png");
}
.cir:hover {
  height: 20vh;
  width: 20vh;
  transition: 1s ease;
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
.tri:hover {
  height: 20vh;
  width: 20vh;
  opacity: 1;
  transition: 1s ease;
  background-size: 100% 100%;
  background-image: url("../assets/tri.png");
}
</style>
