import mobx, {observable, action, decorate} from 'mobx';

class myStore {

  @observable expo = "Wayuu";

  @action changeExpo (x) {
  this.expo = x;
  console.log(this.expo)
   }

}
const mystore = new myStore();
export default mystore;
