import { getData, SwaggerApi } from './generator';
import * as fs from 'fs';

const swaggerDirPath = `./src/swagger`;
const dataDirPath = './src/data';
if (!fs.existsSync(dataDirPath)) {
    fs.mkdirSync(dataDirPath);
}
fs.readdirSync(swaggerDirPath).forEach((fileName) => {
    const filePath = `${swaggerDirPath}/${fileName}`;
    const swaggerApi = JSON.parse(fs.readFileSync(filePath).toString('utf-8')) as SwaggerApi;
    const resultApiPath = `${dataDirPath}/${fileName.replace('.json', '.json')}`;
    const name = fileName[0].toUpperCase() + fileName.replace('.json', '').substring(1);

    fs.writeFileSync(resultApiPath, JSON.stringify(getData(name, swaggerApi), null, 2));
});

