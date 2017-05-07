import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}{{author}}</h1>`,
})
export class AppComponent  {
    name = 'Angular';
    author = ' by Hieu';
}
