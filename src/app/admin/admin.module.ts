import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//containers
import { StandardsListComponent } from './containers/standards-list/standards-list.component';
import { TableComponent } from './containers/table/table.component';
//components
import { StudentFormComponent } from './components/student-form/student-form.component';

const routes: Routes = [
  {
    path: 'standards', component: StandardsListComponent
  },
  {
    path: 'student', component: StudentFormComponent
  }
]


@NgModule({
  declarations: [
    StandardsListComponent,
    TableComponent,
    StudentFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [
    StandardsListComponent,
  ]
})
export class AdminModule { }
