import { shallow } from "enzyme";
import React from "react";
import { Input } from "../components/Input";
import "../setupTests"


describe("Input component", () => {
  const exampleText = "example";
  const firstName = "First name"
  const LabelText = "Label text"



  it('The InputText component with disabled state', () => {
    const input = shallow(<Input placeholder="First name" value={exampleText} label="Label text" disabled />);
    console.log(input);
    console.log(input.props());
    expect(input.props().value).toBe(exampleText);

  });
  it('The FirstName component with disabled state', () => {
    const input = shallow(<Input placeholder="First name" value={firstName} label="Label text" disabled />);

    expect(input.props().placeholder).toBe("First name");

  });
  it('The Label text component with disabled state', () => {
    const input = shallow(<Input placeholder="First name" value={LabelText} label="Label text" disabled />);
    expect(input.props().label).toBe("Label text");

  });

});


