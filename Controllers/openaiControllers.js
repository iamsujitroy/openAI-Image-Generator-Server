const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  const { imageDescription, size } = req.body;
  const imageSize =
    size === "large" ? "1024x1024" : size === "medium" ? "512x512" : "256x256";
  try {
    const response = await openai.createImage({
      prompt: imageDescription,
      n: 3,
      size: imageSize,
    });
    res.json({
      success: true,
      data: response.data.data,
    });
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({
        success: false,
        data: error.response.data,
      });
    } else {
      res.status(error.response.status).json({
        success: false,
        data: error.message,
      });
    }
  }
};

module.exports = { generateImage };
