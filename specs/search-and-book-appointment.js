import BookingForm from "../pageobjects/booking.form.page.js";
import HomeSearch from "../pageobjects/home.search.page.js";
import ConfirmAppointment from "../pageobjects/confirm.appointment.page.js";
//import ConfirmAppointmentDB from "../dbconnections/connect.appointments.qa.js";
var mysql = require("mysql");

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
    //var confirmText = browser.getText("h3.content-title");
    //console.log(confirmText);
    //var outerHTML = browser.getHTML("#confirmation_by_phone");
    //console.log(outerHTML);
    let action = browser.getAttribute(
      "#new_appointment_phone_confirmation",
      "action"
    );
    console.log(action);
    let outputId = action.match(/\/appointments\/(.+)\/phone_confirmations/)[1];
    console.log(outputId);

    module.exports = {
      getConfAckFromDB: async outputId => {
        let connection = mysql.createConnection({
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          port: process.env.DB_PORT
        });

        try {
          connection.connect();

          let result = await connection.query(
            `SELECT id, confirmation_ack FROM appointments WHERE id = '${outputId}'`
          );

          console.log(("Raw Result", result));
          let ack = result[0].confirmation_ack;
          console.log("Just the Ack", ack);
          return ack;
        } catch (error) {
          throw new Error(error);
        } finally {
          connection.end();
        }
      }
    };

    //  con.connect(function(err) {
    //  if (err) throw err;
    //  console.log("Connected!");
    //  con.query(
    //    `SELECT id, confirmation_ack FROM appointments WHERE id = '${outputId}'`,
    //    function(err, result, fields) {
    //    if (err) throw err;
    //    console.log(result);
    //let confirmID = result[0].confirmation_ack;
    //    console.log(result[0].confirmation_ack);
    //  }
    //);
    //  });
    //  let confirmID = result[0].confirmation_ack;
    //  console.log(confirmID);
  });
});
