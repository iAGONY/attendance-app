import { Component, OnInit } from '@angular/core';
import { AttendenceService } from '../attendence.service';
import { ReportFilterDto } from '../viewModels/report-filter-dto';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.scss']
})
export class AttendanceReportComponent implements OnInit {
  tittle : string;
  attendanceReport: any;
  constructor(
    private attendenceService : AttendenceService
  ) { }

  ngOnInit(): void {
    this.getReport();
  }

  getAll(reportFilter) {
    this.attendenceService.getAttendanceReport(reportFilter).
      subscribe(response => {
        this.attendanceReport = response;
      },
        errorResponse => {
          // flash error
        });
  }

  getReport() {
    this.tittle = 'Your current leave report'
    let startDate = new Date("2021-01-01");
    let endDate = new Date();
    let reportFilter : ReportFilterDto = {
      fromDate : startDate,
      toDate : endDate
    }
    this.getAll(reportFilter);
  }

  getPreviouseYearReport() {
    this.tittle = 'Your previous year leave report'
    let startDate = new Date("2020-01-01");
    let endDate = new Date("2020-12-31");
    let reportFilter : ReportFilterDto = {
      fromDate : startDate,
      toDate : endDate
    }
    this.getAll(reportFilter);
  }

}
