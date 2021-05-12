<template>
  <body>
    <div class="smooth-scroll-wrapper">
      <div class="content">
        <h1>
          :no time to explain
        </h1>
        <div class="img"></div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          excepturi tenetur sapiente dolor deleniti. Fuga labore pariatur esse.
          Repudiandae, voluptates nisi soluta architecto inventore hic. Omnis
          eos expedita sed architecto illum mollitia! Totam aperiam vel
          consequuntur a, ipsum sapiente sit laborum exercitationem distinctio
          labore praesentium veniam accusamus, voluptate ratione suscipit!
        </p>
        <div class="img"></div>

        <h1>:more than pretty screens</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          architecto suscipit ducimus nostrum, aut minus eius impedit vero
          numquam est optio reprehenderit itaque quis eligendi quasi repellendus
          obcaecati neque dolor ipsam nulla praesentium voluptatum. Est
          assumenda ea voluptatibus! Eaque quo ducimus, unde maxime enim
          nesciunt debitis voluptatem fuga obcaecati? Aperiam?
        </p>

        <div class="img"></div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea nihil
          quibusdam repudiandae praesentium quisquam eos, repellendus fugiat
          dolore! Neque.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>
          :no time to explain
        </h1>
        <div class="img"></div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          excepturi tenetur sapiente dolor deleniti. Fuga labore pariatur esse.
          Repudiandae, voluptates nisi soluta architecto inventore hic. Omnis
          eos expedita sed architecto illum mollitia! Totam aperiam vel
          consequuntur a, ipsum sapiente sit laborum exercitationem distinctio
          labore praesentium veniam accusamus, voluptate ratione suscipit!
        </p>
        <div class="img"></div>

        <h1>:more than pretty screens</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          architecto suscipit ducimus nostrum, aut minus eius impedit vero
          numquam est optio reprehenderit itaque quis eligendi quasi repellendus
          obcaecati neque dolor ipsam nulla praesentium voluptatum. Est
          assumenda ea voluptatibus! Eaque quo ducimus, unde maxime enim
          nesciunt debitis voluptatem fuga obcaecati? Aperiam?
        </p>

        <div class="img"></div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea nihil
          quibusdam repudiandae praesentium quisquam eos, repellendus fugiat
          dolore! Neque.
        </p>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  components: {},
  data: () => ({
    list: [
      { id: "1", title: "title 1", content: "content 1" },
      { id: "2", title: "title 2", content: "content 2" },
      { id: "3", title: "title 3", content: "content 3" },
      { id: "4", title: "title 4", content: "content 4" },
      { id: "5", title: "title 5", content: "content 5" },
      { id: "6", title: "title 6", content: "content 6" },
    ],
    detail: {},
    scrollY: 0,
    currentP: 0,
    flag: true,
  }),
  mounted() {
    this.showArrow(this.list[0], 0);
    //You can get the scroll bar directly here
    window.addEventListener("scroll", this.handleScroll, true);
  },

  methods: {
    handleScroll() {
      // debugger
      // this.$refs.contentbox
      // scrollHeight: 1212 scrollLeft: 0 scrollTop: 1 scrollWidth: 402
      var scrollL = this.$refs.contentbox.scrollLeft;
      var scrollT = this.$refs.contentbox.scrollTop;
      var scrollW = this.$refs.contentbox.scrollWidth;
      var scrollH = this.$refs.contentbox.scrollHeight;
      this.scrollY = scrollT;
      this.flag = false;
      console.log(scrollL, scrollW, scrollH);
    },
    showArrow(item, index) {
      var newObj = {};
      newObj.title = item.title;
      newObj.content = item.content;
      this.detail = newObj;

      var current = this.$refs[`list${index}`][0].offsetTop;
      var newT = current - this.scrollY + 73;
      this.flag = true;
      this.$refs.arrow.style.top = newT + "px";
    },
  },
};
</script>

<style scoped>
#app > div {
  float: left;
  width: 400px;
  height: 800px;
  margin-top: 100px;
}
.frame {
  background: yellow;
  position: relative;
}

.contentbox {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

.item {
  width: 400px;
  height: 200px;
  background: green;
  position: relative;
  border: 1px solid blue;
  text-align: center;
}

.arrow {
  position: absolute;
  left: 400px;
  top: 0px;
  background: url("../../assets/backArrow.png") no-repeat;
  width: 54px;
  height: 54px;
  transition: all 0.5s linear;
}

.other {
  background: pink;
  text-align: center;
}
</style>
