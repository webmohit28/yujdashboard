import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-formarray-comp",
  templateUrl: "./formarray-comp.component.html",
  styleUrls: ["./formarray-comp.component.scss"],
})
export class FormarrayCompComponent implements OnInit {
  customerInfo: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customerInfo = this.formBuilder.group({
      firstName: [],
      lastName: [],
      username: [],
      email: [],
      products: this.formBuilder.array([]),
    });
    this.setDefaultData();
  }

  addProduct(name = "", desc = "") {
    let products = this.customerInfo.get("products") as FormArray;
    products.push(
      this.formBuilder.group({
        name: [name, [Validators.required]],
        description: [desc, [Validators.required]],
      })
    );
  }

  createCustomerInfo() {
    console.log("data is ", this.customerInfo.value);
    this.customerInfo.markAllAsTouched();
  }

  setDefaultData() {
    this.addProduct("tyre", "rubber material");
  }
}
