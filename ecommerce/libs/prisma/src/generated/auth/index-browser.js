
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.3.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  user_name: 'user_name',
  user_avatar: 'user_avatar',
  user_email: 'user_email',
  user_phone: 'user_phone',
  user_password: 'user_password',
  user_gender: 'user_gender',
  user_birthday: 'user_birthday',
  user_salt: 'user_salt',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_tokensScalarFieldEnum = {
  user_id: 'user_id',
  user_refresh_token: 'user_refresh_token',
  user_public_key: 'user_public_key',
  user_private_key: 'user_private_key',
  user_login_time: 'user_login_time',
  user_login_ip: 'user_login_ip',
  user_agent: 'user_agent',
  expiration: 'expiration',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  role_name: 'role_name',
  role_description: 'role_description',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.PermissionsScalarFieldEnum = {
  id: 'id',
  permission_name: 'permission_name',
  permission_description: 'permission_description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_roleScalarFieldEnum = {
  user_id: 'user_id',
  role_id: 'role_id',
  assigned_at: 'assigned_at'
};

exports.Prisma.Role_permissionScalarFieldEnum = {
  role_id: 'role_id',
  permission_id: 'permission_id',
  granted_at: 'granted_at'
};

exports.Prisma.UserAddressScalarFieldEnum = {
  id: 'id',
  user_name: 'user_name',
  user_phone: 'user_phone',
  user_id: 'user_id',
  street: 'street',
  district: 'district',
  city: 'city',
  type: 'type',
  isDefault: 'isDefault',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.usersOrderByRelevanceFieldEnum = {
  id: 'id',
  user_name: 'user_name',
  user_avatar: 'user_avatar',
  user_email: 'user_email',
  user_phone: 'user_phone',
  user_password: 'user_password',
  user_salt: 'user_salt'
};

exports.Prisma.user_tokensOrderByRelevanceFieldEnum = {
  user_id: 'user_id',
  user_refresh_token: 'user_refresh_token',
  user_public_key: 'user_public_key',
  user_private_key: 'user_private_key',
  user_login_ip: 'user_login_ip',
  user_agent: 'user_agent'
};

exports.Prisma.rolesOrderByRelevanceFieldEnum = {
  id: 'id',
  role_name: 'role_name',
  role_description: 'role_description'
};

exports.Prisma.permissionsOrderByRelevanceFieldEnum = {
  id: 'id',
  permission_name: 'permission_name',
  permission_description: 'permission_description'
};

exports.Prisma.user_roleOrderByRelevanceFieldEnum = {
  user_id: 'user_id',
  role_id: 'role_id'
};

exports.Prisma.role_permissionOrderByRelevanceFieldEnum = {
  role_id: 'role_id',
  permission_id: 'permission_id'
};

exports.Prisma.UserAddressOrderByRelevanceFieldEnum = {
  id: 'id',
  user_name: 'user_name',
  user_phone: 'user_phone',
  user_id: 'user_id',
  street: 'street',
  district: 'district',
  city: 'city',
  type: 'type'
};
exports.Gender = exports.$Enums.Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

exports.Prisma.ModelName = {
  users: 'users',
  user_tokens: 'user_tokens',
  roles: 'roles',
  permissions: 'permissions',
  user_role: 'user_role',
  role_permission: 'role_permission',
  UserAddress: 'UserAddress'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
