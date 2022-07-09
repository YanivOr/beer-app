import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Toggle from '.';

describe('Toggle Component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <Router>
        <Toggle />
      </Router>
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
