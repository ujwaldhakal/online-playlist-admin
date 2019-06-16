import { postPromise,getPromise } from './promise';

export default class Auth {
  static login(data) {
    const { email, password } = data;
    return postPromise('/login', { email, password });
  }

  async authenticate() {
      return postPromise('/me?fields=id,name,email');
  }
}
