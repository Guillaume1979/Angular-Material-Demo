import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  selectedValue: string;
  radioValue: string[];

  checkboxForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkboxForm = fb.group({
      username: [],
      frameworks: fb.array([])
    });
  }

  ngOnInit(): void {
  }

  onCheckboxChange(event): void {
    const frameworksArray: FormArray = this.checkboxForm.get('frameworks') as FormArray;
    console.log('début' , this.checkboxForm.value);
    console.log(event.source.value);
    // console.log(event as JSON);
    if (event.checked) {
      frameworksArray.push(new FormControl(event.source.value));
      console.log(frameworksArray.value);
      this.checkboxForm.setControl('frameworks' , frameworksArray);
    } else {
      let i = 0;
      frameworksArray.controls.forEach((item: FormControl) => {
        if (item.value === event.source.value) {
          frameworksArray.removeAt(i);
          console.log('Remove :', frameworksArray.value);
        }
        i++;
      });
      this.checkboxForm.setControl('frameworks' , frameworksArray);
    }
    console.log('fin ', this.checkboxForm.value);
  }
}
