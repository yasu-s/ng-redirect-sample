import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { RedirectService } from './redirect.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
})
export class RedirectComponent implements AfterViewInit {
  id = '';
  action = './assets/redirect.html';
  postData: { [key: string]: string } = {};
  callSubmit = new Subject();

  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef, private readonly redirectService: RedirectService) {}

  ngAfterViewInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.cd.detectChanges();

    this.redirectService.getMappings(this.id).subscribe((data) => {
      this.postData = data;
      this.postData['id'] = this.id;
      this.cd.detectChanges();
      this.callSubmit.next();
    });
  }
}
