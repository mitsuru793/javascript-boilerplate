import User from "../User"

describe('User', () => {
  describe('constructor', () => {
    it('can do', () => {
      const user = new User()
      expect(user).toBeInstanceOf(User)
    })
  })
})
