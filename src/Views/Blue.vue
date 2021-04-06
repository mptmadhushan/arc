<template>
  <div data-scroll-container>
    <div>
      <div class="d-flex flex-row mb-6">
        <div
          data-aos="zoom-up"
          data-aos-delay="600"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <p style="font-size:10vw;color:grey;">
            D
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="700"
          data-aos-easing="ease-in-out"
        >
          <p style="font-size:10vw;color:grey;">
            E
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="800"
          data-aos-easing="ease-in-out"
        >
          <p style="font-size:10vw;color:grey;">
            S
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="900"
          data-aos-easing="ease-in-out"
        >
          <p style="font-size:10vw;color:grey;">
            I
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1100"
          data-aos-easing="ease-in-out"
        >
          <p style="font-size:10vw;color:grey;">
            G
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1200"
          data-aos-easing="ease-in-out"
        >
          <p style="font-size:10vw;color:grey;">
            N
          </p>
        </div>
      </div>

      <div style="height:94vh; overflow-x: scroll;">
        <v-layout row wrap justify-center style="height:80vh">
          <v-flex md6 xs12 sm12 align-self-start style="height:65vh">
            <div class="b1con" data-aos="zoom-in-left" data-aos-duration="1500">
              <div class="b1"></div>
            </div>
          </v-flex>
          <v-flex md5 align-self-start>
            <p
              class="text001"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1500"
              style="height:96vh;"
            >
              Enim incididunt id tempor minim incididunt consectetur ut ad
              laboris velit Enim incididunt id tempor minim incididunt
              consectetur ut ad laboris velit
            </p>
          </v-flex>
        </v-layout>
      </div>
    </div>

    <div ref="page1" class="1stPage" style="height:100vh;overflow-x: scroll;">
      <p class="text001" data-aos="fade-left" data-aos-duration="3000">
        Cupidatat laborum magna Lorem eiusmod aute nisi qui laborum.
      </p>
      <v-layout row wrap justify-center>
        <v-flex md6 xs12 sm12 align-self-end>
          <div class="align-end" style="text-align:end;height: 100vh;">
            <img
              align-content-end
              data-aos="fade-up"
              data-aos-duration="3000"
              contain
              style="margin-top:20vh;margin-right:1vw"
              height="60%"
              src="../assets/blueprint/_SDS3006.png"
            />
          </div>
          <!-- <v-img  eager
            contain
            height="60vh"
            src="../assets/blueprint/_SDS3006.png"
          ></v-img> -->
        </v-flex>
        <v-flex md6 xs12 sm12 align-self-end>
          <div class="align-end" style="text-align:start;height: 100vh;">
            <img
              data-aos="fade-up"
              data-aos-duration="3000"
              align-content-start
              contain
              style="margin-left:1vw"
              height="80%"
              src="../assets/blueprint/_SDS2960.png"
            />
          </div>
          <!-- <v-img  eager
            contain
            height="80vh"
            src="../assets/blueprint/_SDS2960.png"
          ></v-img> -->
        </v-flex>
      </v-layout>
    </div>
    <section id="sec-3"></section>

    <div v-if="isMobile()" style="margin-top: 10vh;padding:2vh">
      <v-img eager contain src="../assets/blueprint/1.png"></v-img>
      <p class="text002">
        Eu id sint aliquip quis aliquip excepteur velit ut laboris esse
        adipisicing culpa magna culpa.
      </p>
    </div>

    <div
      v-else
      ref="page2"
      style="height:100vh;overflow-x: scroll;"
      v-on:scroll.once="scrollToElement"
      class="beb"
    >
      <p class="text001" data-aos="fade-right" data-aos-duration="3000">
        Eu id sint aliquip quis aliquip excepteur velit ut laboris esse
        adipisicing culpa magna culpa.
      </p>
      <v-layout row wrap justify-space-around>
        <v-flex md8 align-self-start>
          <div class="align-start" style="text-align:start;height: 90.01vh;">
            <div
              class="b2con"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="2500"
              data-aos-easing="ease-in-out"
            >
              <div class="newBox"></div>
            </div>
          </div>
        </v-flex>
        <v-flex md3 align-self-start>
          <p class="text001"></p>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="!isMobile()" style="width:99vw;height:20vh;padding:10px"></div>
    <div
      data-scroll
      data-scroll-id="hey"
      v-if="isMobile()"
      style="height:100vh"
      class="first-slide"
      ref="xxxSlide"
    >
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one_m">
            <div style="height:100vh">
              <v-row no-gutters>
                <v-col>
                  <div style="height:100vh">
                    <div
                      class="b1sli"
                      data-aos="zoom-in-left"
                      data-aos-duration="1500"
                    >
                      <div class="newBox2"></div>
                    </div>
                  </div>
                </v-col>
                <v-col
                  data-aos="zoom-in-left"
                  data-aos-delay="400"
                  data-aos-duration="2500"
                  data-aos-easing="ease-in-out"
                >
                  <div style="height:100vh;">
                    <div
                      class="b2sli"
                      data-aos="zoom-in-left"
                      data-aos-duration="1500"
                    >
                      <div class="b1"></div>
                    </div>
                  </div>
                </v-col>
                <v-col>
                  <div style="height:100vh;">
                    <div
                      class="b3sli"
                      data-aos="zoom-in-left"
                      data-aos-duration="1500"
                    >
                      <div class="b1"></div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else style="height:100vh" class="first-slide" ref="slider1">
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one">
            <div style="height:100vh">
              <v-row no-gutters>
                <v-col>
                  <div style="height:100vh">
                    <div
                      class="b1sli"
                      data-aos="zoom-in-left"
                      data-aos-duration="1500"
                    >
                      <div class="newBox2"></div>
                    </div>
                  </div>
                </v-col>
                <v-col
                  data-aos="zoom-in-left"
                  data-aos-delay="400"
                  data-aos-duration="2500"
                  data-aos-easing="ease-in-out"
                >
                  <div style="height:100vh;">
                    <div
                      class="b2sli"
                      data-aos="zoom-in-left"
                      data-aos-duration="1500"
                    >
                      <div class="b1"></div>
                    </div>
                  </div>
                </v-col>
                <v-col>
                  <div style="height:100vh;">
                    <div
                      class="b3sli"
                      data-aos="zoom-in-left"
                      data-aos-duration="1500"
                    >
                      <div class="b1"></div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isMobile()" style="width:99vw;height:20vh;padding:10px"></div>
    <div class="d-flex flex-row mb-6">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          B
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          E
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          A
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="700"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          U
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="900"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          T
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="1100"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          Y
        </p>
      </div>
    </div>
    <div style="width:99vw;height:15vh;padding:10px"></div>
    <div v-if="!isMobile()">
      <v-layout row wrap justify-space-around>
        <v-flex md8 xs10 sm10 align-self-start>
          <div class="align-start" style="text-align:start;height: 80vh">
            <img
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="1000"
              align-content-end
              contain
              style="margin-right:1vw"
              height="100%"
              src="../assets/blueprint/Space/ludwig-mies-van-der-rohe-maciej-jezyk-barcelona-pavilion.jpg"
            />
          </div>
          <!-- <v-img  eager height="70vh" contain src="../assets/blueprint/1.png"></v-img> -->
        </v-flex>
        <v-flex md3 align-self-start> </v-flex>
      </v-layout>
    </div>
    <div
      v-if="isMobile()"
      class="align-start"
      style="text-align:start;height: 80vh"
    >
      <img
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-delay="1000"
        align-content-end
        contain
        style="margin-right:1vw"
        width="90%"
        src="../assets/blueprint/Space/ludwig-mies-van-der-rohe-maciej-jezyk-barcelona-pavilion.jpg"
      />
      <p class="text003" style="width:40vw;margin-top:5vh;padding:1vw">
        Quis ullamco consectetur pariatur dolore etQuis ullamco consectetur
        pariatur dolore et.z
      </p>
    </div>
    <div v-if="!isMobile()">
      <p class="text003" style="width:20vw;margin-top:5vh">
        Quis ullamco consectetur pariatur dolore etQuis ullamco consectetur
        pariatur dolore et.z
      </p>
    </div>
    <div v-if="!isMobile()" style="width:99vw;height:20vh;padding:10px"></div>

    <div v-if="!isMobile()" style="height:100vh;margin-top:10vh">
      <v-layout row wrap justify-center>
        <v-flex md6 xs12 sm12 align-self-end>
          <div
            class="align-end"
            style="text-align:end;height: 100vh;margin-left:20vw"
          >
            <img
              align-content-end
              contain
              data-aos="fade-up"
              data-aos-duration="3000"
              style="margin-right:1vw"
              height="90%"
              src="../assets/blueprint/_SDS3614.png"
            />
          </div>
        </v-flex>
        <v-flex md6 xs12 sm12 align-self-end>
          <div class="align-center" style="text-align:center;height: 100vh;">
            <img
              align-content-start
              contain
              data-aos="fade-up"
              data-aos-duration="3000"
              style="margin-top:15vh;margin-left:-1vw"
              height="60%"
              src="../assets/blueprint/_SDS3199b.png"
            />
          </div>
        </v-flex>
      </v-layout>
    </div>
    <div v-else style="height:100vh;margin-top:10vh">
      <v-layout row wrap>
        <v-flex md6 xs12 sm12>
          <div style="height:100vh">
            <img
              align-content-end
              contain
              data-aos="fade-up"
              data-aos-duration="3000"
              width="100%"
              src="../assets/blueprint/_SDS3614.png"
            />
          </div>
        </v-flex>
        <v-flex md6 xs12 sm12 align-self-end>
          <div class="align-center" style="text-align:center;height: 100vh;">
            <img
              align-content-start
              contain
              data-aos="fade-up"
              data-aos-duration="3000"
              style="margin-top:15vh;margin-left:-1vw"
              height="60%"
              src="../assets/blueprint/_SDS3199b.png"
            />
          </div>
        </v-flex>
      </v-layout>
    </div>

    <div v-if="isMobile()" style="margin-top: 100vh;padding:2vh">
      <v-img eager contain src="../assets/blueprint/6.png"></v-img>
      <p class="text002">
        Eu id sint aliquip quis aliquip excepteur velit ut laboris esse
        adipisicing culpa magna culpa.
      </p>
    </div>

    <div v-else style="height: 100vh;margin-top: 10vh">
      <div style="width:99vw;height:15vh;padding:10px"></div>

      <v-layout
        row
        wrap
        justify-end
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <v-flex md9 xs11 sm11 align-self-center>
          <v-img
            eager
            style="margin-left:40px"
            contain
            height="85vh"
            src="../assets/blueprint/6.png"
          ></v-img>
        </v-flex>
        <v-flex md5 align-self-start>
          <p class="text002" style="margin-left:5vw">
            Quis ullamco consectetur pariatur dolore etQuis ullamco consectetur
            pariatur dolore et.as
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="isMobile()">
      <div class="align-start" style="text-align:start;height: 100vh;">
        <div style="width:99vw;height:5vh;margin:10vh"></div>

        <img
          align-content-end
          contain
          data-aos="fade-right"
          data-aos-duration="3000"
          width="100%"
          src="../assets/blueprint/7.png"
        />
      </div>
      <!-- <v-img  eager height="70vh" contain src="../assets/blueprint/1.png"></v-img> -->
    </div>
    <div style="width:99vw;height:34vh;padding:10px"></div>

    <div
      style="height:100vh;width:100vw;overflow-x: scroll;"
      v-on:scroll.once="scrollToElement4"
    >
      <p class="text001" data-aos="fade-right" data-aos-duration="3000"></p>
      <v-layout row wrap justify-space-around>
        <v-flex md12 align-self-start>
          <div class="align-start" style="text-align:start;height: 93vh;">
            <v-img
              eager
              contain
              height="100%"
              style="margin-right:1vw"
              data-aos="fade-right"
              data-aos-duration="3000"
              src="../assets/blueprint/Space/museebourdelle.jpg"
            />
          </div>
          <!-- <v-img  eager height="70vh" contain src="../assets/blueprint/1.png"></v-img> -->
        </v-flex>
        <v-flex md3 align-self-start>
          <p class="text001"></p>
        </v-flex>
      </v-layout>
    </div>
    <div
      style="height:100vh;margin-top:10vh"
      class="second-slide"
      ref="slider2"
    >
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one">
            <div style="height:100vh">
              <img
                data-aos="zoom-in-left"
                data-aos-delay="400"
                data-aos-duration="2500"
                data-aos-easing="ease-in-out"
                height="100%"
                style="padding:5vh;margin-right:5vw"
                src="../assets/blueprint/Space/02iht-reyburn02A-articleLarge.jpg"
              />
              <img
                height="100%"
                style="padding:5vh;margin-right:5vw"
                src="../assets/blueprint/slide.png"
              />
              <img
                height="100%"
                style="padding:5vh"
                src="../assets/blueprint/Space/C79Ay3iXwAAddP2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width:99vw;height:30vh;padding:10px"></div>

    <div class="d-flex flex-row mb-6">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          S
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          P
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          A
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="700"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          C
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="1100"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          E
        </p>
      </div>
    </div>
    <div style="width:99vw;height:15vh;padding:10px"></div>

    <div>
      <v-layout row wrap justify-space-around>
        <v-flex md8 align-self-start>
          <div class="align-start" style="text-align:start;height: 85vh">
            <img
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="1000"
              align-content-end
              contain
              style="margin-right:1vw"
              height="87%"
              src="../assets/blueprint/Space/SL_Bawa_Lunuganga_DS_080307_0088.jpg"
            />
          </div>
          <!-- <v-img  eager height="70vh" contain src="../assets/blueprint/1.png"></v-img> -->
        </v-flex>
        <v-flex md3 align-self-start> </v-flex>
      </v-layout>
    </div>
    <div>
      <p class="text003" style="width:20vw">
        Quis ullamco consectetur pariatur dolore etQuis ullamco consectetur
        pariatur dolore et.z
      </p>
    </div>
    <div style="width:99vw;height:30vh;padding:10px"></div>

    <v-layout row justify-center>
      <v-flex md7 style="height:100vh" align-self-end>
        <v-img
          eager
          contain
          height="90%"
          src="../assets/blueprint/Space/1280.jpg"
        ></v-img>
      </v-flex>
      <v-flex md3 align-self-center>
        <v-img
          eager
          contain
          height="40%"
          src="../assets/blueprint/Space/asd950x1338.jpg"
        ></v-img>
      </v-flex>
    </v-layout>
    <div v-if="isMobile()" style="margin-top: 60vh;padding:2vh">
      <v-img eager contain src="../assets/blueprint/imgspace.jpg"></v-img>
      <p class="text002">
        Eu id sint aliquip quis aliquip excepteur velit ut laboris esse
        adipisicing culpa magna culpa.
      </p>
    </div>

    <div v-else style="height: 100vh;margin-top: 30vh">
      <v-layout
        row
        wrap
        justify-end
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <v-flex md12 xs11 sm11 align-self-center pr-12>
          <v-img
            eager
            contain
            height="80vh"
            src="../assets/blueprint/imgspace.jpg"
          ></v-img>
        </v-flex>
        <v-flex md12 align-self-center>
          <div class="text-center">
            <p class="text002">
              Quis ullamco consectetur pariatur dolore etQuis ullamco
              consectetur pariatur dolore et.as
            </p>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:22vh;padding:10px"></div>

    <div
      style="height:80vh;width:100vw;overflow-x: scroll;"
      v-on:scroll.once="scrollToElement5"
    >
      <v-img
        eager
        height="90vh"
        contain
        src="../assets/blueprint/Space/MV5BMmI2ODUxMTQtODVhZi00YzUyLTlmYWItODExOTg2ZDZlOWMxXkEyXkFqcGdeQXVyMTQ4OTMyMjE@._V1_.jpg"
      >
      </v-img>
    </div>
    <div style="width:99vw;height:22vh;padding:10px"></div>

    <div class="sliderStory" ref="sliderStory">
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one">
            <div style="height:100vh">
              <img
                data-aos="zoom-in-left"
                data-aos-delay="400"
                data-aos-duration="2500"
                data-aos-easing="ease-in-out"
                height="100%"
                style="padding:5vh;margin-right:10vw"
                src="../assets/blueprint/_SDS1585-3.jpg"
              />
              <img
                data-aos="zoom-in-left"
                data-aos-delay="400"
                data-aos-duration="2500"
                data-aos-easing="ease-in-out"
                height="100%"
                style="padding:5vh;margin-right:10vw"
                src="../assets/blueprint/Space/image31.jpg"
              />
              <img
                height="100%"
                style="padding:5vh"
                src="../assets/blueprint/Space/qweqw.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";
