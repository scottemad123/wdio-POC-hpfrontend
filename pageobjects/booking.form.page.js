//bookingForm.page.js

import Page from "./Page.js";

class BookingForm extends Page {
  get contactEmail() {
    return browser.element("#appointment_contact_email");
  }
  get contactPhone() {
    return browser.element("#contact_phone_input");
  }
  get patientFirstName() {
    return browser.element("#appointment_patient_first_name");
  }
  get patientLastName() {
    return browser.element("#appointment_patient_last_name");
  }
  get patientAddress() {
    return browser.element("#appointment_patient_address");
  }
  get patientCity() {
    return browser.element("#appointment_patient_city");
  }
  get patientZip() {
    return browser.element("#appointment_patient_zip");
  }
  get symptoms() {
    return browser.element("#appointment_patient_symptoms");
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
  get schoolName() {
    return browser.element("#appointment_patient_school_name");
  }
  get textMessageReminderNumber() {
    return browser.element("#appointment_contact_phone_for_text");
  }
  get confirmationEmail() {
    return browser.element("#appointment_email_confirmation");
  }
  get makeAppointment() {
    return browser.element("#booking_form_button");
  }
}
export default  BookingForm;
