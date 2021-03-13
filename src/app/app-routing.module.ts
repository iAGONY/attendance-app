import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path : 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'leaveRequest',
    component : LeaveRequestComponent
  },
  {
    path: 'leaveReport',
    component : LeaveReportComponent
  },
  {
    path: 'attendanceReport',
    component : AttendanceReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
