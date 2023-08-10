import { DOCUMENT } from "@angular/common";
import { AfterViewInit, Component, Inject, Input, ViewChild } from "@angular/core";
import { EditorState, Extension } from '@codemirror/state';
import { basicSetup } from 'codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { LanguageSupport } from '@codemirror/language';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'petal-notification-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements AfterViewInit {

  @Input() mode: LanguageSupport;
  @Input() control: FormControl<string>;
  @ViewChild('myeditor') myEditor: any;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  public ngAfterViewInit(): void {

    let myEditorElement = this.myEditor.nativeElement;
    let myExt: Extension = [basicSetup, this.mode, oneDark, EditorView.updateListener.of((v:ViewUpdate) => {
      if (v.docChanged) {
        this.control.setValue(v.state.doc.toString());
      }
    })];
    let state!: EditorState;

    try {
      state = EditorState.create({
        doc: this.control.value,
        extensions: myExt,
      });
    } catch (e) {
      //Please make sure install codemirror@6.0.1
      //If your command was npm install codemirror, will installed 6.65.1(whatever)
      //You will be here.
      console.error(e);
    }

    //console.log(state);

    let view = new EditorView({
      state,
      parent: myEditorElement,
    });
  }
}
