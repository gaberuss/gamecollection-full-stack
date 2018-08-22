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

function updateGame(parent, args, context, info) {
  return context.db.mutation.updateGame({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
      gameConsole: args.gameConsole,
      condition: args.condition,
    },
  })
}

function deleteGame(parent, args, context, info) {
  return context.db.mutation.deleteGame({
    where: {
      id: args.id,
    },
  })
}

module.exports = {
  createGame,
  updateGame,
  deleteGame,
}
