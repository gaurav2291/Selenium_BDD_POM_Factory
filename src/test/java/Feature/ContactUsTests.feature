Feature: To Validated contact us page
@jenkinsTest
Scenario Outline: To Validated is send button is Enabled
Given User Clicked on Contact Us link
When User enter value in Email Id '<email>' field
And User enter Order reference '<orderId>' field
Then Validate if send button is Enabled
Examples:
|email|orderId|
|abc@xyz.com|1234567890|
|xyz@abc.com|0987654321|

Scenario Outline: To Validated is send button
Given User Clicked on Contact Us link
When User enter value in Email Id '<email>' field
And User enter Order reference '<orderId>' field
Then Validate if send button is Enabled
Examples:
|email|orderId|
|abc@xyz.com|1234567890|