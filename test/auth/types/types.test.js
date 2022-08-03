import { types } from "../../../src/auth"

describe('Pruebas en "types.js" ', () => { 
    
    test('debe de regresar estos Types ', () => {
        expect(types).toEqual({
            login:  '[Auth] Login',
            logout: '[Auth] Logout'
        })
        
    });
});