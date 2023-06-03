  function unauthorizedError() {
    return {
      name: "UnauthorizedError",
      message: "Você precisa estar logado!",
    };
  }
  
  function notFoundError() {
    return {
      name: "NotFoundError",
      message: "Nenhum resultado para essa requisição",
    };
  }
  function conflictError(message) {
    return {
      name: "ConflictError",
      message,
    };
  }

  
  export default {
    unauthorizedError,
    notFoundError,
    conflictError
  };