import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(private router: Router) { }
  loading = false;
  navigate(path: string){
    this.router.navigate([path])
  }
  ngOnInit() {
  }

}
