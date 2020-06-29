import {configure} from 'enzyme';
import Adabter from 'enzyme-adapter-react-16';

configure({adapter: new Adabter()});

// the name of the file must be setupTests