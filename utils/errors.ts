import { useModalStore } from "~/stores/modal";

export const showErrorDialog = (message: string) => {
  const { showModal } = useModalStore();
  showModal(message);
};
