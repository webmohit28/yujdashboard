import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-profile",
  templateUrl: "./list-profile.component.html",
  styleUrls: ["./list-profile.component.scss"],
})
export class ListProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  products: any[] = [
    { name: "coffee", description: "thuis idsjbdbd" },
    { name: "coffee2", description: "thuis idsjbdbd" },
    { name: "coffee3", description: "thuis idsjbdbd" },
  ];
}
