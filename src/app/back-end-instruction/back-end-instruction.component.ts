import { Component, OnInit } from '@angular/core';
import { TestCase } from '../model/test-case';

@Component({
  selector: 'interview-back-end-instruction',
  templateUrl: './back-end-instruction.component.html',
  styleUrls: ['./back-end-instruction.component.scss']
})
export class BackEndInstructionComponent {

  testCases: TestCase[] = [
    { input: 1, output: '1' },
    { input: 3, output: 'NeoNeo' },
    { input: 5, output: 'SoSo' },
    { input: 7, output: 'Ft' },
    { input: 9, output: 'Neo' },
    { input: 51, output: 'NeoSo' },
    { input: 53, output: 'SoNeo' },
    { input: 33, output: 'NeoNeoNeo' },
    { input: 27, output: 'NeoFt' },
    { input: 15, output: 'NeoSoSo' }];

}
