import { Component, OnInit } from '@angular/core';
import { ActivateRoute } from '@angular/router';

import { BbService } from './bb.service';

@Component({
  selector: 'app-bb-detail',
  templateUrl: './bb-detail.component.html',
  styleUrls: ['./bb-detail.component.css']
})
export class BbDetailComponent implements OnInit {
  private bb: any;
  private comments: Object[];
  private author: String = '';
  private password: String = '';
  private content: String = '';

  constructor(private bbservice: BbService, private ar: ActivatedRoute) { }

  ngOnInit() {
    const pk = this.ar.snapshot.params.pk;
    this.bbservice.getBb(pk).subscribe((bb: Object) => {
      this.bb = bb;
      this.getComments();
    });
  }

  getComments() {
    this.bbservice.getComments(this.bb.id).subscribe((comments: Object[]) => {this.comments = comments;});
  }

  submitComment() {
    this.bbservice.addComment(this.bb.id, this.author, this.password, this.content).subscribe((comment: Object) => {
      if (comment) {
        this.content = '';
        this.getComments();
      }
    });
  }
}
