import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from '@mdv-twelve/core-data';
import { Component, OnInit, Input } from '@angular/core';
import { NotifyService } from '@mdv-twelve/core-data';

@Component({
  selector: 'mdv-twelve-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() sidenav
  @Input() title
  @Input() isAuthenticated

  constructor(
  ) { }

  ngOnInit() {
  }

}
