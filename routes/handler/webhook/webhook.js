const { default: axios } = require("axios");
const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_ORDER_PAYMENT } = process.env;

const api = apiAdapter(URL_SERVICE_ORDER_PAYMENT);

module.exports = async (req, res) => {
  try {
    const webhook = await axios.post(
      "http://127.0.0.1:8081/api/webhook",
      req.body
    );
    return res.json(webhook.data);
  } catch (error) {
    console.log("error webhook", error);
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }
    return res.status(error.response.status).json(error.response.data);
  }
};
