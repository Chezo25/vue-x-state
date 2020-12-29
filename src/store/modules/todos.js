import axios from 'axios';

const state = {
    todos: [{
            id: 1,
            title: 'Todos One'
        },
        {
            id: 2,
            title: 'Todos Two'
        },
        {
            id: 3,
            title: 'Todos Three'
        }
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations,
};