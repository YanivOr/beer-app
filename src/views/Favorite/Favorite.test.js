import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Favorite from '.';

describe('Favorite Component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <Router>
        <Favorite />
      </Router>
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
