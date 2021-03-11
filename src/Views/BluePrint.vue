<template>
  <v-container fluid>
    <p style="font-size:20vh;color:grey;margin-left:45x">DESIGN</p>
    <div>
      <v-layout row wrap justify-center pa-3>
        <v-flex md6 align-self-start>
          <v-img contain src="../assets/blueprint/_SDS3203b.png"></v-img>
        </v-flex>
        <v-flex md5 align-self-start>
          <p class="text001">
            Enim incididunt id tempor minim incididunt consectetur ut ad laboris
            velit Enim incididunt id tempor minim incididunt consectetur ut ad
            laboris velit
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="height:100vh;margin-top:10vh">
      <p class="text001">
        Cupidatat laborum magna Lorem eiusmod aute nisi qui laborum.
      </p>
      <v-layout row wrap justify-center>
        <v-flex md6 align-self-end>
          <v-img
            contain
            height="50vh"
            src="../assets/blueprint/_SDS3006.png"
          ></v-img>
        </v-flex>
        <v-flex md6 align-self-start>
          <v-img
            contain
            height="80vh"
            src="../assets/blueprint/_SDS2960.png"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="height:100vh;">
      <p class="text001">
        Eu id sint aliquip quis aliquip excepteur velit ut laboris esse
        adipisicing culpa magna culpa.
      </p>
      <v-layout row wrap justify-center>
        <v-flex md12 align-self-end>
          <v-img contain height="80vh" src="../assets/blueprint/1.png"></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div class="image_slider" style="margin: 10px;">
      <horizontal-scroll>
        <img
          height="900px"
          style="padding:5vh"
          src="../assets/blueprint/2.png"
        />
        <img
          height="900px"
          style="padding:5vh"
          src="../assets/blueprint/3.png"
        />
        <img
          height="900px"
          style="padding:5vh"
          src="../assets/blueprint/4.png"
        />
      </horizontal-scroll>
    </div>
    <!-- <infinite-slide-bar
      :barStyle="{ background: '#292929', padding: '10vh 0' }"
    >
      <img height="700px" style="padding:5vh" src="../assets/blueprint/1.png" />
      <img
        height="700px"
        style="padding:5vh"
        src="../assets/blueprint/slide.png"
      />
      <img
        height="700px"
        style="padding:5vh"
        src="../assets/blueprint/_SDS3203b.png"
      />
    </infinite-slide-bar> -->
    <p style="font-size:20vh;color:grey;margin-left:40px;margin-top: 20vh">
      BEAUTY
    </p>
    <div style="height: 100vh;margin-top: 10vh">
      <v-layout row wrap justify-start>
        <v-flex md10 align-self-center>
          <v-img
            style="margin-left:40px"
            height="70vh"
            src="../assets/blueprint/5.png"
          ></v-img>
        </v-flex>
        <v-flex md3 align-self-center>
          <p class="text002">
            Quis ullamco consectetur pariatur dolore etQuis ullamco consectetur
            pariatur dolore et.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="height:100vh;">
      <v-layout row wrap justify-space-around style="margin-top: 10vh">
        <v-flex md6 align-self-end>
          <v-img
            contain
            height="90vh"
            src="../assets/blueprint/_SDS3006.png"
          ></v-img>
        </v-flex>
        <v-flex md6 align-self-center>
          <v-img
            width="100%"
            height="60vh"
            contain
            src="../assets/blueprint/_SDS3199b.png"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="height:100vh;">
      <v-layout row wrap justify-end style="margin-top: 10vh">
        <v-flex md10 align-self-start>
          <v-img center height="80vh" src="../assets/blueprint/6.png"></v-img>
        </v-flex>
      </v-layout>
      <p class="text001">
        Esse voluptate laborum ea sunt ea mollit aute quis.
      </p>
    </div>
    <div style="height:100vh;">
      <v-layout row wrap justify-start style="margin-top: 10vh">
        <v-flex md10 align-self-start>
          <v-img center height="80vh" src="../assets/blueprint/7.png"></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div class="image_slider">
      <horizontal-scroll>
        <img
          height="900px"
          style="padding:5vh"
          src="../assets/blueprint/_SDS3184.png"
        />
        <img
          height="900px"
          style="padding:5vh"
          src="../assets/blueprint/slide.png"
        />
        <img
          height="900px"
          style="padding:5vh"
          src="../assets/blueprint/_SDS3203b.png"
        />
      </horizontal-scroll>
    </div>

    <!-- <infinite-slide-bar
      :barStyle="{ background: '#292929', padding: '10vh 0' }"
    >
      <img height="700px" style="padding:5vh" src="../assets/blueprint/1.png" />
      <img
        height="700px"
        style="padding:5vh"
        src="../assets/blueprint/slide.png"
      />
      <img
        height="700px"
        style="padding:5vh"
        src="../assets/blueprint/_SDS3203b.png"
      />
    </infinite-slide-bar> -->
  </v-container>
</template>

<script>
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";

export default {
  components: {
    HorizontalScroll,
  },
};
</script>

<style scoped>
.text001 {
  text-align: center;
  padding: 5vh;
  font-size: 2vh;
  color: #11111193;
}
.text002 {
  text-align: start;
  padding: 5vh;
  font-size: 2vh;
  color: #11111193;
}
.image_slider {
  display: flex;
  /* overflow-x: auto; */
  height: 100vh;
  background-color: #292929;
}
</style>
