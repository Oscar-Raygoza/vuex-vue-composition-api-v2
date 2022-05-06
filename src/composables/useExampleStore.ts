import type { Store } from "vuex";
import type { StateInterface } from "@/store/index";

import { computed, onMounted, inject } from "@vue/composition-api";

export const useExampleStore = () => {
  const store = inject<StateInterface>(
    "vuex-store"
  ) as any as Store<StateInterface>;

  onMounted(() => {
    console.log(store);
  });

  return {
    // State
    getProp: computed(() => store.state.example.prop),

    // Getters
    isPropReady: computed<boolean>(
      () => store.getters['example/isPropReady']
    ),

    // Mutations
    setPropMutation: (prop: boolean ) => store.commit("example/setIsProp", prop),

    // Actions (Async functions)
    actionTimeOutProp: (prop: boolean) => {
      store.dispatch("example/timeOutProp", prop);
    },
  };
};
