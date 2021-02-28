import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '../../../ckeditor5/build/ckeditor';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  public textEditor = ClassicEditor;
  public editorData: string = "";
  public editorConfig: any = {};

  constructor() {
    this.editorConfig = {
      toolbar: [
        'heading', 'horizontalLine', '|',
        'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', 'link', 'bulletedList', 'numberedList', 'todoList', '|',
        'fontBackgroundColor', 'fontColor', 'fontsize', 'fontfamily', 'highlight', '|',
        'alignment', 'indent', 'outdent', '|',
        'code', 'codeBlock', 'htmlEmbed', '|',
        '-', // break point
        'ckfinder', 'imageUpload', 'imageInsert', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo', '|',
        'MathType', 'ChemType', 'specialCharacters'       
      ],
      image: {
        toolbar: [
            'imageStyle:full', 'imageStyle:side', '|',
            'imageTextAlternative'
        ],
        styles: ['full', 'side']
      }
    }
  }

  ngOnInit(): void {
  }

  checkText() {
    console.log(this.editorData);
  }

}
