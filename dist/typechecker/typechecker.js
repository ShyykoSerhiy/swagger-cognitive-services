"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const fs = require("fs");
const generateFileContent = (exampleResponse) => {
    return (`
const a = ${exampleResponse};
export type b = typeof a;
`);
};
exports.getTypeInterface = (exampleResponse) => {
    const tempDir = fs.mkdtempSync("swagger_cognitive");
    const fileName = `${tempDir}/temp.ts`;
    fs.writeFileSync(fileName, generateFileContent(exampleResponse));
    const program = ts.createProgram([fileName], {});
    const typeChecker = program.getTypeChecker();
    let stringifiedType = '{}';
    ts.forEachChild(program.getSourceFile(fileName), (node) => {
        const type = typeChecker.typeToString(typeChecker.getTypeAtLocation(node), undefined, ts.TypeFormatFlags.NoTruncation);
        if (type !== 'any') {
            stringifiedType = type;
        }
    });
    fs.unlinkSync(fileName);
    fs.rmdirSync(tempDir);
    return stringifiedType;
};
//# sourceMappingURL=typechecker.js.map