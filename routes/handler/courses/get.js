const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    id = req.params.id;
    const course = await api.get(`/api/courses/${id}`);
    return res.json(course.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }

    return res
      .status(404)
      .json({ status: "error", message: "Course not found" });
  }
};
