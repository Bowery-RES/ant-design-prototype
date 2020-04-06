import { Component } from "@angular/core";

@Component({
  selector: "site-description",
  templateUrl: "site-description.component.html",
  styles: [
    `
      [nz-button] {
        font-size: 14px;
      }
      [nz-icon] {
        padding-right: 8px;
      }
      [froalaEditor] {
        padding-top: 8px;
      }
    `,
  ],
})
export class SiteDescriptionComponent {
  surroundingUses = [
    { label: "Residential", value: "residential", checked: true },
    { label: "Commercial", value: "commercial", checked: true },
    { label: "Industrial", value: "industrial" },
  ];
  utilitiesData = [
    { item: "Water/Sewer and Refuse", description: "City" },
    { item: "Police & Fire Protection", description: "City" },
    { item: "Gas", description: "Con Ed and/or National Grid" },
    { item: "Electrity", description: "Con Ed" },
  ];
  sitedDescriptorsData = [
    { item: "Access", description: "The primary access is from 41st Street" },
    { item: "Topography", description: "Generally level at street grade" },
    { item: "Drainage", description: "Assumed adequate" },
    {
      item: "Paving",
      description:
        "All roads are paved with asphalt and are in satisfactory condition",
    },
    { item: "Street Light", description: "adequate" },
    {
      item: "Hazardous Substances",
      description:
        "We observed no evidence of toxic or hazardous substances during our inspection of the site",
    },
  ];

  editorOptions = {
    toolbarButtons: {
      moreText: { buttons: ["bold", "italic", "underline"], buttonsVisible: 2,},
      moreParagraph: {
        buttons: ["alignLeft", "alignCenter", "indent", "quote"],
        buttonsVisible: 2,
      },
      moreRich: { buttons: ["link", "image", "table"], buttonsVisible: 2 },
      moreMisc: {
        buttons: ["undo", "redo", "selectAll"],
        buttonsVisible: 2,
        align: "right",
      },
    },
  };

  constructor() {
  }

  log(surroudingUse) {
    console.log(surroudingUse);
  }
}
