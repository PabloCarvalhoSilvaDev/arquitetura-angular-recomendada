import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-layout',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-layout.html',
  styleUrl: './sidebar-layout.css',
})
export class SidebarLayout {}
