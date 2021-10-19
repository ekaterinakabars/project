import { shallow } from "enzyme";
import React from "react";
import { Input } from "../components/Input";
import "../setupTests"


describe("Input component", () => {
  const exampleText = "example";
  const firstName = "First name"
  const LabelText = "Label text"

  it("Should render the Input component without crashing", () => {
    shallow(<Input text={exampleText} />);
  });

  it('The InputText component with disabled state', () => {
    const input = shallow(<Input placeholder="First name" value={exampleText} label="Label text" disabled />);
    console.log(input);
    console.log(input.props());
    expect(input.props().value).toBe(exampleText);
    // expect(input.props().autoFocus).toBeFalsy();
    // expect(input.props().error).toBeFalsy();
    // expect(input.props().success).toBeFalsy();
  });
  it('The FirstName component with disabled state', () => {
    const input = shallow(<Input placeholder="First name" value={exampleText} label="Label text" disabled />);
    console.log(input);
    console.log(input.props());
    expect(input.props().placeholder).toBe("First name");

  });
  it('The Label text component with disabled state', () => {
    const input = shallow(<Input placeholder="First name" value={exampleText} label="Label text" disabled />);
    console.log(input);
    console.log(input.props());
    expect(input.props().label).toBe("Label text");

  });

});


