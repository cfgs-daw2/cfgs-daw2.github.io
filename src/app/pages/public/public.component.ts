import { Component, OnInit } from '@angular/core';
import { port } from '@scullyio/scully/src/lib/utils';
import { FirebaseDBService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  public portfolio: string[];

  constructor(private firedb: FirebaseDBService) {
    this.firedb.getPortfolio().subscribe(
      (originalPortfolio: any[]) => {
        originalPortfolio.forEach(element => {
          this.portfolio.push(element.content); 
        });
      }
    );
  }

  ngOnInit(): void {}

}
