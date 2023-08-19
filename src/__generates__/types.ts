import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { PhotoModel, CommentModel } from '../models';
import { DataSourceContext } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date | string; output: Date | string; }
  Upload: { input: "Upload"; output: "Upload"; }
};

export type Comment = {
  __typename?: 'Comment';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isCommentMe: Scalars['Boolean']['output'];
  payload: Scalars['String']['output'];
  photo: Photo;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type CreateAccountResponse = {
  __typename?: 'CreateAccountResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type CreateCommentResponse = {
  __typename?: 'CreateCommentResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteCommentResponse = {
  __typename?: 'DeleteCommentResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteMessageResponse = {
  __typename?: 'DeleteMessageResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeletePhotoResponse = {
  __typename?: 'DeletePhotoResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type EditCommentResponse = {
  __typename?: 'EditCommentResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type EditPhotoResponse = {
  __typename?: 'EditPhotoResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  photo: Photo;
  success: Scalars['Boolean']['output'];
};

export type EditProfileResponse = {
  __typename?: 'EditProfileResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type FollowUserResponse = {
  __typename?: 'FollowUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type Hashtag = {
  __typename?: 'Hashtag';
  createdAt: Scalars['DateTime']['output'];
  hashtag: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  photos?: Maybe<Array<Maybe<Photo>>>;
  totalPhotos: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type HashtagPhotosArgs = {
  page: Scalars['Int']['input'];
};

export type Like = {
  __typename?: 'Like';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  photo: Photo;
  updatedAt: Scalars['DateTime']['output'];
};

export type LikePhotoResponse = {
  __typename?: 'LikePhotoResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isMine: Scalars['Boolean']['output'];
  payload: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  room: Room;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CreateAccountResponse;
  createComment?: Maybe<SeeFeedResponse>;
  deleteComment?: Maybe<DeleteCommentResponse>;
  deleteMessage?: Maybe<DeleteMessageResponse>;
  deletePhoto?: Maybe<DeletePhotoResponse>;
  deleteUser?: Maybe<User>;
  editComment?: Maybe<EditCommentResponse>;
  editPhoto?: Maybe<EditPhotoResponse>;
  editProfileUser?: Maybe<EditProfileResponse>;
  followUser?: Maybe<FollowUserResponse>;
  likePhoto?: Maybe<LikePhotoResponse>;
  login?: Maybe<LoginResponse>;
  readMessage?: Maybe<ReadMessageResponse>;
  sendMessage?: Maybe<SendMessageResponse>;
  toggleLike?: Maybe<ToggleLikeResponse>;
  unfollowUser?: Maybe<UnfollowUserResponse>;
  uploadPhoto?: Maybe<UploadPhotoResponse>;
};


export type MutationCreateAccountArgs = {
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationCreateCommentArgs = {
  payload: Scalars['String']['input'];
  photoId: Scalars['Int']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMessageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeletePhotoArgs = {
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationEditCommentArgs = {
  id: Scalars['Int']['input'];
  payload?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditPhotoArgs = {
  caption: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};


export type MutationEditProfileUserArgs = {
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFollowUserArgs = {
  username: Scalars['String']['input'];
};


export type MutationLikePhotoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationReadMessageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSendMessageArgs = {
  payload: Scalars['String']['input'];
  roomId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationToggleLikeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUnfollowUserArgs = {
  username: Scalars['String']['input'];
};


export type MutationUploadPhotoArgs = {
  caption?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
};

export type Photo = {
  __typename?: 'Photo';
  caption?: Maybe<Scalars['String']['output']>;
  commentsNumber: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  file: Scalars['String']['output'];
  hashtag?: Maybe<Array<Maybe<Hashtag>>>;
  id: Scalars['Int']['output'];
  isCommentMe: Scalars['Boolean']['output'];
  likesNumber: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  searchPhotos?: Maybe<SearchPhotosResponse>;
  searchUsers?: Maybe<SearchUsersResponse>;
  seeFeed?: Maybe<SeeFeedResponse>;
  seeFollowers: SeeFollwersResponse;
  seeFollowing?: Maybe<SeeFollowingResponse>;
  seeHashtag?: Maybe<Hashtag>;
  seePhoto?: Maybe<Photo>;
  seePhotoComments?: Maybe<Array<Maybe<Comment>>>;
  seePhotoLikes?: Maybe<Array<Maybe<User>>>;
  seeProfile?: Maybe<User>;
  seeRoom?: Maybe<SeeRoomResponse>;
  seeRooms?: Maybe<SeeRoomsResponse>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QuerySearchPhotosArgs = {
  keyword: Scalars['String']['input'];
};


export type QuerySearchUsersArgs = {
  keyword: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySeeFollowersArgs = {
  page: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type QuerySeeFollowingArgs = {
  cursorId?: InputMaybe<Scalars['Int']['input']>;
  username: Scalars['String']['input'];
};


export type QuerySeeHashtagArgs = {
  hashtag: Scalars['String']['input'];
};


export type QuerySeePhotoArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeePhotoCommentsArgs = {
  id: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};


export type QuerySeePhotoLikesArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeProfileArgs = {
  username: Scalars['String']['input'];
};


export type QuerySeeRoomArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type Room = {
  __typename?: 'Room';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  messages?: Maybe<Array<Maybe<Message>>>;
  unreadNumber: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  users?: Maybe<Array<Maybe<User>>>;
};

export type SearchPhotosResponse = {
  __typename?: 'SearchPhotosResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  photo?: Maybe<Array<Maybe<Photo>>>;
  success: Scalars['Boolean']['output'];
};

export type SearchUsersResponse = {
  __typename?: 'SearchUsersResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<Array<Maybe<User>>>;
};

export type SeeFeedResponse = {
  __typename?: 'SeeFeedResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  photo?: Maybe<Array<Maybe<Photo>>>;
  success: Scalars['Boolean']['output'];
};

export type SeeFollowingResponse = {
  __typename?: 'SeeFollowingResponse';
  code: Scalars['Int']['output'];
  following?: Maybe<Array<Maybe<User>>>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type SeeFollwersResponse = {
  __typename?: 'SeeFollwersResponse';
  code: Scalars['Int']['output'];
  followers?: Maybe<Array<Maybe<User>>>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SeePhotoCommentsResponse = {
  __typename?: 'SeePhotoCommentsResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Array<Maybe<Comment>>>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type SeePhotoResponse = {
  __typename?: 'SeePhotoResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  photo?: Maybe<Photo>;
  success: Scalars['Boolean']['output'];
};

export type SeeRoomResponse = {
  __typename?: 'SeeRoomResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  room?: Maybe<Room>;
  success: Scalars['Boolean']['output'];
};

export type SeeRoomsResponse = {
  __typename?: 'SeeRoomsResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  room?: Maybe<Array<Maybe<Room>>>;
  success: Scalars['Boolean']['output'];
};

export type SendMessageResponse = {
  __typename?: 'SendMessageResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type SharedMutationResponse = {
  __typename?: 'SharedMutationResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  roomSubscription?: Maybe<Message>;
};


export type SubscriptionRoomSubscriptionArgs = {
  id: Scalars['Int']['input'];
};

export type ToggleLikeResponse = {
  __typename?: 'ToggleLikeResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UnfollowUserResponse = {
  __typename?: 'UnfollowUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type UploadPhotoResponse = {
  __typename?: 'UploadPhotoResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  photo?: Maybe<Photo>;
  success: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  id: Scalars['Int']['output'];
  isFollowing: Scalars['Boolean']['output'];
  isMe: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  totalFollowers: Scalars['Int']['output'];
  totalFollowing: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userName: Scalars['String']['output'];
};

export type ReadMessageResponse = {
  __typename?: 'readMessageResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Omit<Comment, 'photo' | 'user'> & { photo: ResolversTypes['Photo'], user: ResolversTypes['User'] }>;
  CreateAccountResponse: ResolverTypeWrapper<Omit<CreateAccountResponse, 'user'> & { user: ResolversTypes['User'] }>;
  CreateCommentResponse: ResolverTypeWrapper<CreateCommentResponse>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeleteCommentResponse: ResolverTypeWrapper<DeleteCommentResponse>;
  DeleteMessageResponse: ResolverTypeWrapper<DeleteMessageResponse>;
  DeletePhotoResponse: ResolverTypeWrapper<DeletePhotoResponse>;
  EditCommentResponse: ResolverTypeWrapper<EditCommentResponse>;
  EditPhotoResponse: ResolverTypeWrapper<Omit<EditPhotoResponse, 'photo'> & { photo: ResolversTypes['Photo'] }>;
  EditProfileResponse: ResolverTypeWrapper<Omit<EditProfileResponse, 'user'> & { user?: Maybe<ResolversTypes['User']> }>;
  FollowUserResponse: ResolverTypeWrapper<FollowUserResponse>;
  Hashtag: ResolverTypeWrapper<Omit<Hashtag, 'photos'> & { photos?: Maybe<Array<Maybe<ResolversTypes['Photo']>>> }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Like: ResolverTypeWrapper<Omit<Like, 'photo'> & { photo: ResolversTypes['Photo'] }>;
  LikePhotoResponse: ResolverTypeWrapper<LikePhotoResponse>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Message: ResolverTypeWrapper<Omit<Message, 'room' | 'user'> & { room: ResolversTypes['Room'], user: ResolversTypes['User'] }>;
  Mutation: ResolverTypeWrapper<{}>;
  Photo: ResolverTypeWrapper<PhotoModel>;
  Query: ResolverTypeWrapper<{}>;
  Room: ResolverTypeWrapper<Omit<Room, 'messages' | 'users'> & { messages?: Maybe<Array<Maybe<ResolversTypes['Message']>>>, users?: Maybe<Array<Maybe<ResolversTypes['User']>>> }>;
  SearchPhotosResponse: ResolverTypeWrapper<Omit<SearchPhotosResponse, 'photo'> & { photo?: Maybe<Array<Maybe<ResolversTypes['Photo']>>> }>;
  SearchUsersResponse: ResolverTypeWrapper<Omit<SearchUsersResponse, 'user'> & { user?: Maybe<Array<Maybe<ResolversTypes['User']>>> }>;
  SeeFeedResponse: ResolverTypeWrapper<Omit<SeeFeedResponse, 'photo'> & { photo?: Maybe<Array<Maybe<ResolversTypes['Photo']>>> }>;
  SeeFollowingResponse: ResolverTypeWrapper<Omit<SeeFollowingResponse, 'following'> & { following?: Maybe<Array<Maybe<ResolversTypes['User']>>> }>;
  SeeFollwersResponse: ResolverTypeWrapper<Omit<SeeFollwersResponse, 'followers'> & { followers?: Maybe<Array<Maybe<ResolversTypes['User']>>> }>;
  SeePhotoCommentsResponse: ResolverTypeWrapper<Omit<SeePhotoCommentsResponse, 'comment'> & { comment?: Maybe<Array<Maybe<ResolversTypes['Comment']>>> }>;
  SeePhotoResponse: ResolverTypeWrapper<Omit<SeePhotoResponse, 'photo'> & { photo?: Maybe<ResolversTypes['Photo']> }>;
  SeeRoomResponse: ResolverTypeWrapper<Omit<SeeRoomResponse, 'room'> & { room?: Maybe<ResolversTypes['Room']> }>;
  SeeRoomsResponse: ResolverTypeWrapper<Omit<SeeRoomsResponse, 'room'> & { room?: Maybe<Array<Maybe<ResolversTypes['Room']>>> }>;
  SendMessageResponse: ResolverTypeWrapper<SendMessageResponse>;
  SharedMutationResponse: ResolverTypeWrapper<SharedMutationResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  ToggleLikeResponse: ResolverTypeWrapper<ToggleLikeResponse>;
  UnfollowUserResponse: ResolverTypeWrapper<UnfollowUserResponse>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  UploadPhotoResponse: ResolverTypeWrapper<Omit<UploadPhotoResponse, 'photo'> & { photo?: Maybe<ResolversTypes['Photo']> }>;
  User: ResolverTypeWrapper<Omit<User, 'followers' | 'following' | 'photos'> & { followers?: Maybe<Array<Maybe<ResolversTypes['User']>>>, following?: Maybe<Array<Maybe<ResolversTypes['User']>>>, photos?: Maybe<Array<Maybe<ResolversTypes['Photo']>>> }>;
  readMessageResponse: ResolverTypeWrapper<ReadMessageResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: Omit<Comment, 'photo' | 'user'> & { photo: ResolversParentTypes['Photo'], user: ResolversParentTypes['User'] };
  CreateAccountResponse: Omit<CreateAccountResponse, 'user'> & { user: ResolversParentTypes['User'] };
  CreateCommentResponse: CreateCommentResponse;
  DateTime: Scalars['DateTime']['output'];
  DeleteCommentResponse: DeleteCommentResponse;
  DeleteMessageResponse: DeleteMessageResponse;
  DeletePhotoResponse: DeletePhotoResponse;
  EditCommentResponse: EditCommentResponse;
  EditPhotoResponse: Omit<EditPhotoResponse, 'photo'> & { photo: ResolversParentTypes['Photo'] };
  EditProfileResponse: Omit<EditProfileResponse, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
  FollowUserResponse: FollowUserResponse;
  Hashtag: Omit<Hashtag, 'photos'> & { photos?: Maybe<Array<Maybe<ResolversParentTypes['Photo']>>> };
  Int: Scalars['Int']['output'];
  Like: Omit<Like, 'photo'> & { photo: ResolversParentTypes['Photo'] };
  LikePhotoResponse: LikePhotoResponse;
  LoginResponse: LoginResponse;
  Message: Omit<Message, 'room' | 'user'> & { room: ResolversParentTypes['Room'], user: ResolversParentTypes['User'] };
  Mutation: {};
  Photo: PhotoModel;
  Query: {};
  Room: Omit<Room, 'messages' | 'users'> & { messages?: Maybe<Array<Maybe<ResolversParentTypes['Message']>>>, users?: Maybe<Array<Maybe<ResolversParentTypes['User']>>> };
  SearchPhotosResponse: Omit<SearchPhotosResponse, 'photo'> & { photo?: Maybe<Array<Maybe<ResolversParentTypes['Photo']>>> };
  SearchUsersResponse: Omit<SearchUsersResponse, 'user'> & { user?: Maybe<Array<Maybe<ResolversParentTypes['User']>>> };
  SeeFeedResponse: Omit<SeeFeedResponse, 'photo'> & { photo?: Maybe<Array<Maybe<ResolversParentTypes['Photo']>>> };
  SeeFollowingResponse: Omit<SeeFollowingResponse, 'following'> & { following?: Maybe<Array<Maybe<ResolversParentTypes['User']>>> };
  SeeFollwersResponse: Omit<SeeFollwersResponse, 'followers'> & { followers?: Maybe<Array<Maybe<ResolversParentTypes['User']>>> };
  SeePhotoCommentsResponse: Omit<SeePhotoCommentsResponse, 'comment'> & { comment?: Maybe<Array<Maybe<ResolversParentTypes['Comment']>>> };
  SeePhotoResponse: Omit<SeePhotoResponse, 'photo'> & { photo?: Maybe<ResolversParentTypes['Photo']> };
  SeeRoomResponse: Omit<SeeRoomResponse, 'room'> & { room?: Maybe<ResolversParentTypes['Room']> };
  SeeRoomsResponse: Omit<SeeRoomsResponse, 'room'> & { room?: Maybe<Array<Maybe<ResolversParentTypes['Room']>>> };
  SendMessageResponse: SendMessageResponse;
  SharedMutationResponse: SharedMutationResponse;
  String: Scalars['String']['output'];
  Subscription: {};
  ToggleLikeResponse: ToggleLikeResponse;
  UnfollowUserResponse: UnfollowUserResponse;
  Upload: Scalars['Upload']['output'];
  UploadPhotoResponse: Omit<UploadPhotoResponse, 'photo'> & { photo?: Maybe<ResolversParentTypes['Photo']> };
  User: Omit<User, 'followers' | 'following' | 'photos'> & { followers?: Maybe<Array<Maybe<ResolversParentTypes['User']>>>, following?: Maybe<Array<Maybe<ResolversParentTypes['User']>>>, photos?: Maybe<Array<Maybe<ResolversParentTypes['Photo']>>> };
  readMessageResponse: ReadMessageResponse;
};

export type CommentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isCommentMe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['Photo'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAccountResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateAccountResponse'] = ResolversParentTypes['CreateAccountResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateCommentResponse'] = ResolversParentTypes['CreateCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DeleteCommentResponse'] = ResolversParentTypes['DeleteCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteMessageResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DeleteMessageResponse'] = ResolversParentTypes['DeleteMessageResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePhotoResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DeletePhotoResponse'] = ResolversParentTypes['DeletePhotoResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['EditCommentResponse'] = ResolversParentTypes['EditCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditPhotoResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['EditPhotoResponse'] = ResolversParentTypes['EditPhotoResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['Photo'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditProfileResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['EditProfileResponse'] = ResolversParentTypes['EditProfileResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['FollowUserResponse'] = ResolversParentTypes['FollowUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HashtagResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Hashtag'] = ResolversParentTypes['Hashtag']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  hashtag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType, RequireFields<HashtagPhotosArgs, 'page'>>;
  totalPhotos?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['Photo'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikePhotoResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LikePhotoResponse'] = ResolversParentTypes['LikePhotoResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isMine?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  read?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  room?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAccount?: Resolver<ResolversTypes['CreateAccountResponse'], ParentType, ContextType, RequireFields<MutationCreateAccountArgs, 'email' | 'firstname' | 'password' | 'username'>>;
  createComment?: Resolver<Maybe<ResolversTypes['SeeFeedResponse']>, ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'payload' | 'photoId'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['DeleteCommentResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  deleteMessage?: Resolver<Maybe<ResolversTypes['DeleteMessageResponse']>, ParentType, ContextType, Partial<MutationDeleteMessageArgs>>;
  deletePhoto?: Resolver<Maybe<ResolversTypes['DeletePhotoResponse']>, ParentType, ContextType, RequireFields<MutationDeletePhotoArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  editComment?: Resolver<Maybe<ResolversTypes['EditCommentResponse']>, ParentType, ContextType, RequireFields<MutationEditCommentArgs, 'id'>>;
  editPhoto?: Resolver<Maybe<ResolversTypes['EditPhotoResponse']>, ParentType, ContextType, RequireFields<MutationEditPhotoArgs, 'caption' | 'id'>>;
  editProfileUser?: Resolver<Maybe<ResolversTypes['EditProfileResponse']>, ParentType, ContextType, Partial<MutationEditProfileUserArgs>>;
  followUser?: Resolver<Maybe<ResolversTypes['FollowUserResponse']>, ParentType, ContextType, RequireFields<MutationFollowUserArgs, 'username'>>;
  likePhoto?: Resolver<Maybe<ResolversTypes['LikePhotoResponse']>, ParentType, ContextType, RequireFields<MutationLikePhotoArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'password' | 'username'>>;
  readMessage?: Resolver<Maybe<ResolversTypes['readMessageResponse']>, ParentType, ContextType, RequireFields<MutationReadMessageArgs, 'id'>>;
  sendMessage?: Resolver<Maybe<ResolversTypes['SendMessageResponse']>, ParentType, ContextType, RequireFields<MutationSendMessageArgs, 'payload'>>;
  toggleLike?: Resolver<Maybe<ResolversTypes['ToggleLikeResponse']>, ParentType, ContextType, RequireFields<MutationToggleLikeArgs, 'id'>>;
  unfollowUser?: Resolver<Maybe<ResolversTypes['UnfollowUserResponse']>, ParentType, ContextType, RequireFields<MutationUnfollowUserArgs, 'username'>>;
  uploadPhoto?: Resolver<Maybe<ResolversTypes['UploadPhotoResponse']>, ParentType, ContextType, Partial<MutationUploadPhotoArgs>>;
};

export type PhotoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commentsNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  file?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hashtag?: Resolver<Maybe<Array<Maybe<ResolversTypes['Hashtag']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isCommentMe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  likesNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  searchPhotos?: Resolver<Maybe<ResolversTypes['SearchPhotosResponse']>, ParentType, ContextType, RequireFields<QuerySearchPhotosArgs, 'keyword'>>;
  searchUsers?: Resolver<Maybe<ResolversTypes['SearchUsersResponse']>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, 'keyword'>>;
  seeFeed?: Resolver<Maybe<ResolversTypes['SeeFeedResponse']>, ParentType, ContextType>;
  seeFollowers?: Resolver<ResolversTypes['SeeFollwersResponse'], ParentType, ContextType, RequireFields<QuerySeeFollowersArgs, 'page' | 'username'>>;
  seeFollowing?: Resolver<Maybe<ResolversTypes['SeeFollowingResponse']>, ParentType, ContextType, RequireFields<QuerySeeFollowingArgs, 'username'>>;
  seeHashtag?: Resolver<Maybe<ResolversTypes['Hashtag']>, ParentType, ContextType, RequireFields<QuerySeeHashtagArgs, 'hashtag'>>;
  seePhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<QuerySeePhotoArgs, 'id'>>;
  seePhotoComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<QuerySeePhotoCommentsArgs, 'id' | 'page'>>;
  seePhotoLikes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuerySeePhotoLikesArgs, 'id'>>;
  seeProfile?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QuerySeeProfileArgs, 'username'>>;
  seeRoom?: Resolver<Maybe<ResolversTypes['SeeRoomResponse']>, ParentType, ContextType, RequireFields<QuerySeeRoomArgs, 'id'>>;
  seeRooms?: Resolver<Maybe<ResolversTypes['SeeRoomsResponse']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type RoomResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  unreadNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchPhotosResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SearchPhotosResponse'] = ResolversParentTypes['SearchPhotosResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchUsersResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SearchUsersResponse'] = ResolversParentTypes['SearchUsersResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeeFeedResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SeeFeedResponse'] = ResolversParentTypes['SeeFeedResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeeFollowingResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SeeFollowingResponse'] = ResolversParentTypes['SeeFollowingResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeeFollwersResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SeeFollwersResponse'] = ResolversParentTypes['SeeFollwersResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeePhotoCommentsResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SeePhotoCommentsResponse'] = ResolversParentTypes['SeePhotoCommentsResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeePhotoResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SeePhotoResponse'] = ResolversParentTypes['SeePhotoResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeeRoomResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SeeRoomResponse'] = ResolversParentTypes['SeeRoomResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeeRoomsResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SeeRoomsResponse'] = ResolversParentTypes['SeeRoomsResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  room?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room']>>>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendMessageResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SendMessageResponse'] = ResolversParentTypes['SendMessageResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SharedMutationResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SharedMutationResponse'] = ResolversParentTypes['SharedMutationResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  roomSubscription?: SubscriptionResolver<Maybe<ResolversTypes['Message']>, "roomSubscription", ParentType, ContextType, RequireFields<SubscriptionRoomSubscriptionArgs, 'id'>>;
};

export type ToggleLikeResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ToggleLikeResponse'] = ResolversParentTypes['ToggleLikeResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnfollowUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UnfollowUserResponse'] = ResolversParentTypes['UnfollowUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadPhotoResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UploadPhotoResponse'] = ResolversParentTypes['UploadPhotoResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isFollowing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  totalFollowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalFollowing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReadMessageResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['readMessageResponse'] = ResolversParentTypes['readMessageResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Comment?: CommentResolvers<ContextType>;
  CreateAccountResponse?: CreateAccountResponseResolvers<ContextType>;
  CreateCommentResponse?: CreateCommentResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteCommentResponse?: DeleteCommentResponseResolvers<ContextType>;
  DeleteMessageResponse?: DeleteMessageResponseResolvers<ContextType>;
  DeletePhotoResponse?: DeletePhotoResponseResolvers<ContextType>;
  EditCommentResponse?: EditCommentResponseResolvers<ContextType>;
  EditPhotoResponse?: EditPhotoResponseResolvers<ContextType>;
  EditProfileResponse?: EditProfileResponseResolvers<ContextType>;
  FollowUserResponse?: FollowUserResponseResolvers<ContextType>;
  Hashtag?: HashtagResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  LikePhotoResponse?: LikePhotoResponseResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Photo?: PhotoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  SearchPhotosResponse?: SearchPhotosResponseResolvers<ContextType>;
  SearchUsersResponse?: SearchUsersResponseResolvers<ContextType>;
  SeeFeedResponse?: SeeFeedResponseResolvers<ContextType>;
  SeeFollowingResponse?: SeeFollowingResponseResolvers<ContextType>;
  SeeFollwersResponse?: SeeFollwersResponseResolvers<ContextType>;
  SeePhotoCommentsResponse?: SeePhotoCommentsResponseResolvers<ContextType>;
  SeePhotoResponse?: SeePhotoResponseResolvers<ContextType>;
  SeeRoomResponse?: SeeRoomResponseResolvers<ContextType>;
  SeeRoomsResponse?: SeeRoomsResponseResolvers<ContextType>;
  SendMessageResponse?: SendMessageResponseResolvers<ContextType>;
  SharedMutationResponse?: SharedMutationResponseResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  ToggleLikeResponse?: ToggleLikeResponseResolvers<ContextType>;
  UnfollowUserResponse?: UnfollowUserResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadPhotoResponse?: UploadPhotoResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  readMessageResponse?: ReadMessageResponseResolvers<ContextType>;
};

