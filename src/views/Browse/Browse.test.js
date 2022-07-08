import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Browse from '.';

describe('Browse Component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <Router>
        <Browse />
      </Router>
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
