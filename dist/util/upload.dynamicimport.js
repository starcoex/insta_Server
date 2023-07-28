// import { dynamicImport } from "tsimportlib";
const dynamicImport = async (specifier) => {
    const dynamicImportModule = new Function("specifier", "return import(specifier)");
    return await dynamicImportModule(`${specifier}`);
};
export default dynamicImport;
