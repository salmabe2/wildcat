import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';

@Component({
    imports: [RouterOutlet, HeaderComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export default class LayoutComponent {}
