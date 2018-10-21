import * as React from "react";
import App from "Components/App";
import { shallow } from "enzyme";

describe("Test App Component", () => {
    const app = shallow(<App />);

    it("Renders correctly", () => {
        expect(app).toMatchSnapshot();
    });

    it("Reacts to click", () => {
        app.find("div").simulate("click");

        expect(app).toMatchSnapshot();
    });
});