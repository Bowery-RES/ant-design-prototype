import { Component } from "@angular/core";

@Component({
  selector: "property-summary",
  templateUrl: "property-summary.component.html",
  styles: [
    `
      [nz-row] {
        padding-top: 12px;
      }
      span {
        color: #262626;
        font-size: 14px;
      }
      [nz-col] {
        .input {
          color: #000000;
          font-size: 16px;
          border: 1px solid #d9d9d9;
          border-radius: 2px;
        }
      }
      [nz-checkbox] {
        color: #000000;
        font-size: 14px;
      }
      [nz-number] {
          width: 100%;
      }
      [nz-icon] {
        padding-right:8px; 
      }
    `,
  ],
})
export class PropertySummaryComponent {
  propertyData = {
    buildingName: null,
    buildingClass: "D3",
    streetAddress: "63 Depot Road",
    censusTract: "90.0",
    streetName: "Depot Road",
    buildingDescriptor: "Building",
    yearBuilt: "2015",
    siteArea: "5,008.3",
    siteAreaBasis: "SF",
    yearBuiltEstimate: true,
    displayBoth: false,
  };

  buildingDescription= {
    grossBuildingArea: null,
    residentialUnitCount: 40,
    floors: 6,
    commercialUnitCount: 2,
    use: "mulifamily",
    buildingType: "elevator",
  };
  useOptions: [
    { label: "Multifamily"; value: "multifamily" },
    { label: "Mixed-Use"; value: "mixed-use" }
  ];
  typeOptions: [
    { label: "Elevator"; value: "elevator" },
    { label: "Walk-up"; value: "walk-up" }
  ];
  constructor() {
  }
}
