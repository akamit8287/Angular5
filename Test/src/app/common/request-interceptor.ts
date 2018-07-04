import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpResponseBase
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs/Observable';
  import { catchError } from 'rxjs/operators';
  import { of } from 'rxjs/observable/of';
  import { _throw } from 'rxjs/observable/throw';
  
  @Injectable()
  export class RequestInterceptor implements HttpInterceptor {
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        catchError(response => {
            if (response instanceof HttpErrorResponse) {
              // Check if this error has a 2xx status
              if (this.is2xxStatus(response)) {
                if(response.status == 201) {
                    return of(new HttpResponse({
                        headers: response.headers,
                        status: response.status,
                        statusText: response.statusText,
                        url: response.url,
                        body: response.error.text
                        }));
                }
                else {
                    // Convert the error to a standard response with a null body and then return
                    return of(new HttpResponse({
                    headers: response.headers,
                    status: response.status,
                    statusText: response.statusText,
                    url: response.url
                    }));
                }
              }
  
            }
  
            // This is a real error, rethrow
            return _throw(response);
          }
        )
      );
    }
  
    private is2xxStatus(response: HttpResponseBase) {
      return response.status >= 200 && response.status < 300 && response.statusText === 'OK';
    }
  
  }