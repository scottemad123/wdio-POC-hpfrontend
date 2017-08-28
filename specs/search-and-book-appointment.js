import BookingForm from "../pageobjects/booking.form.page.js";
import HomeSearch from "../pageobjects/home.search.page.js";
import ConfirmAppointment from "../pageobjects/confirm.appointment.page.js";
//import ConfirmAppointmentDB from "../dbconnections/connect.appointments.qa.js";
import mysql from "mysql";
import { getConfAckFromDB } from "../dbconnections/getConfAckFromDB.js";

let bookingForm = new BookingForm();
let homeSearch = new HomeSearch();
let confirmAppointment = new ConfirmAppointment();

//let confirmAppointmentDB = new ConfirmAppointmentDB();

describe("Healthpost homepage", () => {
  it("Should search for Primary Care Doctor in Topeka, KS and search", () => {
    homeSearch.oldPrimaryCareSearch();
  });

  it("Should click on the first available appointment for the first time slot in even column", () => {
    browser.element("li.time-slot.any").click();
    var text = browser.getText(
      "div.column.large-12.medium-12.small-12 span.active.progress-item"
    );
    console.log(text);
  });

  it("Should fill out and submit the booking form and click submit", () => {
    bookingForm.fillForm();
    let action = browser.getAttribute(
      "#new_appointment_phone_confirmation",
      "action"
    );
    console.log(action);
    let outputId = action.match(/\/appointments\/(.+)\/phone_confirmations/)[1];
    console.log(outputId);

    let ack = browser.call(() => {
      return getConfAckFromDB(outputId);
    });
    console.log("ACK", ack);
  });
});
