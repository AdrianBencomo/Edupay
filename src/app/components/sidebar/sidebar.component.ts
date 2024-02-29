import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  screenWidth: number;
  isMobile: boolean;
  showStudentsModule: boolean = false;
  showTeachersModule: boolean = false;
  showAccountModule: boolean = false;

  constructor() {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= 1024
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= 1024
  }

  switchStudentsModule() {
    this.showStudentsModule = !this.showStudentsModule
  }

  switchTeachersModule() {
    this.showTeachersModule = !this.showTeachersModule
  }

  switchAccountModule() {
    this.showAccountModule = !this.showAccountModule
  }

}
