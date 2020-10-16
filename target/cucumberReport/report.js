$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("carSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Validation of car search page",
  "description": "In order to validate car search \r\nas a buyer\r\nI want to navigate http://www.carsguide.com.au",
  "id": "validation-of-car-search-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3732279600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Searching for a new car",
  "description": "",
  "id": "validation-of-car-search-page;searching-for-a-new-car",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the home page https://www.carsguide.com.au/",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I move to buy+sale menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click for Search Cars",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select Make as \"Audi\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model as \"A1\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Location as \"NSW - Central Coast\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Price as \"$50,000\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click Find my next car button option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see list of cars",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the page title should be \"Audi A1 Under 50000 for Sale Central Coast NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_am_on_the_home_page_https_www_carsguide_com_au()"
});
formatter.result({
  "duration": 10207585500,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_move_to_buy_sale_menu()"
});
formatter.result({
  "duration": 2154790900,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_for_Search_Cars()"
});
formatter.result({
  "duration": 1527628000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 18
    }
  ],
  "location": "CarSearchSteps.i_select_Make_as(String)"
});
formatter.result({
  "duration": 2197982200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_model_as(String)"
});
formatter.result({
  "duration": 2127672500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.i_select_Location_as(String)"
});
formatter.result({
  "duration": 2115766400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_Price_as(String)"
});
formatter.result({
  "duration": 4122446900,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_Find_my_next_car_button_option()"
});
formatter.result({
  "duration": 2451556900,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_should_see_list_of_cars()"
});
formatter.result({
  "duration": 2463530000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi A1 Under 50000 for Sale Central Coast NSW | carsguide",
      "offset": 26
    }
  ],
  "location": "CarSearchSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 3954100,
  "status": "passed"
});
});