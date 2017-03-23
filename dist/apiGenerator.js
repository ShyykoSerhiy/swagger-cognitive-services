"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
const fs = require("fs");
const handlebars = require("handlebars");
const swaggerDirPath = `./src/swagger`;
const apiDirPath = './src/api';
const indexApiFilePath = './src/index.ts';
if (!fs.existsSync(apiDirPath)) {
    fs.mkdirSync(apiDirPath);
}
let api = [];
fs.readdirSync(swaggerDirPath).forEach((fileName) => {
    const filePath = `${swaggerDirPath}/${fileName}`;
    const swaggerApi = JSON.parse(fs.readFileSync(filePath).toString('utf-8'));
    const apiFileNamePath = `${fileName.replace('.json', '.ts')}`;
    const resultApiPath = `${apiDirPath}/${apiFileNamePath}`;
    const name = fileName[0].toUpperCase() + fileName.replace('.json', '').substring(1);
    api.push({ apiName: name[0].toUpperCase() + name.substring(1) + 'API', apiPath: `./api/${apiFileNamePath.replace('.ts', '')}` });
    fs.writeFileSync(resultApiPath, generator_1.generate(name, swaggerApi));
});
const template = handlebars.compile(fs.readFileSync(`./src/handlebars/index.handlebars`).toString('utf-8'));
fs.writeFileSync(indexApiFilePath, template({ api }));
//# sourceMappingURL=apiGenerator.js.map