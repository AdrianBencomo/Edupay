import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../app/services/auth.service";

export const headerInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
    const authService = inject(AuthService);
    const token = authService.getToken();
    if (token != '') {
        const authReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
        return next(authReq);
    }
    return next(req);
}