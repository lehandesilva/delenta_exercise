export type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  noOfComments: number;
};

export type Post_Detail = {
  id: string;
  title: string;
  content: string;
  author_id: string;
  author_name: string;
  noOfComments: number;
  comments: Comment[] | null;
};

export type Comment = {
  id: string;
  content: string;
  author_id: string;
  author_name: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  posts: Post[] | null;
  password: string;
  type: string;
  banned: boolean;
};
