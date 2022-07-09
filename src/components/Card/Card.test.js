import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Card from '.';

describe('Card Component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <Router>
        <Card />
      </Router>
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
