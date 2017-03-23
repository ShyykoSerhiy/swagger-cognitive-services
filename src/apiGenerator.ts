import { generate, SwaggerApi } from './generator';
import * as fs from 'fs';
import * as handlebars from 'handlebars';

const swaggerDirPath = `./src/swagger`;
const apiDirPath = './src/api';
const indexApiFilePath = './src/index.ts';
if (!fs.existsSync(apiDirPath)) {
    fs.mkdirSync(apiDirPath);
}
let api = [] as { apiName: string, apiPath: string }[];
fs.readdirSync(swaggerDirPath).forEach((fileName) => {
    const filePath = `${swaggerDirPath}/${fileName}`;
    const swaggerApi = JSON.parse(fs.readFileSync(filePath).toString('utf-8')) as SwaggerApi;
    const apiFileNamePath = `${fileName.replace('.json', '.ts')}`;
    const resultApiPath = `${apiDirPath}/${apiFileNamePath}`;
    const name = fileName[0].toUpperCase() + fileName.replace('.json', '').substring(1);
    api.push({ apiName: name[0].toUpperCase() + name.substring(1) + 'API', apiPath: `./api/${apiFileNamePath.replace('.ts', '')}` });

    fs.writeFileSync(resultApiPath, generate(name, swaggerApi));
});

const template = handlebars.compile(fs.readFileSync(`./src/handlebars/index.handlebars`).toString('utf-8'));
fs.writeFileSync(indexApiFilePath, template({ api }));

