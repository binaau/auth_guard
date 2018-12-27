import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '~/services/login';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private auth: LoginService) { }

    canActivate(): boolean {
        if (this.auth.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/test/login']);
        return false;
    }

}
