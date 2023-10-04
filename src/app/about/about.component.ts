import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  info = {
    nom:'marwen',
    email:'marwen@mail.com',
    tel:99999999
  }

  comments:any[]=[]
  
  comment=
  {
    id:0,
    message:''
  }

  constructor() { }

  ngOnInit(): void {
  }


  add(){
    if (this.comment.message!='') {
      this.comment.id=this.comments.length+1
      this.comments.push(
        {id:this.comment.id,message:this.comment.message})
        this.comment.message = '';
    }
  }
}
