import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Header from '.';

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <Router>
        <Header />
      </Router>
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
