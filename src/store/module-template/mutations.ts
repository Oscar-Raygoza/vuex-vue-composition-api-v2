import type { MutationTree } from "vuex";
import type { ExampleStateInterface } from "./state";

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
  setIsProp(state: ExampleStateInterface, isPropValue: boolean) {
    console.log({ emmit: 'mutation', state, isPropValue });
    state.prop = isPropValue;
  },
};

export default mutation;
