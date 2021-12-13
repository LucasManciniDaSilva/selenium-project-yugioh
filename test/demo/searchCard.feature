Feature: search for normal cards

  Scenario Outline: Search for cards

    Given I am on the yugiohdb page
    When I Click on Card Search
    When I search for <card>
    Then I should click on the result and verify the card name is <cardName>
    When Verify is the card page is for <cardName>

    Examples:
      | card                   | cardName                       |
      | blue eyes white dragon | Malefic Blue-Eyes White Dragon |
      | dark magician          | The Dark Magicians             |
      | cyber dragon           | Cyber Dragon                   |

  Scenario Outline: Search for normal card

    Given I am on the yugiohdb page
    When I Click on Card Search
    Then I Click on normal type card
    When I search for <card>
    Then I should click on the result and verify the card name is <cardName>
    When Verify is the card page is for <cardName>

    Examples:
      | card                   | cardName               |
      | blue eyes white dragon | Blue-Eyes White Dragon |
      | dark magician          | Dark Magician          |
      | luster dragon          | Luster Dragon #2       |

