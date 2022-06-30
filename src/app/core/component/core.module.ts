import { NgModule } from "@angular/core";
import { navBarComponent } from "./nav-bar/nav-bar.component";
import { RouterModule } from "@angular/router";
import { error404Component } from "./erro-404/erro-404.component";

@NgModule({
    declarations:[
        navBarComponent,
        error404Component
    ],
    imports:[
        RouterModule
    ],
    exports:[
        navBarComponent
    ]
})

export class coreModule{

}