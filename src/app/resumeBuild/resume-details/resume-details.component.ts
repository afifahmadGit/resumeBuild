import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: ['./resume-details.component.scss']
})
export class ResumeDetailsComponent implements OnInit {
  show=false
  skills:any=['HTML','CSS','HTML','CSS','HTML','CSS','HTML','CSS']
  skillInput:any
  constructor() { }

  ngOnInit(): void {
  }

  addSkill(skill:any){
    this.skills.push(skill)
  }
  toggelLayout(show:any){
    if(show){
      this.show=true
    }else{
      this.show=false
    }
  }

}
