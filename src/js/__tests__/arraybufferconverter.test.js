import ArrayBufferConverter from "../arraybufferconverter";
import getBuffer from "../arraybuffer";

test('buffer загружается и конвертируется в строку', () => {
    const buffer = getBuffer();
    const converter = new ArrayBufferConverter();
    converter.load(buffer);
    
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
  
  test('Ошибка, если buffer не загружен', () => {
    const converter = new ArrayBufferConverter();
  
    expect(() => converter.toString()).toThrow('Буфер не загружен');
  });