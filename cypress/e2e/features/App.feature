Feature: App Main Page

	I want to see my github projects

	Scenario: See my github projects
		Given I am on the app page
		Then I should see my 30 Github projects

	Scenario: See the user's email in the header
		When I am on the app page
		Then I should see my email in the header

	Scenario: Log out of the app on the logout button click
		Given I am on the app page
		When I click the logout button
		Then I should be logged out
