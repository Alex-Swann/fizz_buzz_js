
describe ('FizzBuzz', function(){
  var fizzBuzz;

  beforeEach(function() {
    game = new FizzBuzz();
  });

  describe('#play', function(){
    it("should return '1' when number is 1", function(){
      expect(game.play(1)).toEqual('1');
    });

    it("should return 'fizz' when number is 3", function(){
      expect(game.play(3)).toEqual('fizz');
    });

    it("should return 'fizz' when number is divisible by 3", function(){
      expect(game.play(33)).toEqual('fizz');
    });

    it("should return 'buzz' when number is 5", function(){
      expect(game.play(5)).toEqual('buzz');
    });

    it("should return 'buzz' when number is divisible by 5", function(){
      expect(game.play(25)).toEqual('buzz');
    });

    it("should return 'fizzbuzz' when number is divisible by 15", function(){
      expect(game.play(30)).toEqual('fizzbuzz');
    });

    it("should throw an error if number outside of range 1-100", function(){
      expect( function(){ game.play(101);} ).toThrow(new Error('Number outside of range!'));
    });

    it("should throw an error if number negative", function(){
      expect( function(){ game.play(-1);} ).toThrow(new Error('Number outside of range!'));
    });
  });
});
