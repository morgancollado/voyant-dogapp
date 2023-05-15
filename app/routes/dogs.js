import Route from '@ember/routing/route';
import dogs from '../data/dogs';

export default class DogsRoute extends Route {
  model() {
    return dogs;
  }
}
