import { Component } from '@angular/core';
import { ApiService } from '../_service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  // public items: Array<{ title: string; note: string; icon: string }> = [];

  constructor(private api: ApiService) {

    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }



  }


  name: string;
  dob: string;
  private _opened: boolean = false;

  records: any
  oldRecord: any
  update: boolean = false;
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  data = {
    action: "getrecord",
    email_id: sessionStorage.getItem('email_id'),
    password: sessionStorage.getItem('password')
  }



  Updatedata = {
    vaccine_name: "",
    hospital: "",
    vaccine_taken_date: "",
    comment: "",
    action: "",
    email_id: "",
    password: ""
  }

  vaccine: string = "";
  hospital: string = "";
  date: any = "";
  comments: string = "";


  disabledAgreement: boolean = true;
  changeCheck(event) {
    this.disabledAgreement = !this.disabledAgreement;
  }
  disabledAgreementU: boolean = true;
  changeCheckU(event) {
    this.disabledAgreementU = !this.disabledAgreementU;
  }

  submit() {
    this.Updatedata.vaccine_name = this.vaccine
    this.Updatedata.hospital = this.hospital
    this.Updatedata.vaccine_taken_date = this.date
    this.Updatedata.comment = this.comments
    this.Updatedata.action = "insert"
    this.Updatedata.email_id = sessionStorage.getItem("email_id")
    this.Updatedata.password = sessionStorage.getItem("password")




    if (this.Updatedata.vaccine_name == "" || this.Updatedata.hospital == "" || this.Updatedata.vaccine_taken_date == "") {
      alert("Enter all details")
    } else {
      this.api.addRecord(this.Updatedata).subscribe((res) => {


        if (res) {
          alert("Record added succesfully")
          this.vaccine = ""
          this.hospital = ""
          this.date = ""
          this.comments = ""


          this.api.getRecords(this.data).subscribe((res) => {
            this.records = res
          })

        } else {
          alert("Something went wrong please try later")

        }


      })
    }




  }



  ngOnInit() {
    this.api.getName().subscribe((res) => {
      console.log(res)
      this.name = res[0][0].toString()
      this.dob = res[0][1].toString()
    })

    this.api.getRecords(this.data).subscribe((res) => {
      this.records = res
    })


  }

  DeleteRecord(record) {
    let data = {
      action: "delete",
      email_id: sessionStorage.getItem('email_id'),
      password: sessionStorage.getItem('password'),
      vaccine_name: record[2],
      hospital: record[3],
      vaccine_taken_date: record[4],
      comment: record[5]


    }
    this.api.delete(data).subscribe((res) => {

      if (res) {
        alert("Record Deleted")
        this.api.getRecords(this.data).subscribe((res) => {
          this.records = res
        })

      }

    });


  }



  UpdateRecord(record) {
    this.update = true;
    this.oldRecord = {
      action: "delete",
      email_id: sessionStorage.getItem('email_id'),
      password: sessionStorage.getItem('password'),
      vaccine_name: record[2],
      hospital: record[3],
      vaccine_taken_date: record[4],
      comment: record[5]
    }

    this.vaccine = record[2]
    this.hospital = record[3]
    this.date = record[4]
    this.comments = record[5]




  }








  Update() {

    this.Updatedata.vaccine_name = this.vaccine
    this.Updatedata.hospital = this.hospital
    this.Updatedata.vaccine_taken_date = this.date
    this.Updatedata.comment = this.comments
    this.Updatedata.action = "insert"
    this.Updatedata.email_id = sessionStorage.getItem("email_id")
    this.Updatedata.password = sessionStorage.getItem("password")

    this.api.delete(this.oldRecord).subscribe((res) => {
      console.log(res)
    });

    

    if (this.Updatedata.vaccine_name == "" || this.Updatedata.hospital == "" || this.Updatedata.vaccine_taken_date == "") {
      alert("Enter all details")
    } else {
      this.api.addRecord(this.Updatedata).subscribe((res) => {


        if (res) {
          alert("Record updated succesfully")
          this.vaccine = ""
          this.hospital = ""
          this.date = ""
          this.comments = ""
          this.update=false

          this.api.getRecords(this.data).subscribe((res) => {
            this.records = res
          })

        } else {
          alert("Something went wrong please try later")

        }


      })

      
    }

  }

}
