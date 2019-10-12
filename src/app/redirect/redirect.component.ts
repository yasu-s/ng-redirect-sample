import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
})
export class RedirectComponent implements AfterViewInit {
  id = '';
  action = './assets/redirect.html';
  postData: { [key: string]: string } = {};
  callSubmit = new Subject();

  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.postData['id'] = this.id;
    this.cd.detectChanges();

    this.callSubmit.next();
  }
}
