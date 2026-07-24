import { Component } from '@angular/core';

import { PageHeader } from '../../shared/page-header/page-header';

@Component({
  selector: 'app-home',
  imports: [PageHeader],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
