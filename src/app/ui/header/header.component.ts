import { Component, ElementRef, OnInit, Renderer2, RendererFactory2, ViewChild } from '@angular/core';

@Component({
  selector: 'bms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('mobile_Nav') mobileNav: ElementRef;
  
  @ViewChild('backDrop') backDrop: ElementRef;
  
  

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onMobileNavButtonClick()
  {
    this.renderer.setStyle(this.mobileNav.nativeElement,'display','block');
    this.renderer.setStyle(this.backDrop.nativeElement,'display','block');
  }

  backDropOnClick()
  {
    this.renderer.setStyle(this.mobileNav.nativeElement,'display','none');
    this.renderer.setStyle(this.backDrop.nativeElement,'display','none');
  }

}
