import { Gasto } from './gasto';

export class Gil {
    nombre: string
    gastos: Gasto[]
    deuda: number
    aPagarle: number

    constructor(name:string){
        this.nombre = name
        this.gastos = []
        this.deuda = 0
        this.aPagarle = 0
    }


    agregarGasto(cuanto: number, descripcion: string){
        const gasto: Gasto = {
            cuanto, descripcion
        }
        this.gastos.push(gasto)
    }
    
}
