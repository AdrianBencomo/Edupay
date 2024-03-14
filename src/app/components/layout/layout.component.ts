import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeadbarComponent } from '../headbar/headbar.component';
import { CommonModule } from '@angular/common';
import { SidebarMobileComponent } from '../sidebar-mobile/sidebar-mobile.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, SidebarComponent, SidebarMobileComponent, HeadbarComponent, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  screenWidth: number;
  isMobile: boolean;
  showSidebar: boolean = true;
  showMenuDropDown: boolean = false;

  constructor(
    public authService: AuthService
  ) {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= 1024
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= 1024
  }

  switchShowSidebar() {
    this.showSidebar = !this.showSidebar
  }

  switchShowMenuDropDown() {
    this.showMenuDropDown = !this.showMenuDropDown
  }

}
