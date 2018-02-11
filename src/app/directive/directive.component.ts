import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  private titre: string = "directive titre";
  private inputType: string = "date";
  private content: string = "default value";
  private p1: string = "p1";
  private p2: string = "p2";
  private status: boolean = true;
  private afficherP1: string = "";
  private afficherP2: string = "none";
  private texts: string[] = ["un", "deux", "trois"];

  changeStatusValue():void{
    this.status = !this.status;

    this.afficherP2 = this.status ? "none" : ""
    this.afficherP1 = this.status ? "" : "none"
  }

}
