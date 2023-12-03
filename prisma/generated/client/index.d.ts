
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BlogPosts
 * 
 */
export type BlogPosts = $Result.DefaultSelection<Prisma.$BlogPostsPayload>
/**
 * Model Plans
 * 
 */
export type Plans = $Result.DefaultSelection<Prisma.$PlansPayload>
/**
 * Model Subscriptions
 * 
 */
export type Subscriptions = $Result.DefaultSelection<Prisma.$SubscriptionsPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Stage: {
  PUBLISHED: 'PUBLISHED',
  DRAFT: 'DRAFT'
};

export type Stage = (typeof Stage)[keyof typeof Stage]

}

export type Stage = $Enums.Stage

export const Stage: typeof $Enums.Stage

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BlogPosts
 * const blogPosts = await prisma.blogPosts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more BlogPosts
   * const blogPosts = await prisma.blogPosts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.blogPosts`: Exposes CRUD operations for the **BlogPosts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPosts.findMany()
    * ```
    */
  get blogPosts(): Prisma.BlogPostsDelegate<ExtArgs>;

  /**
   * `prisma.plans`: Exposes CRUD operations for the **Plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plans.findMany()
    * ```
    */
  get plans(): Prisma.PlansDelegate<ExtArgs>;

  /**
   * `prisma.subscriptions`: Exposes CRUD operations for the **Subscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscriptions.findMany()
    * ```
    */
  get subscriptions(): Prisma.SubscriptionsDelegate<ExtArgs>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    BlogPosts: 'BlogPosts',
    Plans: 'Plans',
    Subscriptions: 'Subscriptions',
    Comments: 'Comments',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'blogPosts' | 'plans' | 'subscriptions' | 'comments' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      BlogPosts: {
        payload: Prisma.$BlogPostsPayload<ExtArgs>
        fields: Prisma.BlogPostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostsPayload>
          }
          findFirst: {
            args: Prisma.BlogPostsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostsPayload>
          }
          findMany: {
            args: Prisma.BlogPostsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostsPayload>[]
          }
          create: {
            args: Prisma.BlogPostsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostsPayload>
          }
          createMany: {
            args: Prisma.BlogPostsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlogPostsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostsPayload>
          }
          update: {
            args: Prisma.BlogPostsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostsPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlogPostsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostsPayload>
          }
          aggregate: {
            args: Prisma.BlogPostsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlogPosts>
          }
          groupBy: {
            args: Prisma.BlogPostsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlogPostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostsCountArgs<ExtArgs>,
            result: $Utils.Optional<BlogPostsCountAggregateOutputType> | number
          }
        }
      }
      Plans: {
        payload: Prisma.$PlansPayload<ExtArgs>
        fields: Prisma.PlansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlansFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlansFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          findFirst: {
            args: Prisma.PlansFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlansFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          findMany: {
            args: Prisma.PlansFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>[]
          }
          create: {
            args: Prisma.PlansCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          createMany: {
            args: Prisma.PlansCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlansDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          update: {
            args: Prisma.PlansUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          deleteMany: {
            args: Prisma.PlansDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlansUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlansUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          aggregate: {
            args: Prisma.PlansAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlans>
          }
          groupBy: {
            args: Prisma.PlansGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlansGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlansCountArgs<ExtArgs>,
            result: $Utils.Optional<PlansCountAggregateOutputType> | number
          }
        }
      }
      Subscriptions: {
        payload: Prisma.$SubscriptionsPayload<ExtArgs>
        fields: Prisma.SubscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          findMany: {
            args: Prisma.SubscriptionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>[]
          }
          create: {
            args: Prisma.SubscriptionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          createMany: {
            args: Prisma.SubscriptionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          update: {
            args: Prisma.SubscriptionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubscriptions>
          }
          groupBy: {
            args: Prisma.SubscriptionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionsCountArgs<ExtArgs>,
            result: $Utils.Optional<SubscriptionsCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type BlogPostsCountOutputType
   */

  export type BlogPostsCountOutputType = {
    Comments: number
  }

  export type BlogPostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | BlogPostsCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes

  /**
   * BlogPostsCountOutputType without action
   */
  export type BlogPostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostsCountOutputType
     */
    select?: BlogPostsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BlogPostsCountOutputType without action
   */
  export type BlogPostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }



  /**
   * Count Type PlansCountOutputType
   */

  export type PlansCountOutputType = {
    Subscription: number
  }

  export type PlansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscription?: boolean | PlansCountOutputTypeCountSubscriptionArgs
  }

  // Custom InputTypes

  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlansCountOutputType
     */
    select?: PlansCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionsWhereInput
  }



  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    Children: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Children?: boolean | CommentsCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Comments: number
    Subscription: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    Subscription?: boolean | UsersCountOutputTypeCountSubscriptionArgs
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
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model BlogPosts
   */

  export type AggregateBlogPosts = {
    _count: BlogPostsCountAggregateOutputType | null
    _min: BlogPostsMinAggregateOutputType | null
    _max: BlogPostsMaxAggregateOutputType | null
  }

  export type BlogPostsMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    stage: $Enums.Stage | null
    coverImage: string | null
    content: string | null
    categoryId: string | null
    date: Date | null
    excerpt: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type BlogPostsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    stage: $Enums.Stage | null
    coverImage: string | null
    content: string | null
    categoryId: string | null
    date: Date | null
    excerpt: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type BlogPostsCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    stage: number
    coverImage: number
    content: number
    categoryId: number
    date: number
    excerpt: number
    deleted: number
    createdAt: number
    updatedAt: number
    publishedAt: number
    _all: number
  }


  export type BlogPostsMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    stage?: true
    coverImage?: true
    content?: true
    categoryId?: true
    date?: true
    excerpt?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type BlogPostsMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    stage?: true
    coverImage?: true
    content?: true
    categoryId?: true
    date?: true
    excerpt?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type BlogPostsCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    stage?: true
    coverImage?: true
    content?: true
    categoryId?: true
    date?: true
    excerpt?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    _all?: true
  }

  export type BlogPostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to aggregate.
     */
    where?: BlogPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostsOrderByWithRelationInput | BlogPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostsMaxAggregateInputType
  }

  export type GetBlogPostsAggregateType<T extends BlogPostsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPosts[P]>
      : GetScalarType<T[P], AggregateBlogPosts[P]>
  }




  export type BlogPostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostsWhereInput
    orderBy?: BlogPostsOrderByWithAggregationInput | BlogPostsOrderByWithAggregationInput[]
    by: BlogPostsScalarFieldEnum[] | BlogPostsScalarFieldEnum
    having?: BlogPostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostsCountAggregateInputType | true
    _min?: BlogPostsMinAggregateInputType
    _max?: BlogPostsMaxAggregateInputType
  }

  export type BlogPostsGroupByOutputType = {
    id: string
    title: string
    slug: string
    stage: $Enums.Stage
    coverImage: string
    content: string
    categoryId: string
    date: Date | null
    excerpt: string | null
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    publishedAt: Date | null
    _count: BlogPostsCountAggregateOutputType | null
    _min: BlogPostsMinAggregateOutputType | null
    _max: BlogPostsMaxAggregateOutputType | null
  }

  type GetBlogPostsGroupByPayload<T extends BlogPostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostsGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostsGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    stage?: boolean
    coverImage?: boolean
    content?: boolean
    categoryId?: boolean
    date?: boolean
    excerpt?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    Comments?: boolean | BlogPosts$CommentsArgs<ExtArgs>
    _count?: boolean | BlogPostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPosts"]>

  export type BlogPostsSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    stage?: boolean
    coverImage?: boolean
    content?: boolean
    categoryId?: boolean
    date?: boolean
    excerpt?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
  }

  export type BlogPostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | BlogPosts$CommentsArgs<ExtArgs>
    _count?: boolean | BlogPostsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BlogPostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPosts"
    objects: {
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      stage: $Enums.Stage
      coverImage: string
      content: string
      categoryId: string
      date: Date | null
      excerpt: string | null
      deleted: boolean
      createdAt: Date
      updatedAt: Date
      publishedAt: Date | null
    }, ExtArgs["result"]["blogPosts"]>
    composites: {}
  }


  type BlogPostsGetPayload<S extends boolean | null | undefined | BlogPostsDefaultArgs> = $Result.GetResult<Prisma.$BlogPostsPayload, S>

  type BlogPostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogPostsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BlogPostsCountAggregateInputType | true
    }

  export interface BlogPostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPosts'], meta: { name: 'BlogPosts' } }
    /**
     * Find zero or one BlogPosts that matches the filter.
     * @param {BlogPostsFindUniqueArgs} args - Arguments to find a BlogPosts
     * @example
     * // Get one BlogPosts
     * const blogPosts = await prisma.blogPosts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlogPostsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostsFindUniqueArgs<ExtArgs>>
    ): Prisma__BlogPostsClient<$Result.GetResult<Prisma.$BlogPostsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BlogPosts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlogPostsFindUniqueOrThrowArgs} args - Arguments to find a BlogPosts
     * @example
     * // Get one BlogPosts
     * const blogPosts = await prisma.blogPosts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlogPostsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlogPostsClient<$Result.GetResult<Prisma.$BlogPostsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostsFindFirstArgs} args - Arguments to find a BlogPosts
     * @example
     * // Get one BlogPosts
     * const blogPosts = await prisma.blogPosts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlogPostsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostsFindFirstArgs<ExtArgs>>
    ): Prisma__BlogPostsClient<$Result.GetResult<Prisma.$BlogPostsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BlogPosts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostsFindFirstOrThrowArgs} args - Arguments to find a BlogPosts
     * @example
     * // Get one BlogPosts
     * const blogPosts = await prisma.blogPosts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlogPostsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlogPostsClient<$Result.GetResult<Prisma.$BlogPostsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPosts.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPosts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostsWithIdOnly = await prisma.blogPosts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlogPostsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BlogPosts.
     * @param {BlogPostsCreateArgs} args - Arguments to create a BlogPosts.
     * @example
     * // Create one BlogPosts
     * const BlogPosts = await prisma.blogPosts.create({
     *   data: {
     *     // ... data to create a BlogPosts
     *   }
     * })
     * 
    **/
    create<T extends BlogPostsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostsCreateArgs<ExtArgs>>
    ): Prisma__BlogPostsClient<$Result.GetResult<Prisma.$BlogPostsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BlogPosts.
     *     @param {BlogPostsCreateManyArgs} args - Arguments to create many BlogPosts.
     *     @example
     *     // Create many BlogPosts
     *     const blogPosts = await prisma.blogPosts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlogPostsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlogPosts.
     * @param {BlogPostsDeleteArgs} args - Arguments to delete one BlogPosts.
     * @example
     * // Delete one BlogPosts
     * const BlogPosts = await prisma.blogPosts.delete({
     *   where: {
     *     // ... filter to delete one BlogPosts
     *   }
     * })
     * 
    **/
    delete<T extends BlogPostsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostsDeleteArgs<ExtArgs>>
    ): Prisma__BlogPostsClient<$Result.GetResult<Prisma.$BlogPostsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BlogPosts.
     * @param {BlogPostsUpdateArgs} args - Arguments to update one BlogPosts.
     * @example
     * // Update one BlogPosts
     * const blogPosts = await prisma.blogPosts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlogPostsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostsUpdateArgs<ExtArgs>>
    ): Prisma__BlogPostsClient<$Result.GetResult<Prisma.$BlogPostsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostsDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPosts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlogPostsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPosts = await prisma.blogPosts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlogPostsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogPosts.
     * @param {BlogPostsUpsertArgs} args - Arguments to update or create a BlogPosts.
     * @example
     * // Update or create a BlogPosts
     * const blogPosts = await prisma.blogPosts.upsert({
     *   create: {
     *     // ... data to create a BlogPosts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPosts we want to update
     *   }
     * })
    **/
    upsert<T extends BlogPostsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostsUpsertArgs<ExtArgs>>
    ): Prisma__BlogPostsClient<$Result.GetResult<Prisma.$BlogPostsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostsCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPosts.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostsCountArgs>(
      args?: Subset<T, BlogPostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogPostsAggregateArgs>(args: Subset<T, BlogPostsAggregateArgs>): Prisma.PrismaPromise<GetBlogPostsAggregateType<T>>

    /**
     * Group by BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostsGroupByArgs} args - Group by arguments.
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
      T extends BlogPostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostsGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogPostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPosts model
   */
  readonly fields: BlogPostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPosts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Comments<T extends BlogPosts$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPosts$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BlogPosts model
   */ 
  interface BlogPostsFieldRefs {
    readonly id: FieldRef<"BlogPosts", 'String'>
    readonly title: FieldRef<"BlogPosts", 'String'>
    readonly slug: FieldRef<"BlogPosts", 'String'>
    readonly stage: FieldRef<"BlogPosts", 'Stage'>
    readonly coverImage: FieldRef<"BlogPosts", 'String'>
    readonly content: FieldRef<"BlogPosts", 'String'>
    readonly categoryId: FieldRef<"BlogPosts", 'String'>
    readonly date: FieldRef<"BlogPosts", 'DateTime'>
    readonly excerpt: FieldRef<"BlogPosts", 'String'>
    readonly deleted: FieldRef<"BlogPosts", 'Boolean'>
    readonly createdAt: FieldRef<"BlogPosts", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPosts", 'DateTime'>
    readonly publishedAt: FieldRef<"BlogPosts", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * BlogPosts findUnique
   */
  export type BlogPostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPosts
     */
    select?: BlogPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostsInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where: BlogPostsWhereUniqueInput
  }


  /**
   * BlogPosts findUniqueOrThrow
   */
  export type BlogPostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPosts
     */
    select?: BlogPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostsInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where: BlogPostsWhereUniqueInput
  }


  /**
   * BlogPosts findFirst
   */
  export type BlogPostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPosts
     */
    select?: BlogPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostsInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostsOrderByWithRelationInput | BlogPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostsScalarFieldEnum | BlogPostsScalarFieldEnum[]
  }


  /**
   * BlogPosts findFirstOrThrow
   */
  export type BlogPostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPosts
     */
    select?: BlogPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostsInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostsOrderByWithRelationInput | BlogPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostsScalarFieldEnum | BlogPostsScalarFieldEnum[]
  }


  /**
   * BlogPosts findMany
   */
  export type BlogPostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPosts
     */
    select?: BlogPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostsInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostsOrderByWithRelationInput | BlogPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostsScalarFieldEnum | BlogPostsScalarFieldEnum[]
  }


  /**
   * BlogPosts create
   */
  export type BlogPostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPosts
     */
    select?: BlogPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostsInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPosts.
     */
    data: XOR<BlogPostsCreateInput, BlogPostsUncheckedCreateInput>
  }


  /**
   * BlogPosts createMany
   */
  export type BlogPostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostsCreateManyInput | BlogPostsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BlogPosts update
   */
  export type BlogPostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPosts
     */
    select?: BlogPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostsInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPosts.
     */
    data: XOR<BlogPostsUpdateInput, BlogPostsUncheckedUpdateInput>
    /**
     * Choose, which BlogPosts to update.
     */
    where: BlogPostsWhereUniqueInput
  }


  /**
   * BlogPosts updateMany
   */
  export type BlogPostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostsUpdateManyMutationInput, BlogPostsUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostsWhereInput
  }


  /**
   * BlogPosts upsert
   */
  export type BlogPostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPosts
     */
    select?: BlogPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostsInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPosts to update in case it exists.
     */
    where: BlogPostsWhereUniqueInput
    /**
     * In case the BlogPosts found by the `where` argument doesn't exist, create a new BlogPosts with this data.
     */
    create: XOR<BlogPostsCreateInput, BlogPostsUncheckedCreateInput>
    /**
     * In case the BlogPosts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostsUpdateInput, BlogPostsUncheckedUpdateInput>
  }


  /**
   * BlogPosts delete
   */
  export type BlogPostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPosts
     */
    select?: BlogPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostsInclude<ExtArgs> | null
    /**
     * Filter which BlogPosts to delete.
     */
    where: BlogPostsWhereUniqueInput
  }


  /**
   * BlogPosts deleteMany
   */
  export type BlogPostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostsWhereInput
  }


  /**
   * BlogPosts.Comments
   */
  export type BlogPosts$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * BlogPosts without action
   */
  export type BlogPostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPosts
     */
    select?: BlogPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostsInclude<ExtArgs> | null
  }



  /**
   * Model Plans
   */

  export type AggregatePlans = {
    _count: PlansCountAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  export type PlansMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
  }

  export type PlansMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
  }

  export type PlansCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    _all: number
  }


  export type PlansMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
  }

  export type PlansMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
  }

  export type PlansCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    _all?: true
  }

  export type PlansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to aggregate.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlansMaxAggregateInputType
  }

  export type GetPlansAggregateType<T extends PlansAggregateArgs> = {
        [P in keyof T & keyof AggregatePlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlans[P]>
      : GetScalarType<T[P], AggregatePlans[P]>
  }




  export type PlansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlansWhereInput
    orderBy?: PlansOrderByWithAggregationInput | PlansOrderByWithAggregationInput[]
    by: PlansScalarFieldEnum[] | PlansScalarFieldEnum
    having?: PlansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlansCountAggregateInputType | true
    _min?: PlansMinAggregateInputType
    _max?: PlansMaxAggregateInputType
  }

  export type PlansGroupByOutputType = {
    id: string
    title: string
    slug: string | null
    _count: PlansCountAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  type GetPlansGroupByPayload<T extends PlansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlansGroupByOutputType[P]>
            : GetScalarType<T[P], PlansGroupByOutputType[P]>
        }
      >
    >


  export type PlansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    Subscription?: boolean | Plans$SubscriptionArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plans"]>

  export type PlansSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
  }

  export type PlansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscription?: boolean | Plans$SubscriptionArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plans"
    objects: {
      Subscription: Prisma.$SubscriptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string | null
    }, ExtArgs["result"]["plans"]>
    composites: {}
  }


  type PlansGetPayload<S extends boolean | null | undefined | PlansDefaultArgs> = $Result.GetResult<Prisma.$PlansPayload, S>

  type PlansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlansFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PlansCountAggregateInputType | true
    }

  export interface PlansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plans'], meta: { name: 'Plans' } }
    /**
     * Find zero or one Plans that matches the filter.
     * @param {PlansFindUniqueArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlansFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlansFindUniqueArgs<ExtArgs>>
    ): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Plans that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlansFindUniqueOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlansFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlansFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindFirstArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlansFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlansFindFirstArgs<ExtArgs>>
    ): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindFirstOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlansFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlansFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plans.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plansWithIdOnly = await prisma.plans.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlansFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlansFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Plans.
     * @param {PlansCreateArgs} args - Arguments to create a Plans.
     * @example
     * // Create one Plans
     * const Plans = await prisma.plans.create({
     *   data: {
     *     // ... data to create a Plans
     *   }
     * })
     * 
    **/
    create<T extends PlansCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlansCreateArgs<ExtArgs>>
    ): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Plans.
     *     @param {PlansCreateManyArgs} args - Arguments to create many Plans.
     *     @example
     *     // Create many Plans
     *     const plans = await prisma.plans.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlansCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlansCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plans.
     * @param {PlansDeleteArgs} args - Arguments to delete one Plans.
     * @example
     * // Delete one Plans
     * const Plans = await prisma.plans.delete({
     *   where: {
     *     // ... filter to delete one Plans
     *   }
     * })
     * 
    **/
    delete<T extends PlansDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlansDeleteArgs<ExtArgs>>
    ): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Plans.
     * @param {PlansUpdateArgs} args - Arguments to update one Plans.
     * @example
     * // Update one Plans
     * const plans = await prisma.plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlansUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlansUpdateArgs<ExtArgs>>
    ): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlansDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlansDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlansDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlansUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlansUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plans.
     * @param {PlansUpsertArgs} args - Arguments to update or create a Plans.
     * @example
     * // Update or create a Plans
     * const plans = await prisma.plans.upsert({
     *   create: {
     *     // ... data to create a Plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plans we want to update
     *   }
     * })
    **/
    upsert<T extends PlansUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlansUpsertArgs<ExtArgs>>
    ): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plans.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlansCountArgs>(
      args?: Subset<T, PlansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlansAggregateArgs>(args: Subset<T, PlansAggregateArgs>): Prisma.PrismaPromise<GetPlansAggregateType<T>>

    /**
     * Group by Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansGroupByArgs} args - Group by arguments.
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
      T extends PlansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlansGroupByArgs['orderBy'] }
        : { orderBy?: PlansGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plans model
   */
  readonly fields: PlansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Subscription<T extends Plans$SubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Plans$SubscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Plans model
   */ 
  interface PlansFieldRefs {
    readonly id: FieldRef<"Plans", 'String'>
    readonly title: FieldRef<"Plans", 'String'>
    readonly slug: FieldRef<"Plans", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Plans findUnique
   */
  export type PlansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where: PlansWhereUniqueInput
  }


  /**
   * Plans findUniqueOrThrow
   */
  export type PlansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where: PlansWhereUniqueInput
  }


  /**
   * Plans findFirst
   */
  export type PlansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }


  /**
   * Plans findFirstOrThrow
   */
  export type PlansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }


  /**
   * Plans findMany
   */
  export type PlansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }


  /**
   * Plans create
   */
  export type PlansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The data needed to create a Plans.
     */
    data: XOR<PlansCreateInput, PlansUncheckedCreateInput>
  }


  /**
   * Plans createMany
   */
  export type PlansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlansCreateManyInput | PlansCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Plans update
   */
  export type PlansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The data needed to update a Plans.
     */
    data: XOR<PlansUpdateInput, PlansUncheckedUpdateInput>
    /**
     * Choose, which Plans to update.
     */
    where: PlansWhereUniqueInput
  }


  /**
   * Plans updateMany
   */
  export type PlansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlansUpdateManyMutationInput, PlansUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlansWhereInput
  }


  /**
   * Plans upsert
   */
  export type PlansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The filter to search for the Plans to update in case it exists.
     */
    where: PlansWhereUniqueInput
    /**
     * In case the Plans found by the `where` argument doesn't exist, create a new Plans with this data.
     */
    create: XOR<PlansCreateInput, PlansUncheckedCreateInput>
    /**
     * In case the Plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlansUpdateInput, PlansUncheckedUpdateInput>
  }


  /**
   * Plans delete
   */
  export type PlansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter which Plans to delete.
     */
    where: PlansWhereUniqueInput
  }


  /**
   * Plans deleteMany
   */
  export type PlansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlansWhereInput
  }


  /**
   * Plans.Subscription
   */
  export type Plans$SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    where?: SubscriptionsWhereInput
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    cursor?: SubscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }


  /**
   * Plans without action
   */
  export type PlansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlansInclude<ExtArgs> | null
  }



  /**
   * Model Subscriptions
   */

  export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  export type SubscriptionsMinAggregateOutputType = {
    id: string | null
    planId: string | null
    usersId: string | null
    isActive: boolean | null
  }

  export type SubscriptionsMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    usersId: string | null
    isActive: boolean | null
  }

  export type SubscriptionsCountAggregateOutputType = {
    id: number
    planId: number
    usersId: number
    isActive: number
    _all: number
  }


  export type SubscriptionsMinAggregateInputType = {
    id?: true
    planId?: true
    usersId?: true
    isActive?: true
  }

  export type SubscriptionsMaxAggregateInputType = {
    id?: true
    planId?: true
    usersId?: true
    isActive?: true
  }

  export type SubscriptionsCountAggregateInputType = {
    id?: true
    planId?: true
    usersId?: true
    isActive?: true
    _all?: true
  }

  export type SubscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to aggregate.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type GetSubscriptionsAggregateType<T extends SubscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptions[P]>
      : GetScalarType<T[P], AggregateSubscriptions[P]>
  }




  export type SubscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionsWhereInput
    orderBy?: SubscriptionsOrderByWithAggregationInput | SubscriptionsOrderByWithAggregationInput[]
    by: SubscriptionsScalarFieldEnum[] | SubscriptionsScalarFieldEnum
    having?: SubscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionsCountAggregateInputType | true
    _min?: SubscriptionsMinAggregateInputType
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type SubscriptionsGroupByOutputType = {
    id: string
    planId: string
    usersId: string
    isActive: boolean
    _count: SubscriptionsCountAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  type GetSubscriptionsGroupByPayload<T extends SubscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    usersId?: boolean
    isActive?: boolean
    plan?: boolean | PlansDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type SubscriptionsSelectScalar = {
    id?: boolean
    planId?: boolean
    usersId?: boolean
    isActive?: boolean
  }

  export type SubscriptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlansDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }


  export type $SubscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscriptions"
    objects: {
      plan: Prisma.$PlansPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      usersId: string
      isActive: boolean
    }, ExtArgs["result"]["subscriptions"]>
    composites: {}
  }


  type SubscriptionsGetPayload<S extends boolean | null | undefined | SubscriptionsDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionsPayload, S>

  type SubscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SubscriptionsCountAggregateInputType | true
    }

  export interface SubscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscriptions'], meta: { name: 'Subscriptions' } }
    /**
     * Find zero or one Subscriptions that matches the filter.
     * @param {SubscriptionsFindUniqueArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubscriptionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionsFindUniqueArgs<ExtArgs>>
    ): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Subscriptions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubscriptionsFindUniqueOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubscriptionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindFirstArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubscriptionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionsFindFirstArgs<ExtArgs>>
    ): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Subscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindFirstOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubscriptionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubscriptionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Subscriptions.
     * @param {SubscriptionsCreateArgs} args - Arguments to create a Subscriptions.
     * @example
     * // Create one Subscriptions
     * const Subscriptions = await prisma.subscriptions.create({
     *   data: {
     *     // ... data to create a Subscriptions
     *   }
     * })
     * 
    **/
    create<T extends SubscriptionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionsCreateArgs<ExtArgs>>
    ): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Subscriptions.
     *     @param {SubscriptionsCreateManyArgs} args - Arguments to create many Subscriptions.
     *     @example
     *     // Create many Subscriptions
     *     const subscriptions = await prisma.subscriptions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubscriptionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscriptions.
     * @param {SubscriptionsDeleteArgs} args - Arguments to delete one Subscriptions.
     * @example
     * // Delete one Subscriptions
     * const Subscriptions = await prisma.subscriptions.delete({
     *   where: {
     *     // ... filter to delete one Subscriptions
     *   }
     * })
     * 
    **/
    delete<T extends SubscriptionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionsDeleteArgs<ExtArgs>>
    ): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Subscriptions.
     * @param {SubscriptionsUpdateArgs} args - Arguments to update one Subscriptions.
     * @example
     * // Update one Subscriptions
     * const subscriptions = await prisma.subscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubscriptionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionsUpdateArgs<ExtArgs>>
    ): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionsDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubscriptionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubscriptionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscriptions.
     * @param {SubscriptionsUpsertArgs} args - Arguments to update or create a Subscriptions.
     * @example
     * // Update or create a Subscriptions
     * const subscriptions = await prisma.subscriptions.upsert({
     *   create: {
     *     // ... data to create a Subscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriptions we want to update
     *   }
     * })
    **/
    upsert<T extends SubscriptionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionsUpsertArgs<ExtArgs>>
    ): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscriptions.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionsCountArgs>(
      args?: Subset<T, SubscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionsAggregateArgs>(args: Subset<T, SubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>

    /**
     * Group by Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscriptions model
   */
  readonly fields: SubscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    plan<T extends PlansDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlansDefaultArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Subscriptions model
   */ 
  interface SubscriptionsFieldRefs {
    readonly id: FieldRef<"Subscriptions", 'String'>
    readonly planId: FieldRef<"Subscriptions", 'String'>
    readonly usersId: FieldRef<"Subscriptions", 'String'>
    readonly isActive: FieldRef<"Subscriptions", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Subscriptions findUnique
   */
  export type SubscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where: SubscriptionsWhereUniqueInput
  }


  /**
   * Subscriptions findUniqueOrThrow
   */
  export type SubscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where: SubscriptionsWhereUniqueInput
  }


  /**
   * Subscriptions findFirst
   */
  export type SubscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }


  /**
   * Subscriptions findFirstOrThrow
   */
  export type SubscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }


  /**
   * Subscriptions findMany
   */
  export type SubscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }


  /**
   * Subscriptions create
   */
  export type SubscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscriptions.
     */
    data: XOR<SubscriptionsCreateInput, SubscriptionsUncheckedCreateInput>
  }


  /**
   * Subscriptions createMany
   */
  export type SubscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionsCreateManyInput | SubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Subscriptions update
   */
  export type SubscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscriptions.
     */
    data: XOR<SubscriptionsUpdateInput, SubscriptionsUncheckedUpdateInput>
    /**
     * Choose, which Subscriptions to update.
     */
    where: SubscriptionsWhereUniqueInput
  }


  /**
   * Subscriptions updateMany
   */
  export type SubscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionsWhereInput
  }


  /**
   * Subscriptions upsert
   */
  export type SubscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscriptions to update in case it exists.
     */
    where: SubscriptionsWhereUniqueInput
    /**
     * In case the Subscriptions found by the `where` argument doesn't exist, create a new Subscriptions with this data.
     */
    create: XOR<SubscriptionsCreateInput, SubscriptionsUncheckedCreateInput>
    /**
     * In case the Subscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionsUpdateInput, SubscriptionsUncheckedUpdateInput>
  }


  /**
   * Subscriptions delete
   */
  export type SubscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter which Subscriptions to delete.
     */
    where: SubscriptionsWhereUniqueInput
  }


  /**
   * Subscriptions deleteMany
   */
  export type SubscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionsWhereInput
  }


  /**
   * Subscriptions without action
   */
  export type SubscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
  }



  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    content: string | null
    blogPostsId: string | null
    userId: string | null
    parentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    blogPostsId: string | null
    userId: string | null
    parentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    content: number
    blogPostsId: number
    userId: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    content?: true
    blogPostsId?: true
    userId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    content?: true
    blogPostsId?: true
    userId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    content?: true
    blogPostsId?: true
    userId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    content: string
    blogPostsId: string
    userId: string
    parentId: number | null
    createdAt: Date
    updatedAt: Date
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    blogPostsId?: boolean
    userId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPost?: boolean | BlogPostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
    Children?: boolean | Comments$ChildrenArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    content?: boolean
    blogPostsId?: boolean
    userId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
    Children?: boolean | Comments$ChildrenArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      blogPost: Prisma.$BlogPostsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
      parent: Prisma.$CommentsPayload<ExtArgs> | null
      Children: Prisma.$CommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      blogPostsId: string
      userId: string
      parentId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }


  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
    **/
    create<T extends CommentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     *     @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comments = await prisma.comments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
    **/
    delete<T extends CommentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
    **/
    upsert<T extends CommentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    blogPost<T extends BlogPostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostsDefaultArgs<ExtArgs>>): Prisma__BlogPostsClient<$Result.GetResult<Prisma.$BlogPostsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    parent<T extends Comments$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comments$parentArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Children<T extends Comments$ChildrenArgs<ExtArgs> = {}>(args?: Subset<T, Comments$ChildrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comments model
   */ 
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'Int'>
    readonly content: FieldRef<"Comments", 'String'>
    readonly blogPostsId: FieldRef<"Comments", 'String'>
    readonly userId: FieldRef<"Comments", 'String'>
    readonly parentId: FieldRef<"Comments", 'Int'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly updatedAt: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }


  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }


  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }


  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }


  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
  }


  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }


  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }


  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
  }


  /**
   * Comments.parent
   */
  export type Comments$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
  }


  /**
   * Comments.Children
   */
  export type Comments$ChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
  }



  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    username: string | null
    profile_image_url: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    username: string | null
    profile_image_url: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    externalId: number
    email: number
    first_name: number
    last_name: number
    username: number
    profile_image_url: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    externalId?: true
    email?: true
    first_name?: true
    last_name?: true
    username?: true
    profile_image_url?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    externalId?: true
    email?: true
    first_name?: true
    last_name?: true
    username?: true
    profile_image_url?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    externalId?: true
    email?: true
    first_name?: true
    last_name?: true
    username?: true
    profile_image_url?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    externalId: string | null
    email: string
    first_name: string
    last_name: string | null
    username: string
    profile_image_url: string
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    profile_image_url?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    Subscription?: boolean | Users$SubscriptionArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    externalId?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    profile_image_url?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    Subscription?: boolean | Users$SubscriptionArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      Subscription: Prisma.$SubscriptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string | null
      email: string
      first_name: string
      last_name: string | null
      username: string
      profile_image_url: string
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
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
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Comments<T extends Users$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Subscription<T extends Users$SubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Users$SubscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly externalId: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly first_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly profile_image_url: FieldRef<"Users", 'String'>
    readonly deleted: FieldRef<"Users", 'Boolean'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users.Comments
   */
  export type Users$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * Users.Subscription
   */
  export type Users$SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    where?: SubscriptionsWhereInput
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    cursor?: SubscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }


  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
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


  export const BlogPostsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    stage: 'stage',
    coverImage: 'coverImage',
    content: 'content',
    categoryId: 'categoryId',
    date: 'date',
    excerpt: 'excerpt',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    publishedAt: 'publishedAt'
  };

  export type BlogPostsScalarFieldEnum = (typeof BlogPostsScalarFieldEnum)[keyof typeof BlogPostsScalarFieldEnum]


  export const PlansScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug'
  };

  export type PlansScalarFieldEnum = (typeof PlansScalarFieldEnum)[keyof typeof PlansScalarFieldEnum]


  export const SubscriptionsScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    usersId: 'usersId',
    isActive: 'isActive'
  };

  export type SubscriptionsScalarFieldEnum = (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    blogPostsId: 'blogPostsId',
    userId: 'userId',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    username: 'username',
    profile_image_url: 'profile_image_url',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Stage'
   */
  export type EnumStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Stage'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BlogPostsWhereInput = {
    AND?: BlogPostsWhereInput | BlogPostsWhereInput[]
    OR?: BlogPostsWhereInput[]
    NOT?: BlogPostsWhereInput | BlogPostsWhereInput[]
    id?: StringFilter<"BlogPosts"> | string
    title?: StringFilter<"BlogPosts"> | string
    slug?: StringFilter<"BlogPosts"> | string
    stage?: EnumStageFilter<"BlogPosts"> | $Enums.Stage
    coverImage?: StringFilter<"BlogPosts"> | string
    content?: StringFilter<"BlogPosts"> | string
    categoryId?: StringFilter<"BlogPosts"> | string
    date?: DateTimeNullableFilter<"BlogPosts"> | Date | string | null
    excerpt?: StringNullableFilter<"BlogPosts"> | string | null
    deleted?: BoolFilter<"BlogPosts"> | boolean
    createdAt?: DateTimeFilter<"BlogPosts"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPosts"> | Date | string
    publishedAt?: DateTimeNullableFilter<"BlogPosts"> | Date | string | null
    Comments?: CommentsListRelationFilter
  }

  export type BlogPostsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    stage?: SortOrder
    coverImage?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    date?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    Comments?: CommentsOrderByRelationAggregateInput
  }

  export type BlogPostsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogPostsWhereInput | BlogPostsWhereInput[]
    OR?: BlogPostsWhereInput[]
    NOT?: BlogPostsWhereInput | BlogPostsWhereInput[]
    title?: StringFilter<"BlogPosts"> | string
    slug?: StringFilter<"BlogPosts"> | string
    stage?: EnumStageFilter<"BlogPosts"> | $Enums.Stage
    coverImage?: StringFilter<"BlogPosts"> | string
    content?: StringFilter<"BlogPosts"> | string
    categoryId?: StringFilter<"BlogPosts"> | string
    date?: DateTimeNullableFilter<"BlogPosts"> | Date | string | null
    excerpt?: StringNullableFilter<"BlogPosts"> | string | null
    deleted?: BoolFilter<"BlogPosts"> | boolean
    createdAt?: DateTimeFilter<"BlogPosts"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPosts"> | Date | string
    publishedAt?: DateTimeNullableFilter<"BlogPosts"> | Date | string | null
    Comments?: CommentsListRelationFilter
  }, "id">

  export type BlogPostsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    stage?: SortOrder
    coverImage?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    date?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    _count?: BlogPostsCountOrderByAggregateInput
    _max?: BlogPostsMaxOrderByAggregateInput
    _min?: BlogPostsMinOrderByAggregateInput
  }

  export type BlogPostsScalarWhereWithAggregatesInput = {
    AND?: BlogPostsScalarWhereWithAggregatesInput | BlogPostsScalarWhereWithAggregatesInput[]
    OR?: BlogPostsScalarWhereWithAggregatesInput[]
    NOT?: BlogPostsScalarWhereWithAggregatesInput | BlogPostsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPosts"> | string
    title?: StringWithAggregatesFilter<"BlogPosts"> | string
    slug?: StringWithAggregatesFilter<"BlogPosts"> | string
    stage?: EnumStageWithAggregatesFilter<"BlogPosts"> | $Enums.Stage
    coverImage?: StringWithAggregatesFilter<"BlogPosts"> | string
    content?: StringWithAggregatesFilter<"BlogPosts"> | string
    categoryId?: StringWithAggregatesFilter<"BlogPosts"> | string
    date?: DateTimeNullableWithAggregatesFilter<"BlogPosts"> | Date | string | null
    excerpt?: StringNullableWithAggregatesFilter<"BlogPosts"> | string | null
    deleted?: BoolWithAggregatesFilter<"BlogPosts"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BlogPosts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPosts"> | Date | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"BlogPosts"> | Date | string | null
  }

  export type PlansWhereInput = {
    AND?: PlansWhereInput | PlansWhereInput[]
    OR?: PlansWhereInput[]
    NOT?: PlansWhereInput | PlansWhereInput[]
    id?: StringFilter<"Plans"> | string
    title?: StringFilter<"Plans"> | string
    slug?: StringNullableFilter<"Plans"> | string | null
    Subscription?: SubscriptionsListRelationFilter
  }

  export type PlansOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrderInput | SortOrder
    Subscription?: SubscriptionsOrderByRelationAggregateInput
  }

  export type PlansWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlansWhereInput | PlansWhereInput[]
    OR?: PlansWhereInput[]
    NOT?: PlansWhereInput | PlansWhereInput[]
    title?: StringFilter<"Plans"> | string
    slug?: StringNullableFilter<"Plans"> | string | null
    Subscription?: SubscriptionsListRelationFilter
  }, "id">

  export type PlansOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrderInput | SortOrder
    _count?: PlansCountOrderByAggregateInput
    _max?: PlansMaxOrderByAggregateInput
    _min?: PlansMinOrderByAggregateInput
  }

  export type PlansScalarWhereWithAggregatesInput = {
    AND?: PlansScalarWhereWithAggregatesInput | PlansScalarWhereWithAggregatesInput[]
    OR?: PlansScalarWhereWithAggregatesInput[]
    NOT?: PlansScalarWhereWithAggregatesInput | PlansScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plans"> | string
    title?: StringWithAggregatesFilter<"Plans"> | string
    slug?: StringNullableWithAggregatesFilter<"Plans"> | string | null
  }

  export type SubscriptionsWhereInput = {
    AND?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    OR?: SubscriptionsWhereInput[]
    NOT?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    id?: StringFilter<"Subscriptions"> | string
    planId?: StringFilter<"Subscriptions"> | string
    usersId?: StringFilter<"Subscriptions"> | string
    isActive?: BoolFilter<"Subscriptions"> | boolean
    plan?: XOR<PlansRelationFilter, PlansWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type SubscriptionsOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    usersId?: SortOrder
    isActive?: SortOrder
    plan?: PlansOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type SubscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    OR?: SubscriptionsWhereInput[]
    NOT?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    planId?: StringFilter<"Subscriptions"> | string
    usersId?: StringFilter<"Subscriptions"> | string
    isActive?: BoolFilter<"Subscriptions"> | boolean
    plan?: XOR<PlansRelationFilter, PlansWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id">

  export type SubscriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    usersId?: SortOrder
    isActive?: SortOrder
    _count?: SubscriptionsCountOrderByAggregateInput
    _max?: SubscriptionsMaxOrderByAggregateInput
    _min?: SubscriptionsMinOrderByAggregateInput
  }

  export type SubscriptionsScalarWhereWithAggregatesInput = {
    AND?: SubscriptionsScalarWhereWithAggregatesInput | SubscriptionsScalarWhereWithAggregatesInput[]
    OR?: SubscriptionsScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionsScalarWhereWithAggregatesInput | SubscriptionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscriptions"> | string
    planId?: StringWithAggregatesFilter<"Subscriptions"> | string
    usersId?: StringWithAggregatesFilter<"Subscriptions"> | string
    isActive?: BoolWithAggregatesFilter<"Subscriptions"> | boolean
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    blogPostsId?: StringFilter<"Comments"> | string
    userId?: StringFilter<"Comments"> | string
    parentId?: IntNullableFilter<"Comments"> | number | null
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
    blogPost?: XOR<BlogPostsRelationFilter, BlogPostsWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    parent?: XOR<CommentsNullableRelationFilter, CommentsWhereInput> | null
    Children?: CommentsListRelationFilter
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    blogPostsId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPost?: BlogPostsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    parent?: CommentsOrderByWithRelationInput
    Children?: CommentsOrderByRelationAggregateInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    content?: StringFilter<"Comments"> | string
    blogPostsId?: StringFilter<"Comments"> | string
    userId?: StringFilter<"Comments"> | string
    parentId?: IntNullableFilter<"Comments"> | number | null
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
    blogPost?: XOR<BlogPostsRelationFilter, BlogPostsWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    parent?: XOR<CommentsNullableRelationFilter, CommentsWhereInput> | null
    Children?: CommentsListRelationFilter
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    blogPostsId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comments"> | number
    content?: StringWithAggregatesFilter<"Comments"> | string
    blogPostsId?: StringWithAggregatesFilter<"Comments"> | string
    userId?: StringWithAggregatesFilter<"Comments"> | string
    parentId?: IntNullableWithAggregatesFilter<"Comments"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    externalId?: StringNullableFilter<"Users"> | string | null
    email?: StringFilter<"Users"> | string
    first_name?: StringFilter<"Users"> | string
    last_name?: StringNullableFilter<"Users"> | string | null
    username?: StringFilter<"Users"> | string
    profile_image_url?: StringFilter<"Users"> | string
    deleted?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Comments?: CommentsListRelationFilter
    Subscription?: SubscriptionsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    username?: SortOrder
    profile_image_url?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Comments?: CommentsOrderByRelationAggregateInput
    Subscription?: SubscriptionsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    externalId?: StringNullableFilter<"Users"> | string | null
    email?: StringFilter<"Users"> | string
    first_name?: StringFilter<"Users"> | string
    last_name?: StringNullableFilter<"Users"> | string | null
    username?: StringFilter<"Users"> | string
    profile_image_url?: StringFilter<"Users"> | string
    deleted?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Comments?: CommentsListRelationFilter
    Subscription?: SubscriptionsListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    username?: SortOrder
    profile_image_url?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    externalId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringWithAggregatesFilter<"Users"> | string
    first_name?: StringWithAggregatesFilter<"Users"> | string
    last_name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    username?: StringWithAggregatesFilter<"Users"> | string
    profile_image_url?: StringWithAggregatesFilter<"Users"> | string
    deleted?: BoolWithAggregatesFilter<"Users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type BlogPostsCreateInput = {
    id?: string
    title: string
    slug: string
    stage: $Enums.Stage
    coverImage: string
    content: string
    categoryId: string
    date?: Date | string | null
    excerpt?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostsUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    stage: $Enums.Stage
    coverImage: string
    content: string
    categoryId: string
    date?: Date | string | null
    excerpt?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | $Enums.Stage
    coverImage?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | $Enums.Stage
    coverImage?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostsCreateManyInput = {
    id?: string
    title: string
    slug: string
    stage: $Enums.Stage
    coverImage: string
    content: string
    categoryId: string
    date?: Date | string | null
    excerpt?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type BlogPostsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | $Enums.Stage
    coverImage?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogPostsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | $Enums.Stage
    coverImage?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlansCreateInput = {
    id?: string
    title: string
    slug?: string | null
    Subscription?: SubscriptionsCreateNestedManyWithoutPlanInput
  }

  export type PlansUncheckedCreateInput = {
    id?: string
    title: string
    slug?: string | null
    Subscription?: SubscriptionsUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlansUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    Subscription?: SubscriptionsUpdateManyWithoutPlanNestedInput
  }

  export type PlansUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    Subscription?: SubscriptionsUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlansCreateManyInput = {
    id?: string
    title: string
    slug?: string | null
  }

  export type PlansUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlansUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionsCreateInput = {
    id?: string
    isActive?: boolean
    plan: PlansCreateNestedOneWithoutSubscriptionInput
    user: UsersCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionsUncheckedCreateInput = {
    id?: string
    planId: string
    usersId: string
    isActive?: boolean
  }

  export type SubscriptionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: PlansUpdateOneRequiredWithoutSubscriptionNestedInput
    user?: UsersUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    usersId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionsCreateManyInput = {
    id?: string
    planId: string
    usersId: string
    isActive?: boolean
  }

  export type SubscriptionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    usersId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentsCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost: BlogPostsCreateNestedOneWithoutCommentsInput
    user: UsersCreateNestedOneWithoutCommentsInput
    parent?: CommentsCreateNestedOneWithoutChildrenInput
    Children?: CommentsCreateNestedManyWithoutParentInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: number
    content: string
    blogPostsId: string
    userId: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Children?: CommentsUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostsUpdateOneRequiredWithoutCommentsNestedInput
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentsUpdateOneWithoutChildrenNestedInput
    Children?: CommentsUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    blogPostsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Children?: CommentsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentsCreateManyInput = {
    id?: number
    content: string
    blogPostsId: string
    userId: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    blogPostsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    externalId?: string | null
    email: string
    first_name: string
    last_name?: string | null
    username: string
    profile_image_url: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    externalId?: string | null
    email: string
    first_name: string
    last_name?: string | null
    username: string
    profile_image_url: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    externalId?: string | null
    email: string
    first_name: string
    last_name?: string | null
    username: string
    profile_image_url: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumStageFilter<$PrismaModel = never> = {
    equals?: $Enums.Stage | EnumStageFieldRefInput<$PrismaModel>
    in?: $Enums.Stage[]
    notIn?: $Enums.Stage[]
    not?: NestedEnumStageFilter<$PrismaModel> | $Enums.Stage
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    stage?: SortOrder
    coverImage?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    date?: SortOrder
    excerpt?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type BlogPostsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    stage?: SortOrder
    coverImage?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    date?: SortOrder
    excerpt?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type BlogPostsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    stage?: SortOrder
    coverImage?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    date?: SortOrder
    excerpt?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Stage | EnumStageFieldRefInput<$PrismaModel>
    in?: $Enums.Stage[]
    notIn?: $Enums.Stage[]
    not?: NestedEnumStageWithAggregatesFilter<$PrismaModel> | $Enums.Stage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStageFilter<$PrismaModel>
    _max?: NestedEnumStageFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type SubscriptionsListRelationFilter = {
    every?: SubscriptionsWhereInput
    some?: SubscriptionsWhereInput
    none?: SubscriptionsWhereInput
  }

  export type SubscriptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlansCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
  }

  export type PlansMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
  }

  export type PlansMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
  }

  export type PlansRelationFilter = {
    is?: PlansWhereInput
    isNot?: PlansWhereInput
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type SubscriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    usersId?: SortOrder
    isActive?: SortOrder
  }

  export type SubscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    usersId?: SortOrder
    isActive?: SortOrder
  }

  export type SubscriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    usersId?: SortOrder
    isActive?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BlogPostsRelationFilter = {
    is?: BlogPostsWhereInput
    isNot?: BlogPostsWhereInput
  }

  export type CommentsNullableRelationFilter = {
    is?: CommentsWhereInput | null
    isNot?: CommentsWhereInput | null
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    blogPostsId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    blogPostsId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    blogPostsId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    profile_image_url?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    profile_image_url?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    profile_image_url?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<CommentsCreateWithoutBlogPostInput, CommentsUncheckedCreateWithoutBlogPostInput> | CommentsCreateWithoutBlogPostInput[] | CommentsUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutBlogPostInput | CommentsCreateOrConnectWithoutBlogPostInput[]
    createMany?: CommentsCreateManyBlogPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<CommentsCreateWithoutBlogPostInput, CommentsUncheckedCreateWithoutBlogPostInput> | CommentsCreateWithoutBlogPostInput[] | CommentsUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutBlogPostInput | CommentsCreateOrConnectWithoutBlogPostInput[]
    createMany?: CommentsCreateManyBlogPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStageFieldUpdateOperationsInput = {
    set?: $Enums.Stage
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommentsUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<CommentsCreateWithoutBlogPostInput, CommentsUncheckedCreateWithoutBlogPostInput> | CommentsCreateWithoutBlogPostInput[] | CommentsUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutBlogPostInput | CommentsCreateOrConnectWithoutBlogPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutBlogPostInput | CommentsUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: CommentsCreateManyBlogPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutBlogPostInput | CommentsUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutBlogPostInput | CommentsUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<CommentsCreateWithoutBlogPostInput, CommentsUncheckedCreateWithoutBlogPostInput> | CommentsCreateWithoutBlogPostInput[] | CommentsUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutBlogPostInput | CommentsCreateOrConnectWithoutBlogPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutBlogPostInput | CommentsUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: CommentsCreateManyBlogPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutBlogPostInput | CommentsUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutBlogPostInput | CommentsUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SubscriptionsCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type SubscriptionsUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type SubscriptionsUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutPlanInput | SubscriptionsUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutPlanInput | SubscriptionsUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutPlanInput | SubscriptionsUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
  }

  export type SubscriptionsUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutPlanInput | SubscriptionsUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutPlanInput | SubscriptionsUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutPlanInput | SubscriptionsUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
  }

  export type PlansCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<PlansCreateWithoutSubscriptionInput, PlansUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: PlansCreateOrConnectWithoutSubscriptionInput
    connect?: PlansWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UsersCreateWithoutSubscriptionInput, UsersUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSubscriptionInput
    connect?: UsersWhereUniqueInput
  }

  export type PlansUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<PlansCreateWithoutSubscriptionInput, PlansUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: PlansCreateOrConnectWithoutSubscriptionInput
    upsert?: PlansUpsertWithoutSubscriptionInput
    connect?: PlansWhereUniqueInput
    update?: XOR<XOR<PlansUpdateToOneWithWhereWithoutSubscriptionInput, PlansUpdateWithoutSubscriptionInput>, PlansUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UsersUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UsersCreateWithoutSubscriptionInput, UsersUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSubscriptionInput
    upsert?: UsersUpsertWithoutSubscriptionInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSubscriptionInput, UsersUpdateWithoutSubscriptionInput>, UsersUncheckedUpdateWithoutSubscriptionInput>
  }

  export type BlogPostsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BlogPostsCreateWithoutCommentsInput, BlogPostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogPostsCreateOrConnectWithoutCommentsInput
    connect?: BlogPostsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type CommentsCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CommentsCreateWithoutChildrenInput, CommentsUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutChildrenInput
    connect?: CommentsWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type BlogPostsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BlogPostsCreateWithoutCommentsInput, BlogPostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogPostsCreateOrConnectWithoutCommentsInput
    upsert?: BlogPostsUpsertWithoutCommentsInput
    connect?: BlogPostsWhereUniqueInput
    update?: XOR<XOR<BlogPostsUpdateToOneWithWhereWithoutCommentsInput, BlogPostsUpdateWithoutCommentsInput>, BlogPostsUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentsInput, UsersUpdateWithoutCommentsInput>, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentsUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CommentsCreateWithoutChildrenInput, CommentsUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutChildrenInput
    upsert?: CommentsUpsertWithoutChildrenInput
    disconnect?: CommentsWhereInput | boolean
    delete?: CommentsWhereInput | boolean
    connect?: CommentsWhereUniqueInput
    update?: XOR<XOR<CommentsUpdateToOneWithWhereWithoutChildrenInput, CommentsUpdateWithoutChildrenInput>, CommentsUncheckedUpdateWithoutChildrenInput>
  }

  export type CommentsUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentInput | CommentsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentInput | CommentsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentInput | CommentsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentsUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentInput | CommentsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentInput | CommentsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentInput | CommentsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SubscriptionsCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput> | SubscriptionsCreateWithoutUserInput[] | SubscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutUserInput | SubscriptionsCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionsCreateManyUserInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SubscriptionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput> | SubscriptionsCreateWithoutUserInput[] | SubscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutUserInput | SubscriptionsCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionsCreateManyUserInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type CommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SubscriptionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput> | SubscriptionsCreateWithoutUserInput[] | SubscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutUserInput | SubscriptionsCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutUserInput | SubscriptionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionsCreateManyUserInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutUserInput | SubscriptionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutUserInput | SubscriptionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SubscriptionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput> | SubscriptionsCreateWithoutUserInput[] | SubscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutUserInput | SubscriptionsCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutUserInput | SubscriptionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionsCreateManyUserInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutUserInput | SubscriptionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutUserInput | SubscriptionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumStageFilter<$PrismaModel = never> = {
    equals?: $Enums.Stage | EnumStageFieldRefInput<$PrismaModel>
    in?: $Enums.Stage[]
    notIn?: $Enums.Stage[]
    not?: NestedEnumStageFilter<$PrismaModel> | $Enums.Stage
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Stage | EnumStageFieldRefInput<$PrismaModel>
    in?: $Enums.Stage[]
    notIn?: $Enums.Stage[]
    not?: NestedEnumStageWithAggregatesFilter<$PrismaModel> | $Enums.Stage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStageFilter<$PrismaModel>
    _max?: NestedEnumStageFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CommentsCreateWithoutBlogPostInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutCommentsInput
    parent?: CommentsCreateNestedOneWithoutChildrenInput
    Children?: CommentsCreateNestedManyWithoutParentInput
  }

  export type CommentsUncheckedCreateWithoutBlogPostInput = {
    id?: number
    content: string
    userId: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Children?: CommentsUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentsCreateOrConnectWithoutBlogPostInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutBlogPostInput, CommentsUncheckedCreateWithoutBlogPostInput>
  }

  export type CommentsCreateManyBlogPostInputEnvelope = {
    data: CommentsCreateManyBlogPostInput | CommentsCreateManyBlogPostInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutBlogPostInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutBlogPostInput, CommentsUncheckedUpdateWithoutBlogPostInput>
    create: XOR<CommentsCreateWithoutBlogPostInput, CommentsUncheckedCreateWithoutBlogPostInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutBlogPostInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutBlogPostInput, CommentsUncheckedUpdateWithoutBlogPostInput>
  }

  export type CommentsUpdateManyWithWhereWithoutBlogPostInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutBlogPostInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    blogPostsId?: StringFilter<"Comments"> | string
    userId?: StringFilter<"Comments"> | string
    parentId?: IntNullableFilter<"Comments"> | number | null
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
  }

  export type SubscriptionsCreateWithoutPlanInput = {
    id?: string
    isActive?: boolean
    user: UsersCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionsUncheckedCreateWithoutPlanInput = {
    id?: string
    usersId: string
    isActive?: boolean
  }

  export type SubscriptionsCreateOrConnectWithoutPlanInput = {
    where: SubscriptionsWhereUniqueInput
    create: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionsCreateManyPlanInputEnvelope = {
    data: SubscriptionsCreateManyPlanInput | SubscriptionsCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionsUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionsWhereUniqueInput
    update: XOR<SubscriptionsUpdateWithoutPlanInput, SubscriptionsUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionsUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionsWhereUniqueInput
    data: XOR<SubscriptionsUpdateWithoutPlanInput, SubscriptionsUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionsUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionsScalarWhereInput
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyWithoutPlanInput>
  }

  export type SubscriptionsScalarWhereInput = {
    AND?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
    OR?: SubscriptionsScalarWhereInput[]
    NOT?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
    id?: StringFilter<"Subscriptions"> | string
    planId?: StringFilter<"Subscriptions"> | string
    usersId?: StringFilter<"Subscriptions"> | string
    isActive?: BoolFilter<"Subscriptions"> | boolean
  }

  export type PlansCreateWithoutSubscriptionInput = {
    id?: string
    title: string
    slug?: string | null
  }

  export type PlansUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    title: string
    slug?: string | null
  }

  export type PlansCreateOrConnectWithoutSubscriptionInput = {
    where: PlansWhereUniqueInput
    create: XOR<PlansCreateWithoutSubscriptionInput, PlansUncheckedCreateWithoutSubscriptionInput>
  }

  export type UsersCreateWithoutSubscriptionInput = {
    id?: string
    externalId?: string | null
    email: string
    first_name: string
    last_name?: string | null
    username: string
    profile_image_url: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    externalId?: string | null
    email: string
    first_name: string
    last_name?: string | null
    username: string
    profile_image_url: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSubscriptionInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSubscriptionInput, UsersUncheckedCreateWithoutSubscriptionInput>
  }

  export type PlansUpsertWithoutSubscriptionInput = {
    update: XOR<PlansUpdateWithoutSubscriptionInput, PlansUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PlansCreateWithoutSubscriptionInput, PlansUncheckedCreateWithoutSubscriptionInput>
    where?: PlansWhereInput
  }

  export type PlansUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: PlansWhereInput
    data: XOR<PlansUpdateWithoutSubscriptionInput, PlansUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PlansUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlansUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUpsertWithoutSubscriptionInput = {
    update: XOR<UsersUpdateWithoutSubscriptionInput, UsersUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UsersCreateWithoutSubscriptionInput, UsersUncheckedCreateWithoutSubscriptionInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSubscriptionInput, UsersUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UsersUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogPostsCreateWithoutCommentsInput = {
    id?: string
    title: string
    slug: string
    stage: $Enums.Stage
    coverImage: string
    content: string
    categoryId: string
    date?: Date | string | null
    excerpt?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type BlogPostsUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    slug: string
    stage: $Enums.Stage
    coverImage: string
    content: string
    categoryId: string
    date?: Date | string | null
    excerpt?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type BlogPostsCreateOrConnectWithoutCommentsInput = {
    where: BlogPostsWhereUniqueInput
    create: XOR<BlogPostsCreateWithoutCommentsInput, BlogPostsUncheckedCreateWithoutCommentsInput>
  }

  export type UsersCreateWithoutCommentsInput = {
    id?: string
    externalId?: string | null
    email: string
    first_name: string
    last_name?: string | null
    username: string
    profile_image_url: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Subscription?: SubscriptionsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    id?: string
    externalId?: string | null
    email: string
    first_name: string
    last_name?: string | null
    username: string
    profile_image_url: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Subscription?: SubscriptionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type CommentsCreateWithoutChildrenInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost: BlogPostsCreateNestedOneWithoutCommentsInput
    user: UsersCreateNestedOneWithoutCommentsInput
    parent?: CommentsCreateNestedOneWithoutChildrenInput
  }

  export type CommentsUncheckedCreateWithoutChildrenInput = {
    id?: number
    content: string
    blogPostsId: string
    userId: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutChildrenInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutChildrenInput, CommentsUncheckedCreateWithoutChildrenInput>
  }

  export type CommentsCreateWithoutParentInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost: BlogPostsCreateNestedOneWithoutCommentsInput
    user: UsersCreateNestedOneWithoutCommentsInput
    Children?: CommentsCreateNestedManyWithoutParentInput
  }

  export type CommentsUncheckedCreateWithoutParentInput = {
    id?: number
    content: string
    blogPostsId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Children?: CommentsUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentsCreateOrConnectWithoutParentInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput>
  }

  export type CommentsCreateManyParentInputEnvelope = {
    data: CommentsCreateManyParentInput | CommentsCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostsUpsertWithoutCommentsInput = {
    update: XOR<BlogPostsUpdateWithoutCommentsInput, BlogPostsUncheckedUpdateWithoutCommentsInput>
    create: XOR<BlogPostsCreateWithoutCommentsInput, BlogPostsUncheckedCreateWithoutCommentsInput>
    where?: BlogPostsWhereInput
  }

  export type BlogPostsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BlogPostsWhereInput
    data: XOR<BlogPostsUpdateWithoutCommentsInput, BlogPostsUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogPostsUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | $Enums.Stage
    coverImage?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogPostsUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | $Enums.Stage
    coverImage?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: SubscriptionsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: SubscriptionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentsUpsertWithoutChildrenInput = {
    update: XOR<CommentsUpdateWithoutChildrenInput, CommentsUncheckedUpdateWithoutChildrenInput>
    create: XOR<CommentsCreateWithoutChildrenInput, CommentsUncheckedCreateWithoutChildrenInput>
    where?: CommentsWhereInput
  }

  export type CommentsUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CommentsWhereInput
    data: XOR<CommentsUpdateWithoutChildrenInput, CommentsUncheckedUpdateWithoutChildrenInput>
  }

  export type CommentsUpdateWithoutChildrenInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostsUpdateOneRequiredWithoutCommentsNestedInput
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentsUpdateOneWithoutChildrenNestedInput
  }

  export type CommentsUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    blogPostsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutParentInput, CommentsUncheckedUpdateWithoutParentInput>
    create: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutParentInput, CommentsUncheckedUpdateWithoutParentInput>
  }

  export type CommentsUpdateManyWithWhereWithoutParentInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutParentInput>
  }

  export type CommentsCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost: BlogPostsCreateNestedOneWithoutCommentsInput
    parent?: CommentsCreateNestedOneWithoutChildrenInput
    Children?: CommentsCreateNestedManyWithoutParentInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    blogPostsId: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Children?: CommentsUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: CommentsCreateManyUserInput | CommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionsCreateWithoutUserInput = {
    id?: string
    isActive?: boolean
    plan: PlansCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionsUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    isActive?: boolean
  }

  export type SubscriptionsCreateOrConnectWithoutUserInput = {
    where: SubscriptionsWhereUniqueInput
    create: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionsCreateManyUserInputEnvelope = {
    data: SubscriptionsCreateManyUserInput | SubscriptionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionsUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionsWhereUniqueInput
    update: XOR<SubscriptionsUpdateWithoutUserInput, SubscriptionsUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionsCreateWithoutUserInput, SubscriptionsUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionsUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionsWhereUniqueInput
    data: XOR<SubscriptionsUpdateWithoutUserInput, SubscriptionsUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionsUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionsScalarWhereInput
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsCreateManyBlogPostInput = {
    id?: number
    content: string
    userId: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateWithoutBlogPostInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentsUpdateOneWithoutChildrenNestedInput
    Children?: CommentsUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutBlogPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Children?: CommentsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutBlogPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsCreateManyPlanInput = {
    id?: string
    usersId: string
    isActive?: boolean
  }

  export type SubscriptionsUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    usersId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionsUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    usersId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentsCreateManyParentInput = {
    id?: number
    content: string
    blogPostsId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateWithoutParentInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostsUpdateOneRequiredWithoutCommentsNestedInput
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    Children?: CommentsUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    blogPostsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Children?: CommentsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    blogPostsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyUserInput = {
    id?: number
    content: string
    blogPostsId: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionsCreateManyUserInput = {
    id?: string
    planId: string
    isActive?: boolean
  }

  export type CommentsUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostsUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentsUpdateOneWithoutChildrenNestedInput
    Children?: CommentsUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    blogPostsId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Children?: CommentsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    blogPostsId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: PlansUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BlogPostsCountOutputTypeDefaultArgs instead
     */
    export type BlogPostsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogPostsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlansCountOutputTypeDefaultArgs instead
     */
    export type PlansCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlansCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentsCountOutputTypeDefaultArgs instead
     */
    export type CommentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogPostsDefaultArgs instead
     */
    export type BlogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogPostsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlansDefaultArgs instead
     */
    export type PlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlansDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionsDefaultArgs instead
     */
    export type SubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentsDefaultArgs instead
     */
    export type CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>

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