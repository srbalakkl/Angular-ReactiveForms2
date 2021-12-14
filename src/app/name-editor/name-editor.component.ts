import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormControlName, FormBuilder} from "@angular/forms";


@Component({
    selector: 'app-name-editor',
    templateUrl: './name-editor.component.html',
    styleUrls: ['./name-editor.component.css']
})
// const countryList = ["asdf","asdf","Asdf"];

export class NameEditorComponent implements OnInit {

    contactForm : FormGroup;

    firstName = new FormControl();
    lastName = new FormControl();
    email = new FormControl();
    gender = new FormControl();
    isMarried = new FormControl();

    constructor(fb:FormBuilder) {
        this.contactForm = fb.group({
            firstName : this.firstName,
            lastName : this.lastName,
            email : this.email,
            gender: this.gender,
            isMarried : this.isMarried
        });
    }

    ngOnInit(): void {
    }


    genders = ['male','female'];


    // contactForm = new FormGroup({
    //     firstName: new FormControl('',[]),
    //     lastName: new FormControl(),
    //     email: new FormControl(),
    //     gender: new FormControl('male'),
    //     isMarried: new FormControl(),
    //     // country: new FormControl()
    // });
    // countryList: string = { na};


    onSubmit() {
        console.log(this.contactForm.value);
    }
}
