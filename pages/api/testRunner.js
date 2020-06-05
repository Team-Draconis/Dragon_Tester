const { exec } = require("child_process");

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        console.log(req.body, "Code in API Folder");
        exec("ls -la", (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
        });
        res.status(200).json({ data: req });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
