import express from 'express';
import request from 'supertest';
import { authRoute } from '../../route';


const app = express();

app.use(express.json())
app.use(authRoute);


describe("POST /user", () => {
    describe("when passed a username and password", () => {

        test('should respond with a 201 & content-type "application/json', async () => {
            const response = await request(app)
                .post('/login')
                .send({
                    email: "yo@mail.com",
                    password: "1234"
                });

            expect(response.status).toEqual(200);
            expect(response.headers['content-type']).toContain('application/json');
        })
        test('should respond with a json object that contains the jwt', async () => {

            const response = await request(app)
                .post('/login')
                .send({
                    email: "yo@mail.com",
                    password: "1234"
                });
                // console.log(response.body);

            expect(response.status).toEqual(200);
            expect(response.headers['content-type']).toContain('application/json');
            expect(response.body.token).toBeDefined();

        // should save the username and password in the database
        // should respond with a json object that contains the id from the database. (probably jwt in the real world)
    })

})
    describe("when the email or password is missing", () => {



        test("should return a 400 status code to show there was a user error.", async () => {
            const response = await request(app)
                .post('/login')
                .send({ password: "1234" });

            expect(response.status).toEqual(400);
        })
        // should return a json object that contains an error message.
        // should specify json as the content type in the http header.
    })
})