import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private accSrv:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("oooolllllldddd" ,request)
    let newRequset = request.clone({
      headers : request.headers.set("authorization",`bearer ${this.accSrv.getuser().token}`)
    })
    console.log("nnnnnewwww",newRequset)
    return next.handle(newRequset);
  }
}
