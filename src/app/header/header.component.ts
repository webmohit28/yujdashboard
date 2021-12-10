import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public myName: string = "Mohit Jain";
  myTitle: string = "";

  constructor() {}

  ngOnInit(): void {}
  getdate(data) {
    this.myTitle = data;
    console.log(data);
  }
}
