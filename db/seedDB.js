const mysql = require("mysql2");
const util = require("util");

const {
  CREATE_STUDENT_TABLE,
  CREATE_AWARDS_TABLE,
  CREATE_EVENTS_ATTENDED_TABLE,
  CREATE_PLACEMENT_TABLE,
  CREATE_PROJECTS_TABLE,
  CREATE_MOOC_TABLE,
  CREATE_BOOK_PUBLICATION_TABLE,
  CREATE_JOURNAL_PUBLICATIONS_TABLE,
  CREATE_ENTREPRENEURSHIP_TABLE,
  CREATE_SERVED_AS_TABLE,
  CREATE_PARENTS_MEETING_TABLE,
  CREATE_BRIDGE_COURSES_TABLE,
  CREATE_IDEA_REPOSITORY_TABLE,
  CREATE_INTERNSHIP_CELL_TABLE,
  CREATE_EXCHANGE_PROGRAM_TABLE,
  CREATE_ALUMNI_DATA_TABLE,
  CREATE_HIGHER_STUDIES_TABLE,
  CREATE_RESULTS_TABLE,
  CREATE_INDUSTRY_CONNECT_TABLE,
  CREATE_AWARDS_NSS_TABLE,
  CREATE_MENTORING_TABLE,
  CREATE_PARENTS_TABLE,
  CREATE_DEPARTMENT_LIST_TABLE,
  CREATE_COE_TABLE,
  CREATE_CLUB_NAME_TABLE,
} = require("./dbTable.js");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "root",
  password: "",
  database: "data_repository_student",
};

const seedDatabase = async function () {
  try {
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    if (!connection) {
      throw new Error("Could not create connection");
    }
    const execQuery = util.promisify(connection.query.bind(connection));
    await createTable(execQuery);
    // await execQuery(CREATE_FACULTY_TABLE);

    console.log("Created Tables Successfully! :)");
    connection.end();
  } catch (err) {
    console.error(err);
  }
};

const createTable = async function (execQuery) {
  try {
    await execQuery(CREATE_STUDENT_TABLE);
    await execQuery(CREATE_AWARDS_TABLE);
    await execQuery(CREATE_EVENTS_ATTENDED_TABLE);
    await execQuery(CREATE_PLACEMENT_TABLE);
    await execQuery(CREATE_PROJECTS_TABLE);
    await execQuery(CREATE_MOOC_TABLE);
    await execQuery(CREATE_BOOK_PUBLICATION_TABLE);
    await execQuery(CREATE_JOURNAL_PUBLICATIONS_TABLE);
    await execQuery(CREATE_ENTREPRENEURSHIP_TABLE);
    await execQuery(CREATE_SERVED_AS_TABLE);
    await execQuery(CREATE_PARENTS_MEETING_TABLE);
    await execQuery(CREATE_BRIDGE_COURSES_TABLE);
    await execQuery(CREATE_IDEA_REPOSITORY_TABLE);
    await execQuery(CREATE_INTERNSHIP_CELL_TABLE);
    await execQuery(CREATE_EXCHANGE_PROGRAM_TABLE);
    await execQuery(CREATE_ALUMNI_DATA_TABLE);
    await execQuery(CREATE_HIGHER_STUDIES_TABLE);
    await execQuery(CREATE_RESULTS_TABLE);
    await execQuery(CREATE_INDUSTRY_CONNECT_TABLE);
    await execQuery(CREATE_AWARDS_NSS_TABLE);
    await execQuery(CREATE_MENTORING_TABLE);
    await execQuery(CREATE_PARENTS_TABLE);
    await execQuery(CREATE_DEPARTMENT_LIST_TABLE);
    await execQuery(CREATE_COE_TABLE);
    await execQuery(CREATE_CLUB_NAME_TABLE);
  } catch (err) {
    throw err;
  }
};

seedDatabase();
