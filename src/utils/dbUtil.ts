import path, { PlatformPath } from "path";
import fs from "fs";
import { Type } from "typescript";

export const dbUrl = path.resolve(__dirname, "..", "data");
export const dbFindUrl = (fileName: string) => path.resolve(dbUrl, fileName);
export const dbFiles = () => {
  const files = fs.readdirSync(dbUrl);
  return files;
};
export const dbAllDataInFolder = async (
  pathInstance: PlatformPath
): Promise<Array<Object> | Object> => {
  const listFolder = dbFiles();
  let result = listFolder.length > 1 ? [] : {};
  listFolder.forEach(async (folder) => {
    const folderPath = pathInstance.resolve(dbUrl, folder);
    const files = fs.readFileSync(folderPath, {
      encoding: "utf-8",
    });

    if (Array.isArray(result)) {
      if (files.startsWith("[")) return result.push(JSON.parse(files));
      return result.push(files);
    }

    return (result = JSON.parse(files));
  });
  return result;
};

export const dbSearchFile = async (fileName: string): Promise<Object> => {
  if (!fileName.includes(".")) fileName = fileName.concat(".json");
  const listFolder = dbFindUrl(fileName);
  const files = fs.readFileSync(listFolder, {
    encoding: "utf-8",
  });
  const result = JSON.parse(files);

  return result;
};
