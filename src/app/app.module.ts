import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  NgZorroAntdModule,
  NZ_ICON_DEFAULT_TWOTONE_COLOR,
  NZ_ICONS,
} from "ng-zorro-antd";
import { IconDefinition } from "@ant-design/icons-angular";
import {
  FileTextOutline,
  MailOutline,
  DollarOutline,
  TagsOutline,
  TrophyOutline,
  FileSearchOutline,
  ExportOutline,
  ShareAltOutline,
  EllipsisOutline,
  UndoOutline,
  ItalicOutline
} from "@ant-design/icons-angular/icons";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavSidebarComponent } from "./nav-sidebar/nav-sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { PropertySummaryComponent } from "./property-summary/property-summary.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SiteDescriptionComponent } from "./site-description/site-description.component";
import {
  NzGridModule,
  NzCardModule,
  NzMenuModule,
  NzLayoutModule,
  NzPageHeaderModule,
  NzCheckboxModule,
  NzIconModule,
  NzTableModule,
  NzInputNumberModule,
  NzRadioModule,
} from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

const icons: IconDefinition[] = [
  FileTextOutline,
  MailOutline,
  DollarOutline,
  TagsOutline,
  TrophyOutline,
  FileSearchOutline,
  ExportOutline,
  EllipsisOutline,
  ShareAltOutline,
  UndoOutline,
  ItalicOutline
];
@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    PropertySummaryComponent,
    HeaderComponent,
    SiteDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzRadioModule,
    NzInputNumberModule,
    NzGridModule,
    NzTableModule,
    NgZorroAntdModule,
    NzMenuModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzPageHeaderModule,
    NzLayoutModule,
    NzCheckboxModule,
    NzCardModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(), 
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: "#00ff00" }, // If not provided, Ant Design's official blue would be used
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class AppModule {}
