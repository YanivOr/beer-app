import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import SideBar from '.';

describe('SideBar Component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <Router>
        <SideBar />
      </Router>
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
