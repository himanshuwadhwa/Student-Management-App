import { Component } from '@angular/core';
import { StandardsService } from '../../services/standards.service';
import { Standards } from '../../models/standards.model';
import { Student, StudentsTableData } from '../../models/students.model';
import { StudentsService } from '../../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standards-list',
  template: `
    <div class="d-flex">
      <div>
        <div *ngIf="standards?.length; then cards; else nothing"></div>
        <ng-template #cards>
          <ul>
              <li *ngFor="let standard of standards; trackBy: trackById"><a (click)="onStandardClick(standard.StandardId)">{{ standard.StandardName }}</a></li>
          </ul>
        </ng-template>
        <ng-template #nothing>
          <p>No Standards Data Found...</p>
        </ng-template>
      </div>
      <div>
      <p *ngIf="loading">Loading...</p>
      <p *ngIf="!loading && !tableData">Click on the Standards to see the students list...</p>
      <app-table *ngIf="tableData">
          <tr (click)="onStudentRowClick(data)" *ngFor="let data of tableData[0]?.Students, let i = index; trackBy: trackByStudentId">
            <td>{{ data.Id }}</td>
            <td>{{ data.Name }}</td>
          </tr>
       </app-table>
      </div>
    </div>
  `,
  styles: [`
    .d-flex {
      display:flex;
      div:first-child {
        flex:0 1 32%;
        ul {
          margin: 0;
          padding: 0 0 0 20px;
          li {
            margin-bottom: 20px;
            a {
             &:hover{
              cursor: pointer;
              text-decoration: underline;
            } 
            }
          }
        }
      }
      div:nth-child(2) {
        flex: 0 1 68%;
      }
    }
    `
  ]
})
export class StandardsListComponent {
  standards!: Standards[];
  tableData!:StudentsTableData[];
  loading = false;
  constructor(private standardService: StandardsService, private studentService: StudentsService, private router: Router) {}
  ngOnInit() {
    this.getStandardList();
  }

  getStandardList() {
    this.standardService.read().subscribe((standards: Standards[]) => {
      this.standards = standards
    })
  }

  onStandardClick(id: string) {
    this.getStudentsList(id)
  }

  getStudentsList(id: string) {
    this.loading = true;
    this.studentService.read().subscribe((data: StudentsTableData[]) => {
      this.tableData = data.filter((data) => data.StandardId === id);
      console.log(this.tableData)
      this.loading = false;
    })
  }

  trackById(index: number, value: Standards) {
    return value.StandardId;
  }

  trackByStudentId(index: number, value: Student) {
    return value.Id;
  }

  onStudentRowClick(data: Student) {
    console.log(data);
    this.router.navigate(['student'], { state: { address: {...data.Address}} })
  }

}
