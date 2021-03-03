
/*

angular
.module("codecraft")
.controller("SearchController", function($scope, ContactService) {
    $scope.contacts = ContactService;

    $scope.loadMore = function() {
      $scope.contacts.loadMore();
    };
  });
*/
/*

import * as angular from 'angular';

let SearchComponent = {
  selector: "search", 
  template: `
  <form class="navbar-form navbar-left">

  <div class="form-group">
    <input type="text"
           class="form-control"
           id="name"
           ng-model="$ctrl.contacts.search"
           ng-model-options="{ debounce: 300 }"
           placeholder="Search name..."
           ng-change="$ctrl.contacts.doSearch()"
    />
  </div>

  <div class="form-group">
    <select class="form-control"
            ng-model="$ctrl.contacts.sorting"
            ng-change="$ctrl.contacts.doSearch()">
      <option value="name">Name</option>
      <option value="email">Email</option>
    </select>
  </div>

  <div class="form-group">
    <select class="form-control"
            ng-model="$ctrl.contacts.ordering"
            ng-change="$ctrl.contacts.doSearch()">
      <option value="ASC">ASC</option>
      <option value="DESC">DESC</option>
    </select>
  </div>
</form>  `,
  bindings: {},
  controller: class SearchController {

    private contacts;
    constructor(ContactService) {
      this.contacts = ContactService;
    }
    loadMore() {
      this.contacts.loadMore();
    };

   
  }

};

angular
  .module("codecraft")
  .component(SearchComponent.selector, SearchComponent);
*/

/*
import { Component, Inject } from "@angular/core";
import { ContactService } from "../services/contact.service";
import { FormGroup, FormControl } from '@angular/forms';
import * as angular from 'angular';

import { downgradeComponent } from "@angular/upgrade/static";

/*

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';



@Component({
  selector: 'search',
  template: `
    

<form class="navbar-form navbar-left" [formGroup]="myform">



      

<div class="form-group">
<input type="text"
       class="form-control"
       id="name"
       placeholder="Search name..."
       formControlName="search"
/>
</div>


      

<div class="form-group">
<select class="form-control"
        formControlName="sorting">
  <option value="name">Name</option>
  <option value="email">Email</option>
</select>
</div>



      

<div class="form-group">
<select class="form-control"
        formControlName="ordering">
  <option value="ASC">ASC</option>
  <option value="DESC">DESC</option>
</select>
</div>


    </form>
    `
})
export class SearchComponent {
/*
  protected myform: FormGroup;

  constructor( @Inject(ContactService) private contacts: ContactService) {
    this.myform = new FormGroup({
      search: new FormControl(),
      sorting: new FormControl('name'),
      ordering: new FormControl('ASC')
    });
  }
  */

/*
ngOnInit() {
  this.myform
      .valueChanges
      .debounceTime(400) // (1)
      .distinctUntilChanged() // (2)
      .do(console.log) // (3)
      .subscribe(({sorting, ordering, search}) => { // (4)
        this.contacts.sorting = sorting;
        this.contacts.ordering = ordering;
        this.contacts.search = search;
        this.contacts.doSearch();
      });
}


}


angular
  .module('codecraft')
  .directive("search", downgradeComponent({
    component: SearchComponent
}));

*/
import { Directive,Component, Inject } from "@angular/core";
@Component({
 // selector: 'search'
})
export class SearchComponent {
}