import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReposComponent } from "./repos.component";

const routes: Routes = [
    { path: '', component: ReposComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ReposComponent
    ]
})
export class ReposComponentModule {}