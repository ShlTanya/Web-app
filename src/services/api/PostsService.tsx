import { GuestService } from './GuestService';

class PostsAPIService extends GuestService {
  public async getPosts(postCount: number, selPageNo: number) {
    return await this.get(`?limit=${postCount}&offset=${(selPageNo - 1) * postCount}`);
  }

  public async getPost(id: number) {
    return this.get(`${id}`);
  }

  public async deletePost(id: number) {
    return this.remove(`${id}`);
  }
}

export const PostsService = new PostsAPIService();
