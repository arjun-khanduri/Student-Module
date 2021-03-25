const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");
const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require("../configs/auth");

//Route for Student Report Generation
router.get("/students/search", ensureAuthenticated, (req, res) => {
  res.render("report/stu_search", {
    module: "Student",
    title: "",
    Username: req.user.name,
  });
});

//Route for Faculty FacReport Generation
router.get("/faculty/search", ensureAuthenticated, (req, res) => {
  res.render("report/fac_search", {
    title: "",
    module: "Faculty",
    Username: req.user.name,
  });
});

//Filter Data and Print for both Faculty & Student
router.post("/search", (req, res) => {
  let module = req.body.moduleName;
  let event = "stu_" + req.body.event;
  let fromDate = req.body.fromDate;
  let toDate = req.body.toDate;
  let dept = req.body.dep.toUpperCase();
  let COE = req.body.COE;
  let eventName = req.body.event;
  eventName =
    eventName.charAt(0).toUpperCase() +
    eventName.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2");
  //All should  look for all the table in database

  if (req.body.event == "all") {
    let sql = `select table_name from information_schema.tables where table_schema="data_repository"`;
    connection.query(sql, (err, result, fields) => {
      if (err) throw err;
      let tables = [];
      result.forEach(res => {
        let table = res.table_name;
        let cn = 0;
        for (let i = 0; i < table.length; i++) {
          if (table[i] == '_')
            cn++;
        }

        if (table[0] == 's' && cn > 0) {
          tables.push(table);
        }
      })
      let data = []
      eventName = []
      tables.forEach((table, i) => {
        eventName.push(
          table.charAt(4).toUpperCase() +
          table.slice(5).replace(/([a-z])([A-Z])/g, "$1 $2")
        )
        let sql = `Select * from ${table}`;
        connection.query(sql, (err, result, fields) => {
          if (err) 
            throw err;
          let datatemp = [];
          let detailsReq = true;
          result.forEach((res) => {
            console.log(res);
            if (res.department == null) {
              res.department = "NULL";
            }
            if (req.body.details == "false") {
              delete res.description;
              detailsReq = false;
            }
            delete res.filterDate;
            if (
              (res.department == "NULL" || dept == "ALL" || res.department == dept) &&
              (COE == "All" || COE == res.COE)
            ) {
              datatemp.push(res);
            }
          });
          data.push(datatemp)
          // console.log(data);
          if (i === tables.length - 1) {

            // console.log(eventName)
            if (detailsReq) {
              res.render("report/full_report", {
                module: module,
                data: data,
                event: eventName,
              });
            } else {
              res.render("report/report_without_desc", {
                module: module,
                data: data,
                event: eventName,
              });
            }
          }
        })
      })
    })
    return;
  }
  let sql = `Select * from ${event} Where (filterDate BETWEEN ? AND ?)`;
  connection.query(sql, [fromDate, toDate], (err, result, fields) => {
    if (err) throw err;
    let data = [];
    let detailsReq = true;
    result.forEach((res, i) => {
      if (res.department == null) {
        res.department = "NULL";
      }
      if (req.body.details == "false") {
        delete res.description;
        detailsReq = false;
      }
      delete res.filterDate;
      if (
        (res.department == "NULL" || dept == "ALL" || res.department == dept) &&
        (COE == "All" || COE == res.COE)
      ) {
        data.push(res);
      }
    });
    if (data.length == 0) {
      res.json({
        error: "the data is empty based on your search results",
      });
      return;
    }

    //Check for Details req

    if (detailsReq) {
      res.render("report/full_report", {
        module: module,
        data: data,
        event: eventName,
      });
    } else {
      res.render("report/report_without_desc", {
        module: module,
        data: data,
        event: eventName,
      });
    }
  });
});

module.exports = router;
