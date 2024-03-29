import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'kevindmello';

  constructor(
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    let loader = this.renderer.selectRootElement('#loader');

    console.log(loader);

    this.renderer.setStyle(loader, 'display', 'none');
  }
}
