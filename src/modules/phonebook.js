import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { dummyList } from '../static/DummyList';

const SEARCH = 'phonebook/SEARCH';
const SELECT = 'phonebook/SELECT';
const INSERT = 'phonebook/INSERT';
const REMOVE = 'phonebook/DELETE';

export const search = createAction(SEARCH);
export const select = createAction(SELECT);
export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);

const initialState = Map({
    list: dummyList,
    filteredList: dummyList,
    selected: ''
});

export default handleActions({
    [SEARCH]: (state, action) => {
        const list = state.get('list');
        return state.set('filteredList', list.filter(phonebook => phonebook.get('name').search(action.payload) !== -1));
    },
    [SELECT]: (state, action) => {
        return state.set('selected', action.payload);
    },
    [INSERT]: (state, action) => {
        const list = state.get('list');
        return state.set('list', list.push(action.payload));
    },
    [REMOVE]: (state, action) => {
        const list = state.get('list');
        const index = list.findIndex(phonebook => phonebook.get('id') === action.payload);
        return state.set('list', list.delete(index));
    }
}, initialState);