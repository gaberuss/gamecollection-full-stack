const info = () => 'This is my game collection API'

function inventory(root, args, context, info) {
  return context.db.query.games({}, info)
}

function game(root, args, context, info) {
  return context.db.query.game(
    {
      where: {
        id: args.id,
      },
    },
    info
  )
}

module.exports = {
  info,
  inventory,
  game,
}
