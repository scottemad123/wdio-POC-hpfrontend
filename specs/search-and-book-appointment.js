//  searchAndBookAppointment
let bookingForm = BookingForm();
var expect = require("chai").expect;
var BookingForm = require("../pageobjects/booking.form.page");
var assert = require("assert");
var faker = require("faker");

describe("Healthpost homepage", function() {
  it("Should get the url of the current page", function() {
    browser.url("/");
    var title = browser.getUrl();
    assert.equal(title, "http://qa.healthpost.com/");
  });

  it("Should have text for both sections of the unified search box", function() {
    browser.url("/");
    var text = browser.getText(
      "div.provider-name-control-group label.control-label"
    );
    console.log(text);
    assert.equal(
      text,
      "Enter Specialty, Procedure, or Doctor Name",
      "What is your location?"
    );
  });

  it("Should enter text into unified search box and click find & book", function() {
    browser.url("/");
    browser.setValue('input[id="search_input"]', "Primary Care Doctor");
    browser.setValue("input[id=all_search_where]", "Topeka, KS");
    browser.element("button#search_button").click();
    var value = browser.element("input#search_input").getValue();
    console.log(value);
    assert.equal(value, "Primary Care Doctor");
  });

  it("Should click on the first available appointment for the first time slot in even column", function() {
    browser.element("li.time-slot.any").click();
    var text = browser.getText(
      "div.column.large-12.medium-12.small-12 span.active.progress-item"
    );
    console.log(text);
    assert.equal(text, "Enter Details");
  });

  it("Should fill out and submit the booking form", function() {
    BookingForm.contactEmail.setValue("scotte@advisory.com");
    //browser.setValue(
    //"input[id=appointment_contact_email]",
    //"scotte@advisory.com"
    //); // enters patient email
    var patientEmail = BookingForm.contactEmail.getValue();
    //.element("input#appointment_contact_email")
    //.getValue();
    console.log(patientEmail);
    assert.equal(patientEmail, "scotte@advisory.com");
    browser.pause(100);

    browser.setValue("input[id=appointment_contact_phone]", "555-555-5555"); // enters patient phone number
    var contactPhone = browser
      .element("input#appointment_contact_phone")
      .getValue();
    console.log(contactPhone);
    assert.equal(contactPhone, "555-555-5555"); //console.log(patientPhone);
    browser.pause(100);

    var selectBox = $("#appointment_reason_for_visit_id");
    console.log(selectBox.getText("option:checked")); // returns 'Cognitive Therapy'
    browser.pause(100);

    var reasonForVisit = selectBox.selectByVisibleText("General Consultation");
    console.log(selectBox.getText("option:checked")); // returns "General Consultation"
    browser.pause(100);

    var patientType = browser
      .element("input#appointment_new_patient_true")
      .click(); // clicks the new patient radio button
    browser.pause(100);

    var randomFirstName = faker.name.firstName();
    browser.setValue(
      "input[id=appointment_patient_first_name]",
      randomFirstName
    ); // enters patients first name
    var patientFirstName = browser
      .element("input#appointment_patient_first_name")
      .getValue();
    console.log(patientFirstName);
    assert.equal(patientFirstName, randomFirstName);
    browser.pause(100);

    var randomLastName = faker.name.lastName();
    browser.setValue("input[id=appointment_patient_last_name]", randomLastName); // enters patient last name
    var patientLastName = browser
      .element("input#appointment_patient_last_name")
      .getValue();
    console.log(patientLastName);
    assert.equal(patientLastName, randomLastName);
    browser.pause(100);

    browser.element("input#appointment_patient_gender_male").click(); // clicks male patient gender
    browser.pause(100);

    var selectBox = $("#appointment_patient_dob_2i");
    console.log(selectBox.getText("option:checked"));
    selectBox.selectByVisibleText("April");
    console.log(selectBox.getText("option:checked")); // selects April for Month for patient dob
    var dobMonth = browser
      .element("select#appointment_patient_dob_2i")
      .getValue();
    console.log(dobMonth);
    assert.equal(dobMonth, "4");
    browser.pause(100);

    var selectBox = $("#appointment_patient_dob_3i");
    console.log(selectBox.getText("option:checked"));
    selectBox.selectByVisibleText("21");
    console.log(selectBox.getText("option:checked")); // selects 21 for day
    var dobDay = browser
      .element("select#appointment_patient_dob_3i")
      .getValue();
    console.log(dobDay);
    assert.equal(dobDay, "21");
    browser.pause(100);

    var selectBox = $("#appointment_patient_dob_1i");
    console.log(selectBox.getText("option:checked"));
    selectBox.selectByVisibleText("1984");
    console.log(selectBox.getText("option:checked")); // enters 1984 for year of birth
    var dobYear = browser
      .element("select#appointment_patient_dob_1i")
      .getValue();
    console.log(dobYear);
    assert.equal(dobYear, "1984");
    browser.pause(100);

    browser.setValue("input#appointment_patient_address", "456 Wheeling Rd."); // enters patients street address
    var appointmentPatientAddress = browser
      .element("input#appointment_patient_address")
      .getValue();
    console.log(appointmentPatientAddress);
    assert.equal(appointmentPatientAddress, "456 Wheeling Rd.");
    browser.pause(100);

    browser.setValue("input#appointment_patient_city", "Topeka");
    var appointmentPatientCity = browser
      .element("input#appointment_patient_city")
      .getValue();
    console.log(appointmentPatientCity);
    assert.equal(appointmentPatientCity, "Topeka");
    browser.pause(100);

    var selectBox = $("#appointment_patient_state");
    console.log(selectBox.getText("option:checked"));
    selectBox.selectByVisibleText("KS");
    console.log(selectBox.getText("option:checked"));
    var appointmentPatientState = browser
      .element("select#appointment_patient_state")
      .getValue();
    console.log(appointmentPatientState);
    assert.equal(appointmentPatientState, "KS");
    browser.pause(100);

    var fakerZipCode = faker.address.zipCode("#####");
    browser.setValue("input#appointment_patient_zip", fakerZipCode);
    var appointmentPatientZip = browser
      .element("input#appointment_patient_zip")
      .getValue();
    console.log(appointmentPatientZip);
    assert.equal(appointmentPatientZip, fakerZipCode);
    browser.pause(5000);

    browser.setValue(
      "textarea#appointment_patient_symptoms",
      "Is this from eating too many donuts?!"
    );
    var appointmentPatientSymptoms = browser
      .element("textarea#appointment_patient_symptoms")
      .getValue();
    console.log(appointmentPatientSymptoms);
    assert.equal(
      appointmentPatientSymptoms,
      "Is this from eating too many donuts?!"
    );
    browser.pause(100);
  });
});

//and here
//it('Should display search results', function(){
//browser.url('/api.hmtl');
//var input = $('.')
//browser.setValue('input[name="search"]', 'debug');

//browser.saveScreenshot('api-with-result.png');

//})
