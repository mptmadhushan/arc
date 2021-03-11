<template>
  <v-container fluid>
    <v-card
      flat
      style="margin-top:20vh;margin-bottom:20vh;margin-left:8vh;margin-right:8vh"
    >
      <v-layout row wrap justify-center >
        <v-flex md2 xs12 sm12 >
          <router-link to="/ChitraLane" tag="div">
            <v-row align="center" justify="center">
              <v-col>
                <div class="sq"></div>
              </v-col>
            </v-row>
          </router-link>
        </v-flex>
        <v-flex md2 xs12 sm12>
          <router-link to="/Arienti" tag="div">
            <v-card flat>
              <div class="tri"></div>
              <!-- <v-img height="20vh" width="20vh" src="../assets/tri.png"></v-img> -->
            </v-card>
          </router-link>
        </v-flex>
        <v-flex md2 xs12 sm12>
          <router-link to="/Bolgoda" tag="div">
            <v-card flat>
              <div class="cir"></div>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex md2 xs12 sm12>
          <router-link to="/DamindraHouse" tag="div">
            <v-card flat>
              <div class="cir"></div>
            </v-card>
          </router-link>
        </v-flex>
        <v-flex md2 xs12 sm12>
          <router-link to="/DinaliHouse" tag="div">
            <v-card flat>
              <div class="sq"></div>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex md2 xs12 sm12>
          <router-link to="/ChamikaHouse" tag="div">
            <v-card flat>
              <div class="tri"></div>
            </v-card>
          </router-link>
        </v-flex> </v-layout
      ><v-layout row wrap justify-center>
        <v-flex md2 xs12 sm12>
          <router-link to="/StoneHouse" tag="div">
            <v-card flat>
              <div class="tri"></div>
            </v-card>
          </router-link>
        </v-flex>
        <v-flex md2 xs12 sm12>
          <router-link to="/maniumpathy" tag="div">
            <v-card flat>
              <div class="sq"></div>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex md2 xs12 sm12>
          <router-link to="/Hanthana" tag="div">
            <v-card flat>
              <div class="cir"></div>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
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
  margin-left: 20%;
  background-size: 100% 100%;
  background-image: url("../assets/cir.png");
}
.cir:hover {
  height: 20vh;
  width: 20vh;
  background-size: 100% 100%;
  background-image: url("../assets/cirHover.png");
}
.sq {
  height: 20vh;
  width: 20vh;
  background-size: 100% 100%;
  margin-left: 20%;
  background-image: url("../assets/sqHover.png");
}
.sq:hover {
  height: 20vh;
  width: 20vh;
  margin-left: 20%;
  background-size: 100% 100%;
  background-image: url("../assets/sq.png");
}
.tri {
  height: 20vh;
  width: 20vh;
  margin-left: 20%;
  background-size: 100% 100%;
  background-image: url("../assets/triHover.png");
}
.tri:hover {
  height: 20vh;
  width: 20vh;
  background-size: 100% 100%;
  background-image: url("../assets/tri.png");
}
.shape_boady {
  padding: 170px 0;
  border: 3px solid green;
  text-align: center;
  height: 100vh;
}
</style>
