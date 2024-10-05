import ArrayBufferConverter from "./arraybufferconverter";
import getBuffer from "./arraybuffer";

const buffer = getBuffer();
const converter = new ArrayBufferConverter();
converter.load(buffer);
console.log(converter.toString());