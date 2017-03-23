"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
const fs = require("fs");
const swaggerDirPath = `./src/swagger`;
const dataDirPath = './src/data';
if (!fs.existsSync(dataDirPath)) {
    fs.mkdirSync(dataDirPath);
}
fs.readdirSync(swaggerDirPath).forEach((fileName) => {
    const filePath = `${swaggerDirPath}/${fileName}`;
    const swaggerApi = JSON.parse(fs.readFileSync(filePath).toString('utf-8'));
    const resultApiPath = `${dataDirPath}/${fileName.replace('.json', '.json')}`;
    const name = fileName[0].toUpperCase() + fileName.replace('.json', '').substring(1);
    fs.writeFileSync(resultApiPath, JSON.stringify(generator_1.getData(name, swaggerApi), null, 2));
});
//# sourceMappingURL=dataGenerator.js.map