import React from "react";

describe("Footer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
