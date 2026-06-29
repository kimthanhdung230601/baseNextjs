/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import PageContent from "@/shared/layout/page-content";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("Renders home page content.", () => {
    render(
      <PageContent
        title="Welcome to Mobifone"
        description="Explore telecommunications and digital services for personal and business customers."
      />
    );

    expect(screen.getByText(/Welcome to Mobifone/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Explore telecommunications and digital services for personal and business customers./i
      )
    ).toBeInTheDocument();
  });
});
