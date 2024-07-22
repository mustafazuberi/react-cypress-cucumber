Feature: Login Page
	I want to be able to login


	Scenario: Login using valid credentials
		Given I am on the login page
		When I login using email "mustafa@example.com" and password "123456"
		Then I should be logged in

	Scenario: See the email required error when the email is not provided
		When I am on the login page
		And I enter 123456 as the password
		And I click on the login button
		Then I should see the email required error

	Scenario: See the password required error when the password is not provided
		When I am on the login page
		And I enter mustafa@example.com as the email
		And I click on the login button
		Then I should see the password required error
