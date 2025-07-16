# US-1: Discover Quick Play Mode

# Priority: P0

# Business Rationale: Feature discovery is critical for user adoption and achieving the 20% DAU increase target

# Technical Considerations: Banner must be responsive across all devices and load within 1.5s

Feature: Quick Play Mode Discovery

  Scenario: User discovers Quick Play Mode banner on home screen
    Given Alex Carter opens the MindBreak app on their mobile device
    And Alex has a valid user session
    When the home screen loads completely
    Then a visually distinct Quick Play Mode banner is displayed in the upper third of the screen
    And the banner shows "Try Now" call-to-action button
    And the banner maintains professional appearance suitable for workplace
    And the banner loading completes within 1.5 seconds

  Scenario: Quick Play Mode banner adapts to different device viewports
    Given Alex Carter accesses MindBreak from different devices
    When Alex views the home screen on desktop (1920x1080 resolution)
    Then the banner displays as full-width promotional element
    When Alex views the home screen on tablet (768x1024 resolution)
    Then the banner displays as condensed promotional element
    When Alex views the home screen on mobile (375x667 resolution)
    Then the banner displays as compact promotional element
    And all banner variants maintain professional design consistency

  Scenario: Try Now button launches tutorial within performance requirements
    Given Alex Carter sees the Quick Play Mode banner on the home screen
    And the system is under normal load conditions (less than 500 concurrent users)
    When Alex taps the "Try Now" button
    Then the Quick Play Mode tutorial launches within 1.5 seconds
    And the tutorial screen displays with proper navigation elements
    And the system logs the banner interaction for analytics

  Scenario: Quick Play Mode access without tutorial
    Given Alex Carter has previously completed or skipped the Quick Play Mode tutorial
    And Alex sees the Quick Play Mode banner on home screen
    When Alex selects Quick Play Mode directly from the banner
    Then Alex is taken directly to the game selection screen within 2 seconds
    And no tutorial elements are displayed
    And the navigation maintains context of coming from home screen
