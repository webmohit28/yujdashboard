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
    {
      name: "coffee",
      description: "thuis idsjbdbd",
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "coffee2",
      description: "thuis idsjbdbd",
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "coffee3",
      description: "thuis idsjbdbd",
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "coffee",
      description: "thuis idsjbdbd",
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "coffee2",
      description: "thuis idsjbdbd",
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "coffee3",
      description: "thuis idsjbdbd",
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "coffee",
      description: "thuis idsjbdbd",
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "coffee2",
      description: "thuis idsjbdbd",
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
}
