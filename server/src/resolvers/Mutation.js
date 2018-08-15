function createGame(parent, args, context, info) {
  return context.db.mutation.createGame(
    {
      data: {
        name: args.name,
        gameConsole: args.gameConsole,
        condition: args.condition,
      },
    },
    info
  )
}

module.exports = {
  createGame,
}
