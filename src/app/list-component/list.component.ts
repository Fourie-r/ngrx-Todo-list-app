import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import * as store from '../store';
import * as actions from '../actions';
import { Itodo } from '../todo';

@Component({
    selector: 'app-list-component',
    templateUrl: './list.component.html',
    styleUrls: ['./list-component.scss']
})

export class ListComponent implements OnInit {

    @select() todo;
    @select() lastUpdate;

    model: Itodo = {
        id: 0,
        description: '',
        responsible: '',
        priority: 'low',
        isActive: false
    };

    constructor( private ngRedux: NgRedux<store.IAppState>) {}


    ngOnInit() {

    }

    onSubmit() {
        actions.ADD_TODO.payload = this.model;
        this.ngRedux.dispatch(actions.ADD_TODO);
    }

    toggleTodo(todo) {
        console.log(todo.id);
        actions.TOGGLE_TODO.payload = todo.id;
        this.ngRedux.dispatch(actions.TOGGLE_TODO);
    }

    removeTodo(todo) {
        actions.DELETE_TODO.payload = todo.id;
        this.ngRedux.dispatch(actions.DELETE_TODO);

    }
}
