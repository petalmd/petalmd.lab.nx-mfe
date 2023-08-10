import { DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input } from "@angular/core";
import * as Handlebars from 'handlebars';

@Component({
  selector: 'petal-notification-render',
  template: `<h2>Render</h2><div [innerHTML]="compiledHtml" class="card"></div>`,
  styleUrls: ['./render.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenderComponent {
  @Input() public html: string;
  @Input() public css: string;
  @Input() public json: string = '{}';
  public compiledHtml: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cd: ChangeDetectorRef
  ) {}

  public render() {
    this.updateStyleElement();
    console.log(this.html, JSON.parse(this.json));
    const template = Handlebars.compile(this.html);
    this.compiledHtml = template(JSON.parse(this.json));
    this.cd.markForCheck();
  }

  private updateStyleElement(): void {
    const head = this.document.getElementsByTagName('head')[0];
    let style = this.document.getElementById('client-theme') as HTMLStyleElement;
    if (style) head.removeChild(style);
  
    style = this.document.createElement('style') as HTMLStyleElement;
    style.id = 'client-theme';
    style.appendChild(document.createTextNode(this.css));
    head.appendChild(style);
  }
}
