var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./signup.component";
import { LogOutComponent } from "./logout.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { authRouting } from "./auth.routing";
import { AuthGuard } from "./auth-guard.service";
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    NgModule({
        declarations: [
            LogOutComponent,
            SignUpComponent,
            SignInComponent,
        ],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            authRouting
        ],
        providers: [
            AuthGuard
        ]
    })
], AuthModule);
export { AuthModule };
