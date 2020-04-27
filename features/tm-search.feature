Feature: TM Search functionality
   User scenarios for TM search from the home page
 
 @smoke
 Scenario: User performs a general search with a keyword
   Given a user is in 'TM-Homepage'
   When enterd 'baby stroller' to search
   And hit search button
   And user is navigated to the search results page
   Then assert the user has served with matching search results

@smoke @regression
Scenario: User type in a keyword to search, is served with search sugesstions
   Given a user is in 'TM-Homepage'
   When enterd 'samsung' to search
   And wait for search sugesstions to appear
   And move arrow down key to select the first sugesstions
   And press enter key
   And user is navigated to the search results page
   Then assert user is served with matching number of search items

   
