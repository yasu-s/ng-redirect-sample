# 概要

Angularでルーティング時に別サイトにリダイレクトするサンプルです。

# 実行環境

* Node.js - 10.x
* Yarn - 1.17.3

# 使用ライブラリ

* Angular - 8.2.x

# 動作確認

## 1. パッケージインストール  

```bash
yarn
```

## 2. サンプルの起動  

```bash
yarn start
```

# サンプルソース

```ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form #f action="./assets/redirect.html" type="GET">
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
```
