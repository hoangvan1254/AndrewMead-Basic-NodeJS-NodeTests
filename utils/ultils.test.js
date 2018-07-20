const expect = require('expect');
const ultils = require('./ultils');

describe('server', () => {
    describe('#GET /', () => {
        it('should verify first and last names are set', () => {
            var user = {location: 'Philipin', age: 20};
            var res = ultils.setName(user, 'Dmm cho');
            
            expect(res).toInclude({
                firstName: 'Dmm',
                lastName: 'cho'
            });
        });
    });

    describe('#GET /user', () => {
        it('should expect some values', () => {
            // expect(12).toNotBe(11);
            // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
            // expect([2,3,4]).toExclude(1);
            expect({
                name: 'Andrew',
                age: 25,
                location: 'Philipin'
            }).toExclude({
                age: 23
            });
        });
    });    
});

describe('utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = ultils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
            // if(res !== 44){
            //     throw new Error(`Expected 44, but got ${res}`)
            // }
            
        });
    });

    it('should async add 2 numbers', (done) => {
        ultils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should async square a number', (done) => {
        ultils.asyncSquare(2, (square) => {
            expect(square).toBe(4).toBeA('number');
            done();
        });
    });
});


    // if(res !== 4){
    //     throw new Error(`Expected 4, but got ${res}`)
    // }




