import { create } from 'zustand';

interface AuthModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const mockUseAuthModal: jest.Mock<AuthModalStore> = jest.fn(() => ({
  isOpen: false,
  onOpen: jest.fn(),
  onClose: jest.fn(),
}));

export default mockUseAuthModal;
