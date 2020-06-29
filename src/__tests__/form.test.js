import React from 'react';

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/form/form.js';



describe('<Form />', () => {
    it('Form Exists', () => {
        let app = shallow(<Form />);
        expect(app.find('form').exists()).toBeTruthy();
    });
    
    it('generate url and method', () => {
           let app = mount(<Form />);
           let input = app.find('#url');
           let get = app.find('#get');
           let form = app.find('form');

           input.simulate('change', {target:{value:'local'}});
           get.simulate('click');

           expect(app.state('url')).toBe('local');
           expect(app.state('method')).toBe('GET');

           form.simulate('submit');
           expect(app.state('url')).toBe('');
           expect(app.state('method')).toBe('');
    });



})