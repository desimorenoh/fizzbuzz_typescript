import FizzBuzz from '../src/app'


describe("FizzBuzz Calculator", () => {
  let fizzBuzz: FizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz()
  })
  describe("message", () => {
    it("should return hello world", () => {
	    expect(fizzBuzz.valueOfNumber(1)).toBe("Hello World")
    })
  })
})
