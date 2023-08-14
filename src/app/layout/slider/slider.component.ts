import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent {
  imageUrl: SafeUrl;

  constructor(private	sanitizer: DomSanitizer){
    const image= 'assets/images/rG9zSEf.gif';
    this.imageUrl=this.sanitizer.bypassSecurityTrustUrl(image);
  }
}
