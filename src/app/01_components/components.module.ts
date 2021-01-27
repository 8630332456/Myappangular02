// import { CommonModule } from "@angular/common";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsersComponent } from './users/users.component';
import { HighlighterDirective } from './highlighter.directive';

@NgModule({
    imports : [CommonModule],
    declarations : [UsersComponent, HighlighterDirective],
    exports : [UsersComponent],
})

export class  ComponentsModule{}