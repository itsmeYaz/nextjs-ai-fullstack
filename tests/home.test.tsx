import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import HomePage from "../app/page";

vi.mock("@clerk/nextjs", () => {
  return {
    auth: () =>
      new Promise((resolve) =>
        resolve({ userId: "user_2NNEqL2nrIRdJ194ndJqAHwEfxC" }),
      ),
    useUser: () => ({
      isSignedIn: true,
      user: {
        id: "user_2NNEqL2nrIRdJ194ndJqAHwEfxC",
        fullName: "Charles Harris",
      },
    }),
  };
});

test("Home", async () => {
  render(await HomePage());
  expect(screen.getByText("tracking your mood")).toBeTruthy();
});
