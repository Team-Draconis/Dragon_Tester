const { exec } = require("child_process");

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        // console.log(req.body, "Code in API Folder");
        let result;
        exec("yarn test:unit", (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          res.status(200).json({ data: stdout });
          result = stdout;
        });
        // describe("Array", function () {
        //   describe("#indexOf()", function () {
        //     it("should return -1 when the value is not present", function () {
        //       assert.equal([1, 2, 3].indexOf(4), -1);
        //     });
        //   });
        // });

        // res.status(200).json({ data: result });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "GET":
      try {
        console.log(req.body, "Code in API Folder");
        // exec("yarn test", (error, stdout, stderr) => {
        //   if (error) {
        //     console.log(`error: ${error.message}`);
        //     return;
        //   }
        //   if (stderr) {
        //     console.log(`stderr: ${stderr}`);
        //     return;
        //   }
        //   console.log(`stdout: ${stdout}`);
        // });
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
