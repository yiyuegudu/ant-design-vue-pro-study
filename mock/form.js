function form(method) {
  let res = null;
  switch (method) {
    case "POST":
      res = { messge: "ok" };
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = form;
