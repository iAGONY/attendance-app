import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AttendanceRequestDto } from './viewModels/attendance-request-dto';
import { ReportFilterDto } from './viewModels/report-filter-dto';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  constructor(private http: HttpClient) { }

  create(createOrder: AttendanceRequestDto) {
    return this.http.post(environment.ENDPOINT + "employeeAttendance/request", createOrder);
  }

  getAttendanceReport(reportFilter: ReportFilterDto) {
    return this.http.post(environment.ENDPOINT + "employeeAttendance/report", reportFilter);
  }

  getLeaveReport(reportFilter: ReportFilterDto) {
    return this.http.post(environment.ENDPOINT + "employeeAttendance/leave/report", reportFilter);
  }
}
