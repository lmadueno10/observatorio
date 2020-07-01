let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");;

chai.should();

chai.use(chaiHttp);

describe('Hello world', () => {
    it("GET index", (done) => {
        chai.request(server)
            .get("/")
            .end((err, response) => {
                response.should.have.status(200);
                done();
            })
    })
});