<template>
  <div class="footer">
    <p class="email left">info@cda-ca.com</p>
    <p class="contry">
      Sri Lanka
    </p>
    <p class="address">
      27/5 Sucharithodaya Road,<br />
      Pamanuwa, <br />Maharagama, <br />
      Sri Lanka<br />
      (011) 341 6100
    </p>

    <!-- <v-layout row wrap>
      <v-flex md6>
        <p class="text001">lorem ipsum dolor</p>
        <p class="text001">lorem ipsum dolor</p>
        <p class="text001">lorem ipsum dolor</p>
        <p class="text001">lorem ipsum dolor</p>
      </v-flex>
      <v-flex md6>
        <p class="text001">lorem ipsum dolor</p>
        <p class="text001">lorem ipsum dolor</p>
        <p class="text001">lorem ipsum dolor</p>
        <p class="text001">lorem ipsum dolor</p>
      </v-flex>
    </v-layout> -->
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
  background-size: 51% 0.1em;
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
  font-size: 10vh;
}
.address {
  font-family: "Josefin Sans", sans-serif;

  margin-left: 15vh;
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
.text001 {
  font-family: "Josefin Sans", sans-serif;

  color: white;
}
.footer {
  height: 70vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../assets/footer.jpg");
}
</style>
