import { observable, action } from 'mobx';

export default class UiState {
  @observable addModalIsShow = false;

  @observable deleteModalIsShow = false;

  @observable editModalIsShow = false;

  @observable userRequest = false;

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

  @action showEditModal = () => {
    this.editModalIsShow = true;
  }

  @action hideEditModal = () => {
    this.editModalIsShow = false;
  }
}
