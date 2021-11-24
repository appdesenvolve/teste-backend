import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("link mongo", {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001);