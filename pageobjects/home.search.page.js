class HomeSearch {
  get searchDocProvider() {
    return browser.element("#search_input");
  }

  get searchWhere() {
    return browser.element("#all_search_where");
  }

  get searchButton() {
    return browser.element("#search_button");
  }

  get mainSearchButton() {
    return browser.element("div#search-form-tab-all button#search_button");
  }

  get contactName() {
    return browser.element("#contact_name");
  }

  get dropMask() {
    return browser.element("#select2-drop-mask");
  }

  get contactEmail() {
    return browser.element("#contact_email");
  }

  get contactPhone() {
    return browser.element("#contact_phone");
  }

  get searchDoctorName() {
    return browser.element("#all_doctor_name.search_doctor_name");
  }

  get contactSubmit() {
    return browser.element("#button.primary.expanded.practice-submit-button");
  }

  get selectProviderType() {
    return browser.element("#select2-chosen-7");
  }

  get providerTypeTextEntry() {
    return browser.element("#s2id_autogen7_search");
  }

  get providerEntry() {
    return browser.element(".select2-result-label");
  }

  primaryCareSearch() {
    browser.url("/");
    this.searchDocProvider.setValue("Primary Care Doctor");
    this.searchWhere.setValue("Topeka, KS");
    this.searchButton.click();
  }

  get toggleSearchByName() {
    return browser.element("#a.js-toggle-name-search-filter.search-by-name");
  }

  oldPrimaryCareSearch() {
    browser.url("/");
    this.selectProviderType.click();
    this.providerTypeTextEntry.setValue("Primary Care Doctor");
    this.providerEntry.click();
    this.searchWhere.setValue("Topeka, KS");
    this.mainSearchButton.click();
  }
}

export default HomeSearch;
