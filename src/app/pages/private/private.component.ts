import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseDBService } from 'src/app/services/firebasedb.service';

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

  public title: string = "";
  public tags: string = "";

  constructor(private firedb: FirebaseDBService, private router: Router) {
    this.editorConfig = {
      toolbar: {
          items: [
            'heading', 'horizontalLine', '|',
            'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', 'link', 'bulletedList', 'numberedList', 'todoList', '|',
            'fontBackgroundColor', 'fontColor', 'fontsize', 'fontfamily', 'highlight', '|',
            'alignment', 'indent', 'outdent', '|',
            'code', 'codeBlock', 'htmlEmbed', '|',
            //'-', // break point
            'ckfinder', 'imageUpload', 'imageInsert', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo', '|',
            'MathType', 'ChemType', 'specialCharacters'       
          ],
          shouldNotGroupWhenFull: true
        },
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

  saveData() {
    this.firedb.addPortfolioElement(this.title, this.editorData, this.tags);
    this.resetData();
    this.router.navigate(['/public']);
  }

  resetData() {
    this.title = "";
    this.editorData = "";
    this.tags = "";
  }

}
