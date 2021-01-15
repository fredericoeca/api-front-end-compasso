import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StarredComponent } from "./starred.component";

const routes: Routes = [
    { path: '', component: StarredComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        StarredComponent
    ]
})
export class StarredComponentModule {}