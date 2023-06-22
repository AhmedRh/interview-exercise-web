import { Component, OnInit } from '@angular/core';
import { ItemWithPath } from '../model/nav-item';

@Component({
  selector: 'interview-front-end-instruction',
  templateUrl: './front-end-instruction.component.html',
  styleUrls: ['./front-end-instruction.component.scss']
})
export class FrontEndInstructionComponent {

  instructions: ItemWithPath[] = [
    {text: 'Complete the nav-bar in order to navigate to the neo-so-ft component', path: '/assets/nav-bar.png', alt: 'Nav bar'},
    {text: 'Complete the neo-so-ft form component to get a number as input and send this input to neo-so-ft service', path: '/assets/form.png', alt: 'Form'},
    {text: 'Complete the neo-so-ft service in order to call the rest service declare in neo-so-ft-back', path: '/assets/rest-service.png', alt: 'Http service'},
    {text: 'Complete the neo-so-ft component in order to display the results of already converted number', path: '/assets/result.png', alt: 'Result'}
  ];
}
