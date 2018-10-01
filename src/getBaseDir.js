import { sep as pathSeperator } from 'path'

export const getBaseDir = destPath => destPath.slice(0, destPath.lastIndexOf(pathSeperator));

export default getBaseDir;
