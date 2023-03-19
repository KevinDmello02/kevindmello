import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-ui',
  templateUrl: './experience-ui.component.html',
  styleUrls: ['./experience-ui.component.scss']
})
export class ExperienceUiComponent implements OnInit {

  constructor() { }

  experiences = [
    {
      company: 'Web Victory',
      text: `R&D for different Modules or Packages to be used in
      upcoming projects.
      Design and Implement UI templates for web development.
      Code Review ,Bug’s identification (Testing).
      Developing API’s for clients web app.
      Backend development using Node js and frontend
      Development using Angular.`
    },
    {
      company: 'Tata ClassEdge',
      text: `Build Video files(HTML Media) using javascript to animate
      and add buttons, controllers and various events.
      Using UI Path tool to create automation processes for
      validating and uploading xml files.`
    },
    {
      company: 'Quantsapp',
      text: `Developing Web Application
      To develop & maintain the main website client facing
      Deployment and maintenance of servers with auto-scaling
      in AWS
      Linking of Rest API's
      Integrating Web-sockets, TCP sockets for real-time data
      feed`
    },
    {
      company: 'Cateina Technologies',
      text: `Build Video files(HTML Media) using javascript to animate
      and add buttons, controllers and various events.
      Using UI Path tool to create automation processes for
      validating and uploading xml files.`
    }
  ]

  ngOnInit(): void {
  }

}
