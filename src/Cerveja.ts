import { Estoque } from "./Estoque";

class Cerveja extends Estoque{
    public guardarEstoque(hold: string): void {
        console.log(`Estoque guardado: ${hold}`)
    }
}

export {Cerveja}