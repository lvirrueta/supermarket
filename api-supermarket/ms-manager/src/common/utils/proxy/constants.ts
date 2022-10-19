export enum RabbitMQ {
  AdminQueue = 'adminQueue',
  ManagerQueue = 'managerQueue',
  AuthQueue = 'authQueue',
}

/* AdminModule Constants */
export enum AdminManagerMSG {
  GET_ALL = 'GET_ALL_MANAGERS',
  GET_ONE = 'GET_ONE_MANAGER',
  CREATE = 'CREATE_MANAGER',
  UPDATE = 'UPDATE_MANAGER',
  DELETE = 'DELETE_MANAGER',
}

export enum AdminSupermarketMSG {
  GET_ALL = 'GET_ALL_SUPERMARKETS',
  GET_ONE = 'GET_ONE_SUPERMARKET',
}
/* END AdminModule Constants */

/* ManagerModule Constants */
export enum ManagerDepartmentMSG {
  GET_ALL = 'GET_ALL_DEPARTMENT',
  CREATE = 'CREATE_DEPARTMENT',
  UPDATE = 'UPDATE_DEPARTMENT',
  DELETE = 'DELETE_DEPARTMENT',
}

export enum ManagerEmployeeMSG {
  GET_ALL = 'GET_ALL_EMPLOYEES',
  GET_ONE = 'GET_ONE_EMPLOYEE',
  CREATE = 'CREATE_EMPLOYEE',
  UPDATE = 'UPDATE_EMPLOYEE',
  DELETE = 'DELETE_EMPLOYEE',
}

export enum ManagerSupermarketMSG {
  CREATE = 'CREATE_SUPERMARKET',
}
/* END ManagerModule Constants */

/* Auth Constants */
export enum AuthMSG {
  SIGN_IN = 'SIGN_IN',
}
/* END Auth Constants */
