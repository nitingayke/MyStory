import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("*", (req, res) => {
    return res.send("Hi we are live now");
});

const startServer = async () => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
};

startServer();
