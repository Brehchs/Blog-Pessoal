import { Action } from "./action";

export interface TokenState { // criada aqui porque só vai ser usada aqui - o nome poderia ser qualquer um
    tokens: string,
} 

const initialState = { 
    tokens: "" // estado inicial da variável Token - começa vazia. 
}

export const tokenReducer = (state: TokenState = initialState,action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": { // repetir para cada uma das informações que eu preciso guardar
            return {tokens: action.payload} // payload - valor interno 
        }
        default: return state // quando não chega mais informação - finalizando 
    }
}
