import Route from '@ember/routing/route';
import dogs from '../data/dogs';

export default class DogRoute extends Route {
  model(params) {
    const { dog_id } = params;

    const dog = dogs.find(({ id }) => id === parseInt(dog_id));
    console.log(dog)
    return dog;
  }
}
