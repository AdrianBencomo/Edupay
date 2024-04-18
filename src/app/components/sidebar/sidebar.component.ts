import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ParentService } from '../../services/parent.service';

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
  showParentsModule: boolean = false;
  showTeachersModule: boolean = false;
  showAcademicModule: boolean = false;
  showAccountModule: boolean = false;

  constructor(
    private parentService: ParentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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

  switchParentsModule() {
    this.showParentsModule = !this.showParentsModule
  }


  switchTeachersModule() {
    this.showTeachersModule = !this.showTeachersModule
  }

  switchAcademicModule() {
    this.showAcademicModule = !this.showAcademicModule
  }

  switchAccountModule() {
    this.showAccountModule = !this.showAccountModule
  }

  goToAddParent(){
    this.parentService.removeEntityInStorage()
    this.router.navigate(['/admin/add-parent'], { relativeTo: this.route });

  }

}
