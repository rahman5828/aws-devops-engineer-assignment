const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        application: "AWS DevOps Assignment",
        status: "Running",
        message: "Application deployed successfully on AWS EC2 using Docker.",
        timestamp: new Date()
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
