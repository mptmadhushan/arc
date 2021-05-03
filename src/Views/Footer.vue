<template>
  <div class="footer">
    <p class="email">info@cda-ca.com</p>
    <p class="contry">
      Sri Lanka
    </p>
    <p class="address">
      27/5 Sucharithodaya Road,<br />
      Pamanuwa, <br />Maharagama, <br />
      Lanka
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
  font-family: "Josefin Sans", sans-serif;

  margin-left: 29vh;
  padding-top: 20vh;
  color: grey;
  font-size: 10vh;
}
.address {
  font-family: "Josefin Sans", sans-serif;

  margin-left: 30vh;
  padding-top: 0.5vh;
  color: grey;
  font-size: 1.5vh;
}
.contry {
  font-family: "Josefin Sans", sans-serif;

  margin-left: 30vh;
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
