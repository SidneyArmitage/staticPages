const puppeteer = require("puppeteer");
const Path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('requestfailed', msg => {
    console.log(msg);
  });
  await page.goto("http://localhost:3000/coverletter/index.html", {waitUntil: 'networkidle2'});
  await page.pdf({
    path: Path.join("./", `coverLetter.pdf`),
  });
  await page.goto("http://localhost:3000/resume/index.html", {waitUntil: 'networkidle2'});
  await page.pdf({
    path: Path.join("./", `resume.pdf`),
  });
  console.log("finished");
  process.exit();
})();