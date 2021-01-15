import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user.component";

const routes: Routes = [
    { path: '', component: UserComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        UserComponent
    ]
})
export class UserComponentModule {}