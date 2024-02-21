/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
};

export enum ColorScheme {
  Dark = 'dark',
  Light = 'light'
}

export type Folder = {
  __typename?: 'Folder';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  pages: Array<Page>;
  title: Scalars['String']['output'];
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type FolderCreateInput = {
  title: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type FolderUpdateInput = {
  title: Scalars['String']['input'];
};

export type FolderWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  folderCreate: Folder;
  folderUpdate: Folder;
  pageCreate: Page;
  pageUpdate: Page;
  userCreate: User;
  userUpdate: User;
  workspaceCreate: Workspace;
  workspaceUpdate: Workspace;
};


export type MutationFolderCreateArgs = {
  data: FolderCreateInput;
};


export type MutationFolderUpdateArgs = {
  data: FolderUpdateInput;
  where: FolderWhereUniqueInput;
};


export type MutationPageCreateArgs = {
  data: PageCreateInput;
};


export type MutationPageUpdateArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUserCreateArgs = {
  data: UserCreateInput;
};


export type MutationUserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationWorkspaceCreateArgs = {
  data: WorkspaceCreateInput;
};


export type MutationWorkspaceUpdateArgs = {
  data: WorkspaceUpdateInput;
  where: WorkspaceWhereUniqueInput;
};

export type Page = {
  __typename?: 'Page';
  author: User;
  authorId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  folder?: Maybe<Folder>;
  folderId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type PageCreateInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type PageUpdateInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type PageWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']['output']>;
  colorScheme: ColorScheme;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastname: Scalars['String']['output'];
  pages: Array<Page>;
  workspaces: Array<Workspace>;
};

export type UserCreateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
};

export type UserUpdateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
};

export type UserWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Workspace = {
  __typename?: 'Workspace';
  author: User;
  authorId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  folders: Array<Folder>;
  id: Scalars['ID']['output'];
  pages: Array<Page>;
  title: Scalars['String']['output'];
};

export type WorkspaceCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type WorkspaceUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type WorkspaceWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type AllUsersQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQueryQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, firstname: string, lastname: string, email: string }> };


export const AllUsersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllUsersQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<AllUsersQueryQuery, AllUsersQueryQueryVariables>;