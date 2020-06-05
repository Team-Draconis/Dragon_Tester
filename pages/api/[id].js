import dbConnect from "../../utils/dbConnect";
const CodingTest = require("../../models/CodingTest");

dbConnect();

// for register
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const codeTest = await CodingTest.findById(req.query.id);
        res.status(200).json({ data: codeTest });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
