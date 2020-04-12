const ParcelBundler = require("parcel-bundler");
const express = require("express");

const app = express();

const bundler = new ParcelBundler("./index.html");

app.use(bundler.middleware());

app.listen(8080);
