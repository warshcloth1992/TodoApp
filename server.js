const ParcelBundler = require("parcel-bundler");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser"); 

const app = express();
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {  }
}))

app.use(bodyParser.json())

app.post("/login", (request, response) => {
    request.body.username
    request.body.password
    request.session.signedin = true
    return response.status(200).send();
});

const router = express.Router();
app.use("/user", router);

router.use((request, response, next) => {
    if (!request.session.signedin) return response.status(401).send();
    return next();
})

router.get("/data", (request, response) => {
  response.json([
    {
      name: "Mike",
      task: "Day Dream"
    },
    {
      name: "Kell",
      task: "Dilly Dally"
    },
    {
      name: "Careem",
      task: "Lay About"
    },
    {
      name: "Yanis",
      task: "Chill Like A Villan"
    }
  ]);
})

const bundler = new ParcelBundler("./index.html");

app.use(bundler.middleware());

app.listen(8080);
