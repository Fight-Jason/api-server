import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

/**
 * 在graphql解析器中获取当前经过身份验证的用户，需要定义一个@CurrentUser()装饰器
 */
export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req.user
  }
)

// 调用方法
// @Query(returns => User)
// @UseGuards(GqlAuthGuard)
// whoAmI(@CurrentUser() user: User) {
//   return this.usersService.findById(user.id);
// }