// import NewBlue from "./NewBlue";

export default {
  components: {
    // HorizontalScroll,
    // NewBlue,
  },
  data: () => ({
    offsetTop: 0,
    bgColor: "",
  }),
  updated: function() {
    this.$nextTick(function() {
      console.log("hello");
      // Code that will run only after the
      // entire view has been re-rendered
    });
  },
  methods: {
    test(event) {
      console.log("test", event);
    },
    myFunction() {
      alert("test");
    },
    scrollToElement() {
      this.$smoothScroll({
        scrollTo: this.$refs.slider1,
        duration: 2000,
        // scrollIntoView({ behavior: "smooth" });

        // offset: -50,
      });
      console.log("scroll to element");
    },
    scrollToElementTest() {
      // this.$smoothScroll({
      //   scrollTo: this.$refs.slider1,
      //   duration: 2000,
      //   // scrollIntoView({ behavior: "smooth" });

      //   // offset: -50,
      // });
      console.log("focus 😀😆🕵️‍♀️");
    },
    scrollToElement4() {
      this.$smoothScroll({
        scrollTo: this.$refs.slider2,
        duration: 2000,
        // offset: -50,
      });
      console.log("scroll to element");
    },
    scrollToElement1() {
      console.log("scroll to element");
      const el = this.$el.getElementsByClassName("1stPage")[0];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        // el.scrollIntoView({ behavior: "smooth" });
        this.$smoothScroll({
          scrollTo: this.$refs.page1,
          duration: 2000,
          // offset: -50,
        });
      }
    },
    scrollToElement3() {
      console.log("scroll to element");
      const el = this.$el.getElementsByClassName("1stPage")[0];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: "smooth" });
        this.$smoothScroll({
          scrollTo: this.$refs.page2,
          duration: 2000,
          // offset: -50,
        });
      }
    },
    scrollToElement5() {
      console.log("scroll to element");
      const el = this.$el.getElementsByClassName("sliderStory")[0];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        // el.scrollIntoView({ behavior: "smooth" });
        this.$smoothScroll({
          scrollTo: this.$refs.sliderStory,
          duration: 2000,
          // offset: -50,
        });
      }
    },
    scrollToElement2() {
      console.log("scroll to element");
      const el = this.$el.getElementsByClassName("second-slide")[0];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleScroll2() {
      document.addEventListener("scroll", (e) =>
        console.log("birch 😉😉😉😉", e)
      );

      document.getElementById("demo");
      // console.log(this.$refs.section3);
      if (window.scrollY.$refs == this.$refs.page1.offsetHeight) {
        // this.bgColor = "hey1";
        console.log("this.$refs.page1");
      }
      if (window.scrollY == this.$refs.page2.offsetHeight) {
        // this.bgColor = "hey1";
        console.log("page2");
      }
    },
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.test);
    console.log(this.$refs);
    this.$nextTick(function() {
      console.log(".tom-chapters"); //empty!!!!
    });

    document.getElementById("my_audio").muted = false;
    document.getElementById("my_audio").play();
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
* {
  scroll-behavior: smooth;
}
.newBox {
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  transition: 4s ease;
  -webkit-animation-fill-mode: backwards;
}
.newBox2 {
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  transition: 4s ease;
  -webkit-animation-fill-mode: backwards;
}
.beb:hover .newBox {
  width: 0%;
  background: rgb(255, 255, 255);
}
@-webkit-keyframes animateThis {
  0% {
    width: 100%;
  }
  100% {
    width: -100%;
  }
}
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/_SDS3203b.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
.b2con {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/1.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
.outer-wrapper:hover .newBox2 {
  width: 0%;
  background: #282729;
}
.b1sli {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/3.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
}
.b2sli {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/2.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
}
.b3sli {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/4.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
}
.b1 {
  background-color: rgb(255, 255, 255);
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 0.8s;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.hey1 {
  background-color: red;
  height: 60vh;
  width: 60vh;
}
.hey3 {
  background-color: black;
  height: 60vh;
  width: 60vh;
}
.hey2 {
  background-color: green;
  height: 60vh;
  width: 60vh;
}
h1,
h2 {
  font-size: 75px;
  text-transform: uppercase;
}
h1 span,
h2 span {
  width: 100%;
  float: left;
  color: #ffffff;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  transform: translateY(-50px);
  opacity: 0;
  animation-name: titleAnimation;
  animation-timing-function: ease;
  animation-duration: 3s;
}

.testss {
  animation-delay: 0.6s;
  -webkit-animation-fill-mode: forwards;
  transform: translateY(-50px);
}
h1 span:first-child {
  animation-delay: 0.7s;
}
h1 span:last-child {
  color: #ffe221;
  animation-delay: 0.5s;
}

h2 {
  top: 0;
  position: absolute;
}
h2 span {
  animation-delay: 4.1s;
  -webkit-animation-fill-mode: forwards;
}
h2 span:first-child {
  animation-delay: 4.2s;
}
h2 span:last-child {
  color: #ffe221;
  animation-delay: 4s;
}

.usechrome {
  font-size: 10px;
  color: #fff;
  font-family: helvetica, arial;
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  left: 0;
}

@keyframes titleAnimation {
  0% {
    transform: translateY(-50px);
    opacity: 0;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
    transform: translateY(0);
    opacity: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
    transform: translateY(0);
    opacity: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
    transform: translateY(50px);
    opacity: 0;
    -webkit-clip-path: polygon(100% 0, 100% 0%, 0 100%, 0 100%);
    clip-path: polygon(100% 0, 100% 0%, 0 100%, 0 100%);
  }
}
.text {
  position: absolute;
  width: 450px;
  left: 50%;
  margin-left: -225px;
  height: 40px;
  top: 50%;
  margin-top: -20px;
}

p {
  display: inline-block;
  vertical-align: top;
  margin: 0;
}

.word {
  position: absolute;
  width: 220px;
  opacity: 0;
}

.letter {
  display: inline-block;
  position: relative;
  float: left;
  transform: translateZ(25px);
  transform-origin: 50% 50% 25px;
}

.letter.out {
  transform: rotateX(90deg);
  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
  transform: rotateX(-90deg);
}

.letter.in {
  transform: rotateX(0deg);
  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.wisteria {
  color: #8e44ad;
}

.belize {
  color: #2980b9;
}

.pomegranate {
  color: #c0392b;
}

.green {
  color: #16a085;
}

.midnight {
  color: #2c3e50;
}

.slide {
  width: 100%;
  height: 100vh;
}
.wrapper {
  display: flex;
  flex-direction: row;
  width: 160vw;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
}
.one {
  background: #ffffff;
  height: 100vh;
  padding-left: 50vw;
  transition: 4s ease;
}
.one_m {
  background: #ffffff;
  height: 100vh;
  transition: 4s ease;
}
.outer-wrapper:hover .one {
  background-color: #282729;
  opacity: 1;
  /* width: 100%; */
  padding-left: 10px;
}
.outer-wrapper {
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  position: absolute;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
.text001 {
  text-align: center;
  padding: 5vh;
  font-size: 2vh;
  color: #11111193;
}
.text003 {
  text-align: left;
  padding-left: 2vw;
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
  overflow-x: auto;
  height: 100vh;
  background-color: #292929;
}
</style>
