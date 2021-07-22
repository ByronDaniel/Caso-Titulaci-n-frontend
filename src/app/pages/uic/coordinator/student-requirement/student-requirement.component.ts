import { MeshStudentRequirement } from './../../../../models/uic/mesh-student-requirement';
import { Validator } from './../../../../models/setting/validator';
import { Component, OnInit } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Paginator } from "src/app/models/setting/paginator";
import { Student } from "src/app/models/uic/student";
import { UicHttpService } from "src/app/services/uic/uic-http.service";
import { MessageService } from "../../../shared/services/message.service";
import { DateValidators } from "../../../shared/validators/date.validators";
import { AppHttpService } from 'src/app/services/app/app-http.service';
import { MeshStudent } from 'src/app/models/app/mesh-student';

@Component({
  selector: 'app-student-requirement',
  templateUrl: './student-requirement.component.html',
  styleUrls: ['./student-requirement.component.css']
})
export class StudentRequirementComponent implements OnInit {

  paginator: Paginator;
  students: Student[];//inicializar 
  studentsEnd: Student[];
  documents: MeshStudentRequirement[];
  approvedDocuments: MeshStudentRequirement[];
  formStudent: FormGroup;
  student: MeshStudent;
  files: any;
  studentDialog: boolean;
  flagStudents: boolean;
  disabledForm:boolean;
  
  constructor(
    private spinnerService: NgxSpinnerService,
    public messageService: MessageService,//siempre publico
    private formBuilder: FormBuilder,
    private uicHttpService: UicHttpService,
    private appHttpService: AppHttpService
  ) {
    this.paginator = { current_page: 1, per_page: 5 };
    this.students = [];
    this.studentsEnd = [];
  }

  ngOnInit(): void {
    //this.buildFormStudent();
    this.getStudents(this.paginator);
    //this.getStudentsEnd(this.paginator);//paginador por tabla
  }
  // Build form course
  // buildFormStudent() {
  //   this.formStudent = this.formBuilder.group({
  //     id: [null],
  //     is_approved: [null, [Validators.required]],
  //     observations: this.formBuilder.array([this.formBuilder.control(null)])
  //   });
  // }

  getStudents(paginator: Paginator) {
    const params = new HttpParams()
      .append("page", paginator.current_page.toString())
      .append("per_page", paginator.per_page.toString());
    this.flagStudents = true;
    this.uicHttpService.get("mesh-students", params).subscribe(
      (response) => {
        
        // for(let i = 0; i<response['data'].length; i++){
          
        //   let haveRequirements: MeshStudentRequirement[] = [];
        //   for(let j = 0; j<response['data'][i]['mesh_student_requirements'].length; j++){
            
        //     if(response['data'][i]['mesh_student_requirements'][j].is_approved == true){
        //       haveRequirements.push(response['data'][i]['mesh_student_requirements'][j]);
        //     }
        //   }
        //   if(haveRequirements.length <= response['data'][i]['mesh_student_requirements'].length-1){
        //     this.students.push(response['data'][i]);
        //   }
        // }
        this.students = response['data'];
        this.flagStudents = false;
        this.paginator = response as Paginator;
      },
      (error) => {
        this.flagStudents = false;
        this.messageService.error(error);
      }
    );
  }
  }
