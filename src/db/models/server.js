const api = require("../../app.js");

const PORT = 3000;

api.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
