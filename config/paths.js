const path = require("path");

module.exports = {
  /**
   * Production distribution files
   */
  dist: path.resolve(__dirname, "../dist"),

  /**
   * Public (static) files
   */
  public: path.resolve(__dirname, "../public"),

  /**
   * Source files
   */
  src: path.resolve(__dirname, "../src"),
};
