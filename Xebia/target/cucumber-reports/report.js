$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchOnHomepage.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Sign In Process",
  "description": "",
  "id": "validate-sign-in-process",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I set Browser Type and Environment Type from Configuration File",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Launch Application in Specified Browser",
  "keyword": "And "
});
formatter.match({
  "location": "SignIn_Steps.iSetBrowserTypeAndEnvironmentTypeFromConfigurationFile()"
});
formatter.result({
  "duration": 190193100,
  "status": "passed"
});
formatter.match({
  "location": "SignIn_Steps.iLaunchApplicationInSpecifiedBrowser()"
});
formatter.result({
  "duration": 8973442600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Launch Application, Search given value and verify",
  "description": "",
  "id": "validate-sign-in-process;launch-application,-search-given-value-and-verify",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@SearchOnHomePage"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I should be on SignIn Page and I verify Page Title is \"Google\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I Verify Search Box is Available",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#        And I Enter User given Value in Search Box"
    }
  ],
  "line": 12,
  "name": "I Verify Search Box is Available and enter \"Selenium\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#        Then I Verify Gmail Link is Available and Click"
    }
  ],
  "line": 14,
  "name": "I capture the number of results displayed from google",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I compare above total with database query result",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 55
    }
  ],
  "location": "SignIn_Steps.iShouldBeOnSignInPageAndIVerifyPageTitleIs(String)"
});
formatter.result({
  "duration": 32293100,
  "status": "passed"
});
formatter.match({
  "location": "SignIn_Steps.iVerifySearchBoxIsAvailable()"
});
formatter.result({
  "duration": 86999000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 44
    }
  ],
  "location": "SignIn_Steps.iVerifySearchBoxIsAvailableAndEnter(String)"
});
formatter.result({
  "duration": 2884382100,
  "status": "passed"
});
formatter.match({
  "location": "SignIn_Steps.iCaptureTheNumberOfResultsDisplayedFromGoogle()"
});
formatter.result({
  "duration": 66246600,
  "status": "passed"
});
formatter.match({
  "location": "SignIn_Steps.iCompareAboveTotalWithDatabaseQueryResult()"
});
formatter.result({
  "duration": 96900,
  "status": "passed"
});
formatter.after({
  "duration": 1057704600,
  "status": "passed"
});
});