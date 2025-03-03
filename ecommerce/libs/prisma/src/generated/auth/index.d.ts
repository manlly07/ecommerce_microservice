
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model user_tokens
 * 
 */
export type user_tokens = $Result.DefaultSelection<Prisma.$user_tokensPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model permissions
 * 
 */
export type permissions = $Result.DefaultSelection<Prisma.$permissionsPayload>
/**
 * Model user_role
 * 
 */
export type user_role = $Result.DefaultSelection<Prisma.$user_rolePayload>
/**
 * Model role_permission
 * 
 */
export type role_permission = $Result.DefaultSelection<Prisma.$role_permissionPayload>
/**
 * Model UserAddress
 * 
 */
export type UserAddress = $Result.DefaultSelection<Prisma.$UserAddressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_tokens`: Exposes CRUD operations for the **user_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tokens
    * const user_tokens = await prisma.user_tokens.findMany()
    * ```
    */
  get user_tokens(): Prisma.user_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissions`: Exposes CRUD operations for the **permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permissions.findMany()
    * ```
    */
  get permissions(): Prisma.permissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_role`: Exposes CRUD operations for the **user_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles
    * const user_roles = await prisma.user_role.findMany()
    * ```
    */
  get user_role(): Prisma.user_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role_permission`: Exposes CRUD operations for the **role_permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Role_permissions
    * const role_permissions = await prisma.role_permission.findMany()
    * ```
    */
  get role_permission(): Prisma.role_permissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAddress`: Exposes CRUD operations for the **UserAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAddresses
    * const userAddresses = await prisma.userAddress.findMany()
    * ```
    */
  get userAddress(): Prisma.UserAddressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    user_tokens: 'user_tokens',
    roles: 'roles',
    permissions: 'permissions',
    user_role: 'user_role',
    role_permission: 'role_permission',
    UserAddress: 'UserAddress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "user_tokens" | "roles" | "permissions" | "user_role" | "role_permission" | "userAddress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      user_tokens: {
        payload: Prisma.$user_tokensPayload<ExtArgs>
        fields: Prisma.user_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokensPayload>
          }
          findFirst: {
            args: Prisma.user_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokensPayload>
          }
          findMany: {
            args: Prisma.user_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokensPayload>[]
          }
          create: {
            args: Prisma.user_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokensPayload>
          }
          createMany: {
            args: Prisma.user_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokensPayload>
          }
          update: {
            args: Prisma.user_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokensPayload>
          }
          deleteMany: {
            args: Prisma.user_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokensPayload>
          }
          aggregate: {
            args: Prisma.User_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_tokens>
          }
          groupBy: {
            args: Prisma.user_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<User_tokensCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      permissions: {
        payload: Prisma.$permissionsPayload<ExtArgs>
        fields: Prisma.permissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.permissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.permissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          findFirst: {
            args: Prisma.permissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.permissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          findMany: {
            args: Prisma.permissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>[]
          }
          create: {
            args: Prisma.permissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          createMany: {
            args: Prisma.permissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.permissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          update: {
            args: Prisma.permissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          deleteMany: {
            args: Prisma.permissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.permissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.permissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          aggregate: {
            args: Prisma.PermissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissions>
          }
          groupBy: {
            args: Prisma.permissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.permissionsCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionsCountAggregateOutputType> | number
          }
        }
      }
      user_role: {
        payload: Prisma.$user_rolePayload<ExtArgs>
        fields: Prisma.user_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findFirst: {
            args: Prisma.user_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findMany: {
            args: Prisma.user_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          create: {
            args: Prisma.user_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          createMany: {
            args: Prisma.user_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          update: {
            args: Prisma.user_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          deleteMany: {
            args: Prisma.user_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          aggregate: {
            args: Prisma.User_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_role>
          }
          groupBy: {
            args: Prisma.user_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_roleCountArgs<ExtArgs>
            result: $Utils.Optional<User_roleCountAggregateOutputType> | number
          }
        }
      }
      role_permission: {
        payload: Prisma.$role_permissionPayload<ExtArgs>
        fields: Prisma.role_permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.role_permissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.role_permissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          findFirst: {
            args: Prisma.role_permissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.role_permissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          findMany: {
            args: Prisma.role_permissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>[]
          }
          create: {
            args: Prisma.role_permissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          createMany: {
            args: Prisma.role_permissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.role_permissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          update: {
            args: Prisma.role_permissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          deleteMany: {
            args: Prisma.role_permissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.role_permissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.role_permissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          aggregate: {
            args: Prisma.Role_permissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole_permission>
          }
          groupBy: {
            args: Prisma.role_permissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Role_permissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.role_permissionCountArgs<ExtArgs>
            result: $Utils.Optional<Role_permissionCountAggregateOutputType> | number
          }
        }
      }
      UserAddress: {
        payload: Prisma.$UserAddressPayload<ExtArgs>
        fields: Prisma.UserAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findFirst: {
            args: Prisma.UserAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findMany: {
            args: Prisma.UserAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          create: {
            args: Prisma.UserAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          createMany: {
            args: Prisma.UserAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          update: {
            args: Prisma.UserAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          deleteMany: {
            args: Prisma.UserAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          aggregate: {
            args: Prisma.UserAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAddress>
          }
          groupBy: {
            args: Prisma.UserAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAddressCountArgs<ExtArgs>
            result: $Utils.Optional<UserAddressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    user_tokens?: user_tokensOmit
    roles?: rolesOmit
    permissions?: permissionsOmit
    user_role?: user_roleOmit
    role_permission?: role_permissionOmit
    userAddress?: UserAddressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    user_tokens: number
    user_roles: number
    user_address: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_tokens?: boolean | UsersCountOutputTypeCountUser_tokensArgs
    user_roles?: boolean | UsersCountOutputTypeCountUser_rolesArgs
    user_address?: boolean | UsersCountOutputTypeCountUser_addressArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddressWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    role_user: number
    role_permissions: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role_user?: boolean | RolesCountOutputTypeCountRole_userArgs
    role_permissions?: boolean | RolesCountOutputTypeCountRole_permissionsArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountRole_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountRole_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionWhereInput
  }


  /**
   * Count Type PermissionsCountOutputType
   */

  export type PermissionsCountOutputType = {
    permission_role: number
  }

  export type PermissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission_role?: boolean | PermissionsCountOutputTypeCountPermission_roleArgs
  }

  // Custom InputTypes
  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionsCountOutputType
     */
    select?: PermissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeCountPermission_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    user_name: string | null
    user_avatar: string | null
    user_email: string | null
    user_phone: string | null
    user_password: string | null
    user_gender: $Enums.Gender | null
    user_birthday: Date | null
    user_salt: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    user_name: string | null
    user_avatar: string | null
    user_email: string | null
    user_phone: string | null
    user_password: string | null
    user_gender: $Enums.Gender | null
    user_birthday: Date | null
    user_salt: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    user_name: number
    user_avatar: number
    user_email: number
    user_phone: number
    user_password: number
    user_gender: number
    user_birthday: number
    user_salt: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    user_name?: true
    user_avatar?: true
    user_email?: true
    user_phone?: true
    user_password?: true
    user_gender?: true
    user_birthday?: true
    user_salt?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    user_name?: true
    user_avatar?: true
    user_email?: true
    user_phone?: true
    user_password?: true
    user_gender?: true
    user_birthday?: true
    user_salt?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    user_name?: true
    user_avatar?: true
    user_email?: true
    user_phone?: true
    user_password?: true
    user_gender?: true
    user_birthday?: true
    user_salt?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    user_name: string
    user_avatar: string
    user_email: string
    user_phone: string
    user_password: string
    user_gender: $Enums.Gender
    user_birthday: Date | null
    user_salt: string
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    user_avatar?: boolean
    user_email?: boolean
    user_phone?: boolean
    user_password?: boolean
    user_gender?: boolean
    user_birthday?: boolean
    user_salt?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_tokens?: boolean | users$user_tokensArgs<ExtArgs>
    user_roles?: boolean | users$user_rolesArgs<ExtArgs>
    user_address?: boolean | users$user_addressArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    user_name?: boolean
    user_avatar?: boolean
    user_email?: boolean
    user_phone?: boolean
    user_password?: boolean
    user_gender?: boolean
    user_birthday?: boolean
    user_salt?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_name" | "user_avatar" | "user_email" | "user_phone" | "user_password" | "user_gender" | "user_birthday" | "user_salt" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_tokens?: boolean | users$user_tokensArgs<ExtArgs>
    user_roles?: boolean | users$user_rolesArgs<ExtArgs>
    user_address?: boolean | users$user_addressArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      user_tokens: Prisma.$user_tokensPayload<ExtArgs>[]
      user_roles: Prisma.$user_rolePayload<ExtArgs>[]
      user_address: Prisma.$UserAddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_name: string
      user_avatar: string
      user_email: string
      user_phone: string
      user_password: string
      user_gender: $Enums.Gender
      user_birthday: Date | null
      user_salt: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_tokens<T extends users$user_tokensArgs<ExtArgs> = {}>(args?: Subset<T, users$user_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tokensPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    user_roles<T extends users$user_rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    user_address<T extends users$user_addressArgs<ExtArgs> = {}>(args?: Subset<T, users$user_addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly user_name: FieldRef<"users", 'String'>
    readonly user_avatar: FieldRef<"users", 'String'>
    readonly user_email: FieldRef<"users", 'String'>
    readonly user_phone: FieldRef<"users", 'String'>
    readonly user_password: FieldRef<"users", 'String'>
    readonly user_gender: FieldRef<"users", 'Gender'>
    readonly user_birthday: FieldRef<"users", 'DateTime'>
    readonly user_salt: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.user_tokens
   */
  export type users$user_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tokens
     */
    select?: user_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tokens
     */
    omit?: user_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokensInclude<ExtArgs> | null
    where?: user_tokensWhereInput
    orderBy?: user_tokensOrderByWithRelationInput | user_tokensOrderByWithRelationInput[]
    cursor?: user_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_tokensScalarFieldEnum | User_tokensScalarFieldEnum[]
  }

  /**
   * users.user_roles
   */
  export type users$user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    cursor?: user_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * users.user_address
   */
  export type users$user_addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    where?: UserAddressWhereInput
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    cursor?: UserAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model user_tokens
   */

  export type AggregateUser_tokens = {
    _count: User_tokensCountAggregateOutputType | null
    _min: User_tokensMinAggregateOutputType | null
    _max: User_tokensMaxAggregateOutputType | null
  }

  export type User_tokensMinAggregateOutputType = {
    user_id: string | null
    user_refresh_token: string | null
    user_public_key: string | null
    user_private_key: string | null
    user_login_time: Date | null
    user_login_ip: string | null
    user_agent: string | null
    expiration: Date | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_tokensMaxAggregateOutputType = {
    user_id: string | null
    user_refresh_token: string | null
    user_public_key: string | null
    user_private_key: string | null
    user_login_time: Date | null
    user_login_ip: string | null
    user_agent: string | null
    expiration: Date | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_tokensCountAggregateOutputType = {
    user_id: number
    user_refresh_token: number
    user_public_key: number
    user_private_key: number
    user_login_time: number
    user_login_ip: number
    user_agent: number
    expiration: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_tokensMinAggregateInputType = {
    user_id?: true
    user_refresh_token?: true
    user_public_key?: true
    user_private_key?: true
    user_login_time?: true
    user_login_ip?: true
    user_agent?: true
    expiration?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type User_tokensMaxAggregateInputType = {
    user_id?: true
    user_refresh_token?: true
    user_public_key?: true
    user_private_key?: true
    user_login_time?: true
    user_login_ip?: true
    user_agent?: true
    expiration?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type User_tokensCountAggregateInputType = {
    user_id?: true
    user_refresh_token?: true
    user_public_key?: true
    user_private_key?: true
    user_login_time?: true
    user_login_ip?: true
    user_agent?: true
    expiration?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tokens to aggregate.
     */
    where?: user_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tokens to fetch.
     */
    orderBy?: user_tokensOrderByWithRelationInput | user_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_tokens
    **/
    _count?: true | User_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tokensMaxAggregateInputType
  }

  export type GetUser_tokensAggregateType<T extends User_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_tokens[P]>
      : GetScalarType<T[P], AggregateUser_tokens[P]>
  }




  export type user_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tokensWhereInput
    orderBy?: user_tokensOrderByWithAggregationInput | user_tokensOrderByWithAggregationInput[]
    by: User_tokensScalarFieldEnum[] | User_tokensScalarFieldEnum
    having?: user_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tokensCountAggregateInputType | true
    _min?: User_tokensMinAggregateInputType
    _max?: User_tokensMaxAggregateInputType
  }

  export type User_tokensGroupByOutputType = {
    user_id: string
    user_refresh_token: string
    user_public_key: string
    user_private_key: string
    user_login_time: Date
    user_login_ip: string
    user_agent: string
    expiration: Date
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: User_tokensCountAggregateOutputType | null
    _min: User_tokensMinAggregateOutputType | null
    _max: User_tokensMaxAggregateOutputType | null
  }

  type GetUser_tokensGroupByPayload<T extends user_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], User_tokensGroupByOutputType[P]>
        }
      >
    >


  export type user_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_refresh_token?: boolean
    user_public_key?: boolean
    user_private_key?: boolean
    user_login_time?: boolean
    user_login_ip?: boolean
    user_agent?: boolean
    expiration?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_tokens"]>



  export type user_tokensSelectScalar = {
    user_id?: boolean
    user_refresh_token?: boolean
    user_public_key?: boolean
    user_private_key?: boolean
    user_login_time?: boolean
    user_login_ip?: boolean
    user_agent?: boolean
    expiration?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "user_refresh_token" | "user_public_key" | "user_private_key" | "user_login_time" | "user_login_ip" | "user_agent" | "expiration" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["user_tokens"]>
  export type user_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_tokens"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      user_refresh_token: string
      user_public_key: string
      user_private_key: string
      user_login_time: Date
      user_login_ip: string
      user_agent: string
      expiration: Date
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user_tokens"]>
    composites: {}
  }

  type user_tokensGetPayload<S extends boolean | null | undefined | user_tokensDefaultArgs> = $Result.GetResult<Prisma.$user_tokensPayload, S>

  type user_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_tokensCountAggregateInputType | true
    }

  export interface user_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_tokens'], meta: { name: 'user_tokens' } }
    /**
     * Find zero or one User_tokens that matches the filter.
     * @param {user_tokensFindUniqueArgs} args - Arguments to find a User_tokens
     * @example
     * // Get one User_tokens
     * const user_tokens = await prisma.user_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_tokensFindUniqueArgs>(args: SelectSubset<T, user_tokensFindUniqueArgs<ExtArgs>>): Prisma__user_tokensClient<$Result.GetResult<Prisma.$user_tokensPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_tokensFindUniqueOrThrowArgs} args - Arguments to find a User_tokens
     * @example
     * // Get one User_tokens
     * const user_tokens = await prisma.user_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, user_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_tokensClient<$Result.GetResult<Prisma.$user_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokensFindFirstArgs} args - Arguments to find a User_tokens
     * @example
     * // Get one User_tokens
     * const user_tokens = await prisma.user_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_tokensFindFirstArgs>(args?: SelectSubset<T, user_tokensFindFirstArgs<ExtArgs>>): Prisma__user_tokensClient<$Result.GetResult<Prisma.$user_tokensPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokensFindFirstOrThrowArgs} args - Arguments to find a User_tokens
     * @example
     * // Get one User_tokens
     * const user_tokens = await prisma.user_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, user_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_tokensClient<$Result.GetResult<Prisma.$user_tokensPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more User_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tokens
     * const user_tokens = await prisma.user_tokens.findMany()
     * 
     * // Get first 10 User_tokens
     * const user_tokens = await prisma.user_tokens.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_tokensWithUser_idOnly = await prisma.user_tokens.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_tokensFindManyArgs>(args?: SelectSubset<T, user_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tokensPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User_tokens.
     * @param {user_tokensCreateArgs} args - Arguments to create a User_tokens.
     * @example
     * // Create one User_tokens
     * const User_tokens = await prisma.user_tokens.create({
     *   data: {
     *     // ... data to create a User_tokens
     *   }
     * })
     * 
     */
    create<T extends user_tokensCreateArgs>(args: SelectSubset<T, user_tokensCreateArgs<ExtArgs>>): Prisma__user_tokensClient<$Result.GetResult<Prisma.$user_tokensPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many User_tokens.
     * @param {user_tokensCreateManyArgs} args - Arguments to create many User_tokens.
     * @example
     * // Create many User_tokens
     * const user_tokens = await prisma.user_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_tokensCreateManyArgs>(args?: SelectSubset<T, user_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_tokens.
     * @param {user_tokensDeleteArgs} args - Arguments to delete one User_tokens.
     * @example
     * // Delete one User_tokens
     * const User_tokens = await prisma.user_tokens.delete({
     *   where: {
     *     // ... filter to delete one User_tokens
     *   }
     * })
     * 
     */
    delete<T extends user_tokensDeleteArgs>(args: SelectSubset<T, user_tokensDeleteArgs<ExtArgs>>): Prisma__user_tokensClient<$Result.GetResult<Prisma.$user_tokensPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User_tokens.
     * @param {user_tokensUpdateArgs} args - Arguments to update one User_tokens.
     * @example
     * // Update one User_tokens
     * const user_tokens = await prisma.user_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_tokensUpdateArgs>(args: SelectSubset<T, user_tokensUpdateArgs<ExtArgs>>): Prisma__user_tokensClient<$Result.GetResult<Prisma.$user_tokensPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more User_tokens.
     * @param {user_tokensDeleteManyArgs} args - Arguments to filter User_tokens to delete.
     * @example
     * // Delete a few User_tokens
     * const { count } = await prisma.user_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_tokensDeleteManyArgs>(args?: SelectSubset<T, user_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tokens
     * const user_tokens = await prisma.user_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_tokensUpdateManyArgs>(args: SelectSubset<T, user_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_tokens.
     * @param {user_tokensUpsertArgs} args - Arguments to update or create a User_tokens.
     * @example
     * // Update or create a User_tokens
     * const user_tokens = await prisma.user_tokens.upsert({
     *   create: {
     *     // ... data to create a User_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_tokens we want to update
     *   }
     * })
     */
    upsert<T extends user_tokensUpsertArgs>(args: SelectSubset<T, user_tokensUpsertArgs<ExtArgs>>): Prisma__user_tokensClient<$Result.GetResult<Prisma.$user_tokensPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of User_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokensCountArgs} args - Arguments to filter User_tokens to count.
     * @example
     * // Count the number of User_tokens
     * const count = await prisma.user_tokens.count({
     *   where: {
     *     // ... the filter for the User_tokens we want to count
     *   }
     * })
    **/
    count<T extends user_tokensCountArgs>(
      args?: Subset<T, user_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_tokensAggregateArgs>(args: Subset<T, User_tokensAggregateArgs>): Prisma.PrismaPromise<GetUser_tokensAggregateType<T>>

    /**
     * Group by User_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_tokensGroupByArgs['orderBy'] }
        : { orderBy?: user_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_tokens model
   */
  readonly fields: user_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_tokens model
   */ 
  interface user_tokensFieldRefs {
    readonly user_id: FieldRef<"user_tokens", 'String'>
    readonly user_refresh_token: FieldRef<"user_tokens", 'String'>
    readonly user_public_key: FieldRef<"user_tokens", 'String'>
    readonly user_private_key: FieldRef<"user_tokens", 'String'>
    readonly user_login_time: FieldRef<"user_tokens", 'DateTime'>
    readonly user_login_ip: FieldRef<"user_tokens", 'String'>
    readonly user_agent: FieldRef<"user_tokens", 'String'>
    readonly expiration: FieldRef<"user_tokens", 'DateTime'>
    readonly is_active: FieldRef<"user_tokens", 'Boolean'>
    readonly created_at: FieldRef<"user_tokens", 'DateTime'>
    readonly updated_at: FieldRef<"user_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_tokens findUnique
   */
  export type user_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tokens
     */
    select?: user_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tokens
     */
    omit?: user_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokensInclude<ExtArgs> | null
    /**
     * Filter, which user_tokens to fetch.
     */
    where: user_tokensWhereUniqueInput
  }

  /**
   * user_tokens findUniqueOrThrow
   */
  export type user_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tokens
     */
    select?: user_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tokens
     */
    omit?: user_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokensInclude<ExtArgs> | null
    /**
     * Filter, which user_tokens to fetch.
     */
    where: user_tokensWhereUniqueInput
  }

  /**
   * user_tokens findFirst
   */
  export type user_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tokens
     */
    select?: user_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tokens
     */
    omit?: user_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokensInclude<ExtArgs> | null
    /**
     * Filter, which user_tokens to fetch.
     */
    where?: user_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tokens to fetch.
     */
    orderBy?: user_tokensOrderByWithRelationInput | user_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tokens.
     */
    cursor?: user_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tokens.
     */
    distinct?: User_tokensScalarFieldEnum | User_tokensScalarFieldEnum[]
  }

  /**
   * user_tokens findFirstOrThrow
   */
  export type user_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tokens
     */
    select?: user_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tokens
     */
    omit?: user_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokensInclude<ExtArgs> | null
    /**
     * Filter, which user_tokens to fetch.
     */
    where?: user_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tokens to fetch.
     */
    orderBy?: user_tokensOrderByWithRelationInput | user_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tokens.
     */
    cursor?: user_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tokens.
     */
    distinct?: User_tokensScalarFieldEnum | User_tokensScalarFieldEnum[]
  }

  /**
   * user_tokens findMany
   */
  export type user_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tokens
     */
    select?: user_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tokens
     */
    omit?: user_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokensInclude<ExtArgs> | null
    /**
     * Filter, which user_tokens to fetch.
     */
    where?: user_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tokens to fetch.
     */
    orderBy?: user_tokensOrderByWithRelationInput | user_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_tokens.
     */
    cursor?: user_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tokens.
     */
    skip?: number
    distinct?: User_tokensScalarFieldEnum | User_tokensScalarFieldEnum[]
  }

  /**
   * user_tokens create
   */
  export type user_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tokens
     */
    select?: user_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tokens
     */
    omit?: user_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a user_tokens.
     */
    data: XOR<user_tokensCreateInput, user_tokensUncheckedCreateInput>
  }

  /**
   * user_tokens createMany
   */
  export type user_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_tokens.
     */
    data: user_tokensCreateManyInput | user_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_tokens update
   */
  export type user_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tokens
     */
    select?: user_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tokens
     */
    omit?: user_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a user_tokens.
     */
    data: XOR<user_tokensUpdateInput, user_tokensUncheckedUpdateInput>
    /**
     * Choose, which user_tokens to update.
     */
    where: user_tokensWhereUniqueInput
  }

  /**
   * user_tokens updateMany
   */
  export type user_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_tokens.
     */
    data: XOR<user_tokensUpdateManyMutationInput, user_tokensUncheckedUpdateManyInput>
    /**
     * Filter which user_tokens to update
     */
    where?: user_tokensWhereInput
    /**
     * Limit how many user_tokens to update.
     */
    limit?: number
  }

  /**
   * user_tokens upsert
   */
  export type user_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tokens
     */
    select?: user_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tokens
     */
    omit?: user_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the user_tokens to update in case it exists.
     */
    where: user_tokensWhereUniqueInput
    /**
     * In case the user_tokens found by the `where` argument doesn't exist, create a new user_tokens with this data.
     */
    create: XOR<user_tokensCreateInput, user_tokensUncheckedCreateInput>
    /**
     * In case the user_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_tokensUpdateInput, user_tokensUncheckedUpdateInput>
  }

  /**
   * user_tokens delete
   */
  export type user_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tokens
     */
    select?: user_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tokens
     */
    omit?: user_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokensInclude<ExtArgs> | null
    /**
     * Filter which user_tokens to delete.
     */
    where: user_tokensWhereUniqueInput
  }

  /**
   * user_tokens deleteMany
   */
  export type user_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tokens to delete
     */
    where?: user_tokensWhereInput
    /**
     * Limit how many user_tokens to delete.
     */
    limit?: number
  }

  /**
   * user_tokens without action
   */
  export type user_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tokens
     */
    select?: user_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tokens
     */
    omit?: user_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokensInclude<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    role_name: string | null
    role_description: string | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    role_name: string | null
    role_description: string | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    role_name: number
    role_description: number
    is_deleted: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    id?: true
    role_name?: true
    role_description?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    role_name?: true
    role_description?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    role_name?: true
    role_description?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    role_name: string
    role_description: string | null
    is_deleted: boolean
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    role_description?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    role_user?: boolean | roles$role_userArgs<ExtArgs>
    role_permissions?: boolean | roles$role_permissionsArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>



  export type rolesSelectScalar = {
    id?: boolean
    role_name?: boolean
    role_description?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_name" | "role_description" | "is_deleted" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role_user?: boolean | roles$role_userArgs<ExtArgs>
    role_permissions?: boolean | roles$role_permissionsArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      role_user: Prisma.$user_rolePayload<ExtArgs>[]
      role_permissions: Prisma.$role_permissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role_name: string
      role_description: string | null
      is_deleted: boolean
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role_user<T extends roles$role_userArgs<ExtArgs> = {}>(args?: Subset<T, roles$role_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    role_permissions<T extends roles$role_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, roles$role_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roles model
   */ 
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'String'>
    readonly role_name: FieldRef<"roles", 'String'>
    readonly role_description: FieldRef<"roles", 'String'>
    readonly is_deleted: FieldRef<"roles", 'Boolean'>
    readonly created_at: FieldRef<"roles", 'DateTime'>
    readonly updated_at: FieldRef<"roles", 'DateTime'>
    readonly deleted_at: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.role_user
   */
  export type roles$role_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    cursor?: user_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * roles.role_permissions
   */
  export type roles$role_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    where?: role_permissionWhereInput
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    cursor?: role_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_permissionScalarFieldEnum | Role_permissionScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model permissions
   */

  export type AggregatePermissions = {
    _count: PermissionsCountAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  export type PermissionsMinAggregateOutputType = {
    id: string | null
    permission_name: string | null
    permission_description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionsMaxAggregateOutputType = {
    id: string | null
    permission_name: string | null
    permission_description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionsCountAggregateOutputType = {
    id: number
    permission_name: number
    permission_description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PermissionsMinAggregateInputType = {
    id?: true
    permission_name?: true
    permission_description?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionsMaxAggregateInputType = {
    id?: true
    permission_name?: true
    permission_description?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionsCountAggregateInputType = {
    id?: true
    permission_name?: true
    permission_description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PermissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permissions to aggregate.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permissions
    **/
    _count?: true | PermissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionsMaxAggregateInputType
  }

  export type GetPermissionsAggregateType<T extends PermissionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissions[P]>
      : GetScalarType<T[P], AggregatePermissions[P]>
  }




  export type permissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permissionsWhereInput
    orderBy?: permissionsOrderByWithAggregationInput | permissionsOrderByWithAggregationInput[]
    by: PermissionsScalarFieldEnum[] | PermissionsScalarFieldEnum
    having?: permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionsCountAggregateInputType | true
    _min?: PermissionsMinAggregateInputType
    _max?: PermissionsMaxAggregateInputType
  }

  export type PermissionsGroupByOutputType = {
    id: string
    permission_name: string
    permission_description: string | null
    created_at: Date
    updated_at: Date
    _count: PermissionsCountAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  type GetPermissionsGroupByPayload<T extends permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
        }
      >
    >


  export type permissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permission_name?: boolean
    permission_description?: boolean
    created_at?: boolean
    updated_at?: boolean
    permission_role?: boolean | permissions$permission_roleArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissions"]>



  export type permissionsSelectScalar = {
    id?: boolean
    permission_name?: boolean
    permission_description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type permissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "permission_name" | "permission_description" | "created_at" | "updated_at", ExtArgs["result"]["permissions"]>
  export type permissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission_role?: boolean | permissions$permission_roleArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $permissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "permissions"
    objects: {
      permission_role: Prisma.$role_permissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      permission_name: string
      permission_description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["permissions"]>
    composites: {}
  }

  type permissionsGetPayload<S extends boolean | null | undefined | permissionsDefaultArgs> = $Result.GetResult<Prisma.$permissionsPayload, S>

  type permissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionsCountAggregateInputType | true
    }

  export interface permissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['permissions'], meta: { name: 'permissions' } }
    /**
     * Find zero or one Permissions that matches the filter.
     * @param {permissionsFindUniqueArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends permissionsFindUniqueArgs>(args: SelectSubset<T, permissionsFindUniqueArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {permissionsFindUniqueOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends permissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsFindFirstArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends permissionsFindFirstArgs>(args?: SelectSubset<T, permissionsFindFirstArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsFindFirstOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends permissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permissions.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionsWithIdOnly = await prisma.permissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends permissionsFindManyArgs>(args?: SelectSubset<T, permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Permissions.
     * @param {permissionsCreateArgs} args - Arguments to create a Permissions.
     * @example
     * // Create one Permissions
     * const Permissions = await prisma.permissions.create({
     *   data: {
     *     // ... data to create a Permissions
     *   }
     * })
     * 
     */
    create<T extends permissionsCreateArgs>(args: SelectSubset<T, permissionsCreateArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Permissions.
     * @param {permissionsCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permissions = await prisma.permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends permissionsCreateManyArgs>(args?: SelectSubset<T, permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permissions.
     * @param {permissionsDeleteArgs} args - Arguments to delete one Permissions.
     * @example
     * // Delete one Permissions
     * const Permissions = await prisma.permissions.delete({
     *   where: {
     *     // ... filter to delete one Permissions
     *   }
     * })
     * 
     */
    delete<T extends permissionsDeleteArgs>(args: SelectSubset<T, permissionsDeleteArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Permissions.
     * @param {permissionsUpdateArgs} args - Arguments to update one Permissions.
     * @example
     * // Update one Permissions
     * const permissions = await prisma.permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends permissionsUpdateArgs>(args: SelectSubset<T, permissionsUpdateArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Permissions.
     * @param {permissionsDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends permissionsDeleteManyArgs>(args?: SelectSubset<T, permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permissions = await prisma.permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends permissionsUpdateManyArgs>(args: SelectSubset<T, permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permissions.
     * @param {permissionsUpsertArgs} args - Arguments to update or create a Permissions.
     * @example
     * // Update or create a Permissions
     * const permissions = await prisma.permissions.upsert({
     *   create: {
     *     // ... data to create a Permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permissions we want to update
     *   }
     * })
     */
    upsert<T extends permissionsUpsertArgs>(args: SelectSubset<T, permissionsUpsertArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permissions.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends permissionsCountArgs>(
      args?: Subset<T, permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionsAggregateArgs>(args: Subset<T, PermissionsAggregateArgs>): Prisma.PrismaPromise<GetPermissionsAggregateType<T>>

    /**
     * Group by Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: permissionsGroupByArgs['orderBy'] }
        : { orderBy?: permissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the permissions model
   */
  readonly fields: permissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__permissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission_role<T extends permissions$permission_roleArgs<ExtArgs> = {}>(args?: Subset<T, permissions$permission_roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the permissions model
   */ 
  interface permissionsFieldRefs {
    readonly id: FieldRef<"permissions", 'String'>
    readonly permission_name: FieldRef<"permissions", 'String'>
    readonly permission_description: FieldRef<"permissions", 'String'>
    readonly created_at: FieldRef<"permissions", 'DateTime'>
    readonly updated_at: FieldRef<"permissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * permissions findUnique
   */
  export type permissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions findUniqueOrThrow
   */
  export type permissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions findFirst
   */
  export type permissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * permissions findFirstOrThrow
   */
  export type permissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * permissions findMany
   */
  export type permissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permissions.
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * permissions create
   */
  export type permissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a permissions.
     */
    data: XOR<permissionsCreateInput, permissionsUncheckedCreateInput>
  }

  /**
   * permissions createMany
   */
  export type permissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many permissions.
     */
    data: permissionsCreateManyInput | permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permissions update
   */
  export type permissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a permissions.
     */
    data: XOR<permissionsUpdateInput, permissionsUncheckedUpdateInput>
    /**
     * Choose, which permissions to update.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions updateMany
   */
  export type permissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionsUpdateManyMutationInput, permissionsUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionsWhereInput
    /**
     * Limit how many permissions to update.
     */
    limit?: number
  }

  /**
   * permissions upsert
   */
  export type permissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the permissions to update in case it exists.
     */
    where: permissionsWhereUniqueInput
    /**
     * In case the permissions found by the `where` argument doesn't exist, create a new permissions with this data.
     */
    create: XOR<permissionsCreateInput, permissionsUncheckedCreateInput>
    /**
     * In case the permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permissionsUpdateInput, permissionsUncheckedUpdateInput>
  }

  /**
   * permissions delete
   */
  export type permissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter which permissions to delete.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions deleteMany
   */
  export type permissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permissions to delete
     */
    where?: permissionsWhereInput
    /**
     * Limit how many permissions to delete.
     */
    limit?: number
  }

  /**
   * permissions.permission_role
   */
  export type permissions$permission_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    where?: role_permissionWhereInput
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    cursor?: role_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_permissionScalarFieldEnum | Role_permissionScalarFieldEnum[]
  }

  /**
   * permissions without action
   */
  export type permissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
  }


  /**
   * Model user_role
   */

  export type AggregateUser_role = {
    _count: User_roleCountAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  export type User_roleMinAggregateOutputType = {
    user_id: string | null
    role_id: string | null
    assigned_at: Date | null
  }

  export type User_roleMaxAggregateOutputType = {
    user_id: string | null
    role_id: string | null
    assigned_at: Date | null
  }

  export type User_roleCountAggregateOutputType = {
    user_id: number
    role_id: number
    assigned_at: number
    _all: number
  }


  export type User_roleMinAggregateInputType = {
    user_id?: true
    role_id?: true
    assigned_at?: true
  }

  export type User_roleMaxAggregateInputType = {
    user_id?: true
    role_id?: true
    assigned_at?: true
  }

  export type User_roleCountAggregateInputType = {
    user_id?: true
    role_id?: true
    assigned_at?: true
    _all?: true
  }

  export type User_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_role to aggregate.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles
    **/
    _count?: true | User_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_roleMaxAggregateInputType
  }

  export type GetUser_roleAggregateType<T extends User_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_role[P]>
      : GetScalarType<T[P], AggregateUser_role[P]>
  }




  export type user_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithAggregationInput | user_roleOrderByWithAggregationInput[]
    by: User_roleScalarFieldEnum[] | User_roleScalarFieldEnum
    having?: user_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_roleCountAggregateInputType | true
    _min?: User_roleMinAggregateInputType
    _max?: User_roleMaxAggregateInputType
  }

  export type User_roleGroupByOutputType = {
    user_id: string
    role_id: string
    assigned_at: Date
    _count: User_roleCountAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  type GetUser_roleGroupByPayload<T extends user_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_roleGroupByOutputType[P]>
            : GetScalarType<T[P], User_roleGroupByOutputType[P]>
        }
      >
    >


  export type user_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    assigned_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    role?: boolean | rolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_role"]>



  export type user_roleSelectScalar = {
    user_id?: boolean
    role_id?: boolean
    assigned_at?: boolean
  }

  export type user_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "role_id" | "assigned_at", ExtArgs["result"]["user_role"]>
  export type user_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    role?: boolean | rolesDefaultArgs<ExtArgs>
  }

  export type $user_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_role"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      role: Prisma.$rolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      role_id: string
      assigned_at: Date
    }, ExtArgs["result"]["user_role"]>
    composites: {}
  }

  type user_roleGetPayload<S extends boolean | null | undefined | user_roleDefaultArgs> = $Result.GetResult<Prisma.$user_rolePayload, S>

  type user_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_roleCountAggregateInputType | true
    }

  export interface user_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_role'], meta: { name: 'user_role' } }
    /**
     * Find zero or one User_role that matches the filter.
     * @param {user_roleFindUniqueArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_roleFindUniqueArgs>(args: SelectSubset<T, user_roleFindUniqueArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_roleFindUniqueOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, user_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_roleFindFirstArgs>(args?: SelectSubset<T, user_roleFindFirstArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, user_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_role.findMany()
     * 
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_role.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_roleWithUser_idOnly = await prisma.user_role.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_roleFindManyArgs>(args?: SelectSubset<T, user_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User_role.
     * @param {user_roleCreateArgs} args - Arguments to create a User_role.
     * @example
     * // Create one User_role
     * const User_role = await prisma.user_role.create({
     *   data: {
     *     // ... data to create a User_role
     *   }
     * })
     * 
     */
    create<T extends user_roleCreateArgs>(args: SelectSubset<T, user_roleCreateArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many User_roles.
     * @param {user_roleCreateManyArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_role = await prisma.user_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_roleCreateManyArgs>(args?: SelectSubset<T, user_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_role.
     * @param {user_roleDeleteArgs} args - Arguments to delete one User_role.
     * @example
     * // Delete one User_role
     * const User_role = await prisma.user_role.delete({
     *   where: {
     *     // ... filter to delete one User_role
     *   }
     * })
     * 
     */
    delete<T extends user_roleDeleteArgs>(args: SelectSubset<T, user_roleDeleteArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User_role.
     * @param {user_roleUpdateArgs} args - Arguments to update one User_role.
     * @example
     * // Update one User_role
     * const user_role = await prisma.user_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_roleUpdateArgs>(args: SelectSubset<T, user_roleUpdateArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more User_roles.
     * @param {user_roleDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_roleDeleteManyArgs>(args?: SelectSubset<T, user_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_roleUpdateManyArgs>(args: SelectSubset<T, user_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_role.
     * @param {user_roleUpsertArgs} args - Arguments to update or create a User_role.
     * @example
     * // Update or create a User_role
     * const user_role = await prisma.user_role.upsert({
     *   create: {
     *     // ... data to create a User_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_role we want to update
     *   }
     * })
     */
    upsert<T extends user_roleUpsertArgs>(args: SelectSubset<T, user_roleUpsertArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_role.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
    **/
    count<T extends user_roleCountArgs>(
      args?: Subset<T, user_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_roleAggregateArgs>(args: Subset<T, User_roleAggregateArgs>): Prisma.PrismaPromise<GetUser_roleAggregateType<T>>

    /**
     * Group by User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_roleGroupByArgs['orderBy'] }
        : { orderBy?: user_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_role model
   */
  readonly fields: user_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    role<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_role model
   */ 
  interface user_roleFieldRefs {
    readonly user_id: FieldRef<"user_role", 'String'>
    readonly role_id: FieldRef<"user_role", 'String'>
    readonly assigned_at: FieldRef<"user_role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_role findUnique
   */
  export type user_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role findUniqueOrThrow
   */
  export type user_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role findFirst
   */
  export type user_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role findFirstOrThrow
   */
  export type user_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role findMany
   */
  export type user_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role create
   */
  export type user_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a user_role.
     */
    data: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
  }

  /**
   * user_role createMany
   */
  export type user_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_role update
   */
  export type user_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a user_role.
     */
    data: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
    /**
     * Choose, which user_role to update.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role updateMany
   */
  export type user_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to update.
     */
    limit?: number
  }

  /**
   * user_role upsert
   */
  export type user_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the user_role to update in case it exists.
     */
    where: user_roleWhereUniqueInput
    /**
     * In case the user_role found by the `where` argument doesn't exist, create a new user_role with this data.
     */
    create: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
    /**
     * In case the user_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
  }

  /**
   * user_role delete
   */
  export type user_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter which user_role to delete.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role deleteMany
   */
  export type user_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to delete.
     */
    limit?: number
  }

  /**
   * user_role without action
   */
  export type user_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
  }


  /**
   * Model role_permission
   */

  export type AggregateRole_permission = {
    _count: Role_permissionCountAggregateOutputType | null
    _min: Role_permissionMinAggregateOutputType | null
    _max: Role_permissionMaxAggregateOutputType | null
  }

  export type Role_permissionMinAggregateOutputType = {
    role_id: string | null
    permission_id: string | null
    granted_at: Date | null
  }

  export type Role_permissionMaxAggregateOutputType = {
    role_id: string | null
    permission_id: string | null
    granted_at: Date | null
  }

  export type Role_permissionCountAggregateOutputType = {
    role_id: number
    permission_id: number
    granted_at: number
    _all: number
  }


  export type Role_permissionMinAggregateInputType = {
    role_id?: true
    permission_id?: true
    granted_at?: true
  }

  export type Role_permissionMaxAggregateInputType = {
    role_id?: true
    permission_id?: true
    granted_at?: true
  }

  export type Role_permissionCountAggregateInputType = {
    role_id?: true
    permission_id?: true
    granted_at?: true
    _all?: true
  }

  export type Role_permissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_permission to aggregate.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned role_permissions
    **/
    _count?: true | Role_permissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Role_permissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Role_permissionMaxAggregateInputType
  }

  export type GetRole_permissionAggregateType<T extends Role_permissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRole_permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole_permission[P]>
      : GetScalarType<T[P], AggregateRole_permission[P]>
  }




  export type role_permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionWhereInput
    orderBy?: role_permissionOrderByWithAggregationInput | role_permissionOrderByWithAggregationInput[]
    by: Role_permissionScalarFieldEnum[] | Role_permissionScalarFieldEnum
    having?: role_permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Role_permissionCountAggregateInputType | true
    _min?: Role_permissionMinAggregateInputType
    _max?: Role_permissionMaxAggregateInputType
  }

  export type Role_permissionGroupByOutputType = {
    role_id: string
    permission_id: string
    granted_at: Date
    _count: Role_permissionCountAggregateOutputType | null
    _min: Role_permissionMinAggregateOutputType | null
    _max: Role_permissionMaxAggregateOutputType | null
  }

  type GetRole_permissionGroupByPayload<T extends role_permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Role_permissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Role_permissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Role_permissionGroupByOutputType[P]>
            : GetScalarType<T[P], Role_permissionGroupByOutputType[P]>
        }
      >
    >


  export type role_permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    permission_id?: boolean
    granted_at?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
    permission?: boolean | permissionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role_permission"]>



  export type role_permissionSelectScalar = {
    role_id?: boolean
    permission_id?: boolean
    granted_at?: boolean
  }

  export type role_permissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "permission_id" | "granted_at", ExtArgs["result"]["role_permission"]>
  export type role_permissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
    permission?: boolean | permissionsDefaultArgs<ExtArgs>
  }

  export type $role_permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role_permission"
    objects: {
      role: Prisma.$rolesPayload<ExtArgs>
      permission: Prisma.$permissionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: string
      permission_id: string
      granted_at: Date
    }, ExtArgs["result"]["role_permission"]>
    composites: {}
  }

  type role_permissionGetPayload<S extends boolean | null | undefined | role_permissionDefaultArgs> = $Result.GetResult<Prisma.$role_permissionPayload, S>

  type role_permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<role_permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Role_permissionCountAggregateInputType | true
    }

  export interface role_permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role_permission'], meta: { name: 'role_permission' } }
    /**
     * Find zero or one Role_permission that matches the filter.
     * @param {role_permissionFindUniqueArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends role_permissionFindUniqueArgs>(args: SelectSubset<T, role_permissionFindUniqueArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Role_permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {role_permissionFindUniqueOrThrowArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends role_permissionFindUniqueOrThrowArgs>(args: SelectSubset<T, role_permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Role_permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionFindFirstArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends role_permissionFindFirstArgs>(args?: SelectSubset<T, role_permissionFindFirstArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Role_permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionFindFirstOrThrowArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends role_permissionFindFirstOrThrowArgs>(args?: SelectSubset<T, role_permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Role_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role_permissions
     * const role_permissions = await prisma.role_permission.findMany()
     * 
     * // Get first 10 Role_permissions
     * const role_permissions = await prisma.role_permission.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const role_permissionWithRole_idOnly = await prisma.role_permission.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends role_permissionFindManyArgs>(args?: SelectSubset<T, role_permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Role_permission.
     * @param {role_permissionCreateArgs} args - Arguments to create a Role_permission.
     * @example
     * // Create one Role_permission
     * const Role_permission = await prisma.role_permission.create({
     *   data: {
     *     // ... data to create a Role_permission
     *   }
     * })
     * 
     */
    create<T extends role_permissionCreateArgs>(args: SelectSubset<T, role_permissionCreateArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Role_permissions.
     * @param {role_permissionCreateManyArgs} args - Arguments to create many Role_permissions.
     * @example
     * // Create many Role_permissions
     * const role_permission = await prisma.role_permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends role_permissionCreateManyArgs>(args?: SelectSubset<T, role_permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role_permission.
     * @param {role_permissionDeleteArgs} args - Arguments to delete one Role_permission.
     * @example
     * // Delete one Role_permission
     * const Role_permission = await prisma.role_permission.delete({
     *   where: {
     *     // ... filter to delete one Role_permission
     *   }
     * })
     * 
     */
    delete<T extends role_permissionDeleteArgs>(args: SelectSubset<T, role_permissionDeleteArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Role_permission.
     * @param {role_permissionUpdateArgs} args - Arguments to update one Role_permission.
     * @example
     * // Update one Role_permission
     * const role_permission = await prisma.role_permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends role_permissionUpdateArgs>(args: SelectSubset<T, role_permissionUpdateArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Role_permissions.
     * @param {role_permissionDeleteManyArgs} args - Arguments to filter Role_permissions to delete.
     * @example
     * // Delete a few Role_permissions
     * const { count } = await prisma.role_permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends role_permissionDeleteManyArgs>(args?: SelectSubset<T, role_permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role_permissions
     * const role_permission = await prisma.role_permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends role_permissionUpdateManyArgs>(args: SelectSubset<T, role_permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role_permission.
     * @param {role_permissionUpsertArgs} args - Arguments to update or create a Role_permission.
     * @example
     * // Update or create a Role_permission
     * const role_permission = await prisma.role_permission.upsert({
     *   create: {
     *     // ... data to create a Role_permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role_permission we want to update
     *   }
     * })
     */
    upsert<T extends role_permissionUpsertArgs>(args: SelectSubset<T, role_permissionUpsertArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionCountArgs} args - Arguments to filter Role_permissions to count.
     * @example
     * // Count the number of Role_permissions
     * const count = await prisma.role_permission.count({
     *   where: {
     *     // ... the filter for the Role_permissions we want to count
     *   }
     * })
    **/
    count<T extends role_permissionCountArgs>(
      args?: Subset<T, role_permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Role_permissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_permissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Role_permissionAggregateArgs>(args: Subset<T, Role_permissionAggregateArgs>): Prisma.PrismaPromise<GetRole_permissionAggregateType<T>>

    /**
     * Group by Role_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends role_permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: role_permissionGroupByArgs['orderBy'] }
        : { orderBy?: role_permissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, role_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role_permission model
   */
  readonly fields: role_permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role_permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__role_permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    permission<T extends permissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, permissionsDefaultArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role_permission model
   */ 
  interface role_permissionFieldRefs {
    readonly role_id: FieldRef<"role_permission", 'String'>
    readonly permission_id: FieldRef<"role_permission", 'String'>
    readonly granted_at: FieldRef<"role_permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * role_permission findUnique
   */
  export type role_permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which role_permission to fetch.
     */
    where: role_permissionWhereUniqueInput
  }

  /**
   * role_permission findUniqueOrThrow
   */
  export type role_permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which role_permission to fetch.
     */
    where: role_permissionWhereUniqueInput
  }

  /**
   * role_permission findFirst
   */
  export type role_permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which role_permission to fetch.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_permissions.
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_permissions.
     */
    distinct?: Role_permissionScalarFieldEnum | Role_permissionScalarFieldEnum[]
  }

  /**
   * role_permission findFirstOrThrow
   */
  export type role_permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which role_permission to fetch.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_permissions.
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_permissions.
     */
    distinct?: Role_permissionScalarFieldEnum | Role_permissionScalarFieldEnum[]
  }

  /**
   * role_permission findMany
   */
  export type role_permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing role_permissions.
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    distinct?: Role_permissionScalarFieldEnum | Role_permissionScalarFieldEnum[]
  }

  /**
   * role_permission create
   */
  export type role_permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * The data needed to create a role_permission.
     */
    data: XOR<role_permissionCreateInput, role_permissionUncheckedCreateInput>
  }

  /**
   * role_permission createMany
   */
  export type role_permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many role_permissions.
     */
    data: role_permissionCreateManyInput | role_permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role_permission update
   */
  export type role_permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * The data needed to update a role_permission.
     */
    data: XOR<role_permissionUpdateInput, role_permissionUncheckedUpdateInput>
    /**
     * Choose, which role_permission to update.
     */
    where: role_permissionWhereUniqueInput
  }

  /**
   * role_permission updateMany
   */
  export type role_permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update role_permissions.
     */
    data: XOR<role_permissionUpdateManyMutationInput, role_permissionUncheckedUpdateManyInput>
    /**
     * Filter which role_permissions to update
     */
    where?: role_permissionWhereInput
    /**
     * Limit how many role_permissions to update.
     */
    limit?: number
  }

  /**
   * role_permission upsert
   */
  export type role_permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * The filter to search for the role_permission to update in case it exists.
     */
    where: role_permissionWhereUniqueInput
    /**
     * In case the role_permission found by the `where` argument doesn't exist, create a new role_permission with this data.
     */
    create: XOR<role_permissionCreateInput, role_permissionUncheckedCreateInput>
    /**
     * In case the role_permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<role_permissionUpdateInput, role_permissionUncheckedUpdateInput>
  }

  /**
   * role_permission delete
   */
  export type role_permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter which role_permission to delete.
     */
    where: role_permissionWhereUniqueInput
  }

  /**
   * role_permission deleteMany
   */
  export type role_permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_permissions to delete
     */
    where?: role_permissionWhereInput
    /**
     * Limit how many role_permissions to delete.
     */
    limit?: number
  }

  /**
   * role_permission without action
   */
  export type role_permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
  }


  /**
   * Model UserAddress
   */

  export type AggregateUserAddress = {
    _count: UserAddressCountAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  export type UserAddressMinAggregateOutputType = {
    id: string | null
    user_name: string | null
    user_phone: string | null
    user_id: string | null
    street: string | null
    district: string | null
    city: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type UserAddressMaxAggregateOutputType = {
    id: string | null
    user_name: string | null
    user_phone: string | null
    user_id: string | null
    street: string | null
    district: string | null
    city: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type UserAddressCountAggregateOutputType = {
    id: number
    user_name: number
    user_phone: number
    user_id: number
    street: number
    district: number
    city: number
    created_at: number
    updated_at: number
    is_deleted: number
    _all: number
  }


  export type UserAddressMinAggregateInputType = {
    id?: true
    user_name?: true
    user_phone?: true
    user_id?: true
    street?: true
    district?: true
    city?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type UserAddressMaxAggregateInputType = {
    id?: true
    user_name?: true
    user_phone?: true
    user_id?: true
    street?: true
    district?: true
    city?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type UserAddressCountAggregateInputType = {
    id?: true
    user_name?: true
    user_phone?: true
    user_id?: true
    street?: true
    district?: true
    city?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    _all?: true
  }

  export type UserAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddress to aggregate.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAddresses
    **/
    _count?: true | UserAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAddressMaxAggregateInputType
  }

  export type GetUserAddressAggregateType<T extends UserAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAddress[P]>
      : GetScalarType<T[P], AggregateUserAddress[P]>
  }




  export type UserAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddressWhereInput
    orderBy?: UserAddressOrderByWithAggregationInput | UserAddressOrderByWithAggregationInput[]
    by: UserAddressScalarFieldEnum[] | UserAddressScalarFieldEnum
    having?: UserAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAddressCountAggregateInputType | true
    _min?: UserAddressMinAggregateInputType
    _max?: UserAddressMaxAggregateInputType
  }

  export type UserAddressGroupByOutputType = {
    id: string
    user_name: string
    user_phone: string
    user_id: string
    street: string
    district: string
    city: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    _count: UserAddressCountAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  type GetUserAddressGroupByPayload<T extends UserAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
            : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
        }
      >
    >


  export type UserAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    user_phone?: boolean
    user_id?: boolean
    street?: boolean
    district?: boolean
    city?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>



  export type UserAddressSelectScalar = {
    id?: boolean
    user_name?: boolean
    user_phone?: boolean
    user_id?: boolean
    street?: boolean
    district?: boolean
    city?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
  }

  export type UserAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_name" | "user_phone" | "user_id" | "street" | "district" | "city" | "created_at" | "updated_at" | "is_deleted", ExtArgs["result"]["userAddress"]>
  export type UserAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $UserAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAddress"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_name: string
      user_phone: string
      user_id: string
      street: string
      district: string
      city: string
      created_at: Date
      updated_at: Date
      is_deleted: boolean
    }, ExtArgs["result"]["userAddress"]>
    composites: {}
  }

  type UserAddressGetPayload<S extends boolean | null | undefined | UserAddressDefaultArgs> = $Result.GetResult<Prisma.$UserAddressPayload, S>

  type UserAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAddressCountAggregateInputType | true
    }

  export interface UserAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAddress'], meta: { name: 'UserAddress' } }
    /**
     * Find zero or one UserAddress that matches the filter.
     * @param {UserAddressFindUniqueArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAddressFindUniqueArgs>(args: SelectSubset<T, UserAddressFindUniqueArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAddressFindUniqueOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAddressFindFirstArgs>(args?: SelectSubset<T, UserAddressFindFirstArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAddresses
     * const userAddresses = await prisma.userAddress.findMany()
     * 
     * // Get first 10 UserAddresses
     * const userAddresses = await prisma.userAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAddressFindManyArgs>(args?: SelectSubset<T, UserAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserAddress.
     * @param {UserAddressCreateArgs} args - Arguments to create a UserAddress.
     * @example
     * // Create one UserAddress
     * const UserAddress = await prisma.userAddress.create({
     *   data: {
     *     // ... data to create a UserAddress
     *   }
     * })
     * 
     */
    create<T extends UserAddressCreateArgs>(args: SelectSubset<T, UserAddressCreateArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserAddresses.
     * @param {UserAddressCreateManyArgs} args - Arguments to create many UserAddresses.
     * @example
     * // Create many UserAddresses
     * const userAddress = await prisma.userAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAddressCreateManyArgs>(args?: SelectSubset<T, UserAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAddress.
     * @param {UserAddressDeleteArgs} args - Arguments to delete one UserAddress.
     * @example
     * // Delete one UserAddress
     * const UserAddress = await prisma.userAddress.delete({
     *   where: {
     *     // ... filter to delete one UserAddress
     *   }
     * })
     * 
     */
    delete<T extends UserAddressDeleteArgs>(args: SelectSubset<T, UserAddressDeleteArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserAddress.
     * @param {UserAddressUpdateArgs} args - Arguments to update one UserAddress.
     * @example
     * // Update one UserAddress
     * const userAddress = await prisma.userAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAddressUpdateArgs>(args: SelectSubset<T, UserAddressUpdateArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserAddresses.
     * @param {UserAddressDeleteManyArgs} args - Arguments to filter UserAddresses to delete.
     * @example
     * // Delete a few UserAddresses
     * const { count } = await prisma.userAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAddressDeleteManyArgs>(args?: SelectSubset<T, UserAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAddresses
     * const userAddress = await prisma.userAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAddressUpdateManyArgs>(args: SelectSubset<T, UserAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAddress.
     * @param {UserAddressUpsertArgs} args - Arguments to update or create a UserAddress.
     * @example
     * // Update or create a UserAddress
     * const userAddress = await prisma.userAddress.upsert({
     *   create: {
     *     // ... data to create a UserAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAddress we want to update
     *   }
     * })
     */
    upsert<T extends UserAddressUpsertArgs>(args: SelectSubset<T, UserAddressUpsertArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressCountArgs} args - Arguments to filter UserAddresses to count.
     * @example
     * // Count the number of UserAddresses
     * const count = await prisma.userAddress.count({
     *   where: {
     *     // ... the filter for the UserAddresses we want to count
     *   }
     * })
    **/
    count<T extends UserAddressCountArgs>(
      args?: Subset<T, UserAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAddressAggregateArgs>(args: Subset<T, UserAddressAggregateArgs>): Prisma.PrismaPromise<GetUserAddressAggregateType<T>>

    /**
     * Group by UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAddressGroupByArgs['orderBy'] }
        : { orderBy?: UserAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAddress model
   */
  readonly fields: UserAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAddress model
   */ 
  interface UserAddressFieldRefs {
    readonly id: FieldRef<"UserAddress", 'String'>
    readonly user_name: FieldRef<"UserAddress", 'String'>
    readonly user_phone: FieldRef<"UserAddress", 'String'>
    readonly user_id: FieldRef<"UserAddress", 'String'>
    readonly street: FieldRef<"UserAddress", 'String'>
    readonly district: FieldRef<"UserAddress", 'String'>
    readonly city: FieldRef<"UserAddress", 'String'>
    readonly created_at: FieldRef<"UserAddress", 'DateTime'>
    readonly updated_at: FieldRef<"UserAddress", 'DateTime'>
    readonly is_deleted: FieldRef<"UserAddress", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserAddress findUnique
   */
  export type UserAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress findUniqueOrThrow
   */
  export type UserAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress findFirst
   */
  export type UserAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress findFirstOrThrow
   */
  export type UserAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress findMany
   */
  export type UserAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddresses to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress create
   */
  export type UserAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAddress.
     */
    data: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
  }

  /**
   * UserAddress createMany
   */
  export type UserAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressCreateManyInput | UserAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAddress update
   */
  export type UserAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAddress.
     */
    data: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
    /**
     * Choose, which UserAddress to update.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress updateMany
   */
  export type UserAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAddresses.
     */
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyInput>
    /**
     * Filter which UserAddresses to update
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to update.
     */
    limit?: number
  }

  /**
   * UserAddress upsert
   */
  export type UserAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAddress to update in case it exists.
     */
    where: UserAddressWhereUniqueInput
    /**
     * In case the UserAddress found by the `where` argument doesn't exist, create a new UserAddress with this data.
     */
    create: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
    /**
     * In case the UserAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
  }

  /**
   * UserAddress delete
   */
  export type UserAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter which UserAddress to delete.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress deleteMany
   */
  export type UserAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddresses to delete
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to delete.
     */
    limit?: number
  }

  /**
   * UserAddress without action
   */
  export type UserAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const User_tokensScalarFieldEnum: {
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

  export type User_tokensScalarFieldEnum = (typeof User_tokensScalarFieldEnum)[keyof typeof User_tokensScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    role_name: 'role_name',
    role_description: 'role_description',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const PermissionsScalarFieldEnum: {
    id: 'id',
    permission_name: 'permission_name',
    permission_description: 'permission_description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PermissionsScalarFieldEnum = (typeof PermissionsScalarFieldEnum)[keyof typeof PermissionsScalarFieldEnum]


  export const User_roleScalarFieldEnum: {
    user_id: 'user_id',
    role_id: 'role_id',
    assigned_at: 'assigned_at'
  };

  export type User_roleScalarFieldEnum = (typeof User_roleScalarFieldEnum)[keyof typeof User_roleScalarFieldEnum]


  export const Role_permissionScalarFieldEnum: {
    role_id: 'role_id',
    permission_id: 'permission_id',
    granted_at: 'granted_at'
  };

  export type Role_permissionScalarFieldEnum = (typeof Role_permissionScalarFieldEnum)[keyof typeof Role_permissionScalarFieldEnum]


  export const UserAddressScalarFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    user_phone: 'user_phone',
    user_id: 'user_id',
    street: 'street',
    district: 'district',
    city: 'city',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted'
  };

  export type UserAddressScalarFieldEnum = (typeof UserAddressScalarFieldEnum)[keyof typeof UserAddressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const usersOrderByRelevanceFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    user_avatar: 'user_avatar',
    user_email: 'user_email',
    user_phone: 'user_phone',
    user_password: 'user_password',
    user_salt: 'user_salt'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const user_tokensOrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    user_refresh_token: 'user_refresh_token',
    user_public_key: 'user_public_key',
    user_private_key: 'user_private_key',
    user_login_ip: 'user_login_ip',
    user_agent: 'user_agent'
  };

  export type user_tokensOrderByRelevanceFieldEnum = (typeof user_tokensOrderByRelevanceFieldEnum)[keyof typeof user_tokensOrderByRelevanceFieldEnum]


  export const rolesOrderByRelevanceFieldEnum: {
    id: 'id',
    role_name: 'role_name',
    role_description: 'role_description'
  };

  export type rolesOrderByRelevanceFieldEnum = (typeof rolesOrderByRelevanceFieldEnum)[keyof typeof rolesOrderByRelevanceFieldEnum]


  export const permissionsOrderByRelevanceFieldEnum: {
    id: 'id',
    permission_name: 'permission_name',
    permission_description: 'permission_description'
  };

  export type permissionsOrderByRelevanceFieldEnum = (typeof permissionsOrderByRelevanceFieldEnum)[keyof typeof permissionsOrderByRelevanceFieldEnum]


  export const user_roleOrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    role_id: 'role_id'
  };

  export type user_roleOrderByRelevanceFieldEnum = (typeof user_roleOrderByRelevanceFieldEnum)[keyof typeof user_roleOrderByRelevanceFieldEnum]


  export const role_permissionOrderByRelevanceFieldEnum: {
    role_id: 'role_id',
    permission_id: 'permission_id'
  };

  export type role_permissionOrderByRelevanceFieldEnum = (typeof role_permissionOrderByRelevanceFieldEnum)[keyof typeof role_permissionOrderByRelevanceFieldEnum]


  export const UserAddressOrderByRelevanceFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    user_phone: 'user_phone',
    user_id: 'user_id',
    street: 'street',
    district: 'district',
    city: 'city'
  };

  export type UserAddressOrderByRelevanceFieldEnum = (typeof UserAddressOrderByRelevanceFieldEnum)[keyof typeof UserAddressOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    user_name?: StringFilter<"users"> | string
    user_avatar?: StringFilter<"users"> | string
    user_email?: StringFilter<"users"> | string
    user_phone?: StringFilter<"users"> | string
    user_password?: StringFilter<"users"> | string
    user_gender?: EnumGenderFilter<"users"> | $Enums.Gender
    user_birthday?: DateTimeNullableFilter<"users"> | Date | string | null
    user_salt?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    user_tokens?: User_tokensListRelationFilter
    user_roles?: User_roleListRelationFilter
    user_address?: UserAddressListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_avatar?: SortOrder
    user_email?: SortOrder
    user_phone?: SortOrder
    user_password?: SortOrder
    user_gender?: SortOrder
    user_birthday?: SortOrderInput | SortOrder
    user_salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_tokens?: user_tokensOrderByRelationAggregateInput
    user_roles?: user_roleOrderByRelationAggregateInput
    user_address?: UserAddressOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_name?: StringFilter<"users"> | string
    user_avatar?: StringFilter<"users"> | string
    user_phone?: StringFilter<"users"> | string
    user_password?: StringFilter<"users"> | string
    user_gender?: EnumGenderFilter<"users"> | $Enums.Gender
    user_birthday?: DateTimeNullableFilter<"users"> | Date | string | null
    user_salt?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    user_tokens?: User_tokensListRelationFilter
    user_roles?: User_roleListRelationFilter
    user_address?: UserAddressListRelationFilter
  }, "id" | "user_email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_avatar?: SortOrder
    user_email?: SortOrder
    user_phone?: SortOrder
    user_password?: SortOrder
    user_gender?: SortOrder
    user_birthday?: SortOrderInput | SortOrder
    user_salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    user_name?: StringWithAggregatesFilter<"users"> | string
    user_avatar?: StringWithAggregatesFilter<"users"> | string
    user_email?: StringWithAggregatesFilter<"users"> | string
    user_phone?: StringWithAggregatesFilter<"users"> | string
    user_password?: StringWithAggregatesFilter<"users"> | string
    user_gender?: EnumGenderWithAggregatesFilter<"users"> | $Enums.Gender
    user_birthday?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    user_salt?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type user_tokensWhereInput = {
    AND?: user_tokensWhereInput | user_tokensWhereInput[]
    OR?: user_tokensWhereInput[]
    NOT?: user_tokensWhereInput | user_tokensWhereInput[]
    user_id?: StringFilter<"user_tokens"> | string
    user_refresh_token?: StringFilter<"user_tokens"> | string
    user_public_key?: StringFilter<"user_tokens"> | string
    user_private_key?: StringFilter<"user_tokens"> | string
    user_login_time?: DateTimeFilter<"user_tokens"> | Date | string
    user_login_ip?: StringFilter<"user_tokens"> | string
    user_agent?: StringFilter<"user_tokens"> | string
    expiration?: DateTimeFilter<"user_tokens"> | Date | string
    is_active?: BoolFilter<"user_tokens"> | boolean
    created_at?: DateTimeFilter<"user_tokens"> | Date | string
    updated_at?: DateTimeFilter<"user_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_tokensOrderByWithRelationInput = {
    user_id?: SortOrder
    user_refresh_token?: SortOrder
    user_public_key?: SortOrder
    user_private_key?: SortOrder
    user_login_time?: SortOrder
    user_login_ip?: SortOrder
    user_agent?: SortOrder
    expiration?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: user_tokensOrderByRelevanceInput
  }

  export type user_tokensWhereUniqueInput = Prisma.AtLeast<{
    user_refresh_token?: string
    user_public_key?: string
    user_private_key?: string
    AND?: user_tokensWhereInput | user_tokensWhereInput[]
    OR?: user_tokensWhereInput[]
    NOT?: user_tokensWhereInput | user_tokensWhereInput[]
    user_id?: StringFilter<"user_tokens"> | string
    user_login_time?: DateTimeFilter<"user_tokens"> | Date | string
    user_login_ip?: StringFilter<"user_tokens"> | string
    user_agent?: StringFilter<"user_tokens"> | string
    expiration?: DateTimeFilter<"user_tokens"> | Date | string
    is_active?: BoolFilter<"user_tokens"> | boolean
    created_at?: DateTimeFilter<"user_tokens"> | Date | string
    updated_at?: DateTimeFilter<"user_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_refresh_token" | "user_public_key" | "user_private_key">

  export type user_tokensOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_refresh_token?: SortOrder
    user_public_key?: SortOrder
    user_private_key?: SortOrder
    user_login_time?: SortOrder
    user_login_ip?: SortOrder
    user_agent?: SortOrder
    expiration?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: user_tokensCountOrderByAggregateInput
    _max?: user_tokensMaxOrderByAggregateInput
    _min?: user_tokensMinOrderByAggregateInput
  }

  export type user_tokensScalarWhereWithAggregatesInput = {
    AND?: user_tokensScalarWhereWithAggregatesInput | user_tokensScalarWhereWithAggregatesInput[]
    OR?: user_tokensScalarWhereWithAggregatesInput[]
    NOT?: user_tokensScalarWhereWithAggregatesInput | user_tokensScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"user_tokens"> | string
    user_refresh_token?: StringWithAggregatesFilter<"user_tokens"> | string
    user_public_key?: StringWithAggregatesFilter<"user_tokens"> | string
    user_private_key?: StringWithAggregatesFilter<"user_tokens"> | string
    user_login_time?: DateTimeWithAggregatesFilter<"user_tokens"> | Date | string
    user_login_ip?: StringWithAggregatesFilter<"user_tokens"> | string
    user_agent?: StringWithAggregatesFilter<"user_tokens"> | string
    expiration?: DateTimeWithAggregatesFilter<"user_tokens"> | Date | string
    is_active?: BoolWithAggregatesFilter<"user_tokens"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"user_tokens"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_tokens"> | Date | string
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: StringFilter<"roles"> | string
    role_name?: StringFilter<"roles"> | string
    role_description?: StringNullableFilter<"roles"> | string | null
    is_deleted?: BoolFilter<"roles"> | boolean
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
    deleted_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    role_user?: User_roleListRelationFilter
    role_permissions?: Role_permissionListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    role_user?: user_roleOrderByRelationAggregateInput
    role_permissions?: role_permissionOrderByRelationAggregateInput
    _relevance?: rolesOrderByRelevanceInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    role_name?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    role_description?: StringNullableFilter<"roles"> | string | null
    is_deleted?: BoolFilter<"roles"> | boolean
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
    deleted_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    role_user?: User_roleListRelationFilter
    role_permissions?: Role_permissionListRelationFilter
  }, "id" | "role_name">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: rolesCountOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"roles"> | string
    role_name?: StringWithAggregatesFilter<"roles"> | string
    role_description?: StringNullableWithAggregatesFilter<"roles"> | string | null
    is_deleted?: BoolWithAggregatesFilter<"roles"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
  }

  export type permissionsWhereInput = {
    AND?: permissionsWhereInput | permissionsWhereInput[]
    OR?: permissionsWhereInput[]
    NOT?: permissionsWhereInput | permissionsWhereInput[]
    id?: StringFilter<"permissions"> | string
    permission_name?: StringFilter<"permissions"> | string
    permission_description?: StringNullableFilter<"permissions"> | string | null
    created_at?: DateTimeFilter<"permissions"> | Date | string
    updated_at?: DateTimeFilter<"permissions"> | Date | string
    permission_role?: Role_permissionListRelationFilter
  }

  export type permissionsOrderByWithRelationInput = {
    id?: SortOrder
    permission_name?: SortOrder
    permission_description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    permission_role?: role_permissionOrderByRelationAggregateInput
    _relevance?: permissionsOrderByRelevanceInput
  }

  export type permissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    permission_name?: string
    AND?: permissionsWhereInput | permissionsWhereInput[]
    OR?: permissionsWhereInput[]
    NOT?: permissionsWhereInput | permissionsWhereInput[]
    permission_description?: StringNullableFilter<"permissions"> | string | null
    created_at?: DateTimeFilter<"permissions"> | Date | string
    updated_at?: DateTimeFilter<"permissions"> | Date | string
    permission_role?: Role_permissionListRelationFilter
  }, "id" | "permission_name">

  export type permissionsOrderByWithAggregationInput = {
    id?: SortOrder
    permission_name?: SortOrder
    permission_description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: permissionsCountOrderByAggregateInput
    _max?: permissionsMaxOrderByAggregateInput
    _min?: permissionsMinOrderByAggregateInput
  }

  export type permissionsScalarWhereWithAggregatesInput = {
    AND?: permissionsScalarWhereWithAggregatesInput | permissionsScalarWhereWithAggregatesInput[]
    OR?: permissionsScalarWhereWithAggregatesInput[]
    NOT?: permissionsScalarWhereWithAggregatesInput | permissionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"permissions"> | string
    permission_name?: StringWithAggregatesFilter<"permissions"> | string
    permission_description?: StringNullableWithAggregatesFilter<"permissions"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"permissions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"permissions"> | Date | string
  }

  export type user_roleWhereInput = {
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    user_id?: StringFilter<"user_role"> | string
    role_id?: StringFilter<"user_role"> | string
    assigned_at?: DateTimeFilter<"user_role"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
  }

  export type user_roleOrderByWithRelationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_at?: SortOrder
    user?: usersOrderByWithRelationInput
    role?: rolesOrderByWithRelationInput
    _relevance?: user_roleOrderByRelevanceInput
  }

  export type user_roleWhereUniqueInput = Prisma.AtLeast<{
    user_id_role_id?: user_roleUser_idRole_idCompoundUniqueInput
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    user_id?: StringFilter<"user_role"> | string
    role_id?: StringFilter<"user_role"> | string
    assigned_at?: DateTimeFilter<"user_role"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
  }, "user_id_role_id">

  export type user_roleOrderByWithAggregationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_at?: SortOrder
    _count?: user_roleCountOrderByAggregateInput
    _max?: user_roleMaxOrderByAggregateInput
    _min?: user_roleMinOrderByAggregateInput
  }

  export type user_roleScalarWhereWithAggregatesInput = {
    AND?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    OR?: user_roleScalarWhereWithAggregatesInput[]
    NOT?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"user_role"> | string
    role_id?: StringWithAggregatesFilter<"user_role"> | string
    assigned_at?: DateTimeWithAggregatesFilter<"user_role"> | Date | string
  }

  export type role_permissionWhereInput = {
    AND?: role_permissionWhereInput | role_permissionWhereInput[]
    OR?: role_permissionWhereInput[]
    NOT?: role_permissionWhereInput | role_permissionWhereInput[]
    role_id?: StringFilter<"role_permission"> | string
    permission_id?: StringFilter<"role_permission"> | string
    granted_at?: DateTimeFilter<"role_permission"> | Date | string
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    permission?: XOR<PermissionsScalarRelationFilter, permissionsWhereInput>
  }

  export type role_permissionOrderByWithRelationInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    granted_at?: SortOrder
    role?: rolesOrderByWithRelationInput
    permission?: permissionsOrderByWithRelationInput
    _relevance?: role_permissionOrderByRelevanceInput
  }

  export type role_permissionWhereUniqueInput = Prisma.AtLeast<{
    role_id_permission_id?: role_permissionRole_idPermission_idCompoundUniqueInput
    AND?: role_permissionWhereInput | role_permissionWhereInput[]
    OR?: role_permissionWhereInput[]
    NOT?: role_permissionWhereInput | role_permissionWhereInput[]
    role_id?: StringFilter<"role_permission"> | string
    permission_id?: StringFilter<"role_permission"> | string
    granted_at?: DateTimeFilter<"role_permission"> | Date | string
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    permission?: XOR<PermissionsScalarRelationFilter, permissionsWhereInput>
  }, "role_id_permission_id">

  export type role_permissionOrderByWithAggregationInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    granted_at?: SortOrder
    _count?: role_permissionCountOrderByAggregateInput
    _max?: role_permissionMaxOrderByAggregateInput
    _min?: role_permissionMinOrderByAggregateInput
  }

  export type role_permissionScalarWhereWithAggregatesInput = {
    AND?: role_permissionScalarWhereWithAggregatesInput | role_permissionScalarWhereWithAggregatesInput[]
    OR?: role_permissionScalarWhereWithAggregatesInput[]
    NOT?: role_permissionScalarWhereWithAggregatesInput | role_permissionScalarWhereWithAggregatesInput[]
    role_id?: StringWithAggregatesFilter<"role_permission"> | string
    permission_id?: StringWithAggregatesFilter<"role_permission"> | string
    granted_at?: DateTimeWithAggregatesFilter<"role_permission"> | Date | string
  }

  export type UserAddressWhereInput = {
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    id?: StringFilter<"UserAddress"> | string
    user_name?: StringFilter<"UserAddress"> | string
    user_phone?: StringFilter<"UserAddress"> | string
    user_id?: StringFilter<"UserAddress"> | string
    street?: StringFilter<"UserAddress"> | string
    district?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    created_at?: DateTimeFilter<"UserAddress"> | Date | string
    updated_at?: DateTimeFilter<"UserAddress"> | Date | string
    is_deleted?: BoolFilter<"UserAddress"> | boolean
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type UserAddressOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    district?: SortOrder
    city?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: UserAddressOrderByRelevanceInput
  }

  export type UserAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    user_name?: StringFilter<"UserAddress"> | string
    user_phone?: StringFilter<"UserAddress"> | string
    user_id?: StringFilter<"UserAddress"> | string
    street?: StringFilter<"UserAddress"> | string
    district?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    created_at?: DateTimeFilter<"UserAddress"> | Date | string
    updated_at?: DateTimeFilter<"UserAddress"> | Date | string
    is_deleted?: BoolFilter<"UserAddress"> | boolean
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type UserAddressOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    district?: SortOrder
    city?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    _count?: UserAddressCountOrderByAggregateInput
    _max?: UserAddressMaxOrderByAggregateInput
    _min?: UserAddressMinOrderByAggregateInput
  }

  export type UserAddressScalarWhereWithAggregatesInput = {
    AND?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    OR?: UserAddressScalarWhereWithAggregatesInput[]
    NOT?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAddress"> | string
    user_name?: StringWithAggregatesFilter<"UserAddress"> | string
    user_phone?: StringWithAggregatesFilter<"UserAddress"> | string
    user_id?: StringWithAggregatesFilter<"UserAddress"> | string
    street?: StringWithAggregatesFilter<"UserAddress"> | string
    district?: StringWithAggregatesFilter<"UserAddress"> | string
    city?: StringWithAggregatesFilter<"UserAddress"> | string
    created_at?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"UserAddress"> | boolean
  }

  export type usersCreateInput = {
    id?: string
    user_name?: string
    user_avatar?: string
    user_email: string
    user_phone?: string
    user_password: string
    user_gender?: $Enums.Gender
    user_birthday?: Date | string | null
    user_salt: string
    created_at?: Date | string
    updated_at?: Date | string
    user_tokens?: user_tokensCreateNestedManyWithoutUserInput
    user_roles?: user_roleCreateNestedManyWithoutUserInput
    user_address?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    user_name?: string
    user_avatar?: string
    user_email: string
    user_phone?: string
    user_password: string
    user_gender?: $Enums.Gender
    user_birthday?: Date | string | null
    user_salt: string
    created_at?: Date | string
    updated_at?: Date | string
    user_tokens?: user_tokensUncheckedCreateNestedManyWithoutUserInput
    user_roles?: user_roleUncheckedCreateNestedManyWithoutUserInput
    user_address?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_tokens?: user_tokensUpdateManyWithoutUserNestedInput
    user_roles?: user_roleUpdateManyWithoutUserNestedInput
    user_address?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_tokens?: user_tokensUncheckedUpdateManyWithoutUserNestedInput
    user_roles?: user_roleUncheckedUpdateManyWithoutUserNestedInput
    user_address?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    user_name?: string
    user_avatar?: string
    user_email: string
    user_phone?: string
    user_password: string
    user_gender?: $Enums.Gender
    user_birthday?: Date | string | null
    user_salt: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_tokensCreateInput = {
    user_refresh_token: string
    user_public_key: string
    user_private_key: string
    user_login_time?: Date | string
    user_login_ip?: string
    user_agent?: string
    expiration: Date | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: usersCreateNestedOneWithoutUser_tokensInput
  }

  export type user_tokensUncheckedCreateInput = {
    user_id: string
    user_refresh_token: string
    user_public_key: string
    user_private_key: string
    user_login_time?: Date | string
    user_login_ip?: string
    user_agent?: string
    expiration: Date | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_tokensUpdateInput = {
    user_refresh_token?: StringFieldUpdateOperationsInput | string
    user_public_key?: StringFieldUpdateOperationsInput | string
    user_private_key?: StringFieldUpdateOperationsInput | string
    user_login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user_login_ip?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutUser_tokensNestedInput
  }

  export type user_tokensUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_refresh_token?: StringFieldUpdateOperationsInput | string
    user_public_key?: StringFieldUpdateOperationsInput | string
    user_private_key?: StringFieldUpdateOperationsInput | string
    user_login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user_login_ip?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_tokensCreateManyInput = {
    user_id: string
    user_refresh_token: string
    user_public_key: string
    user_private_key: string
    user_login_time?: Date | string
    user_login_ip?: string
    user_agent?: string
    expiration: Date | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_tokensUpdateManyMutationInput = {
    user_refresh_token?: StringFieldUpdateOperationsInput | string
    user_public_key?: StringFieldUpdateOperationsInput | string
    user_private_key?: StringFieldUpdateOperationsInput | string
    user_login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user_login_ip?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_tokensUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_refresh_token?: StringFieldUpdateOperationsInput | string
    user_public_key?: StringFieldUpdateOperationsInput | string
    user_private_key?: StringFieldUpdateOperationsInput | string
    user_login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user_login_ip?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesCreateInput = {
    id?: string
    role_name: string
    role_description?: string | null
    is_deleted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    role_user?: user_roleCreateNestedManyWithoutRoleInput
    role_permissions?: role_permissionCreateNestedManyWithoutRoleInput
  }

  export type rolesUncheckedCreateInput = {
    id?: string
    role_name: string
    role_description?: string | null
    is_deleted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    role_user?: user_roleUncheckedCreateNestedManyWithoutRoleInput
    role_permissions?: role_permissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type rolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_user?: user_roleUpdateManyWithoutRoleNestedInput
    role_permissions?: role_permissionUpdateManyWithoutRoleNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_user?: user_roleUncheckedUpdateManyWithoutRoleNestedInput
    role_permissions?: role_permissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type rolesCreateManyInput = {
    id?: string
    role_name: string
    role_description?: string | null
    is_deleted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type rolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type permissionsCreateInput = {
    id?: string
    permission_name: string
    permission_description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    permission_role?: role_permissionCreateNestedManyWithoutPermissionInput
  }

  export type permissionsUncheckedCreateInput = {
    id?: string
    permission_name: string
    permission_description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    permission_role?: role_permissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type permissionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission_name?: StringFieldUpdateOperationsInput | string
    permission_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_role?: role_permissionUpdateManyWithoutPermissionNestedInput
  }

  export type permissionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission_name?: StringFieldUpdateOperationsInput | string
    permission_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_role?: role_permissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type permissionsCreateManyInput = {
    id?: string
    permission_name: string
    permission_description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type permissionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission_name?: StringFieldUpdateOperationsInput | string
    permission_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission_name?: StringFieldUpdateOperationsInput | string
    permission_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleCreateInput = {
    assigned_at?: Date | string
    user: usersCreateNestedOneWithoutUser_rolesInput
    role: rolesCreateNestedOneWithoutRole_userInput
  }

  export type user_roleUncheckedCreateInput = {
    user_id: string
    role_id: string
    assigned_at?: Date | string
  }

  export type user_roleUpdateInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutUser_rolesNestedInput
    role?: rolesUpdateOneRequiredWithoutRole_userNestedInput
  }

  export type user_roleUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleCreateManyInput = {
    user_id: string
    role_id: string
    assigned_at?: Date | string
  }

  export type user_roleUpdateManyMutationInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionCreateInput = {
    granted_at?: Date | string
    role: rolesCreateNestedOneWithoutRole_permissionsInput
    permission: permissionsCreateNestedOneWithoutPermission_roleInput
  }

  export type role_permissionUncheckedCreateInput = {
    role_id: string
    permission_id: string
    granted_at?: Date | string
  }

  export type role_permissionUpdateInput = {
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutRole_permissionsNestedInput
    permission?: permissionsUpdateOneRequiredWithoutPermission_roleNestedInput
  }

  export type role_permissionUncheckedUpdateInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    permission_id?: StringFieldUpdateOperationsInput | string
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionCreateManyInput = {
    role_id: string
    permission_id: string
    granted_at?: Date | string
  }

  export type role_permissionUpdateManyMutationInput = {
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionUncheckedUpdateManyInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    permission_id?: StringFieldUpdateOperationsInput | string
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressCreateInput = {
    id?: string
    user_name: string
    user_phone: string
    street: string
    district: string
    city: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    user: usersCreateNestedOneWithoutUser_addressInput
  }

  export type UserAddressUncheckedCreateInput = {
    id?: string
    user_name: string
    user_phone: string
    user_id: string
    street: string
    district: string
    city: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type UserAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: usersUpdateOneRequiredWithoutUser_addressNestedInput
  }

  export type UserAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAddressCreateManyInput = {
    id?: string
    user_name: string
    user_phone: string
    user_id: string
    street: string
    district: string
    city: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type UserAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type User_tokensListRelationFilter = {
    every?: user_tokensWhereInput
    some?: user_tokensWhereInput
    none?: user_tokensWhereInput
  }

  export type User_roleListRelationFilter = {
    every?: user_roleWhereInput
    some?: user_roleWhereInput
    none?: user_roleWhereInput
  }

  export type UserAddressListRelationFilter = {
    every?: UserAddressWhereInput
    some?: UserAddressWhereInput
    none?: UserAddressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_roleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_avatar?: SortOrder
    user_email?: SortOrder
    user_phone?: SortOrder
    user_password?: SortOrder
    user_gender?: SortOrder
    user_birthday?: SortOrder
    user_salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_avatar?: SortOrder
    user_email?: SortOrder
    user_phone?: SortOrder
    user_password?: SortOrder
    user_gender?: SortOrder
    user_birthday?: SortOrder
    user_salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_avatar?: SortOrder
    user_email?: SortOrder
    user_phone?: SortOrder
    user_password?: SortOrder
    user_gender?: SortOrder
    user_birthday?: SortOrder
    user_salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type user_tokensOrderByRelevanceInput = {
    fields: user_tokensOrderByRelevanceFieldEnum | user_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_tokensCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_refresh_token?: SortOrder
    user_public_key?: SortOrder
    user_private_key?: SortOrder
    user_login_time?: SortOrder
    user_login_ip?: SortOrder
    user_agent?: SortOrder
    expiration?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_tokensMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_refresh_token?: SortOrder
    user_public_key?: SortOrder
    user_private_key?: SortOrder
    user_login_time?: SortOrder
    user_login_ip?: SortOrder
    user_agent?: SortOrder
    expiration?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_tokensMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_refresh_token?: SortOrder
    user_public_key?: SortOrder
    user_private_key?: SortOrder
    user_login_time?: SortOrder
    user_login_ip?: SortOrder
    user_agent?: SortOrder
    expiration?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Role_permissionListRelationFilter = {
    every?: role_permissionWhereInput
    some?: role_permissionWhereInput
    none?: role_permissionWhereInput
  }

  export type role_permissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesOrderByRelevanceInput = {
    fields: rolesOrderByRelevanceFieldEnum | rolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type permissionsOrderByRelevanceInput = {
    fields: permissionsOrderByRelevanceFieldEnum | permissionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type permissionsCountOrderByAggregateInput = {
    id?: SortOrder
    permission_name?: SortOrder
    permission_description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    permission_name?: SortOrder
    permission_description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permissionsMinOrderByAggregateInput = {
    id?: SortOrder
    permission_name?: SortOrder
    permission_description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type user_roleOrderByRelevanceInput = {
    fields: user_roleOrderByRelevanceFieldEnum | user_roleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_roleUser_idRole_idCompoundUniqueInput = {
    user_id: string
    role_id: string
  }

  export type user_roleCountOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_at?: SortOrder
  }

  export type user_roleMaxOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_at?: SortOrder
  }

  export type user_roleMinOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_at?: SortOrder
  }

  export type PermissionsScalarRelationFilter = {
    is?: permissionsWhereInput
    isNot?: permissionsWhereInput
  }

  export type role_permissionOrderByRelevanceInput = {
    fields: role_permissionOrderByRelevanceFieldEnum | role_permissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type role_permissionRole_idPermission_idCompoundUniqueInput = {
    role_id: string
    permission_id: string
  }

  export type role_permissionCountOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    granted_at?: SortOrder
  }

  export type role_permissionMaxOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    granted_at?: SortOrder
  }

  export type role_permissionMinOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    granted_at?: SortOrder
  }

  export type UserAddressOrderByRelevanceInput = {
    fields: UserAddressOrderByRelevanceFieldEnum | UserAddressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserAddressCountOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    district?: SortOrder
    city?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type UserAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    district?: SortOrder
    city?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type UserAddressMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    district?: SortOrder
    city?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type user_tokensCreateNestedManyWithoutUserInput = {
    create?: XOR<user_tokensCreateWithoutUserInput, user_tokensUncheckedCreateWithoutUserInput> | user_tokensCreateWithoutUserInput[] | user_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tokensCreateOrConnectWithoutUserInput | user_tokensCreateOrConnectWithoutUserInput[]
    createMany?: user_tokensCreateManyUserInputEnvelope
    connect?: user_tokensWhereUniqueInput | user_tokensWhereUniqueInput[]
  }

  export type user_roleCreateNestedManyWithoutUserInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type UserAddressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
  }

  export type user_tokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_tokensCreateWithoutUserInput, user_tokensUncheckedCreateWithoutUserInput> | user_tokensCreateWithoutUserInput[] | user_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tokensCreateOrConnectWithoutUserInput | user_tokensCreateOrConnectWithoutUserInput[]
    createMany?: user_tokensCreateManyUserInputEnvelope
    connect?: user_tokensWhereUniqueInput | user_tokensWhereUniqueInput[]
  }

  export type user_roleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type UserAddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type user_tokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_tokensCreateWithoutUserInput, user_tokensUncheckedCreateWithoutUserInput> | user_tokensCreateWithoutUserInput[] | user_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tokensCreateOrConnectWithoutUserInput | user_tokensCreateOrConnectWithoutUserInput[]
    upsert?: user_tokensUpsertWithWhereUniqueWithoutUserInput | user_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_tokensCreateManyUserInputEnvelope
    set?: user_tokensWhereUniqueInput | user_tokensWhereUniqueInput[]
    disconnect?: user_tokensWhereUniqueInput | user_tokensWhereUniqueInput[]
    delete?: user_tokensWhereUniqueInput | user_tokensWhereUniqueInput[]
    connect?: user_tokensWhereUniqueInput | user_tokensWhereUniqueInput[]
    update?: user_tokensUpdateWithWhereUniqueWithoutUserInput | user_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_tokensUpdateManyWithWhereWithoutUserInput | user_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_tokensScalarWhereInput | user_tokensScalarWhereInput[]
  }

  export type user_roleUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutUserInput | user_roleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutUserInput | user_roleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutUserInput | user_roleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type UserAddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    upsert?: UserAddressUpsertWithWhereUniqueWithoutUserInput | UserAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    set?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    disconnect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    delete?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    update?: UserAddressUpdateWithWhereUniqueWithoutUserInput | UserAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAddressUpdateManyWithWhereWithoutUserInput | UserAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
  }

  export type user_tokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_tokensCreateWithoutUserInput, user_tokensUncheckedCreateWithoutUserInput> | user_tokensCreateWithoutUserInput[] | user_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tokensCreateOrConnectWithoutUserInput | user_tokensCreateOrConnectWithoutUserInput[]
    upsert?: user_tokensUpsertWithWhereUniqueWithoutUserInput | user_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_tokensCreateManyUserInputEnvelope
    set?: user_tokensWhereUniqueInput | user_tokensWhereUniqueInput[]
    disconnect?: user_tokensWhereUniqueInput | user_tokensWhereUniqueInput[]
    delete?: user_tokensWhereUniqueInput | user_tokensWhereUniqueInput[]
    connect?: user_tokensWhereUniqueInput | user_tokensWhereUniqueInput[]
    update?: user_tokensUpdateWithWhereUniqueWithoutUserInput | user_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_tokensUpdateManyWithWhereWithoutUserInput | user_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_tokensScalarWhereInput | user_tokensScalarWhereInput[]
  }

  export type user_roleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutUserInput | user_roleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutUserInput | user_roleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutUserInput | user_roleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type UserAddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    upsert?: UserAddressUpsertWithWhereUniqueWithoutUserInput | UserAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    set?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    disconnect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    delete?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    update?: UserAddressUpdateWithWhereUniqueWithoutUserInput | UserAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAddressUpdateManyWithWhereWithoutUserInput | UserAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_tokensInput = {
    create?: XOR<usersCreateWithoutUser_tokensInput, usersUncheckedCreateWithoutUser_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_tokensInput
    connect?: usersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneRequiredWithoutUser_tokensNestedInput = {
    create?: XOR<usersCreateWithoutUser_tokensInput, usersUncheckedCreateWithoutUser_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_tokensInput
    upsert?: usersUpsertWithoutUser_tokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_tokensInput, usersUpdateWithoutUser_tokensInput>, usersUncheckedUpdateWithoutUser_tokensInput>
  }

  export type user_roleCreateNestedManyWithoutRoleInput = {
    create?: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput> | user_roleCreateWithoutRoleInput[] | user_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[]
    createMany?: user_roleCreateManyRoleInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type role_permissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput> | role_permissionCreateWithoutRoleInput[] | role_permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutRoleInput | role_permissionCreateOrConnectWithoutRoleInput[]
    createMany?: role_permissionCreateManyRoleInputEnvelope
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
  }

  export type user_roleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput> | user_roleCreateWithoutRoleInput[] | user_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[]
    createMany?: user_roleCreateManyRoleInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type role_permissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput> | role_permissionCreateWithoutRoleInput[] | role_permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutRoleInput | role_permissionCreateOrConnectWithoutRoleInput[]
    createMany?: role_permissionCreateManyRoleInputEnvelope
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type user_roleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput> | user_roleCreateWithoutRoleInput[] | user_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutRoleInput | user_roleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: user_roleCreateManyRoleInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutRoleInput | user_roleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutRoleInput | user_roleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type role_permissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput> | role_permissionCreateWithoutRoleInput[] | role_permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutRoleInput | role_permissionCreateOrConnectWithoutRoleInput[]
    upsert?: role_permissionUpsertWithWhereUniqueWithoutRoleInput | role_permissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: role_permissionCreateManyRoleInputEnvelope
    set?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    disconnect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    delete?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    update?: role_permissionUpdateWithWhereUniqueWithoutRoleInput | role_permissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: role_permissionUpdateManyWithWhereWithoutRoleInput | role_permissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
  }

  export type user_roleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput> | user_roleCreateWithoutRoleInput[] | user_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutRoleInput | user_roleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: user_roleCreateManyRoleInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutRoleInput | user_roleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutRoleInput | user_roleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type role_permissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput> | role_permissionCreateWithoutRoleInput[] | role_permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutRoleInput | role_permissionCreateOrConnectWithoutRoleInput[]
    upsert?: role_permissionUpsertWithWhereUniqueWithoutRoleInput | role_permissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: role_permissionCreateManyRoleInputEnvelope
    set?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    disconnect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    delete?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    update?: role_permissionUpdateWithWhereUniqueWithoutRoleInput | role_permissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: role_permissionUpdateManyWithWhereWithoutRoleInput | role_permissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
  }

  export type role_permissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput> | role_permissionCreateWithoutPermissionInput[] | role_permissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutPermissionInput | role_permissionCreateOrConnectWithoutPermissionInput[]
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
  }

  export type role_permissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput> | role_permissionCreateWithoutPermissionInput[] | role_permissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutPermissionInput | role_permissionCreateOrConnectWithoutPermissionInput[]
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
  }

  export type role_permissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput> | role_permissionCreateWithoutPermissionInput[] | role_permissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutPermissionInput | role_permissionCreateOrConnectWithoutPermissionInput[]
    upsert?: role_permissionUpsertWithWhereUniqueWithoutPermissionInput | role_permissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    set?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    disconnect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    delete?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    update?: role_permissionUpdateWithWhereUniqueWithoutPermissionInput | role_permissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: role_permissionUpdateManyWithWhereWithoutPermissionInput | role_permissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
  }

  export type role_permissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput> | role_permissionCreateWithoutPermissionInput[] | role_permissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutPermissionInput | role_permissionCreateOrConnectWithoutPermissionInput[]
    upsert?: role_permissionUpsertWithWhereUniqueWithoutPermissionInput | role_permissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    set?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    disconnect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    delete?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    update?: role_permissionUpdateWithWhereUniqueWithoutPermissionInput | role_permissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: role_permissionUpdateManyWithWhereWithoutPermissionInput | role_permissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    connect?: usersWhereUniqueInput
  }

  export type rolesCreateNestedOneWithoutRole_userInput = {
    create?: XOR<rolesCreateWithoutRole_userInput, rolesUncheckedCreateWithoutRole_userInput>
    connectOrCreate?: rolesCreateOrConnectWithoutRole_userInput
    connect?: rolesWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    upsert?: usersUpsertWithoutUser_rolesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_rolesInput, usersUpdateWithoutUser_rolesInput>, usersUncheckedUpdateWithoutUser_rolesInput>
  }

  export type rolesUpdateOneRequiredWithoutRole_userNestedInput = {
    create?: XOR<rolesCreateWithoutRole_userInput, rolesUncheckedCreateWithoutRole_userInput>
    connectOrCreate?: rolesCreateOrConnectWithoutRole_userInput
    upsert?: rolesUpsertWithoutRole_userInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutRole_userInput, rolesUpdateWithoutRole_userInput>, rolesUncheckedUpdateWithoutRole_userInput>
  }

  export type rolesCreateNestedOneWithoutRole_permissionsInput = {
    create?: XOR<rolesCreateWithoutRole_permissionsInput, rolesUncheckedCreateWithoutRole_permissionsInput>
    connectOrCreate?: rolesCreateOrConnectWithoutRole_permissionsInput
    connect?: rolesWhereUniqueInput
  }

  export type permissionsCreateNestedOneWithoutPermission_roleInput = {
    create?: XOR<permissionsCreateWithoutPermission_roleInput, permissionsUncheckedCreateWithoutPermission_roleInput>
    connectOrCreate?: permissionsCreateOrConnectWithoutPermission_roleInput
    connect?: permissionsWhereUniqueInput
  }

  export type rolesUpdateOneRequiredWithoutRole_permissionsNestedInput = {
    create?: XOR<rolesCreateWithoutRole_permissionsInput, rolesUncheckedCreateWithoutRole_permissionsInput>
    connectOrCreate?: rolesCreateOrConnectWithoutRole_permissionsInput
    upsert?: rolesUpsertWithoutRole_permissionsInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutRole_permissionsInput, rolesUpdateWithoutRole_permissionsInput>, rolesUncheckedUpdateWithoutRole_permissionsInput>
  }

  export type permissionsUpdateOneRequiredWithoutPermission_roleNestedInput = {
    create?: XOR<permissionsCreateWithoutPermission_roleInput, permissionsUncheckedCreateWithoutPermission_roleInput>
    connectOrCreate?: permissionsCreateOrConnectWithoutPermission_roleInput
    upsert?: permissionsUpsertWithoutPermission_roleInput
    connect?: permissionsWhereUniqueInput
    update?: XOR<XOR<permissionsUpdateToOneWithWhereWithoutPermission_roleInput, permissionsUpdateWithoutPermission_roleInput>, permissionsUncheckedUpdateWithoutPermission_roleInput>
  }

  export type usersCreateNestedOneWithoutUser_addressInput = {
    create?: XOR<usersCreateWithoutUser_addressInput, usersUncheckedCreateWithoutUser_addressInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_addressInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_addressNestedInput = {
    create?: XOR<usersCreateWithoutUser_addressInput, usersUncheckedCreateWithoutUser_addressInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_addressInput
    upsert?: usersUpsertWithoutUser_addressInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_addressInput, usersUpdateWithoutUser_addressInput>, usersUncheckedUpdateWithoutUser_addressInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type user_tokensCreateWithoutUserInput = {
    user_refresh_token: string
    user_public_key: string
    user_private_key: string
    user_login_time?: Date | string
    user_login_ip?: string
    user_agent?: string
    expiration: Date | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_tokensUncheckedCreateWithoutUserInput = {
    user_refresh_token: string
    user_public_key: string
    user_private_key: string
    user_login_time?: Date | string
    user_login_ip?: string
    user_agent?: string
    expiration: Date | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_tokensCreateOrConnectWithoutUserInput = {
    where: user_tokensWhereUniqueInput
    create: XOR<user_tokensCreateWithoutUserInput, user_tokensUncheckedCreateWithoutUserInput>
  }

  export type user_tokensCreateManyUserInputEnvelope = {
    data: user_tokensCreateManyUserInput | user_tokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_roleCreateWithoutUserInput = {
    assigned_at?: Date | string
    role: rolesCreateNestedOneWithoutRole_userInput
  }

  export type user_roleUncheckedCreateWithoutUserInput = {
    role_id: string
    assigned_at?: Date | string
  }

  export type user_roleCreateOrConnectWithoutUserInput = {
    where: user_roleWhereUniqueInput
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
  }

  export type user_roleCreateManyUserInputEnvelope = {
    data: user_roleCreateManyUserInput | user_roleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAddressCreateWithoutUserInput = {
    id?: string
    user_name: string
    user_phone: string
    street: string
    district: string
    city: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type UserAddressUncheckedCreateWithoutUserInput = {
    id?: string
    user_name: string
    user_phone: string
    street: string
    district: string
    city: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type UserAddressCreateOrConnectWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    create: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
  }

  export type UserAddressCreateManyUserInputEnvelope = {
    data: UserAddressCreateManyUserInput | UserAddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_tokensUpsertWithWhereUniqueWithoutUserInput = {
    where: user_tokensWhereUniqueInput
    update: XOR<user_tokensUpdateWithoutUserInput, user_tokensUncheckedUpdateWithoutUserInput>
    create: XOR<user_tokensCreateWithoutUserInput, user_tokensUncheckedCreateWithoutUserInput>
  }

  export type user_tokensUpdateWithWhereUniqueWithoutUserInput = {
    where: user_tokensWhereUniqueInput
    data: XOR<user_tokensUpdateWithoutUserInput, user_tokensUncheckedUpdateWithoutUserInput>
  }

  export type user_tokensUpdateManyWithWhereWithoutUserInput = {
    where: user_tokensScalarWhereInput
    data: XOR<user_tokensUpdateManyMutationInput, user_tokensUncheckedUpdateManyWithoutUserInput>
  }

  export type user_tokensScalarWhereInput = {
    AND?: user_tokensScalarWhereInput | user_tokensScalarWhereInput[]
    OR?: user_tokensScalarWhereInput[]
    NOT?: user_tokensScalarWhereInput | user_tokensScalarWhereInput[]
    user_id?: StringFilter<"user_tokens"> | string
    user_refresh_token?: StringFilter<"user_tokens"> | string
    user_public_key?: StringFilter<"user_tokens"> | string
    user_private_key?: StringFilter<"user_tokens"> | string
    user_login_time?: DateTimeFilter<"user_tokens"> | Date | string
    user_login_ip?: StringFilter<"user_tokens"> | string
    user_agent?: StringFilter<"user_tokens"> | string
    expiration?: DateTimeFilter<"user_tokens"> | Date | string
    is_active?: BoolFilter<"user_tokens"> | boolean
    created_at?: DateTimeFilter<"user_tokens"> | Date | string
    updated_at?: DateTimeFilter<"user_tokens"> | Date | string
  }

  export type user_roleUpsertWithWhereUniqueWithoutUserInput = {
    where: user_roleWhereUniqueInput
    update: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
  }

  export type user_roleUpdateWithWhereUniqueWithoutUserInput = {
    where: user_roleWhereUniqueInput
    data: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>
  }

  export type user_roleUpdateManyWithWhereWithoutUserInput = {
    where: user_roleScalarWhereInput
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutUserInput>
  }

  export type user_roleScalarWhereInput = {
    AND?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
    OR?: user_roleScalarWhereInput[]
    NOT?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
    user_id?: StringFilter<"user_role"> | string
    role_id?: StringFilter<"user_role"> | string
    assigned_at?: DateTimeFilter<"user_role"> | Date | string
  }

  export type UserAddressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    update: XOR<UserAddressUpdateWithoutUserInput, UserAddressUncheckedUpdateWithoutUserInput>
    create: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
  }

  export type UserAddressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    data: XOR<UserAddressUpdateWithoutUserInput, UserAddressUncheckedUpdateWithoutUserInput>
  }

  export type UserAddressUpdateManyWithWhereWithoutUserInput = {
    where: UserAddressScalarWhereInput
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAddressScalarWhereInput = {
    AND?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
    OR?: UserAddressScalarWhereInput[]
    NOT?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
    id?: StringFilter<"UserAddress"> | string
    user_name?: StringFilter<"UserAddress"> | string
    user_phone?: StringFilter<"UserAddress"> | string
    user_id?: StringFilter<"UserAddress"> | string
    street?: StringFilter<"UserAddress"> | string
    district?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    created_at?: DateTimeFilter<"UserAddress"> | Date | string
    updated_at?: DateTimeFilter<"UserAddress"> | Date | string
    is_deleted?: BoolFilter<"UserAddress"> | boolean
  }

  export type usersCreateWithoutUser_tokensInput = {
    id?: string
    user_name?: string
    user_avatar?: string
    user_email: string
    user_phone?: string
    user_password: string
    user_gender?: $Enums.Gender
    user_birthday?: Date | string | null
    user_salt: string
    created_at?: Date | string
    updated_at?: Date | string
    user_roles?: user_roleCreateNestedManyWithoutUserInput
    user_address?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutUser_tokensInput = {
    id?: string
    user_name?: string
    user_avatar?: string
    user_email: string
    user_phone?: string
    user_password: string
    user_gender?: $Enums.Gender
    user_birthday?: Date | string | null
    user_salt: string
    created_at?: Date | string
    updated_at?: Date | string
    user_roles?: user_roleUncheckedCreateNestedManyWithoutUserInput
    user_address?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutUser_tokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_tokensInput, usersUncheckedCreateWithoutUser_tokensInput>
  }

  export type usersUpsertWithoutUser_tokensInput = {
    update: XOR<usersUpdateWithoutUser_tokensInput, usersUncheckedUpdateWithoutUser_tokensInput>
    create: XOR<usersCreateWithoutUser_tokensInput, usersUncheckedCreateWithoutUser_tokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_tokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_tokensInput, usersUncheckedUpdateWithoutUser_tokensInput>
  }

  export type usersUpdateWithoutUser_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_roleUpdateManyWithoutUserNestedInput
    user_address?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_roleUncheckedUpdateManyWithoutUserNestedInput
    user_address?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_roleCreateWithoutRoleInput = {
    assigned_at?: Date | string
    user: usersCreateNestedOneWithoutUser_rolesInput
  }

  export type user_roleUncheckedCreateWithoutRoleInput = {
    user_id: string
    assigned_at?: Date | string
  }

  export type user_roleCreateOrConnectWithoutRoleInput = {
    where: user_roleWhereUniqueInput
    create: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
  }

  export type user_roleCreateManyRoleInputEnvelope = {
    data: user_roleCreateManyRoleInput | user_roleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type role_permissionCreateWithoutRoleInput = {
    granted_at?: Date | string
    permission: permissionsCreateNestedOneWithoutPermission_roleInput
  }

  export type role_permissionUncheckedCreateWithoutRoleInput = {
    permission_id: string
    granted_at?: Date | string
  }

  export type role_permissionCreateOrConnectWithoutRoleInput = {
    where: role_permissionWhereUniqueInput
    create: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput>
  }

  export type role_permissionCreateManyRoleInputEnvelope = {
    data: role_permissionCreateManyRoleInput | role_permissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type user_roleUpsertWithWhereUniqueWithoutRoleInput = {
    where: user_roleWhereUniqueInput
    update: XOR<user_roleUpdateWithoutRoleInput, user_roleUncheckedUpdateWithoutRoleInput>
    create: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
  }

  export type user_roleUpdateWithWhereUniqueWithoutRoleInput = {
    where: user_roleWhereUniqueInput
    data: XOR<user_roleUpdateWithoutRoleInput, user_roleUncheckedUpdateWithoutRoleInput>
  }

  export type user_roleUpdateManyWithWhereWithoutRoleInput = {
    where: user_roleScalarWhereInput
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutRoleInput>
  }

  export type role_permissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: role_permissionWhereUniqueInput
    update: XOR<role_permissionUpdateWithoutRoleInput, role_permissionUncheckedUpdateWithoutRoleInput>
    create: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput>
  }

  export type role_permissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: role_permissionWhereUniqueInput
    data: XOR<role_permissionUpdateWithoutRoleInput, role_permissionUncheckedUpdateWithoutRoleInput>
  }

  export type role_permissionUpdateManyWithWhereWithoutRoleInput = {
    where: role_permissionScalarWhereInput
    data: XOR<role_permissionUpdateManyMutationInput, role_permissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type role_permissionScalarWhereInput = {
    AND?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
    OR?: role_permissionScalarWhereInput[]
    NOT?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
    role_id?: StringFilter<"role_permission"> | string
    permission_id?: StringFilter<"role_permission"> | string
    granted_at?: DateTimeFilter<"role_permission"> | Date | string
  }

  export type role_permissionCreateWithoutPermissionInput = {
    granted_at?: Date | string
    role: rolesCreateNestedOneWithoutRole_permissionsInput
  }

  export type role_permissionUncheckedCreateWithoutPermissionInput = {
    role_id: string
    granted_at?: Date | string
  }

  export type role_permissionCreateOrConnectWithoutPermissionInput = {
    where: role_permissionWhereUniqueInput
    create: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput>
  }

  export type role_permissionCreateManyPermissionInputEnvelope = {
    data: role_permissionCreateManyPermissionInput | role_permissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type role_permissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: role_permissionWhereUniqueInput
    update: XOR<role_permissionUpdateWithoutPermissionInput, role_permissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput>
  }

  export type role_permissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: role_permissionWhereUniqueInput
    data: XOR<role_permissionUpdateWithoutPermissionInput, role_permissionUncheckedUpdateWithoutPermissionInput>
  }

  export type role_permissionUpdateManyWithWhereWithoutPermissionInput = {
    where: role_permissionScalarWhereInput
    data: XOR<role_permissionUpdateManyMutationInput, role_permissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type usersCreateWithoutUser_rolesInput = {
    id?: string
    user_name?: string
    user_avatar?: string
    user_email: string
    user_phone?: string
    user_password: string
    user_gender?: $Enums.Gender
    user_birthday?: Date | string | null
    user_salt: string
    created_at?: Date | string
    updated_at?: Date | string
    user_tokens?: user_tokensCreateNestedManyWithoutUserInput
    user_address?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutUser_rolesInput = {
    id?: string
    user_name?: string
    user_avatar?: string
    user_email: string
    user_phone?: string
    user_password: string
    user_gender?: $Enums.Gender
    user_birthday?: Date | string | null
    user_salt: string
    created_at?: Date | string
    updated_at?: Date | string
    user_tokens?: user_tokensUncheckedCreateNestedManyWithoutUserInput
    user_address?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutUser_rolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
  }

  export type rolesCreateWithoutRole_userInput = {
    id?: string
    role_name: string
    role_description?: string | null
    is_deleted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    role_permissions?: role_permissionCreateNestedManyWithoutRoleInput
  }

  export type rolesUncheckedCreateWithoutRole_userInput = {
    id?: string
    role_name: string
    role_description?: string | null
    is_deleted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    role_permissions?: role_permissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type rolesCreateOrConnectWithoutRole_userInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutRole_userInput, rolesUncheckedCreateWithoutRole_userInput>
  }

  export type usersUpsertWithoutUser_rolesInput = {
    update: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
  }

  export type usersUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_tokens?: user_tokensUpdateManyWithoutUserNestedInput
    user_address?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_tokens?: user_tokensUncheckedUpdateManyWithoutUserNestedInput
    user_address?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type rolesUpsertWithoutRole_userInput = {
    update: XOR<rolesUpdateWithoutRole_userInput, rolesUncheckedUpdateWithoutRole_userInput>
    create: XOR<rolesCreateWithoutRole_userInput, rolesUncheckedCreateWithoutRole_userInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutRole_userInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutRole_userInput, rolesUncheckedUpdateWithoutRole_userInput>
  }

  export type rolesUpdateWithoutRole_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_permissions?: role_permissionUpdateManyWithoutRoleNestedInput
  }

  export type rolesUncheckedUpdateWithoutRole_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_permissions?: role_permissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type rolesCreateWithoutRole_permissionsInput = {
    id?: string
    role_name: string
    role_description?: string | null
    is_deleted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    role_user?: user_roleCreateNestedManyWithoutRoleInput
  }

  export type rolesUncheckedCreateWithoutRole_permissionsInput = {
    id?: string
    role_name: string
    role_description?: string | null
    is_deleted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    role_user?: user_roleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type rolesCreateOrConnectWithoutRole_permissionsInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutRole_permissionsInput, rolesUncheckedCreateWithoutRole_permissionsInput>
  }

  export type permissionsCreateWithoutPermission_roleInput = {
    id?: string
    permission_name: string
    permission_description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type permissionsUncheckedCreateWithoutPermission_roleInput = {
    id?: string
    permission_name: string
    permission_description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type permissionsCreateOrConnectWithoutPermission_roleInput = {
    where: permissionsWhereUniqueInput
    create: XOR<permissionsCreateWithoutPermission_roleInput, permissionsUncheckedCreateWithoutPermission_roleInput>
  }

  export type rolesUpsertWithoutRole_permissionsInput = {
    update: XOR<rolesUpdateWithoutRole_permissionsInput, rolesUncheckedUpdateWithoutRole_permissionsInput>
    create: XOR<rolesCreateWithoutRole_permissionsInput, rolesUncheckedCreateWithoutRole_permissionsInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutRole_permissionsInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutRole_permissionsInput, rolesUncheckedUpdateWithoutRole_permissionsInput>
  }

  export type rolesUpdateWithoutRole_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_user?: user_roleUpdateManyWithoutRoleNestedInput
  }

  export type rolesUncheckedUpdateWithoutRole_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_user?: user_roleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type permissionsUpsertWithoutPermission_roleInput = {
    update: XOR<permissionsUpdateWithoutPermission_roleInput, permissionsUncheckedUpdateWithoutPermission_roleInput>
    create: XOR<permissionsCreateWithoutPermission_roleInput, permissionsUncheckedCreateWithoutPermission_roleInput>
    where?: permissionsWhereInput
  }

  export type permissionsUpdateToOneWithWhereWithoutPermission_roleInput = {
    where?: permissionsWhereInput
    data: XOR<permissionsUpdateWithoutPermission_roleInput, permissionsUncheckedUpdateWithoutPermission_roleInput>
  }

  export type permissionsUpdateWithoutPermission_roleInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission_name?: StringFieldUpdateOperationsInput | string
    permission_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionsUncheckedUpdateWithoutPermission_roleInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission_name?: StringFieldUpdateOperationsInput | string
    permission_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutUser_addressInput = {
    id?: string
    user_name?: string
    user_avatar?: string
    user_email: string
    user_phone?: string
    user_password: string
    user_gender?: $Enums.Gender
    user_birthday?: Date | string | null
    user_salt: string
    created_at?: Date | string
    updated_at?: Date | string
    user_tokens?: user_tokensCreateNestedManyWithoutUserInput
    user_roles?: user_roleCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutUser_addressInput = {
    id?: string
    user_name?: string
    user_avatar?: string
    user_email: string
    user_phone?: string
    user_password: string
    user_gender?: $Enums.Gender
    user_birthday?: Date | string | null
    user_salt: string
    created_at?: Date | string
    updated_at?: Date | string
    user_tokens?: user_tokensUncheckedCreateNestedManyWithoutUserInput
    user_roles?: user_roleUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutUser_addressInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_addressInput, usersUncheckedCreateWithoutUser_addressInput>
  }

  export type usersUpsertWithoutUser_addressInput = {
    update: XOR<usersUpdateWithoutUser_addressInput, usersUncheckedUpdateWithoutUser_addressInput>
    create: XOR<usersCreateWithoutUser_addressInput, usersUncheckedCreateWithoutUser_addressInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_addressInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_addressInput, usersUncheckedUpdateWithoutUser_addressInput>
  }

  export type usersUpdateWithoutUser_addressInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_tokens?: user_tokensUpdateManyWithoutUserNestedInput
    user_roles?: user_roleUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_addressInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_tokens?: user_tokensUncheckedUpdateManyWithoutUserNestedInput
    user_roles?: user_roleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_tokensCreateManyUserInput = {
    user_refresh_token: string
    user_public_key: string
    user_private_key: string
    user_login_time?: Date | string
    user_login_ip?: string
    user_agent?: string
    expiration: Date | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_roleCreateManyUserInput = {
    role_id: string
    assigned_at?: Date | string
  }

  export type UserAddressCreateManyUserInput = {
    id?: string
    user_name: string
    user_phone: string
    street: string
    district: string
    city: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type user_tokensUpdateWithoutUserInput = {
    user_refresh_token?: StringFieldUpdateOperationsInput | string
    user_public_key?: StringFieldUpdateOperationsInput | string
    user_private_key?: StringFieldUpdateOperationsInput | string
    user_login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user_login_ip?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_tokensUncheckedUpdateWithoutUserInput = {
    user_refresh_token?: StringFieldUpdateOperationsInput | string
    user_public_key?: StringFieldUpdateOperationsInput | string
    user_private_key?: StringFieldUpdateOperationsInput | string
    user_login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user_login_ip?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_tokensUncheckedUpdateManyWithoutUserInput = {
    user_refresh_token?: StringFieldUpdateOperationsInput | string
    user_public_key?: StringFieldUpdateOperationsInput | string
    user_private_key?: StringFieldUpdateOperationsInput | string
    user_login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user_login_ip?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleUpdateWithoutUserInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutRole_userNestedInput
  }

  export type user_roleUncheckedUpdateWithoutUserInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleUncheckedUpdateManyWithoutUserInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAddressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_roleCreateManyRoleInput = {
    user_id: string
    assigned_at?: Date | string
  }

  export type role_permissionCreateManyRoleInput = {
    permission_id: string
    granted_at?: Date | string
  }

  export type user_roleUpdateWithoutRoleInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_roleUncheckedUpdateWithoutRoleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleUncheckedUpdateManyWithoutRoleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionUpdateWithoutRoleInput = {
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: permissionsUpdateOneRequiredWithoutPermission_roleNestedInput
  }

  export type role_permissionUncheckedUpdateWithoutRoleInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionUncheckedUpdateManyWithoutRoleInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionCreateManyPermissionInput = {
    role_id: string
    granted_at?: Date | string
  }

  export type role_permissionUpdateWithoutPermissionInput = {
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutRole_permissionsNestedInput
  }

  export type role_permissionUncheckedUpdateWithoutPermissionInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionUncheckedUpdateManyWithoutPermissionInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}