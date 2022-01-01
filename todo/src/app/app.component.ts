import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  datas = [];

  add(data) {
    this.datas.push(data.value);
    data.value = '';
  }

  check(data) {
    this.datas.filter(el => {
      return el === data;
    });
  }

  delete(data) {
    this.datas = this.datas.filter(el => {
      return el !== data;
    });
  }
}
