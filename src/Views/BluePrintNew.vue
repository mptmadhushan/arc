<template>
  <div>
    <audio
      allow="autoplay;fullscreen"
      id="my_audio"
      src="../assets/music.mp3"
    ></audio>
    <main class="scroll-container">
      <section>
        <div class="d-flex flex-row mb-6">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              D
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              E
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              S
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="700"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              I
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="900"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              G
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1100"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              N
            </p>
          </div>
        </div>
        <div style="height:100vh;">
          <v-layout row wrap justify-center>
            <v-flex md6 align-self-start>
              <v-img
                data-aos="zoom-in-up"
                data-aos-delay="100"
                data-aos-duration="2000"
                style="text-align: left"
                contain
                src="../assets/blueprint/_SDS3203b.png"
              ></v-img>
            </v-flex>
            <v-flex md5 align-self-start>
              <p
                class="text001"
                data-aos="zoom-in-up"
                data-aos-delay="100"
                data-aos-duration="2000"
              >
                Enim incididunt id tempor minim incididunt consectetur ut ad
                laboris velit Enim incididunt id tempor minim incididunt
                consectetur ut ad laboris velit
              </p>
            </v-flex>
          </v-layout>
        </div>
      </section>
      <section>
        <p class="text001">
          Cupidatat laborum magna Lorem eiusmod aute nisi qui laborum.
        </p>
        <v-layout row wrap justify-center mt-2>
          <v-flex md4 align-self-end>
            <v-img
              height="60vh"
              contain
              src="../assets/blueprint/_SDS3006.png"
            />
          </v-flex>
          <v-flex md4>
            <v-img
              height="90vh"
              contain
              src="../assets/blueprint/_SDS2960.png"
            />
          </v-flex>
        </v-layout>
      </section>
      <section>
        <div style="margin-top: 5vh">
          <p class="text001">
            Eu id sint aliquip quis aliquip excepteur velit ut laboris esse
            adipisicing culpa magna culpa.
          </p>
        </div>

        <v-layout row wrap justify-space-between mt-12 pl-12>
          <v-flex md8 align-self-end>
            <v-img height="80vh" contain src="../assets/blueprint/1.png" />
          </v-flex>
          <v-flex md3> </v-flex>
        </v-layout>
      </section>
      <section>
        <div class="contai">
          <div class="sub-lef">
            <div class="cent">
              <div class="ex1 d-flex flex-row">
                <v-img
                  class="jej"
                  height="90vh"
                  contain
                  style="margin-top: 1vh;margin-left: 10vw"
                  src="../assets/blueprint/2.png"
                />
                <v-img
                  height="90vh"
                  contain
                  style="margin-top: 1vh;margin-left: 10vw"
                  src="../assets/blueprint/3.png"
                />
                <v-img
                  height="90vh"
                  contain
                  style="margin-top: 1vh;margin-left: 10vw"
                  src="../assets/blueprint/4.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div class="d-flex flex-row mb-6">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                B
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                E
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                A
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="700"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:red;">
                U
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="900"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                T
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="1100"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                Y
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- <section>
        <BluePrint />
      </section> -->
    </main>
    <div mt-12></div>
  </div>
</template>

<script>
// import BluePrint from "./BluePrint";
export default {
  data: () => ({
    X: "",
    bgColor: "",
  }),
  // components: { BluePrint },
  mounted() {
    console.log("asdasd", this.$refs);
    // document.addEventListener('scroll', this.test)
    document.addEventListener("scroll", this.handleScroll);

    document.addEventListener("scroll", this.handleScroll2);
    document.getElementById("my_audio").muted = false;
    document.getElementById("my_audio").play();
  },

  methods: {
    handleScroll2() {
      console.log("handle2");
      if (window.scrollY <= this.$refs.section1.offsetHeight) {
        this.bgColor = "hey1";
      }
      if (window.scrollY >= this.$refs.section3.offsetHeight) {
        this.bgColor = "hey2";
      }
      if (window.scrollY >= this.$refs.section3.offsetHeight) {
        this.bgColor = "hey3";
      }
    },
  },
};
</script>

<style scoped>
.scroll-container {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.section {
  height: 100vh;
  scroll-snap-align: center;
  align-items: center;
  justify-content: center;
}
div.ex1 {
  padding: 2vh;
  width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 100vh;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.sub-lef {
  float: left;
  height: 100vh;
  width: 100%;
  align-items: center;
  /* margin-left: 10vw; */
  opacity: 1;
  transition: 0.3s ease;
  background-color: #fff;
}
.contai:hover .sub-lef {
  background-color: #3e3d3f;
  opacity: 1;
  /* width: 100%; */
  /* margin-left: 2vw; */
}
.sub-lef:hover .jej {
  /* width: 100%; */
  margin-left: 22vw;
}

.hey1 {
  background-color: red;
}
.hey2 {
  background-color: blue;
}
.hey3 {
  background-color: green;
}
* {
  margin: 0;
  font-family: "Helvetica", sans-serif;
}

/* All the snapping stuff */
.scroll-container {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

section {
  height: 100vh;
  scroll-snap-align: center;
  align-items: center;
  justify-content: center;
}
section {
  height: 100vh;
  scroll-snap-align: center;
  align-items: center;
  justify-content: center;
}
</style>
