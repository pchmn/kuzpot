/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useMutation as useMutationApollo } from '@apollo/client';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { DocumentNode } from 'graphql';
import { useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useMutation = <T>(mutation: DocumentNode | TypedDocumentNode<T>, options?: any) =>
  useMutationApollo<unknown, Partial<T>>(mutation, options);

export function useUpdateMutation<T>(mutation: string | DocumentNode | TypedDocumentNode<T>, options?: any) {
  const [mutate, result] = useMutationApollo<unknown, { id?: string; data?: Partial<T> }>(
    typeof mutation === 'string' ? gql(mutation) : mutation,
    options
  );

  const mutateUpdate = useCallback(
    (id?: string, data?: Partial<T>) => {
      return mutate({ variables: { id, data } });
    },
    [mutate]
  );

  return [mutateUpdate, result] as const;
}

export function useInsertMutation<T>(mutation: string | DocumentNode | TypedDocumentNode<T>, options?: any) {
  const [mutate, result] = useMutationApollo<unknown, { data: Partial<T> & { id?: string } }>(
    typeof mutation === 'string' ? gql(mutation) : mutation,
    options
  );

  const mutateUpdate = useCallback(
    (data: Partial<T> & { id?: string }) => {
      return mutate({ variables: { data } });
    },
    [mutate]
  );

  return [mutateUpdate, result] as const;
}
