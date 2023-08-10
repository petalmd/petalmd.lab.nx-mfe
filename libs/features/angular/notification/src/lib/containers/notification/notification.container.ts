import { Component, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { json } from '@codemirror/lang-json';
import { RenderComponent } from "../../components/render/render.component";

@Component({
  selector: 'petal-notification',
  templateUrl: './notification.container.html',
  styleUrls: ['./notification.container.scss'],
})
export class NotificationContainerComponent {
  @ViewChild(RenderComponent, {static : true}) child : RenderComponent;
  public languages = { css: css(), html: html(), json: json() };
  public form = this.fb.group({
    html: this.fb.control<string>(`<div class="header">
  <div class="title">Transfert à approuver</div>
  <div class="publication">15 mai</div>
  <div class="dismiss">X</div>
</div>
<div class="group">{{ data.group }}</div>
<ul class="tasks">
  {{#each data.tasks}}
  <li>
    <div class="task">{{ this.name }}</div>
    <div class="datetime">
      <div class="date">Lundi 4 février 2023</div>
      <div class="time">12h à 18h</div>
    </div>
  </li>
  {{/each}}
</ul>`, { nonNullable: true }),
    css: this.fb.control<string>(`.header {
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
  border-bottom: 1px solid #d8e2f4;
  color: #434c5c;
  font-size: 0.75rem;
  display: flex;
  margin-bottom: 1em;
}
  
.title {
  text-transform: uppercase;
  flex: 1;
  font-weight: bold;
}

.tasks {
  list-style: none;
  padding-left: 0px;
  margin: 0.25em 0;
}

.group, .task {
  font-size: 0.85em;
}

.task {
  font-weight: bold;
  color: #2e8be0;
}
    
.publication {
  flex-shrink: 0;
  color: rgba(67, 76, 92, 0.6);
}
    
.dismiss {
  flex-shrink: 0;
  margin-left: 1em;
  background-color: #2e8be0;
  border-radius: 50%;
  height: 1.1rem;
  width: 1.1rem;
  color: white;
  text-align: center;
  cursor: pointer;
}
    
.datetime {
  display: flex;
  font-size: 0.85em;
}
    
.date {
  flex: 2;
}
    
.time {
  flex: 1;
}`, { nonNullable: true }),
    json: this.fb.control<string>(`{
  "template": "transfer_to_approve",
  "data": {
    "group": "SERV-CHRV",
    "tasks": [
      { "name": "Mâcher de la gomme" }
    ]
  }
}`, { nonNullable: true }),
  });

  constructor(private fb: FormBuilder) {}

  public render() {
    this.child.render();
  }
}
