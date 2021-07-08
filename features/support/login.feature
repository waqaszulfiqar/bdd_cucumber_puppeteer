Feature: Login

    Scenario: User should be able to login with valid credentials 
        Given I open the login page
        When I fill the login form
        And I click on the login button 
        Then I should be able to see My Account Screen 