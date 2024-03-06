import {create} from "zustand"


interface modalUCProviderParams {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  }

  interface modalPCProviderParams {
    isOpen: boolean;
    selectedUser : string;
    openModal: (selectedUserId : string) => void;
    closeModal: () => void;
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