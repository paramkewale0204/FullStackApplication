import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{

  id : number = null;
  employee : Employee | null = null;

  constructor(private activatedRoute : ActivatedRoute,
              private employeeService : EmployeeService){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    })
  }

}
