const firstData = ['first_1', 'first_2', 'first_3'];
const secondData = ['second_1', 'second_2', 'second_3'];

class Api {

  static getFirstData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(firstData);
      }, 1000);
    });
  }

  static getSecondData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(secondData);
      }, 1000);
    });
  }
}

export default Api;
