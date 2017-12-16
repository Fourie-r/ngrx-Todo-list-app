import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import * as actions from '../actions';

@Component({
    selector: 'app-form-component',
    templateUrl: './form.component.html',
})

export class FormComponent implements OnInit {

    @select() todo;
    @select() lastUpdate;

    constructor( private ngRedux: NgRedux<IAppState>) {}

    clearAllTodos() {
        this.ngRedux.dispatch(actions.DELETE_ALL);
    }

    ngOnInit() {

    }

}

