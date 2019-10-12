import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
})
export class RedirectComponent implements OnInit, AfterViewInit {
  id = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }

  ngAfterViewInit(): void {
    this.submit();
  }

  submit(): void {
    const f = document.createElement('form');
    f.action = './assets/redirect.html';
    f.method = 'GET';
    const hidden = document.createElement('input');
    hidden.type = 'hidden';
    hidden.name = 'id';
    hidden.value = this.id;
    f.append(hidden);
    document.body.append(f);
    f.submit();
  }
}
