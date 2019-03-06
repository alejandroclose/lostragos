//
// Shared route constants for LosTRAGOS.com
//

const ROUTE_CONSTANTS = {
  SHELL: {
    NO_CONTENT: { path: '**'}
  },
  RECETAS: {
    RECETAS_MAIN: {
      fullPath: '/recetas',
      path: 'recetas',
    }
  },
  OCASIONES: {
    OCASIONES_MAIN: {
      fullPath: '/ocasiones',
      path: 'ocasiones'
    }
  },
  BEBIDAS_ESPIRITUOSAS: {
    BEBIDAS_ESPIRITUOSAS_MAIN: {
      fullPath: '/bebidas-espirituosas',
      path: 'bebidas-espirituosas'
    }
  },
  ACADEMIA: {
    ACADEMIA_MAIN: {
      fullPath: '/academia',
      path: 'academia'
    }
  },
  LOGIN: {
    LOGIN_MAIN: {
      fullPath: '/login',
      path: 'login'
    }
  }
}

export default ROUTE_CONSTANTS;
