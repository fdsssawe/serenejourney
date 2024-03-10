import {create} from "zustand"

//interface of states for modal that is used for adding users
interface modalUCProviderParams {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  }

  //interface of states for modal that is used for changing passwrod
  interface modalPCProviderParams {
    isOpen: boolean;
    selectedUser : string;
    openModal: (selectedUserId : string) => void;
    closeModal: () => void;
  }

  //interface of states for modal that is used for updating profie
  interface modalUPProviderParams {
    isOpen: boolean;
    selectedUser : string;
    openModalUP: (selectedUserId : string) => void;
    closeModalUP: () => void;
  }

export const useModalUCProvider = create<modalUCProviderParams>((set) => ({
    isOpen: false,
    openModal : () => {
        set({isOpen : true})
    },
    closeModal : () => {
        set({isOpen : false})
    }
}))

export const useModalPCProvider = create<modalPCProviderParams>((set) => ({
    selectedUser : '',
    isOpen: false,
    openModal : (selectedUserId : string) => {
        set({isOpen : true})
        set({selectedUser : selectedUserId})
    },
    closeModal : () => {
        set({isOpen : false})
        set({selectedUser : ""})
    }
}))

export const useModalUPProvider = create<modalUPProviderParams>((set) => ({
    selectedUser : '',
    isOpen: false,
    openModalUP : (selectedUserId : string) => {
        set({isOpen : true})
        set({selectedUser : selectedUserId})
    },
    closeModalUP : () => {
        set({isOpen : false})
        set({selectedUser : ""})
    }
}))