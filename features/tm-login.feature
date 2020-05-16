Feature: TM user can log in to the system using the login form

Description: TM login page can be accessed from the direct click on the log in link on the page header
Or user is served with the login form, whenever trying to access logged in user fuctionality without being logged in.
i.e: trying to add to watchlist when not logged in

@login
Scenario: TM user choose to log in to the system using the log in link on the page hearder

 Given I navigate to tm homepage
 And I click on log in link
 When I enter Email
 And I enter the password
 And I click log in button
 Then I will be navigated to the tm homepage
 And I will see my name as the logged in user
 And I see a link to logout