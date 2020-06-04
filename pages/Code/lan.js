import dbConnect from "../../utils/dbConnect";
import CodingTest from "../../models/CodingTest";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST": {
      try {
        const codeResult = await CodingTest.create(req.body);
        console.log(req.body);

        res.status(201).json({ success: true, data: codeResult });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    }
    default: {
      res.status(400).json({ success: false });
      break;
    }
  }
};
