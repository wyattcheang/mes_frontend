import * as Types from './@types/index'

import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'
import * as VueCompositionApi from '@vue/composition-api'
export type ReactiveFunction<TParam> = () => TParam
export type InsertIntoRawMaterialsSingleMutationVariables = Types.Exact<{
  values: Types.RawMaterialsInsertInput
}>

export type InsertIntoRawMaterialsSingleMutation = {
  __typename?: 'Mutation'
  insertIntoRawMaterialsSingle?: {
    __typename?: 'RawMaterialsItem'
    materialId: number
  } | null
}

export const InsertIntoRawMaterialsSingleDocument = gql`
  mutation insertIntoRawMaterialsSingle($values: RawMaterialsInsertInput!) {
    insertIntoRawMaterialsSingle(values: $values) {
      materialId
    }
  }
`

/**
 * __useInsertIntoRawMaterialsSingleMutation__
 *
 * To run a mutation, you first call `useInsertIntoRawMaterialsSingleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertIntoRawMaterialsSingleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertIntoRawMaterialsSingleMutation({
 *   variables: {
 *     values: // value for 'values'
 *   },
 * });
 */
export function useInsertIntoRawMaterialsSingleMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertIntoRawMaterialsSingleMutation,
        InsertIntoRawMaterialsSingleMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertIntoRawMaterialsSingleMutation,
          InsertIntoRawMaterialsSingleMutationVariables
        >
      > = {},
) {
  return VueApolloComposable.useMutation<
    InsertIntoRawMaterialsSingleMutation,
    InsertIntoRawMaterialsSingleMutationVariables
  >(InsertIntoRawMaterialsSingleDocument, options)
}
export type InsertIntoRawMaterialsSingleMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertIntoRawMaterialsSingleMutation,
    InsertIntoRawMaterialsSingleMutationVariables
  >
