import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '码公之家';
  name = '乌咪';
  clickTime = 1;

  twoWayBinding() {
    if (this.clickTime == 1) {
      this.clickTime = 2;
      this.name='mo';
    } else {
      this.clickTime = 1;
      this.name = 'mo2';
    }
  }

}
