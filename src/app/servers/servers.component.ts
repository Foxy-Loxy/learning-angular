import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serversName = ['First Server', 'Second Server', 'Third Server'];
  serverName = '';

  constructor() { }

  addServer() {
    this.serversName.push(this.serverName);
  }

  ngOnInit() {
  }

}
