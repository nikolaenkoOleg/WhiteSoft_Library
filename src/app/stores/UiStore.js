import { observable, action } from 'mobx';

export default class UiState {
  @observable addModalIsShow = false;

  @action activateUserRequest = () => {
    this.userRequest = true;
  }

  @action disableUserRequest = () => {
    this.userRequest = false;
  }

  @action showAddModal = () => {
    this.addModalIsShow = true;
  }

  @action hideAddModal = () => {
    this.addModalIsShow = false;
  }
}
