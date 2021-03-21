import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AntDesignFileUpload';

  // tslint:disable-next-line:typedef
  handleChange(event) {

    console.log(event);
  }
}
