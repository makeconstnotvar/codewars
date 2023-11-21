function Pipeline(...middlewares) {
  const stack = middlewares

  const push = (...middlewares) => {
    stack.push(...middlewares)
  }

  const execute = async (context) => {
    let prevIndex = -1

    const runner = async (index) => {
      if (index === prevIndex) {
        throw new Error('next() called multiple times')
      }

      prevIndex = index

      const middleware = stack[index]

      if (middleware) {
        await middleware(context, () => {
          return runner(index + 1)
        })
      }
    }

    await runner(0)
  }

  return {push, execute}
}

const pipeline = Pipeline()

pipeline.push((ctx, next) => {
  ctx.test1 = 1;
  next();
})

pipeline.push((ctx, next) => {
  ctx.test2 = 1;
  next();
})

pipeline.execute({ value: 0 })
