import { Injectable, CanActivate, ExecutionContext, Request } from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate (
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest()
    return validateRequest(request)
  }
}

function validateRequest (request: Request) {
  return true
}
