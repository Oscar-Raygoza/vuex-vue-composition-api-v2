import type { Module } from "vuex";
import type { StateInterface } from "@/store";
import type { ExampleStateInterface } from "./state";

import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const exampleModule: Module<ExampleStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default exampleModule;
