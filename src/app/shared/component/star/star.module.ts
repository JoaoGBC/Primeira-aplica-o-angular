import { NgModule } from "@angular/core";
import { starComponent } from "./star.component";

@NgModule({
    declarations:[
        starComponent
    ],
    exports:[
        starComponent
    ]
})

export class StarModule{

}