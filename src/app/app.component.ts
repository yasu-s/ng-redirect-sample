import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form #f action="./assets/redirect.html" method="GET">
      <input type="hidden" name="id" [value]="data.id" />
      <input type="hidden" name="name" [value]="data.name" />
      <input type="hidden" name="memo" [value]="data.memo" />
    </form>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('f', { static: false }) form: ElementRef<HTMLFormElement>;

  data = {
    id: '1',
    name: 'Bob',
    memo: 'memo2',
  };

  ngAfterViewInit(): void {
    this.form.nativeElement.submit();
  }
}
