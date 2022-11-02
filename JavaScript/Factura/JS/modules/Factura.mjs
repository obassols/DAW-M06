export class Factura {
    constructor(code, imposableBase) {
        this.code = code;
        this.articles = new Array();
        this.imposableBase = imposableBase;
    }
    calcIva() {
        if (this.imposableBase != 0) {
            this.iva = this.imposableBase * 0.21;
            this.iva = Math.round(this.iva * 100) / 100;
            this.totalImport = this.imposableBase + this.iva;
            this.totalImport = Math.round(this.totalImport * 100) / 100;
        } else {
            this.iva = 0;
            this.totalImport = 0;
        }
    }
}