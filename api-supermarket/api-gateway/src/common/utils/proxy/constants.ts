export enum RabbitMQ {
  AdminQueue = 'adminQueue',
  ManagerQueue = 'managerQueue',
}

/* AdminModule Constants */
export enum AdminManagerMSG {
  GET_ALL = 'GET_ALL',
  GET_ONE = 'GET_ONE',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export enum AdminSupermarketMSG {
  GET_ALL = 'GET_ALL',
  GET_ONE = 'GET_ONE',
}
/* END AdminModule Constants */

/* ManagerModule Constants */
export enum ManagerDepartmentMSG {
  GET_ALL = 'GET_ALL',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export enum ManagerEmployeeMSG {
  GET_ALL = 'GET_ALL',
  GET_ONE = 'GET_ONE',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export enum ManagerSupermarketMSG {
  CREATE = 'CREATE',
}
/* END ManagerModule Constants */
