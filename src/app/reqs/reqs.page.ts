import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-reqs',
  templateUrl: './reqs.page.html',
  styleUrls: ['./reqs.page.scss'],
})
export class ReqsPage implements OnInit {

  constructor(private storage:Storage) { }
  public content = [
    { val: 'Register your Business', isChecked: false,
      info: 'There are three types of business ownership, and there are two offices that process the registration of your business based on ownership. '+
      'For sole proprietorship, register with the Department of Trade and Industry (DTI). '+
      'For partnerships and corporations, the Securities and Exchange Commission (SEC) can accommodate your registration. It is in this process that you will register your business name. ',
      location: 'DTI/SEC Government Office'
    },
    { val: "Mayor's Business Permit", isChecked: false,
      info: "Mayor's business permit is the document that will give you the license to operate in the city or municipality of your choice and payment of your local business taxes. The local government unit of the place where you want your business to operate is responsible for processing your business permit. In order to obtain this permit, accomplish the next documents in this list.",
      location: 'Business Permit and Licensing Office'
    },
    { val: "Barangay Clearance", isChecked: false,
      info: "This is a requirement to acquire a business permit. This document is a requirement before the municipality issues any license for the business or activity. The barangay clearance is obtained from the barangay where the intended business of activity is located or conducted.",
      location: "Barangay Hall"
    },
    { val: "Tax Declartaion", isChecked: false,
      info: "This is a requirement to acquire a business permit. The tax declaration serves as the municipal permanent record for every property owner (land, building & machinery).",
      location: "Municipal Assessor's Office"
    },
    { val: "Sketch of Location", isChecked: false,
      info: "This is a requirement to acquire a business permit. This document contains the location of your business. It is an outline map drawn from observation rather than from exact survey measurements and showing only the main features of the area. You can create by sketching or use free online tools to create one. ",
      location: "Sketch or Use Online Applications"
    },
    { val: "Occupancy Permit", isChecked: false,
      info: "This is a requirement to acquire a business permit. The purpose of obtaining the said permit is to confirm that the house or building is in a suitable living condition considering its compliance to the provisions of the code and to the submitted plans and specifications.",
      location: "City Engineer's Office"
    },
    { val: "Public Liability Insurance", isChecked: false,
      info: "This is a requirement to acquire a business permit. Public liability insurance refers to business insurance that covers claims by the general public for medical expenses and other costs resulting from injuries, death, and property damage involving your business. The general public includes customers, visitors, and delivery personnel.",
      location: "Any Business Insurance Providers"
    },
    { val: "Cedula", isChecked: false,
      info: "This is a requirement to acquire a business permit. A cedula is a document issued to Filipinos upon payment of a residence tax. At present, the cedula is one of the basic requirements for most government transactions. It can also serve as valid identification for individuals and corporations residing or located in the same municipality where it is acquired.",
      location: "Barangay Hall, City Hall, Municipality Hall"
    },
    { val: "Fire Permit", isChecked: false,
      info: "This is a requirement to acquire a business permit. The Fire Safety Inspection Certificate issued by the Bureau of Fire Protection serves as an assurance that a certain facility, structure or building/occupancy has been duly inspected and deemed complying to the Fire Code of the Philippines",
      location: "Bureau of Fire Protection Office"
    },
    { val: "Sanitary Permit", isChecked: false,
      info: "This is a requirement to acquire a business permit. Sanitary Permit is a requirement in the issuance of business permit. Health permit in addition to sanitary permit is a requirement in the issuance of business permit for food establishment. Observance of good environmental sanitation could prevent the occurrence of sanitation related illnesses and disease outbreaks.",
      location: "Department of Public Health and Social Services Office"
    },
  ];
  

  ngOnInit() {
  }

}
