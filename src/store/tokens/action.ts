export type Action = {type:"ADD_TOKEN", payload: string};

export const addToken = (token:string): Action => ({ // dados temporários que não ficam armazenados no servidor - segurança! 
    type: "ADD_TOKEN",
    payload: token
})