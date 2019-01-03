import { Component } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  templateUrl: 'bus.component.html'
})
export class BusComponent {
  public largeModal;
  
  masterData = {
    listData: [],
    busType_List: [
      {
        id: 1,
        name: "Executive"
      },
      {
        id: 2,
        name: "Ekonomi"
      },
    ],
    modalForm: {
      busName: '',
      busType: '',
      busSeat: 0,
      busClass: '',
    }
  }

  constructor() { }

  saveData() {
    let data = {
      busName: this.masterData.modalForm.busName,
      busType: this.masterData.modalForm.busType,
      busSeat: this.masterData.modalForm.busSeat,
      busClass: this.masterData.modalForm.busClass,
    }

    console.log("save : ", data)
  }
}
