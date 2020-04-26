Feature: TM Search functionality
   User scenarios for TM search from the home page
 
 Scenario: User performs a general search with a keyword
   Given a user is in 'TM-Homepage'
   When enterd 'keyword' to search
   And hit search button
   And user is navigated to the search results page
   Then assert the user has served with matching search results

   
