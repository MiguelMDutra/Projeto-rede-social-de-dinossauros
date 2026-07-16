module.exports = (res, status = 200, data = {}, message = "") => {
  if (data) {
    return res.status(status).json(data);
  } else {
    return res.status(status).json({ message: message });
  }
};
