import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from './Header';

describe('Header', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  })
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  it('renders without crashing', () => {
    render(<Header />, container);
  });
  it('renders header element', () => {
    act(() => {
      render(<Header />, container)
    });
    expect(container.firstElementChild.tagName).toMatch(/^header$/i);
  });
  it('renders with the correct className', () => {
    act(() => {
      render(<Header />, container)
    });
    expect(container.firstElementChild.classList).toContain('App-header');
  });
});