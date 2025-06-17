import user from '../data/user.js'

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  export const SELECT_RANDOM_USER = user[getRandomInt(0, 11)]
