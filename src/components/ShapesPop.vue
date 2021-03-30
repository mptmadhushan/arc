<template>
  <div>
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-card flat color="transparent" text v-bind="attrs" v-on="on">
          <p>⚫</p>
        </v-card>
      </template>

      <v-card ma-12>
        <v-layout row wrap justify-center mr-5>
          <v-flex md4 xs12 sm12>
            <a href="/ChitraLane">
              <v-row align="center" justify="center">
                <v-col>
                  <div class="sq"></div>
                </v-col>
              </v-row>
            </a>
          </v-flex>
          <v-flex md4 xs12 sm12>
            <a href="/Arienti" tag="div">
              <v-card flat>
                <div class="tri"></div>
                <!-- <v-img height="10vh" width="10vh" src="../assets/tri.png"></v-img> -->
              </v-card>
            </a>
          </v-flex>
          <v-flex md4 xs12 sm12>
            <a href="/Bolgoda" tag="div">
              <v-card flat>
                <div class="cir"></div>
              </v-card>
            </a>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center mr-5>
          <v-flex md4 xs12 sm12>
            <a href="/DamindraHouse" tag="div">
              <v-card flat>
                <div class="cir"></div>
              </v-card>
            </a>
          </v-flex>
          <v-flex md4 xs12 sm12>
            <a href="/DinaliHouse" tag="div">
              <v-card flat>
                <div class="sq"></div>
              </v-card>
            </a>
          </v-flex>

          <v-flex md4 xs12 sm12>
            <a href="/ChamikaHouse" tag="div">
              <v-card flat>
                <div class="tri"></div>
              </v-card>
            </a>
          </v-flex> </v-layout
        ><v-layout row wrap justify-center mr-5>
          <v-flex md4 xs12 sm12>
            <a href="/StoneHouse" tag="div">
              <v-card flat>
                <div class="tri"></div>
              </v-card>
            </a>
          </v-flex>
          <v-flex md4 xs12 sm12>
            <a href="/Hanthana" tag="div">
              <v-card flat>
                <div class="cir"></div>
              </v-card>
            </a>
          </v-flex>
          <v-flex md4 xs12 sm12>
            <a href="/maniumpathy" tag="div">
              <v-card flat>
                <div class="sq"></div>
              </v-card>
            </a>
          </v-flex>
        </v-layout>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cir {
  height: 10vh;
  width: 10vh;
  opacity: 0.7;
  margin-left: 20%;
  background-size: 100% 100%;
  background-image: url("../assets/cir.png");
}
.cir:hover {
  height: 10vh;
  width: 10vh;
  transition: 1.5s ease;
  opacity: 1;
  background-size: 100% 100%;
  background-image: url("../assets/cirHover.png");
}
.sq {
  height: 10vh;
  width: 10vh;
  background-size: 100% 100%;
  margin-left: 20%;
  opacity: 0.7;

  background-image: url("../assets/sqHover.png");
}
.sq:hover {
  height: 10vh;
  width: 10vh;
  opacity: 1;
  transition: 1.5s ease;

  margin-left: 20%;
  background-size: 100% 100%;
  background-image: url("../assets/sq.png");
}
.tri {
  height: 10vh;
  width: 10vh;
  opacity: 0.7;
  margin-left: 20%;
  background-size: 100% 100%;
  background-image: url("../assets/triHover.png");
}
.tri:hover {
  height: 10vh;
  width: 10vh;
  opacity: 1;
  transition: 1.5s ease;

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
