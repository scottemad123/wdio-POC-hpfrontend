import faker from "faker";
class BookingForm {
  get contactEmail() {
    return browser.element("#appointment_contact_email");
  }

  get contactPhone() {
    return browser.element("#appointment_contact_phone");
  }

  get patientFirstName() {
    return browser.element("#appointment_patient_first_name");
  }

  get patientLastName() {
    return browser.element("#appointment_patient_last_name");
  }

  get patientGenderMale() {
    return browser.element("input#appointment_patient_gender_male");
  }

  get dobMonth() {
    return browser.element("select#appointment_patient_dob_2i");
  }

  get dobDay() {
    return browser.element("select#appointment_patient_dob_3i");
  }

  get dobYear() {
    return browser.element("select#appointment_patient_dob_1i");
  }

  get patientAddress() {
    return browser.element("#appointment_patient_address");
  }

  get patientCity() {
    return browser.element("#appointment_patient_city");
  }

  get patientState() {
    return browser.element("#appointment_patient_state");
  }

  get patientZip() {
    return browser.element("#appointment_patient_zip");
  }

  get symptoms() {
    return browser.element("#appointment_patient_symptoms");
  }

  get relationshipQuestion() {
    return browser.element("#appointment_relationship");
  }

  get insuranceProvider() {
    return browser.element("#appointment_patient_insurance");
  }

  get insuranceGroupNumber() {
    return browser.element("#appointment_patient_group_number");
  }

  get insuranceSubscriberID() {
    return browser.element("#appointment_patient_subscriber_id");
  }

  get insuranceContactPhoneNumber() {
    return browser.element("#appointment_patient_insurance_phone_number");
  }

  get secondaryInsuranceNo() {
    return browser.element("#has_secondary_insurance_no");
  }

  get secondaryInsuranceYes() {
    return browser.element("#has_secondary_insurance_yes");
  }

  get workRelatedInjury() {
    return browser.element("#appointment_patient_work_related_injury");
  }

  get schoolName() {
    return browser.element("#appointment_patient_school_name");
  }

  get emailConsentYes() {
    return browser.element("#appointment_patient_email_consent_yes");
  }

  get emailConsentNo() {
    return browser.element("#appointment_patient_email_consent_no");
  }

  get textReminderYes() {
    return browser.element("#send_text_reminder_yes");
  }

  get textReminderNo() {
    return browser.element("#send_text_reminder_no");
  }

  get textMessageReminderNumber() {
    return browser.element("#appointment_contact_phone_for_text");
  }

  get useMyContactNumber() {
    return browser.element("#contact_phone_for_text_question_bottom_checkbox");
  }

  get confirmationEmail() {
    return browser.element("#appointment_email_confirmation");
  }

  get makeAppointment() {
    return browser.element("#booking_form_button");
  }

  get reasonSelectList() {
    return browser.element("#appointment_reason_for_visit_id");
  }

  get newPatientRadio() {
    return browser.element("input#appointment_new_patient_true");
  }

  get submitBookingForm() {
    return browser.element("#booking_form_button");
  }

  fillForm() {
    this.contactEmail.setValue("HpEmailTestAbc@gmail.com");
    this.contactPhone.setValue("555-555-5555");
    this.reasonSelectList.selectByVisibleText("General Consultation");
    this.newPatientRadio.click();
    this.patientFirstName.setValue(faker.name.firstName());
    this.patientLastName.setValue(faker.name.lastName());
    this.patientGenderMale.click();
    this.dobMonth.selectByVisibleText("April");
    this.dobDay.selectByVisibleText("21");
    this.dobYear.selectByVisibleText("1984");
    this.patientAddress.setValue(faker.address.streetAddress());
    this.patientCity.setValue(faker.address.city(0));
    this.patientState.selectByVisibleText("TX");
    this.patientZip.setValue(faker.address.zipCode("#####"));
    this.symptoms.setValue(faker.lorem.paragraph());
    this.relationshipQuestion.selectByVisibleText("self");
    this.insuranceProvider.selectByVisibleText("United Healthcare");
    this.insuranceGroupNumber.setValue(faker.finance.account(12));
    this.insuranceSubscriberID.setValue(faker.finance.account(10));
    this.insuranceContactPhoneNumber.setValue(faker.phone.phoneNumberFormat());
    this.secondaryInsuranceNo.click();
    this.schoolName.setValue(faker.company.companyName());
    this.emailConsentNo.click();
    this.textReminderNo.click();
    this.confirmationEmail.setValue("HpEmailTestAbc@gmail.com");
    this.submitBookingForm.click();
  }
}

export default BookingForm;
