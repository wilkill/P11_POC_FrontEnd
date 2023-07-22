import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

@NgModule({
    imports: [
        RouterModule.forRoot([]),
        RouterTestingModule
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}