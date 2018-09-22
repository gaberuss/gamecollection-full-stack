function newGameSubscription(parent, args, context, info) {
  return context.db.subscription.game(
    { where: { mutation_in: ['CREATED'] } },
    info
  )
}

const newGame = {
  subscribe: newGameSubscription,
}

module.exports = {
  newGame,
}
