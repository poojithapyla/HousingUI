import { Component, Input } from "@angular/core";
import { DefaultTitleStrategy } from "@angular/router";
import { IProperties } from "src/app/interface/properties";

@Component ({
    selector: 'app-property-card',
    templateUrl: './property-card.component.html',
    styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
    @Input()
    details!: IProperties;
}