import {Component} from '@angular/core'

@Component({
    selector: 'nav-sidebar',
    templateUrl: 'nav-sidebar.component.html',
    styles: [`
        [nz-menu] {
            width: 200px; 
        }
        [nz-icon] {
            margin-right: 6px;
            font-size: 14px;
          }
    `]
})
export class NavSidebarComponent {
    constructor() {
    }

}