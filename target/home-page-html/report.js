$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/ContactUsTests.feature");
formatter.feature({
  "name": "To Validated contact us page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To Validated is send button is Enabled",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@jenkinsTest"
    }
  ]
});
formatter.step({
  "name": "User Clicked on Contact Us link",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter value in Email Id \u0027\u003cemail\u003e\u0027 field",
  "keyword": "When "
});
formatter.step({
  "name": "User enter Order reference \u0027\u003corderId\u003e\u0027 field",
  "keyword": "And "
});
formatter.step({
  "name": "Validate if send button is Enabled",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "orderId"
      ]
    },
    {
      "cells": [
        "abc@xyz.com",
        "1234567890"
      ]
    },
    {
      "cells": [
        "xyz@abc.com",
        "0987654321"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Validated is send button is Enabled",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@jenkinsTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Clicked on Contact Us link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.steps.UserClickOnContactUsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter value in Email Id \u0027abc@xyz.com\u0027 field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.steps.UserEntersEmailId(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Order reference \u00271234567890\u0027 field",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.steps.UserEnterdOrderId(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate if send button is Enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.steps.UserValidateIfSubmitIsEnabled()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validated is send button is Enabled",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@jenkinsTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Clicked on Contact Us link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.steps.UserClickOnContactUsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter value in Email Id \u0027xyz@abc.com\u0027 field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.steps.UserEntersEmailId(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Order reference \u00270987654321\u0027 field",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.steps.UserEnterdOrderId(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate if send button is Enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.steps.UserValidateIfSubmitIsEnabled()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To Validated is send button",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Clicked on Contact Us link",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter value in Email Id \u0027\u003cemail\u003e\u0027 field",
  "keyword": "When "
});
formatter.step({
  "name": "User enter Order reference \u0027\u003corderId\u003e\u0027 field",
  "keyword": "And "
});
formatter.step({
  "name": "Validate if send button is Enabled",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "orderId"
      ]
    },
    {
      "cells": [
        "abc@xyz.com",
        "1234567890"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Validated is send button",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Clicked on Contact Us link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.steps.UserClickOnContactUsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter value in Email Id \u0027abc@xyz.com\u0027 field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.steps.UserEntersEmailId(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Order reference \u00271234567890\u0027 field",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.steps.UserEnterdOrderId(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate if send button is Enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.steps.UserValidateIfSubmitIsEnabled()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});