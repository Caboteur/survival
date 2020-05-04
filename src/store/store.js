import mobx, {observable, action, decorate} from 'mobx';

class myStore {

  @observable expo = "wayuu";

  @action changeExpo (x) {
  this.expo = x;
  console.log(this.expo)
   }

}
const mystore = new myStore();
export default mystore;
