export type PhotoModel = {
  id: number;
  userId: number;
  file: string;
  caption: string;
};

export type CommentModel = {
  id: number;
  payload: string;
  userId: number;
  photoId: number;
};
