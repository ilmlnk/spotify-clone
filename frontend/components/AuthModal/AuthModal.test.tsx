import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AuthModal from "./AuthModal";
import mockUseAuthModal from "./mockUseAuthModal";

jest.mock("@supabase/auth-ui-react", () => ({
  Auth: () => <div>Mocked Auth Component</div>,
}));

jest.mock("@/hooks/useAuthModal/useAuthModal", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("AuthModal Component", () => {
  it("renders the Auth component and Modal", () => {
    const { getByText } = render(<AuthModal />);
    const authComponent = getByText("Mocked Auth Component");
    expect(authComponent).toBeInTheDocument();

    const modalTitle = getByText("Welcome back");
    expect(modalTitle).toBeInTheDocument();

    const modalDescription = getByText("Login to your account.");
    expect(modalDescription).toBeInTheDocument();
  });

});
