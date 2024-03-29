const puppeteer = require("puppeteer");
const Path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('requestfailed', msg => {
    console.log(msg);
  });
  await page.goto("http://localhost:3000/index.html", {waitUntil: 'networkidle2'});
  await page.pdf({
    path: Path.join("./", `${process.argv[2]}.pdf`),
  });
  console.log("finished");
  process.exit();
})();