import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token= localStorage.getItem("token");
  const newreq=req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }

  })

  return next(newreq);
};
