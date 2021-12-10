import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  @Input() parentTochild: any = "";
  @Output() childToparent: any = new EventEmitter();
  @Input() productConfig;

  constructor() {}

  ngOnInit(): void {
    this.childToparent.emit("i am coming from child component");
  }
}
