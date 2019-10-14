import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPostComponent implements OnDestroy {
  @ViewChild('form', { static: false }) form: ElementRef<HTMLFormElement> | undefined = undefined;
  @Input() action = '';
  @Input() postData: { [key: string]: string } = {};
  @Input() set callSubmit(fn: Observable<unknown>) {
    if (!fn) {
      return;
    }
    fn.pipe(takeUntil(this.onDestory$)).subscribe(() => {
      this.submit();
    });
  }

  get postDataKeys() {
    return Object.keys(this.postData);
  }

  private readonly onDestory$ = new EventEmitter();

  ngOnDestroy(): void {
    this.onDestory$.emit();
  }

  submit(): void {
    if (!this.form) {
      return;
    }

    this.form.nativeElement.submit();
  }
}
