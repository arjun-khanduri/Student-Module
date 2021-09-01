exports.CREATE_STUDENT_TABLE = `CREATE TABLE IF NOT EXISTS student(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), password varchar(255), name varchar(255), department varchar(255), mailId varchar(255), phoneNumber varchar(255))`;

exports.CREATE_AWARDS_TABLE = `CREATE TABLE IF NOT EXISTS awards(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), category varchar(255),department varchar(255), filterDate Date, level varchar(255), eventName varchar(255), awardedBy varchar(255), status varchar(255), date Date, description text, coe varchar(255))`;

exports.CREATE_EVENTS_ATTENDED_TABLE = `CREATE TABLE IF NOT EXISTS events_attended(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), activityType varchar(255), topic varchar(255), attendedAt varchar(255), activityName varchar(255), objective text, benefits text, startDate Date, endDate Date, level varchar(255), description text, coe varchar(255),department varchar(255),filterDate Date)`;

exports.CREATE_PLACEMENT_TABLE = `CREATE TABLE IF NOT EXISTS placement(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), studentName varchar(255), companyName varchar(255), salary int(255), date Date, driveType varchar(255), companyType varchar(255), type varchar(255), description text, filterDate Date, department varchar(255),coe varchar(255))`;

exports.CREATE_PROJECTS_TABLE = `CREATE TABLE IF NOT EXISTS projects(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), type varchar(255), sem varchar(255), title varchar(255), duration varchar(255), location varchar(255), startDate date, endDate date, prize varchar(255), coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_MOOC_TABLE = `CREATE TABLE IF NOT EXISTS mooc(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), agency varchar(255), startDate Date, endDate Date, courseName varchar(225), boolExam varchar(225), department varchar(255), coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_BOOK_PUBLICATION_TABLE = `CREATE TABLE IF NOT EXISTS book_publication(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), rcid varchar(255),bookName varchar(255), publisherName varchar(255), isbn varchar(255), issue varchar(255), description varchar(225), date Date, coe varchar(255), filterDate date, doi varchar(255))`;

exports.CREATE_JOURNAL_PUBLICATIONS_TABLE = `CREATE TABLE IF NOT EXISTS journal_publications(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), name varchar(255), rcid varchar(255), pubName varchar(255), title varchar(255), isbn varchar(255), issn varchar(255), edition varchar(255), doi varchar(255), type varchar(255), coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_ENTREPRENEURSHIP_TABLE = `CREATE TABLE IF NOT EXISTS entrepreneurship(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), rcid varchar(255), companyType varchar(255),companyNameAddress varchar(225), date Date, revenue varchar(255), objectives varchar(255), benefits varchar(255), department varchar(255), coe varchar(255), description varchar(255), filterDate Date)`;

exports.CREATE_SERVED_AS_TABLE = `CREATE TABLE IF NOT EXISTS served_as(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), collegeName varchar(255), eventName varchar(255), startDate Date, endDate Date, servedAs varchar(255), coe varchar(255), description varchar(255), filterDate Date)`;

exports.CREATE_PARENTS_MEETING_TABLE = `CREATE TABLE IF NOT EXISTS parents_meeting(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), parentName varchar(255), meetingDate Date, mobNumber varchar(255), email varchar(255), address varchar(255), purpose varchar(255), description varchar(255), filterDate Date)`;

exports.CREATE_BRIDGE_COURSES_TABLE = `CREATE TABLE IF NOT EXISTS bridge_courses(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), department varchar(255), semester varchar(255), subName varchar(255), subCode varchar(255), topic varchar(255), sessionDate date, coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_IDEA_REPOSITORY_TABLE = `CREATE TABLE IF NOT EXISTS idea_repository(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), ideaDate date, coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_INTERNSHIP_CELL_TABLE = `CREATE TABLE IF NOT EXISTS internship_cell(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), title varchar(255), companyName varchar(255), semester varchar(255), stipend varchar(255), duration varchar(255), startDate date, endDate date, coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_EXCHANGE_PROGRAM_TABLE = `CREATE TABLE IF NOT EXISTS exchange_program(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), collegeName varchar(255), programName varchar(255), startDate date, endDate date, coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_ALUMNI_DATA_TABLE = `CREATE TABLE IF NOT EXISTS alumni_data(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), stuName varchar(255), usn varchar(255), email varchar(255), mobNumber varchar(255), companyName varchar(255), companyEmail varchar(255), joining date, passing date, place varchar(255), location varchar(255), department varchar(255), coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_HIGHER_STUDIES_TABLE = `CREATE TABLE IF NOT EXISTS higher_studies(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), location varchar(255), name varchar(255), universityName varchar(255), universityAddress varchar(255), admissionYear varchar(255), course varchar(255), specialization varchar(255), gradYear varchar(255), department varchar(255), examQualified varchar(255), coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_RESULTS_TABLE = `CREATE TABLE IF NOT EXISTS results(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), department varchar(255), semester varchar(255), resultDate date, academicYear varchar(255), section char(1), avgCGPA float, passPercent float, nFail int, nAppear int, nPass int, coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_INDUSTRY_CONNECT_TABLE = `CREATE TABLE IF NOT EXISTS industry_connect(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), activityType varchar(255), topic varchar(255), attendedAt varchar(255), activityName varchar(255), objectives varchar(255), benefits varchar(255), startDate date, endDate date, activityLevel varchar(255), coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_AWARDS_NSS_TABLE = `CREATE TABLE IF NOT EXISTS awards_nss(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), grp varchar(255), result varchar(255), awardedDate date, level varchar(255), coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_MENTORING_TABLE = `CREATE TABLE IF NOT EXISTS mentoring(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), name varchar(255), contact varchar(255), email varchar(255), parentName varchar(255), parentContact varchar(255), parentEmail varchar(255), marksIAT1 int, marksIAT2 int, marksIAT3 int, attendanceIAT1 varchar(255), attendanceIAT2 varchar(255), attendanceIAT3 varchar(255), coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_PARENTS_TABLE = `CREATE TABLE IF NOT EXISTS patents(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), rcid varchar(255), title varchar(255), agencyName varchar(255), submissionNumber varchar(255), grantAmount varchar(255), earnings varchar(255), patentNumber varchar(255), benefits varchar(255), patentLevel varchar(255), commercialized varchar(255), status varchar(255), specification varchar(255), grantDate date, submissionDate date, coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_DEPARTMENT_LIST_TABLE = `CREATE TABLE IF NOT EXISTS department(id int AUTO_INCREMENT , name varchar(255), PRIMARY KEY(id))`;

exports.CREATE_COE_TABLE = `CREATE TABLE IF NOT EXISTS coe(id int AUTO_INCREMENT, name varchar(255), PRIMARY KEY(id))`;

exports.CREATE_CLUB_NAME_TABLE = `CREATE TABLE IF NOT EXISTS club_name(id int AUTO_INCREMENT, name varchar(255), PRIMARY KEY(id))`;
