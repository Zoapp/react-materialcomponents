import React from "react";
import renderer from "react-test-renderer";
import { CardActions, Button } from "libs/";

describe("cards/CardActions", () => {
  it("can render correctly", () => {
    const tree = renderer
      .create(
        <CardActions>
          <Button>Click me!</Button>
        </CardActions>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be verticaly aligned", () => {
    const tree = renderer.create(<CardActions vertical />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
