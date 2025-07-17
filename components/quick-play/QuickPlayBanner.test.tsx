import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { QuickPlayBanner } from "./QuickPlayBanner";

describe("QuickPlayBanner", () => {
  describe("rendering", () => {
    it("should display Quick Play Mode banner", () => {
      render(<QuickPlayBanner />);

      expect(screen.getByRole("banner")).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: /quick play mode/i })).toBeInTheDocument();
    });

    it("should display Try Now call-to-action button", () => {
      render(<QuickPlayBanner />);

      expect(screen.getByRole("button", { name: /try now/i })).toBeInTheDocument();
    });

    it("should maintain professional appearance with proper styling", () => {
      render(<QuickPlayBanner />);

      const banner = screen.getByRole("banner");
      expect(banner).toHaveClass("professional-design");
      expect(banner).toHaveClass("workplace-suitable");
    });

    it("should include proper accessibility attributes", () => {
      render(<QuickPlayBanner />);

      const banner = screen.getByRole("banner");
      expect(banner).toHaveAttribute("aria-label", "Quick Play Mode banner");

      const button = screen.getByRole("button", { name: /try now/i });
      expect(button).toHaveAttribute("aria-describedby", "quick-play-description");
    });

    it("should show different aria-label when tutorial is completed", () => {
      render(<QuickPlayBanner hasCompletedTutorial={true} />);

      const banner = screen.getByRole("banner");
      expect(banner).toHaveAttribute("aria-label", "Quick Play Mode - Click to access games directly");
    });
  });

  describe("responsive behavior", () => {
    it("should display full-width on desktop viewport", () => {
      // Mock desktop viewport
      Object.defineProperty(window, 'innerWidth', { value: 1920 });

      render(<QuickPlayBanner />);

      const banner = screen.getByRole("banner");
      expect(banner).toHaveClass("full-width-promotional");
    });

    it("should display condensed format on tablet viewport", () => {
      // Mock tablet viewport
      Object.defineProperty(window, 'innerWidth', { value: 768 });

      render(<QuickPlayBanner />);

      const banner = screen.getByRole("banner");
      expect(banner).toHaveClass("condensed-promotional");
    });

    it("should display compact format on mobile viewport", () => {
      // Mock mobile viewport
      Object.defineProperty(window, 'innerWidth', { value: 375 });

      render(<QuickPlayBanner />);

      const banner = screen.getByRole("banner");
      expect(banner).toHaveClass("compact-promotional");
    });
  });

  describe("user interactions", () => {
    it("should call onTryNow handler when Try Now button is clicked", () => {
      const mockOnTryNow = jest.fn();

      render(<QuickPlayBanner onTryNow={mockOnTryNow} />);

      fireEvent.click(screen.getByRole("button", { name: /try now/i }));

      expect(mockOnTryNow).toHaveBeenCalledTimes(1);
    });

    it("should call onDirectAccess handler when banner is clicked directly", () => {
      const mockOnDirectAccess = jest.fn();

      render(<QuickPlayBanner onDirectAccess={mockOnDirectAccess} hasCompletedTutorial={true} />);

      fireEvent.click(screen.getByRole("banner"));

      expect(mockOnDirectAccess).toHaveBeenCalledTimes(1);
    });
  });

  describe("performance requirements", () => {
    it("should load within 1.5 seconds", async () => {
      const startTime = performance.now();

      render(<QuickPlayBanner />);

      await waitFor(() => {
        expect(screen.getByRole("banner")).toBeInTheDocument();
      });

      const loadTime = performance.now() - startTime;
      expect(loadTime).toBeLessThan(1500);
    });
  });
});
