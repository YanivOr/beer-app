import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Grid from '.';

describe('Grid Component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <Router>
        <Grid />
      </Router>
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
