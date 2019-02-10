import input from './input';
import phonebook from './phonebook';
import { combineReducers } from 'redux';

export default combineReducers({
    input,
    phonebook
})