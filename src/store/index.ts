import Vue from 'vue'; // only vue 2
import Vuex from "vuex";

//import { createStore } from "vuex"; vuex > 4.0 &&

// My custom modules
import exampleModule from "./module-template";
import type { ExampleStateInterface } from "./module-template/state";

Vue.use(Vuex); //only vue 2

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: ExampleStateInterface;
}

export default new Vuex.Store<StateInterface>({
  modules: {
    example: exampleModule,
  },
});
