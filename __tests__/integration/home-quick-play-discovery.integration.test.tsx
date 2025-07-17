import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// Mock analytics and navigation before importing components
const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

jest.mock("@/lib/analytics", () => ({
  logBannerInteraction: jest.fn(),
}));

// Import after mocks are set up
import HomePage from "../../app/page";
import { logBannerInteraction } from "@/lib/analytics";

// Get access to the mocked functions
const mockLogBannerInteraction = logBannerInteraction as jest.MockedFunction<typeof logBannerInteraction>;

describe("Home Page - Quick Play Discovery Integration", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPush.mockClear();
    mockLogBannerInteraction.mockClear();
  });

  describe("banner display on home screen", () => {
    it("should display Quick Play banner in upper third of home screen", async () => {
      render(<HomePage />);

      // Wait for loading to complete and banner to appear
      await waitFor(() => {
        expect(screen.queryByText("Loading MindBreak...")).not.toBeInTheDocument();
      });

      await waitFor(() => {
        const banner = screen.getByRole("banner");
        expect(banner).toBeInTheDocument();
      });

      const banner = screen.getByRole("banner");
      const bannerRect = banner.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Should be in upper third of screen
      expect(bannerRect.top).toBeLessThan(viewportHeight / 3);
    });

    it("should complete banner loading within 1.5 seconds", async () => {
      const startTime = performance.now();

      render(<HomePage />);

      // Wait for loading to complete
      await waitFor(() => {
        expect(screen.queryByText("Loading MindBreak...")).not.toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.getByRole("banner")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /try now/i })).toBeInTheDocument();
      });

      const loadTime = performance.now() - startTime;
      expect(loadTime).toBeLessThan(1500);
    });
  });

  describe("Try Now button tutorial launch", () => {
    it("should launch tutorial within 1.5 seconds for new users", async () => {
      // Mock user session without completed tutorial
      const mockUser = { hasCompletedTutorial: false };

      render(<HomePage user={mockUser} />);

      // Wait for loading to complete
      await waitFor(() => {
        expect(screen.queryByText("Loading MindBreak...")).not.toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.getByRole("button", { name: /try now/i })).toBeInTheDocument();
      });

      const startTime = performance.now();

      fireEvent.click(screen.getByRole("button", { name: /try now/i }));

      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith("/quick-play/tutorial");
      });

      const navigationTime = performance.now() - startTime;
      expect(navigationTime).toBeLessThan(1500);
    });

    it("should log banner interaction for analytics", async () => {
      render(<HomePage />);

      // Wait for loading to complete
      await waitFor(() => {
        expect(screen.queryByText("Loading MindBreak...")).not.toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.getByRole("button", { name: /try now/i })).toBeInTheDocument();
      });

      fireEvent.click(screen.getByRole("button", { name: /try now/i }));

      await waitFor(() => {
        expect(mockLogBannerInteraction).toHaveBeenCalledWith({
          action: "try_now_clicked",
          source: "home_banner",
          timestamp: expect.any(Number),
        });
      });
    });
  });

  describe("direct Quick Play access", () => {
    it("should navigate directly to game selection for users who completed tutorial", async () => {
      // Mock user session with completed tutorial
      const mockUser = { hasCompletedTutorial: true };

      render(<HomePage user={mockUser} />);

      // Wait for loading to complete
      await waitFor(() => {
        expect(screen.queryByText("Loading MindBreak...")).not.toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.getByRole("banner")).toBeInTheDocument();
      });

      const startTime = performance.now();

      fireEvent.click(screen.getByRole("banner"));

      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith("/quick-play/games?from=home");
      });

      const navigationTime = performance.now() - startTime;
      expect(navigationTime).toBeLessThan(2000);
    });

    it("should maintain home screen navigation context", async () => {
      const mockUser = { hasCompletedTutorial: true };

      render(<HomePage user={mockUser} />);

      // Wait for loading to complete
      await waitFor(() => {
        expect(screen.queryByText("Loading MindBreak...")).not.toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.getByRole("banner")).toBeInTheDocument();
      });

      fireEvent.click(screen.getByRole("banner"));

      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith("/quick-play/games?from=home");
      });
    });
  });

  describe("performance under load", () => {
    it("should handle banner interaction under normal load conditions", async () => {
      // Mock system under normal load (< 500 concurrent users)
      const mockSystemLoad = { concurrentUsers: 450 };

      render(<HomePage systemLoad={mockSystemLoad} />);

      // Wait for loading to complete
      await waitFor(() => {
        expect(screen.queryByText("Loading MindBreak...")).not.toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.getByRole("button", { name: /try now/i })).toBeInTheDocument();
      });

      const startTime = performance.now();

      fireEvent.click(screen.getByRole("button", { name: /try now/i }));

      await waitFor(() => {
        expect(mockPush).toHaveBeenCalled();
      });

      const responseTime = performance.now() - startTime;
      expect(responseTime).toBeLessThan(1500);
    });
  });
});
