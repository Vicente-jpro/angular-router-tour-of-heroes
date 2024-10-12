import { Component } from '@angular/core';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrl: './crisis-detail.component.css'
})
export class CrisisDetailComponent {

  cancel() {
    this.gotoCrises();
  }
  
  save() {
  //  this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises(): void{

  }
}
