import { mount } from "@vue/test-utils";
import StoreView from "../StoreView.vue";
import store from "../../store";

describe("StoreView.vue", () => {
  it("can view productList", () => {
    const wrapper = mount(StoreView, {
      global: {
        plugins: [store],
      },
    });
    const content = wrapper.get('[data-test="store-view"]');
    expect(content.text()).toBe("Store Products List");
  });
});
