import dbConnect from "../../utils/dbConnect";
import CodingTest from "../../models/CodingTest";

dbConnect();

// for register
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const codeTest = await CodingTest.find({});
        res.status(200).json({ data: codeTest });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        let codeTest = await CodingTest.create(req.body);
        console.log(req.body);
        console.log(typeof req.body);
        res.status(201).json({ data: codeTest });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
