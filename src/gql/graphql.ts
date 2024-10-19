import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type BillOfMaterialsBomIdFilters = {
  OR?: InputMaybe<Array<BillOfMaterialsBomIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsBomIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsCreatedAtFilters = {
  OR?: InputMaybe<Array<BillOfMaterialsCreatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsCreatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsFilters = {
  OR?: InputMaybe<Array<BillOfMaterialsFiltersOr>>
  bomId?: InputMaybe<BillOfMaterialsBomIdFilters>
  createdAt?: InputMaybe<BillOfMaterialsCreatedAtFilters>
  materialId?: InputMaybe<BillOfMaterialsMaterialIdFilters>
  productId?: InputMaybe<BillOfMaterialsProductIdFilters>
  quantityRequired?: InputMaybe<BillOfMaterialsQuantityRequiredFilters>
  unitOfMeasure?: InputMaybe<BillOfMaterialsUnitOfMeasureFilters>
  updatedAt?: InputMaybe<BillOfMaterialsUpdatedAtFilters>
}

export type BillOfMaterialsFiltersOr = {
  bomId?: InputMaybe<BillOfMaterialsBomIdFilters>
  createdAt?: InputMaybe<BillOfMaterialsCreatedAtFilters>
  materialId?: InputMaybe<BillOfMaterialsMaterialIdFilters>
  productId?: InputMaybe<BillOfMaterialsProductIdFilters>
  quantityRequired?: InputMaybe<BillOfMaterialsQuantityRequiredFilters>
  unitOfMeasure?: InputMaybe<BillOfMaterialsUnitOfMeasureFilters>
  updatedAt?: InputMaybe<BillOfMaterialsUpdatedAtFilters>
}

export type BillOfMaterialsInsertInput = {
  bomId?: InputMaybe<Scalars['Int']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  materialId?: InputMaybe<Scalars['Int']['input']>
  productId?: InputMaybe<Scalars['Int']['input']>
  quantityRequired: Scalars['String']['input']
  unitOfMeasure: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsMaterialIdFilters = {
  OR?: InputMaybe<Array<BillOfMaterialsMaterialIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsMaterialIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsOrderBy = {
  bomId?: InputMaybe<InnerOrder>
  createdAt?: InputMaybe<InnerOrder>
  materialId?: InputMaybe<InnerOrder>
  productId?: InputMaybe<InnerOrder>
  quantityRequired?: InputMaybe<InnerOrder>
  unitOfMeasure?: InputMaybe<InnerOrder>
  updatedAt?: InputMaybe<InnerOrder>
}

export type BillOfMaterialsProductIdFilters = {
  OR?: InputMaybe<Array<BillOfMaterialsProductIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsProductIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsQuantityRequiredFilters = {
  OR?: InputMaybe<Array<BillOfMaterialsQuantityRequiredfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsQuantityRequiredfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsUnitOfMeasureFilters = {
  OR?: InputMaybe<Array<BillOfMaterialsUnitOfMeasurefiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsUnitOfMeasurefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsUpdateInput = {
  bomId?: InputMaybe<Scalars['Int']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  materialId?: InputMaybe<Scalars['Int']['input']>
  productId?: InputMaybe<Scalars['Int']['input']>
  quantityRequired?: InputMaybe<Scalars['String']['input']>
  unitOfMeasure?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsUpdatedAtFilters = {
  OR?: InputMaybe<Array<BillOfMaterialsUpdatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type BillOfMaterialsUpdatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type InnerOrder = {
  direction: OrderDirection
  /** Priority of current field */
  priority: Scalars['Int']['input']
}

export type MaterialConsumptionConsumedAtFilters = {
  OR?: InputMaybe<Array<MaterialConsumptionConsumedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionConsumedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionConsumptionIdFilters = {
  OR?: InputMaybe<Array<MaterialConsumptionConsumptionIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionConsumptionIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionCreatedAtFilters = {
  OR?: InputMaybe<Array<MaterialConsumptionCreatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionCreatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionFilters = {
  OR?: InputMaybe<Array<MaterialConsumptionFiltersOr>>
  consumedAt?: InputMaybe<MaterialConsumptionConsumedAtFilters>
  consumptionId?: InputMaybe<MaterialConsumptionConsumptionIdFilters>
  createdAt?: InputMaybe<MaterialConsumptionCreatedAtFilters>
  materialId?: InputMaybe<MaterialConsumptionMaterialIdFilters>
  orderId?: InputMaybe<MaterialConsumptionOrderIdFilters>
  quantityConsumed?: InputMaybe<MaterialConsumptionQuantityConsumedFilters>
  updatedAt?: InputMaybe<MaterialConsumptionUpdatedAtFilters>
}

export type MaterialConsumptionFiltersOr = {
  consumedAt?: InputMaybe<MaterialConsumptionConsumedAtFilters>
  consumptionId?: InputMaybe<MaterialConsumptionConsumptionIdFilters>
  createdAt?: InputMaybe<MaterialConsumptionCreatedAtFilters>
  materialId?: InputMaybe<MaterialConsumptionMaterialIdFilters>
  orderId?: InputMaybe<MaterialConsumptionOrderIdFilters>
  quantityConsumed?: InputMaybe<MaterialConsumptionQuantityConsumedFilters>
  updatedAt?: InputMaybe<MaterialConsumptionUpdatedAtFilters>
}

export type MaterialConsumptionInsertInput = {
  consumedAt?: InputMaybe<Scalars['String']['input']>
  consumptionId?: InputMaybe<Scalars['Int']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  materialId?: InputMaybe<Scalars['Int']['input']>
  orderId?: InputMaybe<Scalars['Int']['input']>
  quantityConsumed: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionMaterialIdFilters = {
  OR?: InputMaybe<Array<MaterialConsumptionMaterialIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionMaterialIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionOrderBy = {
  consumedAt?: InputMaybe<InnerOrder>
  consumptionId?: InputMaybe<InnerOrder>
  createdAt?: InputMaybe<InnerOrder>
  materialId?: InputMaybe<InnerOrder>
  orderId?: InputMaybe<InnerOrder>
  quantityConsumed?: InputMaybe<InnerOrder>
  updatedAt?: InputMaybe<InnerOrder>
}

export type MaterialConsumptionOrderIdFilters = {
  OR?: InputMaybe<Array<MaterialConsumptionOrderIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionOrderIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionQuantityConsumedFilters = {
  OR?: InputMaybe<Array<MaterialConsumptionQuantityConsumedfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionQuantityConsumedfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionUpdateInput = {
  consumedAt?: InputMaybe<Scalars['String']['input']>
  consumptionId?: InputMaybe<Scalars['Int']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  materialId?: InputMaybe<Scalars['Int']['input']>
  orderId?: InputMaybe<Scalars['Int']['input']>
  quantityConsumed?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionUpdatedAtFilters = {
  OR?: InputMaybe<Array<MaterialConsumptionUpdatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MaterialConsumptionUpdatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

/** Order by direction */
export enum OrderDirection {
  /** Ascending order */
  Asc = 'asc',
  /** Descending order */
  Desc = 'desc',
}

export type ProductionMetricsCreatedAtFilters = {
  OR?: InputMaybe<Array<ProductionMetricsCreatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsCreatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsDefectRateFilters = {
  OR?: InputMaybe<Array<ProductionMetricsDefectRatefiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsDefectRatefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsFilters = {
  OR?: InputMaybe<Array<ProductionMetricsFiltersOr>>
  createdAt?: InputMaybe<ProductionMetricsCreatedAtFilters>
  defectRate?: InputMaybe<ProductionMetricsDefectRateFilters>
  machineUtilization?: InputMaybe<ProductionMetricsMachineUtilizationFilters>
  metricId?: InputMaybe<ProductionMetricsMetricIdFilters>
  orderId?: InputMaybe<ProductionMetricsOrderIdFilters>
  productionRate?: InputMaybe<ProductionMetricsProductionRateFilters>
  recordedAt?: InputMaybe<ProductionMetricsRecordedAtFilters>
  updatedAt?: InputMaybe<ProductionMetricsUpdatedAtFilters>
}

export type ProductionMetricsFiltersOr = {
  createdAt?: InputMaybe<ProductionMetricsCreatedAtFilters>
  defectRate?: InputMaybe<ProductionMetricsDefectRateFilters>
  machineUtilization?: InputMaybe<ProductionMetricsMachineUtilizationFilters>
  metricId?: InputMaybe<ProductionMetricsMetricIdFilters>
  orderId?: InputMaybe<ProductionMetricsOrderIdFilters>
  productionRate?: InputMaybe<ProductionMetricsProductionRateFilters>
  recordedAt?: InputMaybe<ProductionMetricsRecordedAtFilters>
  updatedAt?: InputMaybe<ProductionMetricsUpdatedAtFilters>
}

export type ProductionMetricsInsertInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  defectRate?: InputMaybe<Scalars['String']['input']>
  machineUtilization?: InputMaybe<Scalars['String']['input']>
  metricId?: InputMaybe<Scalars['Int']['input']>
  orderId?: InputMaybe<Scalars['Int']['input']>
  productionRate?: InputMaybe<Scalars['Int']['input']>
  recordedAt?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsMachineUtilizationFilters = {
  OR?: InputMaybe<Array<ProductionMetricsMachineUtilizationfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsMachineUtilizationfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsMetricIdFilters = {
  OR?: InputMaybe<Array<ProductionMetricsMetricIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsMetricIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsOrderBy = {
  createdAt?: InputMaybe<InnerOrder>
  defectRate?: InputMaybe<InnerOrder>
  machineUtilization?: InputMaybe<InnerOrder>
  metricId?: InputMaybe<InnerOrder>
  orderId?: InputMaybe<InnerOrder>
  productionRate?: InputMaybe<InnerOrder>
  recordedAt?: InputMaybe<InnerOrder>
  updatedAt?: InputMaybe<InnerOrder>
}

export type ProductionMetricsOrderIdFilters = {
  OR?: InputMaybe<Array<ProductionMetricsOrderIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsOrderIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsProductionRateFilters = {
  OR?: InputMaybe<Array<ProductionMetricsProductionRatefiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsProductionRatefiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsRecordedAtFilters = {
  OR?: InputMaybe<Array<ProductionMetricsRecordedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsRecordedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  defectRate?: InputMaybe<Scalars['String']['input']>
  machineUtilization?: InputMaybe<Scalars['String']['input']>
  metricId?: InputMaybe<Scalars['Int']['input']>
  orderId?: InputMaybe<Scalars['Int']['input']>
  productionRate?: InputMaybe<Scalars['Int']['input']>
  recordedAt?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsUpdatedAtFilters = {
  OR?: InputMaybe<Array<ProductionMetricsUpdatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionMetricsUpdatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersCreatedAtFilters = {
  OR?: InputMaybe<Array<ProductionOrdersCreatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersCreatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersEndTimeFilters = {
  OR?: InputMaybe<Array<ProductionOrdersEndTimefiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersEndTimefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersFilters = {
  OR?: InputMaybe<Array<ProductionOrdersFiltersOr>>
  createdAt?: InputMaybe<ProductionOrdersCreatedAtFilters>
  endTime?: InputMaybe<ProductionOrdersEndTimeFilters>
  orderId?: InputMaybe<ProductionOrdersOrderIdFilters>
  productId?: InputMaybe<ProductionOrdersProductIdFilters>
  quantityPlanned?: InputMaybe<ProductionOrdersQuantityPlannedFilters>
  quantityProduced?: InputMaybe<ProductionOrdersQuantityProducedFilters>
  startTime?: InputMaybe<ProductionOrdersStartTimeFilters>
  status?: InputMaybe<ProductionOrdersStatusFilters>
  updatedAt?: InputMaybe<ProductionOrdersUpdatedAtFilters>
}

export type ProductionOrdersFiltersOr = {
  createdAt?: InputMaybe<ProductionOrdersCreatedAtFilters>
  endTime?: InputMaybe<ProductionOrdersEndTimeFilters>
  orderId?: InputMaybe<ProductionOrdersOrderIdFilters>
  productId?: InputMaybe<ProductionOrdersProductIdFilters>
  quantityPlanned?: InputMaybe<ProductionOrdersQuantityPlannedFilters>
  quantityProduced?: InputMaybe<ProductionOrdersQuantityProducedFilters>
  startTime?: InputMaybe<ProductionOrdersStartTimeFilters>
  status?: InputMaybe<ProductionOrdersStatusFilters>
  updatedAt?: InputMaybe<ProductionOrdersUpdatedAtFilters>
}

export type ProductionOrdersInsertInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  endTime?: InputMaybe<Scalars['String']['input']>
  orderId?: InputMaybe<Scalars['Int']['input']>
  productId?: InputMaybe<Scalars['Int']['input']>
  quantityPlanned: Scalars['Int']['input']
  quantityProduced?: InputMaybe<Scalars['Int']['input']>
  startTime?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersOrderBy = {
  createdAt?: InputMaybe<InnerOrder>
  endTime?: InputMaybe<InnerOrder>
  orderId?: InputMaybe<InnerOrder>
  productId?: InputMaybe<InnerOrder>
  quantityPlanned?: InputMaybe<InnerOrder>
  quantityProduced?: InputMaybe<InnerOrder>
  startTime?: InputMaybe<InnerOrder>
  status?: InputMaybe<InnerOrder>
  updatedAt?: InputMaybe<InnerOrder>
}

export type ProductionOrdersOrderIdFilters = {
  OR?: InputMaybe<Array<ProductionOrdersOrderIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersOrderIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersProductIdFilters = {
  OR?: InputMaybe<Array<ProductionOrdersProductIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersProductIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersQuantityPlannedFilters = {
  OR?: InputMaybe<Array<ProductionOrdersQuantityPlannedfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersQuantityPlannedfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersQuantityProducedFilters = {
  OR?: InputMaybe<Array<ProductionOrdersQuantityProducedfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersQuantityProducedfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersStartTimeFilters = {
  OR?: InputMaybe<Array<ProductionOrdersStartTimefiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersStartTimefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersStatusFilters = {
  OR?: InputMaybe<Array<ProductionOrdersStatusfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersStatusfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  endTime?: InputMaybe<Scalars['String']['input']>
  orderId?: InputMaybe<Scalars['Int']['input']>
  productId?: InputMaybe<Scalars['Int']['input']>
  quantityPlanned?: InputMaybe<Scalars['Int']['input']>
  quantityProduced?: InputMaybe<Scalars['Int']['input']>
  startTime?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersUpdatedAtFilters = {
  OR?: InputMaybe<Array<ProductionOrdersUpdatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductionOrdersUpdatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductsCreatedAtFilters = {
  OR?: InputMaybe<Array<ProductsCreatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductsCreatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductsDescriptionFilters = {
  OR?: InputMaybe<Array<ProductsDescriptionfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductsDescriptionfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductsFilters = {
  OR?: InputMaybe<Array<ProductsFiltersOr>>
  createdAt?: InputMaybe<ProductsCreatedAtFilters>
  description?: InputMaybe<ProductsDescriptionFilters>
  productId?: InputMaybe<ProductsProductIdFilters>
  productName?: InputMaybe<ProductsProductNameFilters>
  updatedAt?: InputMaybe<ProductsUpdatedAtFilters>
}

export type ProductsFiltersOr = {
  createdAt?: InputMaybe<ProductsCreatedAtFilters>
  description?: InputMaybe<ProductsDescriptionFilters>
  productId?: InputMaybe<ProductsProductIdFilters>
  productName?: InputMaybe<ProductsProductNameFilters>
  updatedAt?: InputMaybe<ProductsUpdatedAtFilters>
}

export type ProductsInsertInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  productId?: InputMaybe<Scalars['Int']['input']>
  productName: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type ProductsOrderBy = {
  createdAt?: InputMaybe<InnerOrder>
  description?: InputMaybe<InnerOrder>
  productId?: InputMaybe<InnerOrder>
  productName?: InputMaybe<InnerOrder>
  updatedAt?: InputMaybe<InnerOrder>
}

export type ProductsProductIdFilters = {
  OR?: InputMaybe<Array<ProductsProductIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductsProductIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductsProductNameFilters = {
  OR?: InputMaybe<Array<ProductsProductNamefiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductsProductNamefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductsUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  productId?: InputMaybe<Scalars['Int']['input']>
  productName?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type ProductsUpdatedAtFilters = {
  OR?: InputMaybe<Array<ProductsUpdatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type ProductsUpdatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsCreatedAtFilters = {
  OR?: InputMaybe<Array<QualityInspectionsCreatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsCreatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsDefectsFoundFilters = {
  OR?: InputMaybe<Array<QualityInspectionsDefectsFoundfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsDefectsFoundfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsFilters = {
  OR?: InputMaybe<Array<QualityInspectionsFiltersOr>>
  createdAt?: InputMaybe<QualityInspectionsCreatedAtFilters>
  defectsFound?: InputMaybe<QualityInspectionsDefectsFoundFilters>
  inspectionDate?: InputMaybe<QualityInspectionsInspectionDateFilters>
  inspectionId?: InputMaybe<QualityInspectionsInspectionIdFilters>
  inspectorName?: InputMaybe<QualityInspectionsInspectorNameFilters>
  notes?: InputMaybe<QualityInspectionsNotesFilters>
  orderId?: InputMaybe<QualityInspectionsOrderIdFilters>
  status?: InputMaybe<QualityInspectionsStatusFilters>
  updatedAt?: InputMaybe<QualityInspectionsUpdatedAtFilters>
}

export type QualityInspectionsFiltersOr = {
  createdAt?: InputMaybe<QualityInspectionsCreatedAtFilters>
  defectsFound?: InputMaybe<QualityInspectionsDefectsFoundFilters>
  inspectionDate?: InputMaybe<QualityInspectionsInspectionDateFilters>
  inspectionId?: InputMaybe<QualityInspectionsInspectionIdFilters>
  inspectorName?: InputMaybe<QualityInspectionsInspectorNameFilters>
  notes?: InputMaybe<QualityInspectionsNotesFilters>
  orderId?: InputMaybe<QualityInspectionsOrderIdFilters>
  status?: InputMaybe<QualityInspectionsStatusFilters>
  updatedAt?: InputMaybe<QualityInspectionsUpdatedAtFilters>
}

export type QualityInspectionsInsertInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  defectsFound?: InputMaybe<Scalars['Int']['input']>
  inspectionDate?: InputMaybe<Scalars['String']['input']>
  inspectionId?: InputMaybe<Scalars['Int']['input']>
  inspectorName?: InputMaybe<Scalars['String']['input']>
  notes?: InputMaybe<Scalars['String']['input']>
  orderId?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsInspectionDateFilters = {
  OR?: InputMaybe<Array<QualityInspectionsInspectionDatefiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsInspectionDatefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsInspectionIdFilters = {
  OR?: InputMaybe<Array<QualityInspectionsInspectionIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsInspectionIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsInspectorNameFilters = {
  OR?: InputMaybe<Array<QualityInspectionsInspectorNamefiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsInspectorNamefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsNotesFilters = {
  OR?: InputMaybe<Array<QualityInspectionsNotesfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsNotesfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsOrderBy = {
  createdAt?: InputMaybe<InnerOrder>
  defectsFound?: InputMaybe<InnerOrder>
  inspectionDate?: InputMaybe<InnerOrder>
  inspectionId?: InputMaybe<InnerOrder>
  inspectorName?: InputMaybe<InnerOrder>
  notes?: InputMaybe<InnerOrder>
  orderId?: InputMaybe<InnerOrder>
  status?: InputMaybe<InnerOrder>
  updatedAt?: InputMaybe<InnerOrder>
}

export type QualityInspectionsOrderIdFilters = {
  OR?: InputMaybe<Array<QualityInspectionsOrderIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsOrderIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsStatusFilters = {
  OR?: InputMaybe<Array<QualityInspectionsStatusfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsStatusfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  defectsFound?: InputMaybe<Scalars['Int']['input']>
  inspectionDate?: InputMaybe<Scalars['String']['input']>
  inspectionId?: InputMaybe<Scalars['Int']['input']>
  inspectorName?: InputMaybe<Scalars['String']['input']>
  notes?: InputMaybe<Scalars['String']['input']>
  orderId?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsUpdatedAtFilters = {
  OR?: InputMaybe<Array<QualityInspectionsUpdatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type QualityInspectionsUpdatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsCreatedAtFilters = {
  OR?: InputMaybe<Array<RawMaterialsCreatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsCreatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsCurrentStockFilters = {
  OR?: InputMaybe<Array<RawMaterialsCurrentStockfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsCurrentStockfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsDescriptionFilters = {
  OR?: InputMaybe<Array<RawMaterialsDescriptionfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsDescriptionfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsFilters = {
  OR?: InputMaybe<Array<RawMaterialsFiltersOr>>
  createdAt?: InputMaybe<RawMaterialsCreatedAtFilters>
  currentStock?: InputMaybe<RawMaterialsCurrentStockFilters>
  description?: InputMaybe<RawMaterialsDescriptionFilters>
  materialId?: InputMaybe<RawMaterialsMaterialIdFilters>
  materialName?: InputMaybe<RawMaterialsMaterialNameFilters>
  minimumStock?: InputMaybe<RawMaterialsMinimumStockFilters>
  unitOfMeasure?: InputMaybe<RawMaterialsUnitOfMeasureFilters>
  updatedAt?: InputMaybe<RawMaterialsUpdatedAtFilters>
}

export type RawMaterialsFiltersOr = {
  createdAt?: InputMaybe<RawMaterialsCreatedAtFilters>
  currentStock?: InputMaybe<RawMaterialsCurrentStockFilters>
  description?: InputMaybe<RawMaterialsDescriptionFilters>
  materialId?: InputMaybe<RawMaterialsMaterialIdFilters>
  materialName?: InputMaybe<RawMaterialsMaterialNameFilters>
  minimumStock?: InputMaybe<RawMaterialsMinimumStockFilters>
  unitOfMeasure?: InputMaybe<RawMaterialsUnitOfMeasureFilters>
  updatedAt?: InputMaybe<RawMaterialsUpdatedAtFilters>
}

export type RawMaterialsInsertInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  currentStock?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  materialId?: InputMaybe<Scalars['Int']['input']>
  materialName: Scalars['String']['input']
  minimumStock?: InputMaybe<Scalars['String']['input']>
  unitOfMeasure: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsMaterialIdFilters = {
  OR?: InputMaybe<Array<RawMaterialsMaterialIdfiltersOr>>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsMaterialIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsMaterialNameFilters = {
  OR?: InputMaybe<Array<RawMaterialsMaterialNamefiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsMaterialNamefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsMinimumStockFilters = {
  OR?: InputMaybe<Array<RawMaterialsMinimumStockfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsMinimumStockfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsOrderBy = {
  createdAt?: InputMaybe<InnerOrder>
  currentStock?: InputMaybe<InnerOrder>
  description?: InputMaybe<InnerOrder>
  materialId?: InputMaybe<InnerOrder>
  materialName?: InputMaybe<InnerOrder>
  minimumStock?: InputMaybe<InnerOrder>
  unitOfMeasure?: InputMaybe<InnerOrder>
  updatedAt?: InputMaybe<InnerOrder>
}

export type RawMaterialsUnitOfMeasureFilters = {
  OR?: InputMaybe<Array<RawMaterialsUnitOfMeasurefiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsUnitOfMeasurefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  currentStock?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  materialId?: InputMaybe<Scalars['Int']['input']>
  materialName?: InputMaybe<Scalars['String']['input']>
  minimumStock?: InputMaybe<Scalars['String']['input']>
  unitOfMeasure?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsUpdatedAtFilters = {
  OR?: InputMaybe<Array<RawMaterialsUpdatedAtfiltersOr>>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type RawMaterialsUpdatedAtfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  notIlike?: InputMaybe<Scalars['String']['input']>
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type MutationMutationVariables = Exact<{
  values: RawMaterialsInsertInput
}>

export type MutationMutation = {
  __typename?: 'Mutation'
  insertIntoRawMaterialsSingle?: {
    __typename?: 'RawMaterialsItem'
    materialId: number
  } | null
}

export const MutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Mutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'values' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RawMaterialsInsertInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertIntoRawMaterialsSingle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'values' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'values' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'materialId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>
