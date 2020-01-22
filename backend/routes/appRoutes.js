module.exports = app => {
  const passwordHash = require("password-hash");
  const jwt = require("jsonwebtoken");
  const key = require("../config/token.json");

  const Users = require("../controllers/userController");
  const Movies = require("../controllers/moviesController");

  app.get("/", (req, res) => {
    res.send("Working Fine!!");
  });

  app.post("/addUser", async (req, res) => {
    let name = req.body.name;
    let pass = passwordHash.generate(req.body.pass);
    let resp = await Users.addUser(name, pass);
    res.send(resp);
  });

  app.post("/loginUser", async (req, res) => {
    let name = req.body.name;
    let pass = req.body.pass;
    let role = req.body.role;
    let resp = await Users.loginUser(name, pass, role);
    res.send(resp);
  });

  app.post("/moviesLists", async (req, res) => {
    let uid = jwt.verify(req.body.uid, key.tokenKey).id;
    let resp = await Movies.getMovies(uid);
    res.send(resp);
  });

  app.post("/userType", async (req, res) => {
    let uid = jwt.verify(req.body.uid, key.tokenKey).id;
    let resp = await Users.getUserType(uid);
    res.send(resp);
  });

  app.post("/loginAdmin", async (req, res) => {
    let name = req.body.name;
    let pass = req.body.pass;
    let role = req.body.role;
    if (role === null) role = "admin";
    let resp = await Users.adminLogin(name, pass, role);
    res.send(resp);
  });

  app.post("/movieAdd", async (req, res) => {
    let uid = jwt.verify(req.body.uid, key.tokenKey).id;
    let name = req.body.name;
    let desc = req.body.desc;
    let image = req.body.image;
    let cast = req.body.cast;
    let director = req.body.director;
    let rating = req.body.rating;
    let resp = await Movies.addMovies(
      uid,
      name,
      desc,
      cast,
      director,
      rating,
      image
    );
    res.send(resp);
  });
};
