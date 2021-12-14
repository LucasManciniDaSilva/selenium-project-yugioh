Feature: search for cards

  Scenario Outline: <TestId> Search for cards

    Given I am on the yugiohdb page for the <TestId>
    When I Click on Card Search
    When I search for <card>
    Then I should click on the result and verify the card name is <cardName>
    When Verify is the card page is for <cardName>

    Examples:
      | card                   | cardName                       | TestId |
      | blue eyes white dragon | Malefic Blue-Eyes White Dragon | CT_001 |
      | dark magician          | The Dark Magicians             | CT_002 |
      | cyber dragon           | Cyber Dragon                   | CT_003 |
  Scenario Outline: <TestId> Search for normal card

    Given I am on the yugiohdb page for the <TestId>
    When I Click on Card Search
    Then I Click on normal type card
    When I search for <card>
    Then I should click on the result and verify the card name is <cardName>
    When Verify is the card page is for <cardName>

    Examples:
      | card                   | cardName               | TestId |
      | blue eyes white dragon | Blue-Eyes White Dragon | CT_004 |
      | dark magician          | Dark Magician          | CT_005 |
      | luster dragon          | Luster Dragon #2       | CT_006 |
