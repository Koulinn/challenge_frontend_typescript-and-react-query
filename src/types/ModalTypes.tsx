import ChildrenType from './ChildrenType';

export default interface ModalTypes extends ChildrenType {
    isOpen: boolean;
    onClose: () => null;
}
