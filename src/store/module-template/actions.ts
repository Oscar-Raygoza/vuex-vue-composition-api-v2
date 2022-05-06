import type { ActionTree } from "vuex";
import type { ExampleStateInterface } from "./state";
import type { StateInterface } from "@/store";

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  async someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
  async timeOutProp({ commit }, payload) {

    console.log({ emmit: 'action', payload })
    commit("setIsProp", payload);
    setTimeout(() => {
      commit("setIsProp", !payload);
    }, 1000);
  },
};

export default actions;
