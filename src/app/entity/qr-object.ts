export class QR {
    
    text:           string;
    imageBase64:    string;


    constructor(text: string, imageBase64: string) {
        this.imageBase64 = imageBase64;
        this.text = text;
    }

}