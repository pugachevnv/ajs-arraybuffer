export default class ArrayBufferConverter {
    constructor(){
        this.bufferVeiw = null;
    }

    load(buffer) {
        this.bufferVeiw = new Uint16Array(buffer);
    }

    toString() {
        if (!this.bufferVeiw) {
            throw new Error ("Буфер не загружен");
        }

        let result = '';
        for (let i = 0; i < this.bufferVeiw.length; i++){
            result += String.fromCharCode(this.bufferVeiw[i]);
        }
        return result;
    }
}