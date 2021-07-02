<template>
  <div class="">
    <div v-if="!isMobile()">
      <div class="footer">
        <p class="email left">
          info@cda-ca.com
        </p>
        <p class="contry">
          Sri Lanka
        </p>
        <p class="address">
          27/5 Sucharithodaya Road,<br />
          Pamanuwa, <br />Maharagama, 10230 <br />
          Sri Lanka<br />
          (+94) 113416100
        </p>
      </div>
    </div>
    <div v-else>
      <div class="footer-m">
        <div style="padding-top:20%;width:100%;min-height:100%">
          <div
            style="display:flex;flex-direction:row;justify-content:space-around;align-items:center"
          >
            <p class="text00f2">Facebook</p>
            <p class="text00f2">|</p>
            <p class="text00f2">Instagram</p>
          </div>
          <p class="text00f1 mt-7">Telephone : +94 777 613 553</p>
          <p class="text00f1" style="margin-top:-5%">
            Email : chamika@cda-ca.com
          </p>
          <p class="text00f3 mt-12">
            27/5 Sucharithodaya Road, Pamanuwa, Maharagama, 10230 Sri Lanka.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");

.text00f1 {
  font-family: "Josefin Sans", sans-serif;
  margin-left: 25vw;
  color: rgb(53, 52, 52);
  font-size: 2vh;
}
.text00f2 {
  font-family: "Josefin Sans", sans-serif;
  color: rgb(53, 52, 52);
  font-size: 3vh;
}
.text00f3 {
  font-family: "Josefin Sans", sans-serif;
  color: rgb(53, 52, 52);
  font-size: 3vw;
  text-align: center;
}
.email {
  text-decoration: none;
  background: linear-gradient(currentColor, currentColor) bottom / 0 0.1em
    no-repeat;
  transition: 1s background-size;
}

.email:hover {
  background-size: 26.5% 0.1em;
}

/* Variations */
.email.left {
  background-position: left bottom;
}

.email.right {
  background-position: right bottom;
}
.email {
  font-family: "Josefin Sans", sans-serif;
  margin-left: 14vh;
  padding-top: 20vh;
  color: grey;
  font-size: 4vw;
}
.email-m:hover {
  background-size: 1% 0.1em;
}

/* Variations */
.email-m.left {
  background-position: left bottom;
}

.email-m.right {
  background-position: right bottom;
}
.email-m {
  font-family: "Josefin Sans", sans-serif;
  margin-left: 5vw;
  padding-top: 10vh;
  color: grey;
  font-size: 7vw;
  text-decoration: underline;
}
.address {
  font-family: "Josefin Sans", sans-serif;

  margin-left: 15vh;
  padding-top: 0.5vh;
  color: grey;
  font-size: 1.5vh;
}
.address-m {
  font-family: "Josefin Sans", sans-serif;

  margin-left: 15vw;
  padding-top: 0.5vh;
  color: grey;
  font-size: 1.5vh;
}
.contry {
  font-family: "Josefin Sans", sans-serif;
  margin-left: 15vh;
  padding-top: 10vh;
  color: white;
  font-size: 2vh;
}
.contry-m {
  font-family: "Josefin Sans", sans-serif;
  margin-left: 15vw;
  padding-top: 10vh;
  color: white;
  font-size: 2vh;
}
.text001 {
  font-family: "Josefin Sans", sans-serif;

  color: white;
}
.footer {
  height: 70vh;
  width: 100%;
  background-color: black;
  /* background-position: center; --> */
  /* background-size: cover;
  background-repeat: no-repeat; */
  /* background-image: url("../assets/footer.jpg"); */
}
.footer-m {
  display: flex;
  height: 40vh;
  width: 100%;
  background-color: rgb(172, 172, 172);
  /* background-position: center; */
  /* background-size: cover;
  background-repeat: no-repeat; */
  /* background-image: url("../assets/footer.jpg"); */
}
</style>
