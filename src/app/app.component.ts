import { Component } from '@angular/core';
import { faTerminal, faVolumeUp, faServer, faUsers, faDollarSign, faGraduationCap, faMobileAlt, faBug, faHandsHelping, faLaptopCode, faHandSpock, faChalkboardTeacher, faNetworkWired, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agdev';

  milestones = [
    { icon: faGraduationCap, 
      name: '\'08: BS Comp Sci'},
    { icon: faDollarSign, 
      name: '\'10: Payments features apprentice'},
    { icon: faBug, 
      name: '\'12: Code review conqueror & bug assassin' },
    { icon: faMobileAlt, 
      name: '\'13: Project - ',
      linkText: 'Mobile App + Swiper',
      linkHref: 'https://play.google.com/store/apps/details?id=com.blackbaud.merchantservicesmobile&hl=en_US' },
    { icon: faUsers, name: '\'13: Dawn of the Mobile COE' },
    { icon: faHandsHelping, name: '\'14: Began as a peer mentor' },
    { icon: faLaptopCode, 
      name: '\'14: Hack-a-thon mobile app ',
      linkText: 'For Goodness Shake',
      linkHref: 'https://npengage.com/nonprofit-technology/for-goodness-shake-the-app-that-matches-your-passion-with-a-nonprofit-near-you/' },
    { icon: faChalkboardTeacher, name: '\'15: Scrum team dev lead' },
    { icon: faServer, name: '\'15: Microservices adept' },
    { icon: faProjectDiagram, name: '\'16: Project leader - Payments modernizations' },
    { icon: faNetworkWired, name: '\'17: First serverless payments feature' },
    { icon: faVolumeUp, name: '\'17: BBCon speaker - Hack-a-thon finalist' },
    { icon: faHandSpock, name: '\'18: Modernizations go-live and ramp up' },
    { icon: faTerminal, name: '\'19: Payments & Mobile COE - Architect. Mentor. Advocate. Leader.' }
  ];
}
