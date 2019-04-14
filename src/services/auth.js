import { postPromise } from './promise';

export default class Auth {
  static login(data) {
    const { email, password } = data;
    return postPromise('/login', { email, password });
  }
}
