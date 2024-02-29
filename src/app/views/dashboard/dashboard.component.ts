import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CalendarDay } from '../../interfaces/calendar-day';
import { CommonModule } from '@angular/common';
Chart.register(...registerables);


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  currentDate: Date = new Date();
  daysInMonth: CalendarDay[] = [];
  chart: any = null;
  @ViewChild('chartEarning') canvasEarning: ElementRef = {} as ElementRef;
  @ViewChild('chartExpense') canvasExpense: ElementRef = {} as ElementRef;
  @ViewChild('chartStudent') canvasStudent: ElementRef = {} as ElementRef;

  constructor() {

  }

  ngOnInit() {
    this.generateCalendar();
  }

  ngAfterViewInit() {
    this.drawChartEarning()
    this.drawChartExpense()
    this.drawChartStudent()
  }

  generateCalendar() {
    const today = new Date();
    const currentYear = this.currentDate.getFullYear();
    const currentMonth = this.currentDate.getMonth();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const firstDayOfWeek = firstDayOfMonth.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday

    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const lastDateOfMonth = lastDayOfMonth.getDate();

    const days: CalendarDay[] = [];

    // Determinar el número de días del mes anterior
    const lastDayOfPreviousMonth = new Date(currentYear, currentMonth, 0);
    const daysInPreviousMonth = lastDayOfPreviousMonth.getDate();

    // Insertar los días del mes anterior que se muestran en la misma semana que el primer día del mes actual
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({ value: daysInPreviousMonth - i, currentMonth: false, isToday: false });
    }

    // Insertar los números de los días del mes actual
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday = i === today.getDate() && currentYear === today.getFullYear() && currentMonth === today.getMonth();
      days.push({ value: i, currentMonth: true, isToday });
    }

    // Determinar el número de días del próximo mes
    const remainingDays = 7 - (days.length % 7);

    // Insertar los días del próximo mes que se muestran en la misma semana que el último día del mes actual
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ value: i, currentMonth: false, isToday: false });
    }

    this.daysInMonth = days;
  }


  drawChartEarning() {
    const myCanvasEarning = this.canvasEarning.nativeElement;
    this.chart = new Chart(myCanvasEarning, {
      type: 'line',
      data: {
        labels: ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ''],
        datasets: [
          {
            label: 'Total Collections',
            data: [0, 48000, 27000, 24000, 50000, 72000, 74000, 75000],
            backgroundColor: [
              'rgb(20,35,138)',
            ],
            borderColor: [
              'rgb(20,35,138)',
            ],
          },
          {
            label: 'Fees Collections',
            data: [0, 28000, 30000, 35000, 50000, 53000, 54000, 98000],
            backgroundColor: [
              'rgb(214, 10, 11)',
            ],
            borderColor: [
              'rgb(214, 10, 11)',
            ]
          },

        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            ticks: {
              font: {
                size: 13
              }
            }
          }
        },
        plugins: {
          title: {
            display: true,
            font: {
              size: 22
            }
          },
          tooltip: {
            padding: 20,
            bodyFont: {
              size: 12
            },
            titleFont: {
              size: 14
            }
          },
          legend: {

            display: false
          }
        },

      }
    });
  }

  drawChartExpense() {
    const myCanvasExpense = this.canvasExpense.nativeElement;
    this.chart = new Chart(myCanvasExpense, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            label: 'April 2024',
            data: [125000],
            backgroundColor: [
              'rgb(79, 227, 151)',
            ],
            borderColor: [
              'rgb(79, 227, 151)',
            ],
          },
          {
            label: 'May 2024',
            data: [100000],
            backgroundColor: [
              'rgb(33, 57, 222)',
            ],
            borderColor: [
              'rgb(33, 57, 222)',
            ],
          },
          {
            label: 'June 2024',
            data: [75000],
            backgroundColor: [
              'rgb(214, 10, 11)',
            ],
            borderColor: [
              'rgb(214, 10, 11)',
            ]
          },

        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            ticks: {
              font: {
                size: 13
              }
            }
          }
        },
        plugins: {
          title: {
            display: true,
            font: {
              size: 22
            }
          },
          tooltip: {
            padding: 20,
            bodyFont: {
              size: 12
            },
            titleFont: {
              size: 14
            }
          },
          legend: {

            display: false
          }
        },

      }
    });
  }

  drawChartStudent() {
    const myCanvasStudent = this.canvasStudent.nativeElement;
    this.chart = new Chart(myCanvasStudent, {
      type: 'doughnut',
      data: {
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: 'Students',
            data: [30000, 20000],
            backgroundColor: [
              'rgb(33, 57, 222)',
              'rgb(214,10,11)',
            ],
            borderColor: [
              'rgb(255,255,255)',
              'rgb(255,255,255)',
            ],
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            display: false,
          },
          x: {
            display: false,
          }
        },
        plugins: {
          title: {
            display: true,
            font: {
              size: 22
            }
          },
          tooltip: {
            padding: 20,
            bodyFont: {
              size: 12
            },
            titleFont: {
              size: 14
            }
          },
          legend: {

            display: false
          }
        },

      }
    });
  }

}
