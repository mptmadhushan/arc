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
          Pamanuwa, <br />Maharagama, <br />
          Sri Lanka<br />
          (011) 341 6100
        </p>
      </div>
    </div>
    <div v-else>
      <div class="footer-m">
        <p class="email-m left">
          info@cda-ca.com
        </p>
        <p class="contry-m">
          Sri Lanka
        </p>
        <p class="address-m">
          27/5 Sucharithodaya Road,<br />
          Pamanuwa, <br />Maharagama, <br />
          Sri Lanka<br />
          (011) 341 6100
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");
.email {
  text-decoration: none;
  background: linear-gradient(currentColor, currentColor) bottom / 0 0.1em
    no-repeat;
  transition: 1s background-size;
}

.email:hover {
  background-size: 31% 0.1em;
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
  /* background-position: center; */
  /* background-size: cover;
  background-repeat: no-repeat; */
  /* background-image: url("../assets/footer.jpg"); */
}
.footer-m {
  height: 60vh;
  width: 100%;
  background-color: black;
  /* background-position: center; */
  /* background-size: cover;
  background-repeat: no-repeat; */
  /* background-image: url("../assets/footer.jpg"); */
}
</style>
