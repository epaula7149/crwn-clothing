import React from 'react';
import Homepage from './homepage.component';
import { shallow } from 'enzyme';


it('should render Homepage component', () => {
    expect.assertions(1)
  expect(shallow(<Homepage />)).toMatchSnapshot();
});


describe('silly', () => {
   
it('is a silly test', () => {
    expect.assertions(1) //make sure it can see it
    expect('hello').toBe('hello');
});

it('is a silly test2', () => {
    expect('hello').toEqual('hello');
});


});