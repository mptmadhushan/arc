<template>
  <v-container fluid>
    <div>
      <div v-if="loaded">
        <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000">
          <v-layout
            row
            wrap
            justify-center
            style="margin-top:15%;margin-bottom:5%;"
          >
            <v-flex md1 sm5 xs5 align-self-start>
              <p
                class="about_us"
                style="margin-top:20vh;margin-right:-2vw;text-align:right"
              >
                ABOUT US
              </p></v-flex
            >
            <v-flex md3 sm12 xs12 align-self-end style="margin-top:20vh" pa-1>
              <v-img height="60vh" src="../assets/1.png"></v-img>
            </v-flex>
            <v-flex md3 xs12 pa-1>
              <v-img height="90vh" src="../assets/2.png"></v-img>
            </v-flex>
            <v-flex md5 align-self-end px-3>
              <p class="new">
                A visionary in his field, Chamika De Alwis has been taking the
                architecture world by storm through his distinctive tastes and
                thought-provoking designs. When it comes to his work, the
                dedication and creativity he showcases knows no bounds, and his
                strive for the unconventional is increasingly prominent. This is
                something he wishes to carry on through CDA, an association
                formed with the notion of reaching more people and enriching
                their lives through elegance and luxury. The individuals
                involved in this firm are looking to break boundaries and set
                limitless precedents; it is made up of creative and passionate
                young people who bring in fresh perspectives and new ideas.
                Exceeding client expectations through combining the forces of
                opulence and intricacy, CDA aims to refine the palettes of
                everyone they work with and elevate their taste for the finer
                things in life. At their current momentum, the sky is not the
                limit for CDA, it is a mere stepping stone.
              </p>
            </v-flex>
          </v-layout>
        </div>
        <div v-if="isMobile()" style="margin-top: 10vh">
          <v-img contain src="../assets/12.png"></v-img>
          <p class="new">
            Chamika De Alwis began his architectural career in 2003 with MICD
            Associates while pursuing a Diploma in Architecture at the City
            School of Architecture, Colombo. Following his education and
            becoming a Chartered Architect at the Sri Lanka Institute of
            Architects, he continued working with MICD Associates as a Senior
            Associate and Principal assistant to Architect Channa Daswatte where
            he contributed to many prominent locations throughout the island. In
            addition to this, he is on the board of Trustees of the Geoffrey
            Bawa Trust and the Lunuganga Trust, respectively. In 2014 he
            established his own practice, C atelier design studio, which
            specialized in hotels, boutique properties and residential
            developments in reference to both interior design and architecture.
            After nearly two decades of experience in the industry, in 2020, CDA
            was formed. It continues to excel in it’s creative endeavors and
            deliver intricately inventive and exquisite designs to their
            clientele.
          </p>
        </div>
        <div v-else data-aos="fade-up" data-aos-duration="3000">
          <v-layout
            row
            wrap
            justify-space-around
            pt-md-12
            style="margin-top:20%;height:100vh"
          >
            <v-flex md4 sm12 xs12 align-self-center pa-md-12>
              <v-img height="70vh" src="../assets/12.png"></v-img>
            </v-flex>
            <v-flex md6 align-self-center>
              <p class="pa-2 new">
                Chamika De Alwis began his career in 2003 with MICD Associates
                while pursuing a Diploma in Architecture at the City School of
                Architecture, Colombo. Following his education, he continued
                working with MICD Associates as a Senior Associate and Principal
                assistant. In 2016 he embarked on his own practice as the
                Principal Architect of C Atelier Consultants and CDA Associates.
                Since then, he’s been involved in several curatorial projects in
                Sri Lanka including the exhibition Second Skin in March 2017 and
                Revive; Ethical Use of Material in June 2017 in collaboration
                with the Colombo Fashion Week. In 2019, he curated One Won in
                collaboration with the University of the Visual and Performing
                Arts, Colombo in the aftermath of the Easter Attacks in Sri
                Lanka. He was the recipient of the Conde Nast Johansens award
                for excellence in 2020 – 21 for his work in the architecture
                field and is on the board of Trustees of the Geoffrey Bawa Trust
                and the Lunuganga Trust, respectively. With CDA he continues to
                excel in his creative endeavours and deliver intricately
                inventive and exquisite designs to his clientele.
              </p>
            </v-flex>
          </v-layout>
        </div>
      </div>
      <div v-else>
        <div>
          <v-layout
            row
            wrap
            justify-center
            style="margin-top:15%;margin-bottom:5%;"
          >
            <v-flex md1 sm5 xs5 align-self-start>
              <p
                class="about_us"
                style="margin-top:20vh;margin-right:-2vw;text-align:right"
              >
                ABOUT US
              </p></v-flex
            >
            <v-flex md3 sm12 xs12 align-self-end pa-1>
              <v-img height="60vh" src="../assets/1.png"></v-img>
            </v-flex>
            <v-flex md3 xs12 pa-1>
              <v-img height="90vh" src="../assets/2.png"></v-img>
            </v-flex>
            <v-flex md5 align-self-end px-3>
              <p class="new">
                A visionary in his field, Chamika De Alwis has been taking the
                architecture world by storm through his distinctive tastes and
                thought-provoking designs. When it comes to his work, the
                dedication and creativity he showcases knows no bounds, and his
                strive for the unconventional is increasingly prominent. This is
                something he wishes to carry on through CDA, an association
                formed with the notion of reaching more people and enriching
                their lives through elegance and luxury. The individuals
                involved in this firm are looking to break boundaries and set
                limitless precedents; it is made up of creative and passionate
                young people who bring in fresh perspectives and new ideas.
                Exceeding client expectations through combining the forces of
                opulence and intricacy, CDA aims to refine the palettes of
                everyone they work with and elevate their taste for the finer
                things in life. At their current momentum, the sky is not the
                limit for CDA, it is a mere stepping stone.
              </p>
            </v-flex>
          </v-layout>
        </div>

        <div>
          <v-layout
            row
            wrap
            justify-space-around
            pt-12
            style="margin-top:15%;height:100vh"
          >
            <v-flex md4 sm12 xs12 align-self-center pa-12>
              <v-img height="70vh" src="../assets/12.png"></v-img>
            </v-flex>
            <v-flex md6 align-self-center>
              <p class="pa-2 new">
                Chamika De Alwis began his career in 2003 with MICD Associates
                while pursuing a Diploma in Architecture at the City School of
                Architecture, Colombo. Following his education, he continued
                working with MICD Associates as a Senior Associate and Principal
                assistant. In 2016 he embarked on his own practice as the
                Principal Architect of C Atelier Consultants and CDA Associates.
                Since then, he’s been involved in several curatorial projects in
                Sri Lanka including the exhibition Second Skin in March 2017 and
                Revive; Ethical Use of Material in June 2017 in collaboration
                with the Colombo Fashion Week. In 2019, he curated One Won in
                collaboration with the University of the Visual and Performing
                Arts, Colombo in the aftermath of the Easter Attacks in Sri
                Lanka. He was the recipient of the Conde Nast Johansens award
                for excellence in 2020 – 21 for his work in the architecture
                field and is on the board of Trustees of the Geoffrey Bawa Trust
                and the Lunuganga Trust, respectively. With CDA he continues to
                excel in his creative endeavours and deliver intricately
                inventive and exquisite designs to his clientele.
              </p>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </div>
    <div class="brand">
      <a style="color:black" href="http://cyberchaps.com"><p>@cyberchaps</p></a>
    </div>
  </v-container>
</template>

<script>
// import page2 from "./page2";
export default {
  // components: { page2 },
  data: () => ({
    showWithDelay: false,
    loaded: true,
  }),
  mounted() {
    setTimeout(() => {
      this.showWithDelay = true;
    }, 2000);
    this.hey = localStorage.getItem("isloaded");
    console.log("hello", this.hey);
    if (this.hey == "false") {
      this.loaded = false;
      console.log("false", this.loaded);
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");
.v-application p {
  margin-bottom: 1px !important;
}
.brand {
  opacity: 0.4;
  text-align: right;
  height: 30px;
}

.new {
  font-family: "Josefin Sans", sans-serif;
  margin-top: 10px;
}
.about_us {
  font-family: "Josefin Sans", sans-serif;
  font-size: 2.5vh;
}
.title-page2 {
  font-size: 3vh;
  font-weight: bold;
  font-family: "Josefin Sans", sans-serif;

  color: #8f9092c5;
}
.slide-fade {
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
</style>
