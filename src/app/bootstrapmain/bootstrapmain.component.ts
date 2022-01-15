import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bootstrapmain',
  templateUrl: './bootstrapmain.component.html',
  styleUrls: ['./bootstrapmain.component.css']
})
export class BootstrapmainComponent implements OnInit, AfterViewInit {

  @ViewChild('menuIcon') menuIcon!: ElementRef;
  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  menuToggle() {
    // this.menuIcon.nativeElement.style.display = 'none';
    if(this.menuIcon.nativeElement.style.display === 'none'){

      this.menuIcon.nativeElement.style.display = 'block';
    }
    else{

      this.menuIcon.nativeElement.style.display = 'none';
    }



  }

}
