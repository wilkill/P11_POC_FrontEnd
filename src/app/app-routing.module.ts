import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MedheadGPSComponent } from "./medhead-gps/medhead-gps.component";

const routes: Routes = [
    { path: '' , component: MedheadGPSComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}