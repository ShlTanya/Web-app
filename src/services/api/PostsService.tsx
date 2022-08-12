import { GuestService } from './GuestService';

class PostsAPIService extends GuestService {
  public async getPosts() {
    return this.get('');
  }

  public async getPost(id: number) {
    return this.get(`posts/${id}`);
  }

  public async deletePost(id: number) {
    return this.remove(`posts/${id}`);
  }
}

export const PostsService = new PostsAPIService();
