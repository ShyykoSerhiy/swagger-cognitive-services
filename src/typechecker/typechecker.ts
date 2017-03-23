import * as ts from "typescript";
import * as fs from "fs";
import * as util from 'util';

const generateFileContent = (exampleResponse: string) => {
    return (
        `
const a = ${exampleResponse};
export type b = typeof a;
`
    );
}

export const getTypeInterface = (exampleResponse: string) => {
    const tempDir = fs.mkdtempSync("swagger_cognitive");
    const fileName = `${tempDir}/temp.ts`
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
}
