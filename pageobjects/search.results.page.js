import faker from "faker";
class SearchResults {
  get searchDocProvider() {
    return browser.element("#search_input");
  }

  get searchWhere() {
    return browser.element("#refine_search_location");
  }

  get searchInsurance() {
    return browser.element("#refine_search_insurance_company_id");
  }

  get moreFilters() {
    return browser.element("#more-filters-btn-reg");
  }

  get lessFilters() {
    return browser.element("#button.secondary.more-filters-btn.menu-trigger");
  }

  get applyFilters() {
    return browser.element("#refine_search_button");
  }

  get sortByDistance() {
    return browser.element("#refine_search_sort_order");
  }

  get timeFrame() {
    return browser.element("#search_available_in");
  }

  get date() {
    return browser.element("#search_desired_date");
  }

  get timeOfDay() {
    return browser.element("#time_of_day_select");
  }

  get reasonForVisit() {
    return browser.element("#refine_search_reason_for_visit_name");
  }

  get searchDistance() {
    return browser.element("#search_distance");
  }

  get typeOfPatient() {
    return browser.element("#refine_search_type_of_patient");
  }

  get languagesSpoken() {
    return browser.element("#search_language");
  }

  get genderNoPreference() {
    return browser.element("#refine_search_gender_default");
  }

  get genderMale() {
    return browser.element("#refine_search_gender_male");
  }

  get genderFemale() {
    return browser.element("#refine_search_gender_female");
  }

  get experienceSliderMin() {
    return browser.element("#search_min_years");
  }

  get experienceSliderMax() {
    return browser.element("#search_max_years");
  }

  get moveSevenDaysForward() {
    return browser.element("#icon_arrow_right"); //this probably won't work
  }

  get moreExpandTimeSlots() {
    return browser.element("#time-slot.toggle-switch");
  }
}
