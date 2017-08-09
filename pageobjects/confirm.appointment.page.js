class ConfirmAppointment {
  get contactEmail() {
    browser.element("#contact-confirm-email");
  }

  get appointmentConfirm() {
    browser.element("#new_appointment_phone_confirmation");
  }

  get contactPhone() {
    browser.element("#appointment_phone_confirmation_phone_number_to_dial");
  }

  get checkByEmail() {
    browser.element("#check-by-email");
  }

  get callMe() {
    browser.element("#primary.large.button.columns.large-6.medium-6.small-12");
  }

  get getDirections() {
    browser.element("#button.primary.hide-for-small-only");
  }
}

export default ConfirmAppointment;
