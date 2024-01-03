import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee/employee';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{

  id : number;
  employee : Employee = new Employee();

  constructor(private employeeService : EmployeeService,
              private activatedRoute : ActivatedRoute,
              private router : Router){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe((data)=>{
      this.employee = data;
      console.log(data);
    },
    error => console.log(error))
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.employee).subscribe((data)=>{
      this.goToEmployeeList();
    },
    error => console.log(error))
  }
}
