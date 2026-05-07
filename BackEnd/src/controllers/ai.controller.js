// const aiService = require("../services/ai.service")


// module.exports.getReview = async (req, res) => {

//     const code = req.body.code;

//     if (!code) {
//         return res.status(400).send("Prompt is required");
//     }

//     const response = await aiService(code);


//     res.send(response);

// }

const aiService = require("../services/ai.service");

const getReview = async (req, res) => {
    try {
        
        // const code = req.query.prompt;

        const code = req.body.code;

        // const { code } = req.body;

        if (!code) {
            return res.status(400).send("Prompt is required");
        }

        const response = await aiService(code);

        res.send(response); 
        
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
};

module.exports = { getReview };