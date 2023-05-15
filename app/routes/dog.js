import Route from '@ember/routing/route';

export default class DogRoute extends Route {
  model(params) {
    const { dog_id } = params;
    return dog_id;
  }
}
