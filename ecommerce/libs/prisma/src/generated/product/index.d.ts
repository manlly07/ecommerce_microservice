
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
 * Model Spu
 * 
 */
export type Spu = $Result.DefaultSelection<Prisma.$SpuPayload>
/**
 * Model Sku
 * 
 */
export type Sku = $Result.DefaultSelection<Prisma.$SkuPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Spus
 * const spus = await prisma.spu.findMany()
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
   * // Fetch zero or more Spus
   * const spus = await prisma.spu.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.spu`: Exposes CRUD operations for the **Spu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spus
    * const spus = await prisma.spu.findMany()
    * ```
    */
  get spu(): Prisma.SpuDelegate<ExtArgs>;

  /**
   * `prisma.sku`: Exposes CRUD operations for the **Sku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skus
    * const skus = await prisma.sku.findMany()
    * ```
    */
  get sku(): Prisma.SkuDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
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
    Spu: 'Spu',
    Sku: 'Sku'
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
      modelProps: "spu" | "sku"
      txIsolationLevel: never
    }
    model: {
      Spu: {
        payload: Prisma.$SpuPayload<ExtArgs>
        fields: Prisma.SpuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuPayload>
          }
          findFirst: {
            args: Prisma.SpuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuPayload>
          }
          findMany: {
            args: Prisma.SpuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuPayload>[]
          }
          create: {
            args: Prisma.SpuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuPayload>
          }
          createMany: {
            args: Prisma.SpuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SpuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuPayload>
          }
          update: {
            args: Prisma.SpuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuPayload>
          }
          deleteMany: {
            args: Prisma.SpuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuPayload>
          }
          aggregate: {
            args: Prisma.SpuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpu>
          }
          groupBy: {
            args: Prisma.SpuGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpuGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SpuFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SpuAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SpuCountArgs<ExtArgs>
            result: $Utils.Optional<SpuCountAggregateOutputType> | number
          }
        }
      }
      Sku: {
        payload: Prisma.$SkuPayload<ExtArgs>
        fields: Prisma.SkuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          findFirst: {
            args: Prisma.SkuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          findMany: {
            args: Prisma.SkuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>[]
          }
          create: {
            args: Prisma.SkuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          createMany: {
            args: Prisma.SkuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          update: {
            args: Prisma.SkuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          deleteMany: {
            args: Prisma.SkuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkuPayload>
          }
          aggregate: {
            args: Prisma.SkuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSku>
          }
          groupBy: {
            args: Prisma.SkuGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkuGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SkuFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SkuAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SkuCountArgs<ExtArgs>
            result: $Utils.Optional<SkuCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
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
   * Models
   */

  /**
   * Model Spu
   */

  export type AggregateSpu = {
    _count: SpuCountAggregateOutputType | null
    _avg: SpuAvgAggregateOutputType | null
    _sum: SpuSumAggregateOutputType | null
    _min: SpuMinAggregateOutputType | null
    _max: SpuMaxAggregateOutputType | null
  }

  export type SpuAvgAggregateOutputType = {
    product_price: number | null
    product_quantity: number | null
    product_ratingsAverage: number | null
  }

  export type SpuSumAggregateOutputType = {
    product_price: number | null
    product_quantity: number | null
    product_ratingsAverage: number | null
  }

  export type SpuMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    product_name: string | null
    product_thumb: string | null
    product_description: string | null
    product_slug: string | null
    product_price: number | null
    product_quantity: number | null
    product_shop: string | null
    product_ratingsAverage: number | null
    isDraft: boolean | null
    isPublished: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpuMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    product_name: string | null
    product_thumb: string | null
    product_description: string | null
    product_slug: string | null
    product_price: number | null
    product_quantity: number | null
    product_shop: string | null
    product_ratingsAverage: number | null
    isDraft: boolean | null
    isPublished: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpuCountAggregateOutputType = {
    id: number
    product_id: number
    product_name: number
    product_thumb: number
    product_description: number
    product_slug: number
    product_price: number
    product_category: number
    product_quantity: number
    product_shop: number
    product_attributes: number
    product_ratingsAverage: number
    product_variations: number
    isDraft: number
    isPublished: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpuAvgAggregateInputType = {
    product_price?: true
    product_quantity?: true
    product_ratingsAverage?: true
  }

  export type SpuSumAggregateInputType = {
    product_price?: true
    product_quantity?: true
    product_ratingsAverage?: true
  }

  export type SpuMinAggregateInputType = {
    id?: true
    product_id?: true
    product_name?: true
    product_thumb?: true
    product_description?: true
    product_slug?: true
    product_price?: true
    product_quantity?: true
    product_shop?: true
    product_ratingsAverage?: true
    isDraft?: true
    isPublished?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpuMaxAggregateInputType = {
    id?: true
    product_id?: true
    product_name?: true
    product_thumb?: true
    product_description?: true
    product_slug?: true
    product_price?: true
    product_quantity?: true
    product_shop?: true
    product_ratingsAverage?: true
    isDraft?: true
    isPublished?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpuCountAggregateInputType = {
    id?: true
    product_id?: true
    product_name?: true
    product_thumb?: true
    product_description?: true
    product_slug?: true
    product_price?: true
    product_category?: true
    product_quantity?: true
    product_shop?: true
    product_attributes?: true
    product_ratingsAverage?: true
    product_variations?: true
    isDraft?: true
    isPublished?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spu to aggregate.
     */
    where?: SpuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spus to fetch.
     */
    orderBy?: SpuOrderByWithRelationInput | SpuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spus
    **/
    _count?: true | SpuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpuMaxAggregateInputType
  }

  export type GetSpuAggregateType<T extends SpuAggregateArgs> = {
        [P in keyof T & keyof AggregateSpu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpu[P]>
      : GetScalarType<T[P], AggregateSpu[P]>
  }




  export type SpuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpuWhereInput
    orderBy?: SpuOrderByWithAggregationInput | SpuOrderByWithAggregationInput[]
    by: SpuScalarFieldEnum[] | SpuScalarFieldEnum
    having?: SpuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpuCountAggregateInputType | true
    _avg?: SpuAvgAggregateInputType
    _sum?: SpuSumAggregateInputType
    _min?: SpuMinAggregateInputType
    _max?: SpuMaxAggregateInputType
  }

  export type SpuGroupByOutputType = {
    id: string
    product_id: string
    product_name: string
    product_thumb: string
    product_description: string | null
    product_slug: string
    product_price: number
    product_category: string[]
    product_quantity: number
    product_shop: string | null
    product_attributes: JsonValue
    product_ratingsAverage: number
    product_variations: JsonValue
    isDraft: boolean
    isPublished: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: SpuCountAggregateOutputType | null
    _avg: SpuAvgAggregateOutputType | null
    _sum: SpuSumAggregateOutputType | null
    _min: SpuMinAggregateOutputType | null
    _max: SpuMaxAggregateOutputType | null
  }

  type GetSpuGroupByPayload<T extends SpuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpuGroupByOutputType[P]>
            : GetScalarType<T[P], SpuGroupByOutputType[P]>
        }
      >
    >


  export type SpuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    product_name?: boolean
    product_thumb?: boolean
    product_description?: boolean
    product_slug?: boolean
    product_price?: boolean
    product_category?: boolean
    product_quantity?: boolean
    product_shop?: boolean
    product_attributes?: boolean
    product_ratingsAverage?: boolean
    product_variations?: boolean
    isDraft?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["spu"]>


  export type SpuSelectScalar = {
    id?: boolean
    product_id?: boolean
    product_name?: boolean
    product_thumb?: boolean
    product_description?: boolean
    product_slug?: boolean
    product_price?: boolean
    product_category?: boolean
    product_quantity?: boolean
    product_shop?: boolean
    product_attributes?: boolean
    product_ratingsAverage?: boolean
    product_variations?: boolean
    isDraft?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SpuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Spu"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      product_id: string
      product_name: string
      product_thumb: string
      product_description: string | null
      product_slug: string
      product_price: number
      product_category: string[]
      product_quantity: number
      product_shop: string | null
      product_attributes: Prisma.JsonValue
      product_ratingsAverage: number
      product_variations: Prisma.JsonValue
      isDraft: boolean
      isPublished: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["spu"]>
    composites: {}
  }

  type SpuGetPayload<S extends boolean | null | undefined | SpuDefaultArgs> = $Result.GetResult<Prisma.$SpuPayload, S>

  type SpuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpuCountAggregateInputType | true
    }

  export interface SpuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Spu'], meta: { name: 'Spu' } }
    /**
     * Find zero or one Spu that matches the filter.
     * @param {SpuFindUniqueArgs} args - Arguments to find a Spu
     * @example
     * // Get one Spu
     * const spu = await prisma.spu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpuFindUniqueArgs>(args: SelectSubset<T, SpuFindUniqueArgs<ExtArgs>>): Prisma__SpuClient<$Result.GetResult<Prisma.$SpuPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Spu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpuFindUniqueOrThrowArgs} args - Arguments to find a Spu
     * @example
     * // Get one Spu
     * const spu = await prisma.spu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpuFindUniqueOrThrowArgs>(args: SelectSubset<T, SpuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpuClient<$Result.GetResult<Prisma.$SpuPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Spu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuFindFirstArgs} args - Arguments to find a Spu
     * @example
     * // Get one Spu
     * const spu = await prisma.spu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpuFindFirstArgs>(args?: SelectSubset<T, SpuFindFirstArgs<ExtArgs>>): Prisma__SpuClient<$Result.GetResult<Prisma.$SpuPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Spu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuFindFirstOrThrowArgs} args - Arguments to find a Spu
     * @example
     * // Get one Spu
     * const spu = await prisma.spu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpuFindFirstOrThrowArgs>(args?: SelectSubset<T, SpuFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpuClient<$Result.GetResult<Prisma.$SpuPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Spus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spus
     * const spus = await prisma.spu.findMany()
     * 
     * // Get first 10 Spus
     * const spus = await prisma.spu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spuWithIdOnly = await prisma.spu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpuFindManyArgs>(args?: SelectSubset<T, SpuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpuPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Spu.
     * @param {SpuCreateArgs} args - Arguments to create a Spu.
     * @example
     * // Create one Spu
     * const Spu = await prisma.spu.create({
     *   data: {
     *     // ... data to create a Spu
     *   }
     * })
     * 
     */
    create<T extends SpuCreateArgs>(args: SelectSubset<T, SpuCreateArgs<ExtArgs>>): Prisma__SpuClient<$Result.GetResult<Prisma.$SpuPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Spus.
     * @param {SpuCreateManyArgs} args - Arguments to create many Spus.
     * @example
     * // Create many Spus
     * const spu = await prisma.spu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpuCreateManyArgs>(args?: SelectSubset<T, SpuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Spu.
     * @param {SpuDeleteArgs} args - Arguments to delete one Spu.
     * @example
     * // Delete one Spu
     * const Spu = await prisma.spu.delete({
     *   where: {
     *     // ... filter to delete one Spu
     *   }
     * })
     * 
     */
    delete<T extends SpuDeleteArgs>(args: SelectSubset<T, SpuDeleteArgs<ExtArgs>>): Prisma__SpuClient<$Result.GetResult<Prisma.$SpuPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Spu.
     * @param {SpuUpdateArgs} args - Arguments to update one Spu.
     * @example
     * // Update one Spu
     * const spu = await prisma.spu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpuUpdateArgs>(args: SelectSubset<T, SpuUpdateArgs<ExtArgs>>): Prisma__SpuClient<$Result.GetResult<Prisma.$SpuPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Spus.
     * @param {SpuDeleteManyArgs} args - Arguments to filter Spus to delete.
     * @example
     * // Delete a few Spus
     * const { count } = await prisma.spu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpuDeleteManyArgs>(args?: SelectSubset<T, SpuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spus
     * const spu = await prisma.spu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpuUpdateManyArgs>(args: SelectSubset<T, SpuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Spu.
     * @param {SpuUpsertArgs} args - Arguments to update or create a Spu.
     * @example
     * // Update or create a Spu
     * const spu = await prisma.spu.upsert({
     *   create: {
     *     // ... data to create a Spu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spu we want to update
     *   }
     * })
     */
    upsert<T extends SpuUpsertArgs>(args: SelectSubset<T, SpuUpsertArgs<ExtArgs>>): Prisma__SpuClient<$Result.GetResult<Prisma.$SpuPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Spus that matches the filter.
     * @param {SpuFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const spu = await prisma.spu.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: SpuFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Spu.
     * @param {SpuAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const spu = await prisma.spu.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SpuAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Spus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuCountArgs} args - Arguments to filter Spus to count.
     * @example
     * // Count the number of Spus
     * const count = await prisma.spu.count({
     *   where: {
     *     // ... the filter for the Spus we want to count
     *   }
     * })
    **/
    count<T extends SpuCountArgs>(
      args?: Subset<T, SpuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpuAggregateArgs>(args: Subset<T, SpuAggregateArgs>): Prisma.PrismaPromise<GetSpuAggregateType<T>>

    /**
     * Group by Spu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuGroupByArgs} args - Group by arguments.
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
      T extends SpuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpuGroupByArgs['orderBy'] }
        : { orderBy?: SpuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Spu model
   */
  readonly fields: SpuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Spu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Spu model
   */ 
  interface SpuFieldRefs {
    readonly id: FieldRef<"Spu", 'String'>
    readonly product_id: FieldRef<"Spu", 'String'>
    readonly product_name: FieldRef<"Spu", 'String'>
    readonly product_thumb: FieldRef<"Spu", 'String'>
    readonly product_description: FieldRef<"Spu", 'String'>
    readonly product_slug: FieldRef<"Spu", 'String'>
    readonly product_price: FieldRef<"Spu", 'Float'>
    readonly product_category: FieldRef<"Spu", 'String[]'>
    readonly product_quantity: FieldRef<"Spu", 'Int'>
    readonly product_shop: FieldRef<"Spu", 'String'>
    readonly product_attributes: FieldRef<"Spu", 'Json'>
    readonly product_ratingsAverage: FieldRef<"Spu", 'Float'>
    readonly product_variations: FieldRef<"Spu", 'Json'>
    readonly isDraft: FieldRef<"Spu", 'Boolean'>
    readonly isPublished: FieldRef<"Spu", 'Boolean'>
    readonly isDeleted: FieldRef<"Spu", 'Boolean'>
    readonly createdAt: FieldRef<"Spu", 'DateTime'>
    readonly updatedAt: FieldRef<"Spu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Spu findUnique
   */
  export type SpuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spu
     */
    select?: SpuSelect<ExtArgs> | null
    /**
     * Filter, which Spu to fetch.
     */
    where: SpuWhereUniqueInput
  }

  /**
   * Spu findUniqueOrThrow
   */
  export type SpuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spu
     */
    select?: SpuSelect<ExtArgs> | null
    /**
     * Filter, which Spu to fetch.
     */
    where: SpuWhereUniqueInput
  }

  /**
   * Spu findFirst
   */
  export type SpuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spu
     */
    select?: SpuSelect<ExtArgs> | null
    /**
     * Filter, which Spu to fetch.
     */
    where?: SpuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spus to fetch.
     */
    orderBy?: SpuOrderByWithRelationInput | SpuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spus.
     */
    cursor?: SpuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spus.
     */
    distinct?: SpuScalarFieldEnum | SpuScalarFieldEnum[]
  }

  /**
   * Spu findFirstOrThrow
   */
  export type SpuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spu
     */
    select?: SpuSelect<ExtArgs> | null
    /**
     * Filter, which Spu to fetch.
     */
    where?: SpuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spus to fetch.
     */
    orderBy?: SpuOrderByWithRelationInput | SpuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spus.
     */
    cursor?: SpuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spus.
     */
    distinct?: SpuScalarFieldEnum | SpuScalarFieldEnum[]
  }

  /**
   * Spu findMany
   */
  export type SpuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spu
     */
    select?: SpuSelect<ExtArgs> | null
    /**
     * Filter, which Spus to fetch.
     */
    where?: SpuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spus to fetch.
     */
    orderBy?: SpuOrderByWithRelationInput | SpuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spus.
     */
    cursor?: SpuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spus.
     */
    skip?: number
    distinct?: SpuScalarFieldEnum | SpuScalarFieldEnum[]
  }

  /**
   * Spu create
   */
  export type SpuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spu
     */
    select?: SpuSelect<ExtArgs> | null
    /**
     * The data needed to create a Spu.
     */
    data: XOR<SpuCreateInput, SpuUncheckedCreateInput>
  }

  /**
   * Spu createMany
   */
  export type SpuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spus.
     */
    data: SpuCreateManyInput | SpuCreateManyInput[]
  }

  /**
   * Spu update
   */
  export type SpuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spu
     */
    select?: SpuSelect<ExtArgs> | null
    /**
     * The data needed to update a Spu.
     */
    data: XOR<SpuUpdateInput, SpuUncheckedUpdateInput>
    /**
     * Choose, which Spu to update.
     */
    where: SpuWhereUniqueInput
  }

  /**
   * Spu updateMany
   */
  export type SpuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spus.
     */
    data: XOR<SpuUpdateManyMutationInput, SpuUncheckedUpdateManyInput>
    /**
     * Filter which Spus to update
     */
    where?: SpuWhereInput
  }

  /**
   * Spu upsert
   */
  export type SpuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spu
     */
    select?: SpuSelect<ExtArgs> | null
    /**
     * The filter to search for the Spu to update in case it exists.
     */
    where: SpuWhereUniqueInput
    /**
     * In case the Spu found by the `where` argument doesn't exist, create a new Spu with this data.
     */
    create: XOR<SpuCreateInput, SpuUncheckedCreateInput>
    /**
     * In case the Spu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpuUpdateInput, SpuUncheckedUpdateInput>
  }

  /**
   * Spu delete
   */
  export type SpuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spu
     */
    select?: SpuSelect<ExtArgs> | null
    /**
     * Filter which Spu to delete.
     */
    where: SpuWhereUniqueInput
  }

  /**
   * Spu deleteMany
   */
  export type SpuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spus to delete
     */
    where?: SpuWhereInput
  }

  /**
   * Spu findRaw
   */
  export type SpuFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Spu aggregateRaw
   */
  export type SpuAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Spu without action
   */
  export type SpuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spu
     */
    select?: SpuSelect<ExtArgs> | null
  }


  /**
   * Model Sku
   */

  export type AggregateSku = {
    _count: SkuCountAggregateOutputType | null
    _avg: SkuAvgAggregateOutputType | null
    _sum: SkuSumAggregateOutputType | null
    _min: SkuMinAggregateOutputType | null
    _max: SkuMaxAggregateOutputType | null
  }

  export type SkuAvgAggregateOutputType = {
    sku_tier_idx: number | null
    sku_sort: number | null
    sku_price: number | null
    sku_stock: number | null
  }

  export type SkuSumAggregateOutputType = {
    sku_tier_idx: number[]
    sku_sort: number | null
    sku_price: number | null
    sku_stock: number | null
  }

  export type SkuMinAggregateOutputType = {
    id: string | null
    sku_id: string | null
    sku_default: boolean | null
    sku_thumb: string | null
    sku_slug: string | null
    sku_sort: number | null
    sku_price: number | null
    sku_stock: number | null
    product_id: string | null
    isDraft: boolean | null
    isPublished: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkuMaxAggregateOutputType = {
    id: string | null
    sku_id: string | null
    sku_default: boolean | null
    sku_thumb: string | null
    sku_slug: string | null
    sku_sort: number | null
    sku_price: number | null
    sku_stock: number | null
    product_id: string | null
    isDraft: boolean | null
    isPublished: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkuCountAggregateOutputType = {
    id: number
    sku_id: number
    sku_tier_idx: number
    sku_default: number
    sku_thumb: number
    sku_slug: number
    sku_sort: number
    sku_price: number
    sku_stock: number
    product_id: number
    isDraft: number
    isPublished: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkuAvgAggregateInputType = {
    sku_tier_idx?: true
    sku_sort?: true
    sku_price?: true
    sku_stock?: true
  }

  export type SkuSumAggregateInputType = {
    sku_tier_idx?: true
    sku_sort?: true
    sku_price?: true
    sku_stock?: true
  }

  export type SkuMinAggregateInputType = {
    id?: true
    sku_id?: true
    sku_default?: true
    sku_thumb?: true
    sku_slug?: true
    sku_sort?: true
    sku_price?: true
    sku_stock?: true
    product_id?: true
    isDraft?: true
    isPublished?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkuMaxAggregateInputType = {
    id?: true
    sku_id?: true
    sku_default?: true
    sku_thumb?: true
    sku_slug?: true
    sku_sort?: true
    sku_price?: true
    sku_stock?: true
    product_id?: true
    isDraft?: true
    isPublished?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkuCountAggregateInputType = {
    id?: true
    sku_id?: true
    sku_tier_idx?: true
    sku_default?: true
    sku_thumb?: true
    sku_slug?: true
    sku_sort?: true
    sku_price?: true
    sku_stock?: true
    product_id?: true
    isDraft?: true
    isPublished?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sku to aggregate.
     */
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     */
    orderBy?: SkuOrderByWithRelationInput | SkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skus
    **/
    _count?: true | SkuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkuMaxAggregateInputType
  }

  export type GetSkuAggregateType<T extends SkuAggregateArgs> = {
        [P in keyof T & keyof AggregateSku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSku[P]>
      : GetScalarType<T[P], AggregateSku[P]>
  }




  export type SkuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkuWhereInput
    orderBy?: SkuOrderByWithAggregationInput | SkuOrderByWithAggregationInput[]
    by: SkuScalarFieldEnum[] | SkuScalarFieldEnum
    having?: SkuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkuCountAggregateInputType | true
    _avg?: SkuAvgAggregateInputType
    _sum?: SkuSumAggregateInputType
    _min?: SkuMinAggregateInputType
    _max?: SkuMaxAggregateInputType
  }

  export type SkuGroupByOutputType = {
    id: string
    sku_id: string
    sku_tier_idx: number[]
    sku_default: boolean
    sku_thumb: string
    sku_slug: string
    sku_sort: number
    sku_price: number
    sku_stock: number
    product_id: string
    isDraft: boolean
    isPublished: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: SkuCountAggregateOutputType | null
    _avg: SkuAvgAggregateOutputType | null
    _sum: SkuSumAggregateOutputType | null
    _min: SkuMinAggregateOutputType | null
    _max: SkuMaxAggregateOutputType | null
  }

  type GetSkuGroupByPayload<T extends SkuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkuGroupByOutputType[P]>
            : GetScalarType<T[P], SkuGroupByOutputType[P]>
        }
      >
    >


  export type SkuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku_id?: boolean
    sku_tier_idx?: boolean
    sku_default?: boolean
    sku_thumb?: boolean
    sku_slug?: boolean
    sku_sort?: boolean
    sku_price?: boolean
    sku_stock?: boolean
    product_id?: boolean
    isDraft?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sku"]>


  export type SkuSelectScalar = {
    id?: boolean
    sku_id?: boolean
    sku_tier_idx?: boolean
    sku_default?: boolean
    sku_thumb?: boolean
    sku_slug?: boolean
    sku_sort?: boolean
    sku_price?: boolean
    sku_stock?: boolean
    product_id?: boolean
    isDraft?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SkuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sku"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sku_id: string
      sku_tier_idx: number[]
      sku_default: boolean
      sku_thumb: string
      sku_slug: string
      sku_sort: number
      sku_price: number
      sku_stock: number
      product_id: string
      isDraft: boolean
      isPublished: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sku"]>
    composites: {}
  }

  type SkuGetPayload<S extends boolean | null | undefined | SkuDefaultArgs> = $Result.GetResult<Prisma.$SkuPayload, S>

  type SkuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SkuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkuCountAggregateInputType | true
    }

  export interface SkuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sku'], meta: { name: 'Sku' } }
    /**
     * Find zero or one Sku that matches the filter.
     * @param {SkuFindUniqueArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkuFindUniqueArgs>(args: SelectSubset<T, SkuFindUniqueArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sku that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SkuFindUniqueOrThrowArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkuFindUniqueOrThrowArgs>(args: SelectSubset<T, SkuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuFindFirstArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkuFindFirstArgs>(args?: SelectSubset<T, SkuFindFirstArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sku that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuFindFirstOrThrowArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkuFindFirstOrThrowArgs>(args?: SelectSubset<T, SkuFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Skus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skus
     * const skus = await prisma.sku.findMany()
     * 
     * // Get first 10 Skus
     * const skus = await prisma.sku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skuWithIdOnly = await prisma.sku.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkuFindManyArgs>(args?: SelectSubset<T, SkuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sku.
     * @param {SkuCreateArgs} args - Arguments to create a Sku.
     * @example
     * // Create one Sku
     * const Sku = await prisma.sku.create({
     *   data: {
     *     // ... data to create a Sku
     *   }
     * })
     * 
     */
    create<T extends SkuCreateArgs>(args: SelectSubset<T, SkuCreateArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Skus.
     * @param {SkuCreateManyArgs} args - Arguments to create many Skus.
     * @example
     * // Create many Skus
     * const sku = await prisma.sku.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkuCreateManyArgs>(args?: SelectSubset<T, SkuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sku.
     * @param {SkuDeleteArgs} args - Arguments to delete one Sku.
     * @example
     * // Delete one Sku
     * const Sku = await prisma.sku.delete({
     *   where: {
     *     // ... filter to delete one Sku
     *   }
     * })
     * 
     */
    delete<T extends SkuDeleteArgs>(args: SelectSubset<T, SkuDeleteArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sku.
     * @param {SkuUpdateArgs} args - Arguments to update one Sku.
     * @example
     * // Update one Sku
     * const sku = await prisma.sku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkuUpdateArgs>(args: SelectSubset<T, SkuUpdateArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Skus.
     * @param {SkuDeleteManyArgs} args - Arguments to filter Skus to delete.
     * @example
     * // Delete a few Skus
     * const { count } = await prisma.sku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkuDeleteManyArgs>(args?: SelectSubset<T, SkuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skus
     * const sku = await prisma.sku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkuUpdateManyArgs>(args: SelectSubset<T, SkuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sku.
     * @param {SkuUpsertArgs} args - Arguments to update or create a Sku.
     * @example
     * // Update or create a Sku
     * const sku = await prisma.sku.upsert({
     *   create: {
     *     // ... data to create a Sku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sku we want to update
     *   }
     * })
     */
    upsert<T extends SkuUpsertArgs>(args: SelectSubset<T, SkuUpsertArgs<ExtArgs>>): Prisma__SkuClient<$Result.GetResult<Prisma.$SkuPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Skus that matches the filter.
     * @param {SkuFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sku = await prisma.sku.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: SkuFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Sku.
     * @param {SkuAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sku = await prisma.sku.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SkuAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuCountArgs} args - Arguments to filter Skus to count.
     * @example
     * // Count the number of Skus
     * const count = await prisma.sku.count({
     *   where: {
     *     // ... the filter for the Skus we want to count
     *   }
     * })
    **/
    count<T extends SkuCountArgs>(
      args?: Subset<T, SkuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkuAggregateArgs>(args: Subset<T, SkuAggregateArgs>): Prisma.PrismaPromise<GetSkuAggregateType<T>>

    /**
     * Group by Sku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuGroupByArgs} args - Group by arguments.
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
      T extends SkuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkuGroupByArgs['orderBy'] }
        : { orderBy?: SkuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sku model
   */
  readonly fields: SkuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Sku model
   */ 
  interface SkuFieldRefs {
    readonly id: FieldRef<"Sku", 'String'>
    readonly sku_id: FieldRef<"Sku", 'String'>
    readonly sku_tier_idx: FieldRef<"Sku", 'Int[]'>
    readonly sku_default: FieldRef<"Sku", 'Boolean'>
    readonly sku_thumb: FieldRef<"Sku", 'String'>
    readonly sku_slug: FieldRef<"Sku", 'String'>
    readonly sku_sort: FieldRef<"Sku", 'Int'>
    readonly sku_price: FieldRef<"Sku", 'Float'>
    readonly sku_stock: FieldRef<"Sku", 'Int'>
    readonly product_id: FieldRef<"Sku", 'String'>
    readonly isDraft: FieldRef<"Sku", 'Boolean'>
    readonly isPublished: FieldRef<"Sku", 'Boolean'>
    readonly isDeleted: FieldRef<"Sku", 'Boolean'>
    readonly createdAt: FieldRef<"Sku", 'DateTime'>
    readonly updatedAt: FieldRef<"Sku", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sku findUnique
   */
  export type SkuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Filter, which Sku to fetch.
     */
    where: SkuWhereUniqueInput
  }

  /**
   * Sku findUniqueOrThrow
   */
  export type SkuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Filter, which Sku to fetch.
     */
    where: SkuWhereUniqueInput
  }

  /**
   * Sku findFirst
   */
  export type SkuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Filter, which Sku to fetch.
     */
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     */
    orderBy?: SkuOrderByWithRelationInput | SkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skus.
     */
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skus.
     */
    distinct?: SkuScalarFieldEnum | SkuScalarFieldEnum[]
  }

  /**
   * Sku findFirstOrThrow
   */
  export type SkuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Filter, which Sku to fetch.
     */
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     */
    orderBy?: SkuOrderByWithRelationInput | SkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skus.
     */
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skus.
     */
    distinct?: SkuScalarFieldEnum | SkuScalarFieldEnum[]
  }

  /**
   * Sku findMany
   */
  export type SkuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Filter, which Skus to fetch.
     */
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     */
    orderBy?: SkuOrderByWithRelationInput | SkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skus.
     */
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     */
    skip?: number
    distinct?: SkuScalarFieldEnum | SkuScalarFieldEnum[]
  }

  /**
   * Sku create
   */
  export type SkuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * The data needed to create a Sku.
     */
    data: XOR<SkuCreateInput, SkuUncheckedCreateInput>
  }

  /**
   * Sku createMany
   */
  export type SkuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skus.
     */
    data: SkuCreateManyInput | SkuCreateManyInput[]
  }

  /**
   * Sku update
   */
  export type SkuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * The data needed to update a Sku.
     */
    data: XOR<SkuUpdateInput, SkuUncheckedUpdateInput>
    /**
     * Choose, which Sku to update.
     */
    where: SkuWhereUniqueInput
  }

  /**
   * Sku updateMany
   */
  export type SkuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skus.
     */
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyInput>
    /**
     * Filter which Skus to update
     */
    where?: SkuWhereInput
  }

  /**
   * Sku upsert
   */
  export type SkuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * The filter to search for the Sku to update in case it exists.
     */
    where: SkuWhereUniqueInput
    /**
     * In case the Sku found by the `where` argument doesn't exist, create a new Sku with this data.
     */
    create: XOR<SkuCreateInput, SkuUncheckedCreateInput>
    /**
     * In case the Sku was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkuUpdateInput, SkuUncheckedUpdateInput>
  }

  /**
   * Sku delete
   */
  export type SkuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
    /**
     * Filter which Sku to delete.
     */
    where: SkuWhereUniqueInput
  }

  /**
   * Sku deleteMany
   */
  export type SkuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skus to delete
     */
    where?: SkuWhereInput
  }

  /**
   * Sku findRaw
   */
  export type SkuFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Sku aggregateRaw
   */
  export type SkuAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Sku without action
   */
  export type SkuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sku
     */
    select?: SkuSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const SpuScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    product_name: 'product_name',
    product_thumb: 'product_thumb',
    product_description: 'product_description',
    product_slug: 'product_slug',
    product_price: 'product_price',
    product_category: 'product_category',
    product_quantity: 'product_quantity',
    product_shop: 'product_shop',
    product_attributes: 'product_attributes',
    product_ratingsAverage: 'product_ratingsAverage',
    product_variations: 'product_variations',
    isDraft: 'isDraft',
    isPublished: 'isPublished',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpuScalarFieldEnum = (typeof SpuScalarFieldEnum)[keyof typeof SpuScalarFieldEnum]


  export const SkuScalarFieldEnum: {
    id: 'id',
    sku_id: 'sku_id',
    sku_tier_idx: 'sku_tier_idx',
    sku_default: 'sku_default',
    sku_thumb: 'sku_thumb',
    sku_slug: 'sku_slug',
    sku_sort: 'sku_sort',
    sku_price: 'sku_price',
    sku_stock: 'sku_stock',
    product_id: 'product_id',
    isDraft: 'isDraft',
    isPublished: 'isPublished',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkuScalarFieldEnum = (typeof SkuScalarFieldEnum)[keyof typeof SkuScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type SpuWhereInput = {
    AND?: SpuWhereInput | SpuWhereInput[]
    OR?: SpuWhereInput[]
    NOT?: SpuWhereInput | SpuWhereInput[]
    id?: StringFilter<"Spu"> | string
    product_id?: StringFilter<"Spu"> | string
    product_name?: StringFilter<"Spu"> | string
    product_thumb?: StringFilter<"Spu"> | string
    product_description?: StringNullableFilter<"Spu"> | string | null
    product_slug?: StringFilter<"Spu"> | string
    product_price?: FloatFilter<"Spu"> | number
    product_category?: StringNullableListFilter<"Spu">
    product_quantity?: IntFilter<"Spu"> | number
    product_shop?: StringNullableFilter<"Spu"> | string | null
    product_attributes?: JsonFilter<"Spu">
    product_ratingsAverage?: FloatFilter<"Spu"> | number
    product_variations?: JsonFilter<"Spu">
    isDraft?: BoolFilter<"Spu"> | boolean
    isPublished?: BoolFilter<"Spu"> | boolean
    isDeleted?: BoolFilter<"Spu"> | boolean
    createdAt?: DateTimeFilter<"Spu"> | Date | string
    updatedAt?: DateTimeFilter<"Spu"> | Date | string
  }

  export type SpuOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    product_thumb?: SortOrder
    product_description?: SortOrder
    product_slug?: SortOrder
    product_price?: SortOrder
    product_category?: SortOrder
    product_quantity?: SortOrder
    product_shop?: SortOrder
    product_attributes?: SortOrder
    product_ratingsAverage?: SortOrder
    product_variations?: SortOrder
    isDraft?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpuWhereInput | SpuWhereInput[]
    OR?: SpuWhereInput[]
    NOT?: SpuWhereInput | SpuWhereInput[]
    product_id?: StringFilter<"Spu"> | string
    product_name?: StringFilter<"Spu"> | string
    product_thumb?: StringFilter<"Spu"> | string
    product_description?: StringNullableFilter<"Spu"> | string | null
    product_slug?: StringFilter<"Spu"> | string
    product_price?: FloatFilter<"Spu"> | number
    product_category?: StringNullableListFilter<"Spu">
    product_quantity?: IntFilter<"Spu"> | number
    product_shop?: StringNullableFilter<"Spu"> | string | null
    product_attributes?: JsonFilter<"Spu">
    product_ratingsAverage?: FloatFilter<"Spu"> | number
    product_variations?: JsonFilter<"Spu">
    isDraft?: BoolFilter<"Spu"> | boolean
    isPublished?: BoolFilter<"Spu"> | boolean
    isDeleted?: BoolFilter<"Spu"> | boolean
    createdAt?: DateTimeFilter<"Spu"> | Date | string
    updatedAt?: DateTimeFilter<"Spu"> | Date | string
  }, "id">

  export type SpuOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    product_thumb?: SortOrder
    product_description?: SortOrder
    product_slug?: SortOrder
    product_price?: SortOrder
    product_category?: SortOrder
    product_quantity?: SortOrder
    product_shop?: SortOrder
    product_attributes?: SortOrder
    product_ratingsAverage?: SortOrder
    product_variations?: SortOrder
    isDraft?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpuCountOrderByAggregateInput
    _avg?: SpuAvgOrderByAggregateInput
    _max?: SpuMaxOrderByAggregateInput
    _min?: SpuMinOrderByAggregateInput
    _sum?: SpuSumOrderByAggregateInput
  }

  export type SpuScalarWhereWithAggregatesInput = {
    AND?: SpuScalarWhereWithAggregatesInput | SpuScalarWhereWithAggregatesInput[]
    OR?: SpuScalarWhereWithAggregatesInput[]
    NOT?: SpuScalarWhereWithAggregatesInput | SpuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Spu"> | string
    product_id?: StringWithAggregatesFilter<"Spu"> | string
    product_name?: StringWithAggregatesFilter<"Spu"> | string
    product_thumb?: StringWithAggregatesFilter<"Spu"> | string
    product_description?: StringNullableWithAggregatesFilter<"Spu"> | string | null
    product_slug?: StringWithAggregatesFilter<"Spu"> | string
    product_price?: FloatWithAggregatesFilter<"Spu"> | number
    product_category?: StringNullableListFilter<"Spu">
    product_quantity?: IntWithAggregatesFilter<"Spu"> | number
    product_shop?: StringNullableWithAggregatesFilter<"Spu"> | string | null
    product_attributes?: JsonWithAggregatesFilter<"Spu">
    product_ratingsAverage?: FloatWithAggregatesFilter<"Spu"> | number
    product_variations?: JsonWithAggregatesFilter<"Spu">
    isDraft?: BoolWithAggregatesFilter<"Spu"> | boolean
    isPublished?: BoolWithAggregatesFilter<"Spu"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Spu"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Spu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Spu"> | Date | string
  }

  export type SkuWhereInput = {
    AND?: SkuWhereInput | SkuWhereInput[]
    OR?: SkuWhereInput[]
    NOT?: SkuWhereInput | SkuWhereInput[]
    id?: StringFilter<"Sku"> | string
    sku_id?: StringFilter<"Sku"> | string
    sku_tier_idx?: IntNullableListFilter<"Sku">
    sku_default?: BoolFilter<"Sku"> | boolean
    sku_thumb?: StringFilter<"Sku"> | string
    sku_slug?: StringFilter<"Sku"> | string
    sku_sort?: IntFilter<"Sku"> | number
    sku_price?: FloatFilter<"Sku"> | number
    sku_stock?: IntFilter<"Sku"> | number
    product_id?: StringFilter<"Sku"> | string
    isDraft?: BoolFilter<"Sku"> | boolean
    isPublished?: BoolFilter<"Sku"> | boolean
    isDeleted?: BoolFilter<"Sku"> | boolean
    createdAt?: DateTimeFilter<"Sku"> | Date | string
    updatedAt?: DateTimeFilter<"Sku"> | Date | string
  }

  export type SkuOrderByWithRelationInput = {
    id?: SortOrder
    sku_id?: SortOrder
    sku_tier_idx?: SortOrder
    sku_default?: SortOrder
    sku_thumb?: SortOrder
    sku_slug?: SortOrder
    sku_sort?: SortOrder
    sku_price?: SortOrder
    sku_stock?: SortOrder
    product_id?: SortOrder
    isDraft?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkuWhereInput | SkuWhereInput[]
    OR?: SkuWhereInput[]
    NOT?: SkuWhereInput | SkuWhereInput[]
    sku_id?: StringFilter<"Sku"> | string
    sku_tier_idx?: IntNullableListFilter<"Sku">
    sku_default?: BoolFilter<"Sku"> | boolean
    sku_thumb?: StringFilter<"Sku"> | string
    sku_slug?: StringFilter<"Sku"> | string
    sku_sort?: IntFilter<"Sku"> | number
    sku_price?: FloatFilter<"Sku"> | number
    sku_stock?: IntFilter<"Sku"> | number
    product_id?: StringFilter<"Sku"> | string
    isDraft?: BoolFilter<"Sku"> | boolean
    isPublished?: BoolFilter<"Sku"> | boolean
    isDeleted?: BoolFilter<"Sku"> | boolean
    createdAt?: DateTimeFilter<"Sku"> | Date | string
    updatedAt?: DateTimeFilter<"Sku"> | Date | string
  }, "id">

  export type SkuOrderByWithAggregationInput = {
    id?: SortOrder
    sku_id?: SortOrder
    sku_tier_idx?: SortOrder
    sku_default?: SortOrder
    sku_thumb?: SortOrder
    sku_slug?: SortOrder
    sku_sort?: SortOrder
    sku_price?: SortOrder
    sku_stock?: SortOrder
    product_id?: SortOrder
    isDraft?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkuCountOrderByAggregateInput
    _avg?: SkuAvgOrderByAggregateInput
    _max?: SkuMaxOrderByAggregateInput
    _min?: SkuMinOrderByAggregateInput
    _sum?: SkuSumOrderByAggregateInput
  }

  export type SkuScalarWhereWithAggregatesInput = {
    AND?: SkuScalarWhereWithAggregatesInput | SkuScalarWhereWithAggregatesInput[]
    OR?: SkuScalarWhereWithAggregatesInput[]
    NOT?: SkuScalarWhereWithAggregatesInput | SkuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sku"> | string
    sku_id?: StringWithAggregatesFilter<"Sku"> | string
    sku_tier_idx?: IntNullableListFilter<"Sku">
    sku_default?: BoolWithAggregatesFilter<"Sku"> | boolean
    sku_thumb?: StringWithAggregatesFilter<"Sku"> | string
    sku_slug?: StringWithAggregatesFilter<"Sku"> | string
    sku_sort?: IntWithAggregatesFilter<"Sku"> | number
    sku_price?: FloatWithAggregatesFilter<"Sku"> | number
    sku_stock?: IntWithAggregatesFilter<"Sku"> | number
    product_id?: StringWithAggregatesFilter<"Sku"> | string
    isDraft?: BoolWithAggregatesFilter<"Sku"> | boolean
    isPublished?: BoolWithAggregatesFilter<"Sku"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Sku"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Sku"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sku"> | Date | string
  }

  export type SpuCreateInput = {
    id?: string
    product_id?: string
    product_name: string
    product_thumb: string
    product_description?: string | null
    product_slug?: string
    product_price: number
    product_category?: SpuCreateproduct_categoryInput | string[]
    product_quantity: number
    product_shop?: string | null
    product_attributes: InputJsonValue
    product_ratingsAverage?: number
    product_variations?: InputJsonValue
    isDraft?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpuUncheckedCreateInput = {
    id?: string
    product_id?: string
    product_name: string
    product_thumb: string
    product_description?: string | null
    product_slug?: string
    product_price: number
    product_category?: SpuCreateproduct_categoryInput | string[]
    product_quantity: number
    product_shop?: string | null
    product_attributes: InputJsonValue
    product_ratingsAverage?: number
    product_variations?: InputJsonValue
    isDraft?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpuUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    product_thumb?: StringFieldUpdateOperationsInput | string
    product_description?: NullableStringFieldUpdateOperationsInput | string | null
    product_slug?: StringFieldUpdateOperationsInput | string
    product_price?: FloatFieldUpdateOperationsInput | number
    product_category?: SpuUpdateproduct_categoryInput | string[]
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_shop?: NullableStringFieldUpdateOperationsInput | string | null
    product_attributes?: InputJsonValue | InputJsonValue
    product_ratingsAverage?: FloatFieldUpdateOperationsInput | number
    product_variations?: InputJsonValue | InputJsonValue
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpuUncheckedUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    product_thumb?: StringFieldUpdateOperationsInput | string
    product_description?: NullableStringFieldUpdateOperationsInput | string | null
    product_slug?: StringFieldUpdateOperationsInput | string
    product_price?: FloatFieldUpdateOperationsInput | number
    product_category?: SpuUpdateproduct_categoryInput | string[]
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_shop?: NullableStringFieldUpdateOperationsInput | string | null
    product_attributes?: InputJsonValue | InputJsonValue
    product_ratingsAverage?: FloatFieldUpdateOperationsInput | number
    product_variations?: InputJsonValue | InputJsonValue
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpuCreateManyInput = {
    id?: string
    product_id?: string
    product_name: string
    product_thumb: string
    product_description?: string | null
    product_slug?: string
    product_price: number
    product_category?: SpuCreateproduct_categoryInput | string[]
    product_quantity: number
    product_shop?: string | null
    product_attributes: InputJsonValue
    product_ratingsAverage?: number
    product_variations?: InputJsonValue
    isDraft?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpuUpdateManyMutationInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    product_thumb?: StringFieldUpdateOperationsInput | string
    product_description?: NullableStringFieldUpdateOperationsInput | string | null
    product_slug?: StringFieldUpdateOperationsInput | string
    product_price?: FloatFieldUpdateOperationsInput | number
    product_category?: SpuUpdateproduct_categoryInput | string[]
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_shop?: NullableStringFieldUpdateOperationsInput | string | null
    product_attributes?: InputJsonValue | InputJsonValue
    product_ratingsAverage?: FloatFieldUpdateOperationsInput | number
    product_variations?: InputJsonValue | InputJsonValue
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpuUncheckedUpdateManyInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    product_thumb?: StringFieldUpdateOperationsInput | string
    product_description?: NullableStringFieldUpdateOperationsInput | string | null
    product_slug?: StringFieldUpdateOperationsInput | string
    product_price?: FloatFieldUpdateOperationsInput | number
    product_category?: SpuUpdateproduct_categoryInput | string[]
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_shop?: NullableStringFieldUpdateOperationsInput | string | null
    product_attributes?: InputJsonValue | InputJsonValue
    product_ratingsAverage?: FloatFieldUpdateOperationsInput | number
    product_variations?: InputJsonValue | InputJsonValue
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkuCreateInput = {
    id?: string
    sku_id: string
    sku_tier_idx?: SkuCreatesku_tier_idxInput | number[]
    sku_default?: boolean
    sku_thumb?: string
    sku_slug?: string
    sku_sort?: number
    sku_price: number
    sku_stock?: number
    product_id: string
    isDraft?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkuUncheckedCreateInput = {
    id?: string
    sku_id: string
    sku_tier_idx?: SkuCreatesku_tier_idxInput | number[]
    sku_default?: boolean
    sku_thumb?: string
    sku_slug?: string
    sku_sort?: number
    sku_price: number
    sku_stock?: number
    product_id: string
    isDraft?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkuUpdateInput = {
    sku_id?: StringFieldUpdateOperationsInput | string
    sku_tier_idx?: SkuUpdatesku_tier_idxInput | number[]
    sku_default?: BoolFieldUpdateOperationsInput | boolean
    sku_thumb?: StringFieldUpdateOperationsInput | string
    sku_slug?: StringFieldUpdateOperationsInput | string
    sku_sort?: IntFieldUpdateOperationsInput | number
    sku_price?: FloatFieldUpdateOperationsInput | number
    sku_stock?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkuUncheckedUpdateInput = {
    sku_id?: StringFieldUpdateOperationsInput | string
    sku_tier_idx?: SkuUpdatesku_tier_idxInput | number[]
    sku_default?: BoolFieldUpdateOperationsInput | boolean
    sku_thumb?: StringFieldUpdateOperationsInput | string
    sku_slug?: StringFieldUpdateOperationsInput | string
    sku_sort?: IntFieldUpdateOperationsInput | number
    sku_price?: FloatFieldUpdateOperationsInput | number
    sku_stock?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkuCreateManyInput = {
    id?: string
    sku_id: string
    sku_tier_idx?: SkuCreatesku_tier_idxInput | number[]
    sku_default?: boolean
    sku_thumb?: string
    sku_slug?: string
    sku_sort?: number
    sku_price: number
    sku_stock?: number
    product_id: string
    isDraft?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkuUpdateManyMutationInput = {
    sku_id?: StringFieldUpdateOperationsInput | string
    sku_tier_idx?: SkuUpdatesku_tier_idxInput | number[]
    sku_default?: BoolFieldUpdateOperationsInput | boolean
    sku_thumb?: StringFieldUpdateOperationsInput | string
    sku_slug?: StringFieldUpdateOperationsInput | string
    sku_sort?: IntFieldUpdateOperationsInput | number
    sku_price?: FloatFieldUpdateOperationsInput | number
    sku_stock?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkuUncheckedUpdateManyInput = {
    sku_id?: StringFieldUpdateOperationsInput | string
    sku_tier_idx?: SkuUpdatesku_tier_idxInput | number[]
    sku_default?: BoolFieldUpdateOperationsInput | boolean
    sku_thumb?: StringFieldUpdateOperationsInput | string
    sku_slug?: StringFieldUpdateOperationsInput | string
    sku_sort?: IntFieldUpdateOperationsInput | number
    sku_price?: FloatFieldUpdateOperationsInput | number
    sku_stock?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SpuCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    product_thumb?: SortOrder
    product_description?: SortOrder
    product_slug?: SortOrder
    product_price?: SortOrder
    product_category?: SortOrder
    product_quantity?: SortOrder
    product_shop?: SortOrder
    product_attributes?: SortOrder
    product_ratingsAverage?: SortOrder
    product_variations?: SortOrder
    isDraft?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpuAvgOrderByAggregateInput = {
    product_price?: SortOrder
    product_quantity?: SortOrder
    product_ratingsAverage?: SortOrder
  }

  export type SpuMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    product_thumb?: SortOrder
    product_description?: SortOrder
    product_slug?: SortOrder
    product_price?: SortOrder
    product_quantity?: SortOrder
    product_shop?: SortOrder
    product_ratingsAverage?: SortOrder
    isDraft?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpuMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    product_thumb?: SortOrder
    product_description?: SortOrder
    product_slug?: SortOrder
    product_price?: SortOrder
    product_quantity?: SortOrder
    product_shop?: SortOrder
    product_ratingsAverage?: SortOrder
    isDraft?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpuSumOrderByAggregateInput = {
    product_price?: SortOrder
    product_quantity?: SortOrder
    product_ratingsAverage?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SkuCountOrderByAggregateInput = {
    id?: SortOrder
    sku_id?: SortOrder
    sku_tier_idx?: SortOrder
    sku_default?: SortOrder
    sku_thumb?: SortOrder
    sku_slug?: SortOrder
    sku_sort?: SortOrder
    sku_price?: SortOrder
    sku_stock?: SortOrder
    product_id?: SortOrder
    isDraft?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkuAvgOrderByAggregateInput = {
    sku_tier_idx?: SortOrder
    sku_sort?: SortOrder
    sku_price?: SortOrder
    sku_stock?: SortOrder
  }

  export type SkuMaxOrderByAggregateInput = {
    id?: SortOrder
    sku_id?: SortOrder
    sku_default?: SortOrder
    sku_thumb?: SortOrder
    sku_slug?: SortOrder
    sku_sort?: SortOrder
    sku_price?: SortOrder
    sku_stock?: SortOrder
    product_id?: SortOrder
    isDraft?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkuMinOrderByAggregateInput = {
    id?: SortOrder
    sku_id?: SortOrder
    sku_default?: SortOrder
    sku_thumb?: SortOrder
    sku_slug?: SortOrder
    sku_sort?: SortOrder
    sku_price?: SortOrder
    sku_stock?: SortOrder
    product_id?: SortOrder
    isDraft?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkuSumOrderByAggregateInput = {
    sku_tier_idx?: SortOrder
    sku_sort?: SortOrder
    sku_price?: SortOrder
    sku_stock?: SortOrder
  }

  export type SpuCreateproduct_categoryInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SpuUpdateproduct_categoryInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SkuCreatesku_tier_idxInput = {
    set: number[]
  }

  export type SkuUpdatesku_tier_idxInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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