/* eslint-disable no-undef */
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTvCount: true, // The TV inventory
  },

  getters: {
    // Here we will create a getter
  },

  mutations: {
    removeTv() {
      console.log("hello");
      // For now we allow Jenny just to remove
      // one TV at a time.
      state.totalTvCount === false;
    },
    // Here we will create Jenny
  },

  actions: {
    removeTv(context) {
      // For now we only remove a tv,
      // but this action can contain logic
      // so we could expand it in the future.
      if (context.state.totalTvCount >= amount) {
        // If we enough TVs, ask Jenny to remove it
        context.commit("removeTv", amount);
      }
    },
  },
});
