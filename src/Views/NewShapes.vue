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
          <v-flex md12 xs6 sm6 class="project1H">
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
              class="pa-2 "
              flat
              @mouseover="hover = true"
              @mouseleave="hover = false"
            >
              <a href="/ChitraLane" tag="div">
                <v-row align="center" justify="center">
                  <v-col>
                    <!-- <p class="project1B">lorema asdasd asd</p> -->
                    <div class="sq"></div>
                  </v-col>
                </v-row>
              </a> </v-card
            ><v-card
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
              </a> </v-card
            ><v-card
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
          </v-card>

          <v-card class="d-flex justify-center" flat>
            <v-card
              class="pa-2"
              flat
              @mouseover="hover4 = true"
              @mouseleave="hover4 = false"
            >
              <a href="/DamindraHouse" tag="div">
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
              </a> </v-card
            ><v-card
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
              </a> </v-card
            ><v-card
              @mouseover="hover8 = true"
              @mouseleave="hover8 = false"
              class="pa-2"
              flat
            >
              <a href="/Hanthana" tag="div">
                <v-card flat>
                  <div class="cir"></div>
                </v-card>
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
          <p class="textPro">Arienti</p>
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
          <p class="textPro">Maniumpathy</p>
        </div>
        <div v-if="hover8">
          <p class="textPro">CDA094</p>
          <p class="textPro">Hanthana</p>
          <p class="textPro">W15</p>
        </div>
        <div v-if="hover7">
          <p class="textPro">CDA003</p>
          <p class="textPro">Kandy</p>
          <p class="textPro">Stone House</p>
        </div>
        <div v-if="hover4">
          <p class="textPro">CDA047</p>
          <p class="textPro">Colombo 06</p>
          <p class="textPro">Havelock Road</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  mounted() {
    localStorage.setItem("isloaded", false);
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
  background-size: 100% 100%;
  background-image: url("../assets/cir.png");
}
.cir:hover {
  height: 20vh;
  width: 20vh;
  transition: 1s ease;
  opacity: 0.3;
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
